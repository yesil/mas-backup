const accessToken = localStorage.getItem('masAccessToken');

const headers = {
    Authorization: `Bearer ${accessToken}`,
    pragma: 'no-cache',
    'cache-control': 'no-cache',
};

/**
 * Search for content fragments
 * @param {Object} params - The search options
 * @param {string} [params.path] - The path to search in
 * @param {string} [params.query] - The search query
 * @returns {Promise<Array>} - A promise that resolves to an array of search results
 */
async function fragmentSearch({ path, query }) {
    const filter = {};
    if (path) {
        filter.path = path;
    }
    if (query) {
        filter.fullText = {
            text: encodeURIComponent(query),
            queryMode: 'EXACT_WORDS',
        };
    }
    const searchParams = new URLSearchParams({
        query: JSON.stringify({ filter }),
    }).toString();
    return fetch(`${this.cfSearchUrl}?${searchParams}`, {
        headers,
    })
        .then((res) => res.json())
        .then(({ items }) => items);
}

/**
 *
 * @param {string} bucket
 * @returns {AEMClient}
 */
class AEM {
    sites = {
        cf: {
            fragments: {},
        },
    };

    constructor(bucket) {
        const baseUrl = `https://${bucket}.adobeaemcloud.com/adobe/sites`;
        this.cfSearchUrl = `${baseUrl}/cf/fragments/search`;
        this.sites.cf.fragments.search = fragmentSearch.bind(this);
    }
}

export default AEM;
