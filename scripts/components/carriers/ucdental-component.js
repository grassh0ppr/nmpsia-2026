class UnitedConcordia extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /*html*/ `
      <div class="heading-and-element-flexbox">
        <h2 class="display-4">
          United Concordia Dental
        </h2>
        <a href="https://www.unitedconcordia.com/benefits/clients-corner/New-Mexico-Public-School-Client-Corner-Dental-Benefits"
          target="_blank" title="Visit carrier website">
          <img class="my-4 mx-3" src="images/UCD_logo_2024.jpg"
            alt="United Concordia logo" />
        </a>
      </div>
      <ul class="content-list">
        <h4 class="mt-4 mb-3">2026 Open Enrollment Presentations</h4>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a href="/PDFs/open-enrollment/PY_2027/carriers/UCCI_OEPresentation_Slides.pdf"
            target="_blank">Open/Switch Enrollment Slideshow Presentation</a>
        </li>
        <li>
          <i class="bx bxs-movie-play"></i>
          <a href="/PDFs/open-enrollment/PY_2027/carriers/UCCI_OEPresentation_Video.mp4"
            target="_blank">Open/Switch Enrollment Recorded Presentation</a>
        </li>
        <h4 class="mt-4 mb-3">Member Information</h4>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a target="_blank"
            href="/pdfs/Carriers_Important_Benefit_Info/2024 NMPSIA-Benefits-Summary_HIGH OPTION_FLY_R1.pdf">
            Summary of Benefits - High
            Option</a>
        </li>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a target="_blank"
            href="/pdfs/Carriers_Important_Benefit_Info/2024 NMPSIA-Benefits-Summary_LOW OPTION_FLY_R1.pdf">
            Summary of Benefits - Low
            Option</a>
        </li>
        <li>
          <i class="bx bx-link-external"></i>
          <a target="_blank" href="https://www.unitedconcordia.com/find-a-dentist/#/"> Find
            an In-Network Dentist</a>
        </li>
        <li>
          <i class="bx bx-link-external"></i>
          <a target="_blank" href="https://www.unitedconcordia.com/login"> Member
            Portal Login</a>
        </li>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a target="_blank" href="/PDFs/carriers/United_Concordia/UCD_Teledentistry_Member_Flyer_09102026_high.pdf">
            United Concordia Teledentistry Services
          </a>
        </li>
        <li>
          <i class="bx bx-link-external"></i>
          <a target="_blank" href="/PDFs/carriers/United_Concordia/2026 UCD_Perks_Member_Flyer.pdf"> Introducing United Concordia Perks</a>
        </li>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a target="_blank" href="/pdfs/Carriers_Important_Benefit_Info/Cost_Feature_Flyer_2023.pdf"> Cost
            Feature Flyer</a>
        </li>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a target="_blank" href="/PDFs/carriers/United_Concordia/2026_UCD_Claim_Form.pdf"> United
            Concordia Claim Form</a>
        </li>
      </ul>
    `;
  }
}

customElements.define("united-concordia-info", UnitedConcordia);
