class GoBackBtn extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /*html*/ `
      <span class="d-flex align-items-center">
        <i class="bx bx-arrow-back"></i>
        <a href="#overview" class="go-back-button"> Go back</a>
      </span>
    `;
  }
}
// Define the new custom element
customElements.define("go-back-btn", GoBackBtn);
