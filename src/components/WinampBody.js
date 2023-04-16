import { WinampDisplay } from './WinampDisplay.js';
import { WinampControls } from './WinampControls.js';
customElements.define("winamp-display", WinampDisplay);
customElements.define("winamp-controls", WinampControls);

export class WinampBody extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  get styles() {
    return `
    div {
      display: flex;
    }

    winamp-display {
      background: red;
      width: 102px;
    }

    winamp-controls {
      background: blue;
      width: 100%;
    }
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /*html*/ `
      <style>${this.styles}</style>
      <div>
        <winamp-display></winamp-display> 
        <winamp-controls></winamp-controls> 
      </div>
    `
  }
}