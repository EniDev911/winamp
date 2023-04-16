export class WinampTitleBar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  get styles() {
    return `
  
    .winamp-titlebar {
      display:flex;
      width: 100%;
      height: 12px;
      background: url(/assets/titlebar.png);
      background-position: -27px -15px;
    }

    .winamp-titlebar > div {
      height: 100%;
    }

    .winamp-titlebar:active {
      background-position: -27px 0;
    }

    .top-button {
      width: 11px;
      height: 11px;
    }

    .first-button {
      background: transparent;
      width: 16px;
      height: 100%;
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;
    }

    .about {
      background: url(/assets/titlebar.png);
      background-position: 0 0;
      width: 10px;
      height: 9px;
      image-rendering: pixelated;
    }

    .about:active {
      background-position-y: -9px;
    }

    .titlebar {
      width: 228px;
      background: url(/assets/titlebar.png);
      background-position: -42px -15px;
      image-rendering: pixelated;
    }

    .titlebar:active {
      background-position-y: 0;
    }

    .top-button.minimize {
      background: url(/assets/titlebar.png);
      background-position: -269px -15px; 
      image-rendering: pixelated;
    }

    .top-button.minimize:active {
      background-position-y: 0;
    }

    .top-button.maximize {
      background: url(/assets/titlebar.png);
      background-position: -281px -15px;
      image-rendering: pixelated;
    }

    .top-button.maximize:active {
      background-position-y: 0; 
    }

    .top-button.close {
      background: url(/assets/titlebar.png);
      background-position: -292px -15px;
      image-rendering: pixelated;
    }

    .top-button.close:active {
      background-position-y: 0;
    }

    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /*html*/ `
      <style>${this.styles}</style>
      <div class="winamp-titlebar">
        <div class="first-button">
            <div class="about"></div>
        </div>
        <div class="titlebar"></div>
        <div class="top-button minimize"></div>
        <div class="top-button maximize"></div>
        <div class="top-button close"></div>
    </div>
    `;
  }
}
