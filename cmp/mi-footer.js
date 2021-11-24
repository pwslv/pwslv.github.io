class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<p>
        &copy; 2021
        SALINAS LUNA VICTOR HUGO.
      </p>`;
  }
}

customElements.define(
  "mi-footer", MiFooter);
