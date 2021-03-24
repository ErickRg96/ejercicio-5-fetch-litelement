// Basic required imports
import { LitElement, html, css } from "lit-element";
import "./my-list";

// Create a class form your component and extend the LitElement
class MyApp extends LitElement {
    static get styles() {
        return css`
            .btn {
                border: 2px solid #3e3e3e;
                background-color: transparent;
                color: #3e3e3e;
                text-transform: uppercase;
                padding: 14px 18px;
                font-family: var(--font);
                font-size: 14px;
                font-weight: 500;
                margin-top: 10px;
                margin-left: 15px;
                cursor: pointer;
                outline: none;
                transition: 0.4s ease all;
            }

            .btn:hover {
                background-color: #3e3e3e;
                color: #fff;
            }
        `;
    }

    static get properties() {
        return {
            listMovies: { type: Array },
            loading: { type: Boolean },
            urlApi: { type: String },
        };
    }

    constructor() {
        super();
        this.urlApi =
            "https://api.themoviedb.org/3/movie/now_playing?api_key=4ff32b3a95fabacb861ecfa8aa1dfcba&language=en-US&page=1";
        this.listMovies = [];
        this.loading = "Empty list...";
    }

    render() {
        return html`
            <button @click=${this._getMovies} class="btn">Get List</button>
            <button @click=${this._onDeleteList} class="btn">Empty List</button>

            <my-list
                title="My Favorites Movies"
                .items=${this.listMovies}
                .loading=${this.loading}
            ></my-list>
        `;
    }

    _getMovies() {
        this.loading = "Loading...";
        const url = this.urlApi;
        fetch(url)
            .then((r) => r.json())
            .then((r) => {
                this.listMovies = r.results;
            });
    }

    _onDeleteList() {
        this.loading = "Empty list...";
        this.listMovies = [];
    }
}

// Register yout element to sutom elements
customElements.define("my-app", MyApp);
