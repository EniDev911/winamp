import { WinampTitleBar } from "./WinampTitleBar.js";
import { WinampBody } from "../components/WinampBody.js";
customElements.define("winamp-titlebar", WinampTitleBar);
customElements.define("winamp-body", WinampBody);

export class WinampMain extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return `
    .winamp-main {
      display: flex;
      flex-direction: column;
      width: 275px;
      height: 116px;
      background: url(./assets/main.png);
      image-rendering: pixelated;
    }

    .winamp-body {

    }
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /*html*/ `
      <style>${WinampMain.styles}</style>
      <div class="winamp-main">
        <winamp-titlebar></winamp-titlebar>
        <winamp-body></winamp-body>
        <div class="winamp-body"></div>
      </div>
    `
  }
}
