import { runTests } from '@web/test-runner-mocha';
import { expect } from '@esm-bundle/chai';

import '@adobe/mas';

import { MerchDataSource } from '../src/merch-datasource.js';
import { getTemplateContent } from './utils.js';

runTests(async () => {
    /**
     * @type {MerchDataSource}
     */
    const merchDataSource =
        await customElements.whenDefined('merch-datasource');
    describe('merch-datasource web component', () => {
        it('has fragment cache', async () => {
            const { cache } = merchDataSource;
            expect(cache).to.exist;
            expect(cache.has('/test')).to.false;
            cache.add({ path: '/test', test: 1 });
            expect(cache.has('/test')).to.true;
            cache.clear();
            expect(cache.has('/test')).to.false;
        });
        it('renders a merch card from cache', async () => {
            merchDataSource.cache.clear();

            const searchResult = await fetch(
                '/test/mocks/sites/cf/fragments/search/default.json',
            ).then((res) => res.json());
            merchDataSource.cache.add(...searchResult.items);

            const cards = getTemplateContent('cards');
            document.querySelector('main').append(...cards);
        });
    });
});
