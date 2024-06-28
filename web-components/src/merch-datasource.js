import { createTag } from './utils.js';

const ODIN = 'odin';
const ODIN_AUTHOR = 'odin-author';

const cardContent = {
    catalog: {
        name: 'catalog',
        title: {
            tag: 'h3',
            slot: 'heading-xs',
        },
        prices: {
            tag: 'h3',
            slot: 'heading-xs',
        },
        description: {
            tag: 'div',
            slot: 'body-xs',
        },
        ctas: { size: 'l' },
    },
    ah: {
        name: 'ah',
        title: {
            tag: 'h3',
            slot: 'heading-xxs',
        },
        prices: {
            tag: 'h3',
            slot: 'heading-xs',
        },
        description: {
            tag: 'div',
            slot: 'body-xxs',
        },
        ctas: { size: 's' },
    },
    'ccd-action': {
        name: 'ccd-action',
        title: {
            tag: 'h3',
            slot: 'heading-xs',
        },
        prices: {
            tag: 'h3',
            slot: 'heading-xs',
        },
        description: {
            tag: 'div',
            slot: 'body-xs',
        },
        ctas: { size: 'l' },
    },
};

async function parseMerchCard(item, merchCard) {
    const cardJson = item.fields.reduce((acc, { name, multiple, values }) => {
        acc[name] = multiple ? values : values[0];
        return acc;
    }, {});
    const { type = 'catalog' } = cardJson;
    const cardType = cardContent[type] || cardContent.catalog;

    merchCard.variant = type;

    merchCard.setAttribute('variant', type);
    cardJson.icon?.forEach((icon) => {
        const merchIcon = createTag('merch-icon', {
            slot: 'icons',
            src: icon,
            alt: '',
            href: '',
            size: 'l',
        });
        merchCard.append(merchIcon);
    });

    if (cardJson.title) {
        merchCard.append(
            createTag(
                cardType.title.tag,
                { slot: cardType.title.slot },
                cardJson.title,
            ),
        );
    }

    if (cardJson.prices) {
        const prices = cardJson.prices;
        const headingM = createTag(
            cardType.prices.tag,
            { slot: cardType.prices.slot },
            prices,
        );
        merchCard.append(headingM);
    }

    merchCard.append(
        createTag('p', { slot: 'body-xxs', id: 'individuals1' }, 'Desktop'),
    );

    if (cardJson.description) {
        const body = createTag(
            cardType.description.tag,
            { slot: cardType.description.slot },
            cardJson.description,
        );
        merchCard.append(body);
    }

    if (cardJson.ctas) {
        let ctas = cardJson.ctas;
        const footer = createTag('div', { slot: 'footer' }, ctas);
        merchCard.append(footer);
    }
}

class FragmentCache {
    #fragmentCache = new Map();
    clear() {
        this.#fragmentCache.clear();
    }
    add(...items) {
        items.forEach((item) => {
            const { path } = item;
            if (path) {
                this.#fragmentCache.set(path, item);
            }
        });
    }
    has(path) {
        return this.#fragmentCache.has(path);
    }
    get(path) {
        return this.#fragmentCache.get(path);
    }
    remove(path) {
        this.#fragmentCache.delete(path);
    }
}
const cache = new FragmentCache();

/**
 * Custom element representing a MerchDataSource.
 *
 * @attr {string} source - Specifies the data source for the component.
 *                         Possible values: "odin".
 */
export class MerchDataSource extends HTMLElement {
    data = {};

    static get observedAttributes() {
        return ['source', 'path'];
    }

    connectedCallback() {
        this.fetchData();
    }

    refresh() {
        this.fetchData();
    }

    cache = cache;

    async fetchData() {
        const source = this.getAttribute('source') ?? ODIN;
        let path = this.getAttribute('path');
        const originalPath = path;
        if (!path) return;

        const itemm = cache.get(path);
        if (itemm) {
            this.data = itemm;
            this.render();
            return;
        }

        if (![ODIN, ODIN_AUTHOR].includes(source)) return;

        let baseUrl = 'https://dev-odin.adobe.com';
        let headers = {};
        if (source === ODIN_AUTHOR) {
            baseUrl = 'https://author-p22655-e59341.adobeaemcloud.com';
            headers = { Authorization: `Bearer ${accessToken}` };
        }
        let response;
        const cb = `?cb=${Math.round(Math.random() * 1000000)}`;
        response = await fetch(`${baseUrl}${path}.cfm.gql.json${cb}`, {
            headers,
        });
        if (response.status === 404) {
            response = await fetch(
                `${baseUrl}${originalPath}.cfm.gql.json${cb}`,
                { headers },
            );
        }

        const {
            data: {
                merchCardByPath: { item },
            },
        } = await response;
        this.data = item;
        this.render();
    }

    async render() {
        if (!this.isConnected) return;
        if (this.parentElement.tagName !== 'MERCH-CARD') return;
        await Promise.all(
            [
                ...this.parentElement.querySelectorAll(
                    '[is="inline-price"],[is="checkout-link"]',
                ),
            ].map((el) => el.onceSettled()),
        );
        parseMerchCard(this.data, this.parentElement).then(async () => {
            this.parentElement.style.opacity = 1;
        });
    }
}

customElements.define('merch-datasource', MerchDataSource);
