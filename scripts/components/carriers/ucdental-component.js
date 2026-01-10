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
        <h4 class="mt-4 mb-3">2025 Open Enrollment Presentations</h4>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a href="/pdfs/Open_Switch_Enrollment_fPY2025/United_Concordia/NMPSIA OE UCCI - 2025 Final.pdf"
            target="_blank">Open/Switch Enrollment Slideshow Presentation</a>
        </li>
        <li>
          <i class="bx bxs-movie-play"></i>
          <a href="/pdfs/Open_Switch_Enrollment_fPY2025/United_Concordia/NMPSIA OE UCCI - 2025 Plan Year - Final.mp4"
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
          <i class="bx bxs-file-pdf"></i>
          <a target="_blank" href="pdfs/Carriers_Important_Benefit_Info/Network_Flyer Alliance.pdf"> Find
            an In-Network Dentist</a>
        </li>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a target="_blank" href="https://www.unitedconcordia.com/login"> Member
            Portal Login</a>
        </li>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a target="_blank" href="/pdfs/2024 Teledentistry Rebrand final.pdf">
            Teledentistry Services
            from
            Dental.com</a>
        </li>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a href="https://www.brainshark.com/1/player/ucci?fb=0&r3f1=79433d6e626f372575264639697b7d2369352504&custom=mydentalbenefits_overview"
            target="_blank"> Accessing My Dental
            Benefits</a>
        </li>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a target="_blank" href="pdfs/Carriers_Important_Benefit_Info/Cost_Feature_Flyer_2023.pdf"> Cost
            Feature Flyer</a>
        </li>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a target="_blank"
            href="/pdfs/Carriers_Important_Benefit_Info/College_Tuition_Benefit_Member_Flyer.pdf"> College
            Tuition Benefit
            Information</a>
        </li>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a target="_blank"
            href="https://www.brainshark.com/1/player/ucci?fb=0&r3f1=0b314f1c101d45570754344b1b090f511b475776&custom=member_ctb_overview">
            How to Enroll in College
            Tuition Benefits</a>
        </li>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a target="_blank" href="https://nmpsia.com/pdfs/United_Concordia_Claim_Form.pdf"> United
            Concordia Claim Form</a>
        </li>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a target="_blank"
            href="https://nmpsia.com/pdfs/College_Tuition_Benefit_Member_Flyer_01282022_high.pdf"> College
            Tuition Benefit
            Scholarship Opportunity</a>
        </li>
      </ul>
    `;
  }
}

customElements.define("united-concordia-info", UnitedConcordia);
