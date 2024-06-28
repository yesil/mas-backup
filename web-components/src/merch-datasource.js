const ODIN = 'odin';
const ODIN_AUTHOR = 'odin-author';

let accessToken;

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

window.addEventListener('message', (e) => {
    if (e.data.type === 'mas:updateAccessToken') {
        accessToken = e.data.accessToken;
    }
});

async function parseMerchCard(cardJson, merchCard) {
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

    if (cardJson.prices?.html) {
        const prices = cardJson.prices.html;
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

    if (cardJson.description?.html) {
        const body = createTag(
            cardType.description.tag,
            { slot: cardType.description.slot },
            cardJson.description.html,
        );
        merchCard.append(body);
    }

    if (cardJson.ctas?.html) {
        let ctas = cardJson.ctas.html;
        ctas = ctas.flatMap((cta) => {
            cta.style.display = 'none';
            const variant = cta.classList.contains('blue')
                ? 'accent'
                : 'primary';
            const treatment = variant === 'primary' ? 'outline' : '';
            const spButton = createTag('sp-button', {
                variant,
                treatment,
                size: cardType.ctas.size,
            });
            spButton.innerHTML = cta.innerHTML;
            spButton.addEventListener('click', (e) => {
                e.stopImmediatePropagation();
                const inApp = merchCard.getAttribute('in-app') === '';
                if (inApp) {
                    const [{ productArrangementCode }] = cta.value;
                    const actionData = {
                        type: 'deep-link',
                        // target: `inapp://ccd?workflow=routeToPath&routePath=%2FeditPlan%3Fpa%3D${productArrangementCode}%26cli%3Dcc_desktop%26co%3DUS%26landing_page%3D${checkoutUrl}`,
                        target: `inapp://ccd?workflow=routeToPath&routePath=%2FeditPlan%3Fpa%3D${productArrangementCode}%26cli%3Dcc_desktop%26co%3DUS%26landing_page%3Dhttps%3A%2F%2Fcommerce-stg.adobe.com%2Fstore%2Fsegmentation%26ctx%3Da`,
                    };
                    cta.dispatchEvent(
                        new CustomEvent('deep-link', {
                            detail: actionData,
                            bubbles: true,
                        }),
                    );
                } else {
                    cta.click();
                }
            });

            return [cta, spButton];
        });
        const color = merchCard.getAttribute('color') ?? 'light';
        const theme = createTag(
            'sp-theme',
            { theme: 'spectrum', color, scale: 'medium' },
            ctas,
        );
        theme.style.display = 'contents';
        const footer = createTag('div', { slot: 'footer' }, theme);
        merchCard.append(footer);
    }
}

/**
 * Custom element representing a MerchDataSource.
 *
 * @attr {string} source - Specifies the data source for the component.
 *                         Possible values: "odin".
 */
export class MerchDataSource extends HTMLElement {
    data = {};

    static cache = new FragmentCache();

    static get observedAttributes() {
        return ['source', 'path'];
    }

    connectedCallback() {
        this.fetchData();
    }

    refresh() {
        this.fetchData();
    }

    addFragmen;

    async fetchData() {
        const source = this.getAttribute('source') ?? ODIN;
        let path = this.getAttribute('path');
        const originalPath = path;
        if (!path) return;

        const itemm = this.cache.get();
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
