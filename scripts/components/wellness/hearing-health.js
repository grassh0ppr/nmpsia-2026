class HearingHealth extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /*html*/ `
    <div class="heading-and-element-flexbox">
      <h2 class="display-4">Hearing Health</h2>
      <img src="images/nmpsia_logo_2024.png" alt="NMPSIA logo" />
    </div>
    <div class="container banner">
      <img src="images/wellness/yunus-tug-hearing-health-unsplash.jpg" alt="Hearing health banner" />
    </div>
    <h3 class="sub-heading">Hearing Health Resources</h3>
    <ul class="content-list">
      <li>
        <i class="bx bxs-file-pdf"></i>
        <a href="/wellness/hearing/TruHearing-UCD-EnhancedDiscount-Flyer-1025-P2.pdf" target="_blank">United Concordia Dental - TruHearing Program Flyer</a>
      </li>
      <li>
        <i class="bx bxs-file-pdf"></i>
        <a href="/wellness/hearing/NM ENG Group Blue365 Overview Member Flyer Hearing.pdf" target="_blank">BCBS - Blue365 Hearing Discount Program Flyer</a>
      </li>
      <li>
        <i class="bx bx-link-external"></i>
        <a href="https://www.blue365deals.com/BCBSNM/join?destination=%2Foffers%3Fcategory%255Bhearing_aids%255D%3Dh%E2%80%A6" target="_blank">BCBS - Blue365 Hearing Discount Program Information</a>
      </li>
      <li>
        <i class="bx bx-link-external"></i>
        <a href="https://www.truhearing.com/unitedconcordiadental/" target="_blank">United Concordia Dental - TruHearing Program Information</a>
      </li>
    </ul>
  `;
  }
}

customElements.define("hearing-health", HearingHealth);
