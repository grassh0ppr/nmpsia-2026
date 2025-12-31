class LanternBenefits extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /*html*/ `
      <div class="heading-and-element-flexbox">
        <h2 class="display-4">SurgeryPlus is now Lantern</h2>
        <a href="https://surgeryplus.com/" target="_blank" title="Visit carrier website">
          <img src="images/lantern_logo.png" style="height: 100px; padding: 8px"
            alt="Lantern (SurgeryPlus rebrand) logo" class="my-4 mx-3" />
        </a>
      </div>
      <p class="bold ms-4">New name, same trusted team.</p>
      <ul class="content-list">
        <h4 class="mt-4 mb-3">2025 Open Enrollment Presentations</h4>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a href="/pdfs/Open_Switch_Enrollment_fPY2025/Surgery_Plus/SurgeryPlus Overview l NMPSIA_2024.8.22vf2.pdf"
            class="sidenav-link" target="_blank">Open/Switch Enrollment
            Slideshow Presentation</a>
        </li>
        <li>
          <i class="bx bxs-movie-play"></i>
          <a href="/pdfs/Open_Switch_Enrollment_fPY2025/Surgery_Plus/Recording of SurgeryPlus Overview.mp4"
            class="sidenav-link" target="_blank">Open/Switch Enrollment Recorded
            Presentation</a>
        </li>
      </ul>
    `;
  }
}

customElements.define("lantern-info", LanternBenefits);
