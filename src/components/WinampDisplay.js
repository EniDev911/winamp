import {WinampLCDDisplay} from "./WinampLCDDisplay.js";

customElements.define("winamp-lcd-display", WinampLCDDisplay);

export class WinampDisplay extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  get styles() {
    return `
    :host {
      display: block;
      width: 100%;
      height: 57px;
    }

    .right-display {
      display: flex;
      flex-direction: column;
      width: 100%;
    }

    .right-display > div {
    }
    
    .audio-data {
      font-family: W95FA;
      font-size: 11px;
      color: #00F800;
      background: yellow;
    }

    .audio-info {
      width: 100%;
      height: 20px;
    }

    .kbps, khz {}

    .mono, stereo {}

    .audio-controls {
      height: 20px;
    }
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
      this.shadowRoot.innerHTML = /*html*/ `
      <style>${this.styles}</style>
      <div class="display">
        <winamp-lcd-display></winamp-lcd-display>
        <div class="right-display">
          <div class="audio-data">1. DJ Mike LLama - LLama Whip</div>
          <div class="audio-info">
            <div>
              <div class="kbps"></div>
              <div class="khz"></div>
            </div>
            <div>
              <div class="mono"></div>
              <div class="stereo"></div>
            </div>
          </div>
          <div class="audio-controls">
            <winamp-slider color="orange" position="70"></winamp-slider>
            <winamp-slider color="green" position="50"></winamp-slider>
          </div>
        </div>
      </div>
    `
  }
}