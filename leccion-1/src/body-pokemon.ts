import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

interface IPoke {
    name?: string;
    url?: string;
}

interface IPokemonResponse {
    count?: number;
    next?: string;
    previous?: string;
    results?: IPoke[];
}

@customElement("body-pokemon")
export class BodyPokemon extends LitElement {
    @property()
    pokemonResponse: IPokemonResponse = {};

    getInfo = () => {
        fetch("https://pokeapi.co/api/v2/pokemon", {
            method: "GET",
        })
            .then((response) => response.json())
            .then((result: IPokemonResponse) => {
                this.pokemonResponse = { ...result };
            });
    };

    constructor() {
        super();
        this.getInfo();
    }

    render() {
        return html`
      <p>Lista de pokémon</p>
      
      <div class="container-pokemon">
        ${this.pokemonResponse.results?.map(pokemon =>
            html`<label>${pokemon.name}</label>
               <label>${pokemon.url}</label>
               <br>`
        )}
      </div>
    `;
    }

    static styles = css`
    .container-pokemon {
        max-width: 800px;
        margin: 2rem auto;
        padding: 1.5rem;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        border-radius: 20px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    }

    p {
        text-align: center;
        font-size: 2rem;
        font-weight: bold;
        color: wihte;
        margin-bottom: 2rem;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
    }

    .pokemon-item {
        background: rgba(255, 255, 255, 0.95);
        backdrop-filter: blur(10px);
        border-radius: 15px;
        padding: 1.5rem;
        margin-bottom: 1rem;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        transition: all 0.3s ease;
        border-left: 5px solid #3498db;
    }

    .pokemon-item:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
    }

    label {
        display: block;
        margin-bottom: 0.5rem;
        font-weight: 600;
        color: #2c3e50;
    }

    @media (max-width: 768px) {
        .container-pokemon {
        margin: 1rem;
        padding: 1rem;
        }
  
      p {
        font-size: 1.5rem;
      }
  
      .pokemon-item {
        padding: 1rem;
      }
    }
  `;
}