class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<li>&copy; Untitled. All rights reserved.</li><li>Design:SALINAS LUNA VICTOR HUGO</li>`;
  }
}

customElements.define(
  "mi-footer", MiFooter);
