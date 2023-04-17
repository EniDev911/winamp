(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function d(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=d(e);fetch(e.href,t)}})();class r extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}get styles(){return`
  
    .winamp-titlebar {
      display:flex;
      width: 100%;
      height: 12px;
      background: url(./assets/titlebar.png);
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
      background: url(./assets/titlebar.png);
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
      background: url(./assets/titlebar.png);
      background-position: -42px -15px;
      image-rendering: pixelated;
    }

    .titlebar:active {
      background-position-y: 0;
    }

    .top-button.minimize {
      background: url(./assets/titlebar.png);
      background-position: -269px -15px; 
      image-rendering: pixelated;
    }

    .top-button.minimize:active {
      background-position-y: 0;
    }

    .top-button.maximize {
      background: url(./assets/titlebar.png);
      background-position: -281px -15px;
      image-rendering: pixelated;
    }

    .top-button.maximize:active {
      background-position-y: 0; 
    }

    .top-button.close {
      background: url(./assets/titlebar.png);
      background-position: -292px -15px;
      image-rendering: pixelated;
    }

    .top-button.close:active {
      background-position-y: 0;
    }

    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
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
    `}}class l extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}get styles(){return`
      :host {
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
        width: 166px;
        height: 52px;
        margin-right: 2px;
      }

      .lcd {
        width: 90px;
        height: 41px;
        background: black;
      }
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
      <style>${this.styles}</style>
      <div class="lcd">

      </div>
    `}}customElements.define("winamp-lcd-display",l);class p extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}get styles(){return`
    :host {
    }

    .display {
      display: flex;
    }

    .right-display {
      display: flex;
      flex-direction: column;
      width: 100%;
      background: rgba(255, 0, 0, .3);
      padding-top: 14px;
      padding-left: 10px;
    }

    .right-display > div {
    }
    
    .audio-data {
      font-family: W95FA;
      font-size: 9px;
      color: #00F800;
    }

    .audio-info {
      width: 100%;
      height: 20px;
      background: red;
    }

    .kbps, khz {}

    .mono, stereo {}

    .audio-controls {
      height: 20px;
    }
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
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
    `}}class c extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}get styles(){return`
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
      <style>${this.styles}</style>
      <div></div>
    `}}customElements.define("winamp-display",p);customElements.define("winamp-controls",c);class u extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}get styles(){return`
    div {
      display: flex;
      flex-direction: column;
    }

    winamp-display {
    }

    winamp-controls {
      height: 45px;
    }
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
      <style>${this.styles}</style>
      <div>
        <winamp-display></winamp-display> 
        <winamp-controls></winamp-controls> 
      </div>
    `}}customElements.define("winamp-titlebar",r);customElements.define("winamp-body",u);class o extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
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
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
      <style>${o.styles}</style>
      <div class="winamp-main">
        <winamp-titlebar></winamp-titlebar>
        <winamp-body></winamp-body>
        <div class="winamp-body"></div>
      </div>
    `}}customElements.define("winamp-main",o);
