import { expect } from '@esm-bundle/chai';
import { Store } from '../../src/store/Store.js';
import { withAem } from '/test/mocks/aem.js';
import { mockFetch } from '/test/mocks/fetch.js';

mockFetch(withAem);

describe('Store', () => {
    describe('Search', () => {
        it('perform a search with [query, path] params', async () => {
            const store = new Store({ bucket: 'test' });
            expect(store.search).to.be.undefined;
            await store.doSearch({
                query: 'test',
            });
            expect(store.search).to.not.undefined;
            expect(store.search.result.length).eq(2);
            const [cc, ps] = store.search.result.values();
            expect(cc.path).eq('/content/dam/sandbox/mas/creative-cloud');
            expect(ps.path).eq('/content/dam/sandbox/mas/photoshop');
        });
    });
});
