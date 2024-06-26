import sinon from 'sinon';

const { fetch: originalFetch } = window;

export function mockFetch(...stubs) {
    const stub = sinon.stub().callsFake((...args) => {
        const { href, pathname, searchParams } = new URL(String(args[0]));
        const res = stubs
            .map((stub) =>
                stub({ href, pathname, searchParams }, originalFetch),
            )
            .find((fetchCall) => fetchCall);
        if (res) return res;
        return originalFetch(args);
    });
    window.fetch = stub;
}

export function unmockFetch() {
    window.fetch = originalFetch;
}
