import { Fragment } from './store/Fragment.js';
import { Search } from './store/Search.js';

const accessToken = localStorage.getItem('masAccessToken');

const headers = {
    Authorization: `Bearer ${accessToken}`,
    pragma: 'no-cache',
    'cache-control': 'no-cache',
};

/**
 * @typedef {Object} AEMClient
 * @property {String} baseUrl
 * @property {String} cfSearchUrl
 * @property {Object} sites
 * @property {Object} sites.cf
 * @property {Object} sites.cf.fragments
 * @property {function(Search): Promise<void>} sites.cf.fragments.search - Async function to search fragments
 */

/**
 *
 * @param {String} bucket
 * @returns {AEMClient}
 */
function AEM(bucket) {
    const baseUrl = `https://${bucket}.adobeaemcloud.com/adobe/sites`;
    const cfSearchUrl = `${baseUrl}/cf/fragments/search`;

    const sites = {
        cf: {
            fragments: {
                /**
                 * @param {Search} search
                 */
                async search(search) {
                    const filter = {};
                    if (search.path) {
                        filter.path = search.path;
                    }
                    if (search.query) {
                        filter.fullText = {
                            text: search.query,
                            queryMode: 'EXACT_WORDS',
                        };
                    }
                    const query = new URLSearchParams({
                        query: JSON.stringify({ filter }),
                    }).toString();
                    const result = await fetch(`${cfSearchUrl}?${query}`, {
                        headers,
                    })
                        .then((res) => res.json())
                        .then(({ items }) =>
                            items.map((item) => new Fragment(item)),
                        );
                    search.setResult(result);
                },
            },
        },
    };

    return {
        baseUrl,
        cfSearchUrl,
        sites,
    };
}

export default AEM;
