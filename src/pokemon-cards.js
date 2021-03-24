import { LitElement, html, css } from "lit-element";

class PokemonCards extends LitElement {
    static get properties() {
        return {
            cards: { type: Array },
        };
    }

    constructor() {
        super();
        this.cards = [];
        this._getCards();
    }

    render() {
        return html`
            <h1 class="h1">Pokemon cards</h1>
            ${this.cards.map((card) => html`<li>${card.name}</li>`)}
        `;
    }

    _getCards() {
        const url = "https://api.pokemontcg.io/v1/cards";
        fetch(url)
            .then((r) => r.json())
            .then((r) => {
                this.cards = r.cards;
            });
    }
}

customElements.define("pokemon-cards", PokemonCards);
