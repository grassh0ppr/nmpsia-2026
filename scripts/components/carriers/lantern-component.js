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


          <h4 class="mt-4 mb-3">Member Information</h4>

          <li>
            <i class="bx bxs-file-pdf"></i>
            <a href="PDFs/Open_Switch_Enrollment_fPY2025/Surgery_Plus/SurgeryPlus Overview l NMPSIA_2024.8.22vf2.pdf"
              target="_blank"> Lantern
              (SurgeryPlus) Overview</a>
          </li>
          <li>
            <i class="bx bxs-movie-play"></i>
            <a href="PDFs/Open_Switch_Enrollment_fPY2025/Surgery_Plus/Recording of SurgeryPlus Overview.mp4"
              target="_blank"> Lantern
              (SurgeryPlus) Overview Recorded Version</a>
          </li>
          <li>
            <i class="bx bxs-file-pdf"></i>
            <a href="PDFs/Surgery_Plus_Carrier_Info_2024/surgery_plus_plan_design_summary_for_website.pdf"
              target="_blank"> Lantern
              (SurgeryPlus) Plan Design
              Summary</a>
          </li>
          <li>
            <i class="bx bxs-file-pdf"></i>
            <a href="PDFs/NMPSIA_SC_OE_Flyer_FAQ.pdf" target="_blank">
              Lantern
              (SurgeryPlus) Frequently Asked
              Questions</a>
          </li>
          <li>
            <i class="bx bxs-file-pdf"></i>
            <a href="/PDFs/Surgery_Plus_Carrier_Info_2024/Surgery Plus FAQS- Spanish.pdf" target="_blank">
              Lantern
              (SurgeryPlus) Frequently Asked
              Questions - en espa&ntilde;ol</a>
          </li>
          <li>
            <i class="bx bxs-file-pdf"></i>
            <a href="PDFs/Surgery_Plus_Carrier_Info_2024/Surgery Plus Bifold Spine Joint Info.pdf"
              target="_blank"> Lantern
              (SurgeryPlus) Spine and Joint
              Informational Bifold</a>
          </li>
        </ul>
      `;
  }
}

customElements.define("lantern-info", LanternBenefits);
