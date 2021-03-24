import { LitElement, html, css } from "lit-element";

class MyList extends LitElement {
    static get styles() {
        return css`
            :host {
                font-family: var(--font);
            }

            .title__list {
                font-size: 38px;
                text-transform: uppercase;
                font-weight: 700;
                letter-spacing: 2px;
            }

            .list {
                font-weight: 700;
                font-size: 24px;
                text-transform: uppercase;
                letter-spacing: 2px;
                color: #32afb2;
                margin-left: 15px;
            }

            .list__item {
                margin: 20px 0;
            }

            .list__state {
                font-weight: 700;
                font-size: 24px;
                text-transform: uppercase;
                letter-spacing: 2px;
                margin-left: 15px;
            }
        `;
    }

    // Se crean las propiedades
    static get properties() {
        return {
            title: { type: String },
            items: { type: Array },
            loading: { type: String },
        };
    }

    // Se inicialian las propiedades
    constructor() {
        super();
        this.items = [];
    }

    // Asignar las propiedades al template
    render() {
        return html`
            <h1 class="title__list">${this.title}</h1>
            ${this.items.length === 0
                ? html`<p class="list__state">${this.loading}</p>`
                : this.showList(this.items)}
        `;
    }

    showList(items) {
        return html`
            <ul class="list">
                ${items.map(
                    (item) =>
                        html`<li class="list__item">
                            ${item.title} (${item.release_date})
                        </li>`
                )}
            </ul>
        `;
    }
}

customElements.define("my-list", MyList);
