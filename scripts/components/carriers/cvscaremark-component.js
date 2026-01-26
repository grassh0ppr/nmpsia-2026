class CVSCaremark extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /*html*/ `
      <div class="heading-and-element-flexbox">
        <h2 class="display-4">CVS Caremark</h2>
        <a href="https://www.cvs.com/" target="_blank" title="Visit carrier website">
          <img class="my-4 mx-3" src="images/CVS_Caremark_logo.jpg" alt="CVS Caremark logo">
        </a>
      </div>
      <ul class="content-list">
        <h4 class="mt-4 mb-3">2025 Open Enrollment Presentations</h4>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a href="/pdfs/Open_Switch_Enrollment_fPY2025/CVS_Caremark/NMPSIA Virtual Benefits Fair 2024-2025.pdf"
            target="_blank">Open/Switch Enrollment Slideshow Presentation</a>
        </li>
        <li>
          <i class="bx bxs-movie-play"></i>
          <a href="/pdfs/Open_Switch_Enrollment_fPY2025/CVS_Caremark/NMPSIA Virtual Benefits Fair 2024-2025.mp4"
            target="_blank">Open/Switch Enrollment Recorded Presentation</a>
        </li>
       
        
        <h4 class="mt-4 mb-3">Member Information</h4>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a target="_blank"
            href="https://www.caremark.com/digital-fast/caremark-registration-web/#/registration"> Member
            Portal Login</a>
        </li>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a target="_blank" href="/pdfs/CVS-TDC-Flyer.pdf"> Transform
            Diabetes Care
            (TDC)
            Program</a>
        </li>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a target="_blank" href="/pdfs/Caremark.com-Flyer-with-Mobil-App-QR-Code.pdf"> How to Register
            at
            Caremark.com</a>
        </li>
        <li>
          <i class="bx bx-link-external"></i>
          <a target="_blank" href="https://www.caremark.com/wps/myportal/PHARMACY_LOCATOR_FAST"> Locate a
            pharmacy near
            you</a>
        </li>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a target="_blank" href="/pdfs/2023_7_106-58684Et_Generics.pdf"> Generic medications - same quality, better price!</a>
        </li>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a target="_blank" href="/pdfs/106_70915A_NMPSIA_CVS_PA_Step_Therapy.pdf"> Step Therapy Prescriptions – Understanding the Prior Authorization Process</a>
        </li>
      
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a target="_blank" href="https://nmpsia.com/pdfs/cvs_formularies/SCF_ACSF_1500_1555_January_2026.pdf">Changes to your plan's pharmacy drug list effective January 1, 2026</a>
        </li>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a target="_blank" href="https://nmpsia.com/pdfs/cvs_formularies/01_2026_PDL_SC_ACSF.pdf">Performance Drug List - Standard Control for Clients with Advanced Specialty Formulary effective January 1, 2026</a>
        </li>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a target="_blank" href="https://nmpsia.com/pdfs/cvs_formularies/01_2026_Advanced_Control_Specialty_Formulary.pdf">Advanced Specialty Formulary effective January 1, 2026</a>
        </li>
        <h4 class="mt-4 mb-3">Specialty Medications with Prudent RX</h4>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a href="/pdfs/External Member FAQ- The PrudentRx Copay Program.pdf" target="_blank"> Prudent RX
            Frequently
            Asked Questions (FAQ) &ndash; the copay program</a>
        </li>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a href="/pdfs/PrudentRx Member Benefit Fair Flyer.pdf" target="_blank">
            Prudent RX Member Benefit Overview</a>
        </li>
      </ul>
    `;
  }
}

customElements.define("caremark-info", CVSCaremark);
