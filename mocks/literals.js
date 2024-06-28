export const priceLiteralsURL =
    'https://www.adobe.com/federal/commerce/price-literals.json';

export async function withLiterals({}, originalFetch) {
    const literals = await JSON.parse(
        originalFetch('/test/mocks/literals.json').then((r) => r.text()),
    );
    return async () => {
        if (href === priceLiteralsURL) {
            return Promise.resolve({
                ok: true,
                json: async () => literals,
            });
        }
        return false;
    };
}
