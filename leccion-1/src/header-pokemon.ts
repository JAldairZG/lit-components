import { LitElement, css, html } from "lit";
import { customElement} from "lit/decorators.js";

@customElement("header-pokemon")
export class HeaderPokemon extends LitElement {
  static styles = css`

        .header {
            background: #3b82f6;
            padding: 1rem 0;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            position: relative;
            width: 100vw;
            display: flex;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 2rem;
            position: relative;
            z-index: 2;
        }

        .nav-wrapper {
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .logo-section {
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .logo {
            height: 80px;
            width: auto;
        }

        @media (max-width: 768px) {
 
            .logo {
                height: 50px;
            }

            .container {
                padding: 0 1rem;
            }
        }
  `;

  render() {
    return html`
    <header class="header">
        <div class="container">
            <div class="nav-wrapper">
                <div class="logo-section">
                    <img src="https://th.bing.com/th/id/R.6bfedd95bf2a2fe9c25a1add56555191?rik=24nQWXOjVaWOYA&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fpokemon-hd-png-pokemon-logo-png-2000.png&ehk=oLNuHwgbpBlkuTvuC7ouMKTKt3gRow9tol3KQ5EzS%2bg%3d&risl=&pid=ImgRaw&r=0" 
                         alt="Pokémon Logo" class="logo">
                </div>
            </div>
        </div>
    </header> 
    `;
  }

  

  
}

declare global {
  interface HTMLElementTagNameMap {
    "header-pokemon": HeaderPokemon;
  }
}