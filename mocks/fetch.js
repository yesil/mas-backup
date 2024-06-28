import sinon from 'sinon';

const { fetch: originalFetch } = window;

export async function mockFetch(...stubs) {
    const mocks = await Promise.all(stubs.map((stub) => stub(originalFetch)));
    const stub = sinon.stub().callsFake((...args) => {
        const { href, pathname, searchParams } = new URL(
            String(args[0]),
            window.location,
        );
        const res = mocks
            .map((mock) => mock({ href, pathname, searchParams }))
            .find((fetchCall) => fetchCall);
        if (res) return res;
        return originalFetch(args);
    });
    window.fetch = stub;
}
