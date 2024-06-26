import { LitElement, nothing } from 'lit';
import { renderProperties } from '../dist/aue-properties.js';

class MasAueProperties extends LitElement {
    static properties = {
        content: { type: String },
        model: { type: String },
    };

    #content;
    #model;

    constructor() {
        super();
    }

    createRenderRoot() {
        return this;
    }

    updated(changedProperties) {
        if (changedProperties.has('content')) {
            fetch(this.content)
                .then((res) => res.json())
                .then((rawContent) => {
                    this.#content = rawContent;
                });
            this.renderProperties();
        }
        if (changedProperties.has('model')) {
            fetch(this.model)
                .then((res) => res.json())
                .then((rawModel) => {
                    const { content } = rawModel.data.contentFragmentModel.body;
                    content.fields = content.fields.map(
                        ({ component, raw }) => ({
                            component,
                            ...raw,
                        }),
                    );
                    this.#model = rawModel;
                    this.renderProperties();
                });
        }
    }

    renderProperties() {
        if (this.#content && this.#model) {
            renderProperties(this, this.#content, this.#model);
        }
    }

    render() {
        return nothing;
    }
}

customElements.define('mas-aue-properties', MasAueProperties);
