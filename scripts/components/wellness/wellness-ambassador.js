class WellnessAmbassador extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /*html*/ `
        <div class="heading-and-element-flexbox">
        <h2 class="display-4">NMPSIA Wellness Ambassador Program</h2>
        <img src="images/nmpsia_logo_2024.png" alt="NMPSIA logo" />
      </div>
      <hr />
      <div class="container banner">
        <img
          src="images/wellness/austin-schmid-wellness-ambassador.jpg"
          alt="Decorative element"
        />
      </div>
      <h3 class="sub-heading">Wellness Ambassador Resources</h3>
      <ul class="content-list">
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a href="https://www.surveymonkey.com/r/NMPSIAwa2526" target="_blank"
            >Become a Wellness Ambassador</a
          >
        </li>
      </ul>
        `;
  }
}
customElements.define("wellness-ambassador", WellnessAmbassador);
