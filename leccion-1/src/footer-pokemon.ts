import { LitElement, css, html } from "lit";
import { customElement} from "lit/decorators.js";

@customElement("footer-pokemon")
export class FooterPokemon extends LitElement {
  static styles = css`

        .footer {
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
  `;

  render() {
    return html`
    <footer class="footer">
        <div class="container">
            <label>© 1995–2015 Nintendo/Creatures Inc./GAME FREAK inc.</label>
        </div>
    </footer> 
    `;
  }

  

  
}

declare global {
  interface HTMLElementTagNameMap {
    "footer-pokemon": FooterPokemon;
  }
}