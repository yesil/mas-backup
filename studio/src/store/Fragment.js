export class Fragment {
    path = '';
    modelId = '';
    type = '';

    /**
     * @param {Object} props - common properties of a fragment as a search result
     * @param {string} props.path - cf path
     * @param {string} props.modelId - cf model id
     * @param {string} props.type - merch web component type (e.g: merch-card)
     */
    constructor(props) {
        Object.assign(this, props);
    }
}
