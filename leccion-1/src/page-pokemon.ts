import { LitElement, html, css} from 'lit';
import { customElement } from 'lit/decorators.js';
import './header-pokemon';
import './body-pokemon';
import './footer-pokemon';

@customElement('page-pokemon')
export class PagePokemon extends LitElement {
  static styles = css`
  `;

  render() {
    return html`
      <header-pokemon></header-pokemon>
      <body-pokemon></body-pokemon>
      <footer-pokemon></footer-pokemon> 
    `;
  }
}
