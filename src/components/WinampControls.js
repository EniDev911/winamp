export class WinampControls extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  get styles() {
    return `
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /*html*/ `
      <style>${this.styles}</style>
      <div></div>
    `
  }
}