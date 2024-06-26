export function withAem({ pathname }, originalFetch) {
    if (/cf\/fragments\/search/.test(pathname)) {
        // TODO add conditional use case.
        return originalFetch(
            '/test/mocks/sites/cf/fragments/search/default.json',
        );
    }
    return false;
}
