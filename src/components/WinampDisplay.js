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
    }

    .display {
      display: flex;
    }

    .right-display {
      display: flex;
      flex-direction: column;
      width: 100%;
      padding-top: 14px;
      padding-left: 10px;
    }

    .right-display > div {
    }
    
    .audio-data, .kbps, .khz {
      font-family: W95FA;
      font-size: 9px;
      color: #00F800;
    }

    .audio-info {
      width: 100%;
      height: 20px;
      display: flex;
    }
    .audio-info > div {
      display: flex;
      justify-content: space-between;
    }
    .audio-info > div:first-child {
      width: 54px;
    }

    .audio-info > div:last-child {
      width: 54px;
      margin-left: 48px;
    }

    .kbps, .khz {
      margin-top: 8px;
     }

    .mono, .stereo {
      background: url(./assets/monostereo.png);
      transform: translate(0, 6px);
      width: 29px;
      height: 12px;
      image-rendering: pixelated;
    }

    .mono {
      background-position: -30px -12px;
    }
    .stereo {
      background-position: 0 0;
    }

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
              <div class="kbps">128</div>
              <div class="khz">44</div>
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