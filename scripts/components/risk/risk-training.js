class RiskTraining extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /*html*/ `
    <div class="header-flex">
    <h2 class="display-4">Training</h2>
    <img
      src="images/Logo_POMS.png"
      alt="NMPSIA logo"
      class="section-logo"
    />
  </div>
  <p class="mb-4">
    ✨ 
    <a
      href="/pdfs/Coaches Training Announce.pdf"
      target="_blank"
      class="mb-3"
      >Check out our new training available for Coaches and Activity Leaders</a
    >
  </p>
  <ul class="content-list grid-layout">
    <li>
      <i class="bx bx-list-ul"></i>
      <a href="#inPersonTraining">In-Person Training</a>
    </li>
    <li>
      <i class="bx bx-list-ul"></i>
      <a href="#onlineTraining">Online Training</a>
    </li>
    <li>
      <i class="bx bxs-contact"></i>
      <a href="#trainingContacts">Contact List</a>
    </li>
  </ul>
  <p class="text-center my-4 mt-4">
  <i class="bx bxs-file"></i>
    <a
      href="/pdfs/poms-risk-docs/Poms-Associates-Training-Catalog-Abbreviated-August-2023.pdf"
      target="_blank"
      >View or download Training Catalog</a
    >
  </p>
    `;
  }
}

customElements.define("risk-training", RiskTraining);
