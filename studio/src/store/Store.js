import { makeObservable, observable } from 'mobx';
import { Search } from './Search.js';

import AEM from '../aem.js';

export class Store {
    /**
     * @type {Search}
     */
    search;

    /**
     * @type {import('../aem.js').AEMClient}
     */
    aem;

    /**
     * @param {String} bucket
     */
    constructor(bucket) {
        if (!bucket) throw new Error('bucket is required'); // TODO provide better error message.
        makeObservable(this, {
            search: observable,
        });
        this.aem = new AEM(this.bucket);
    }

    async doSearch(props) {
        this.search = new Search(props);
        await this.aem.sites.cf.fragments.search(this.search);
    }
}
