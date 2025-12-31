class DeltaDental extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /*html*/ `
      <div class="heading-and-element-flexbox">
        <h2 class="display-4">Delta Dental</h2>
        <a href="https://www.deltadentalnm.com/member/nmpsia-members/" target="_blank" title="Visit carrier website">
          <img src="images/delta_logo.jpg" alt="Delta Dental logo" class="my-4 mx-3" />
        </a>
      </div>
      <ul class="content-list">
        <!-- <img style="max-height: 60px" class="my-4 mx-3" src="images/delta_logo.jpg" alt="Delta Dental logo" /> -->
        <h4 class="mt-4 mb-3">2025 Open Enrollment Presentations</h4>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a href="/pdfs/Open_Switch_Enrollment_fPY2025/Delta/NMPSIA - Delta Dental of NM - OE Fall Presentation - October 2024 (002).pdf"
            class="sidenav-link" target="_blank">Open/Switch Enrollment Slideshow Presentation</a>
        </li>
        <li>
          <i class="bx bxs-movie-play"></i>
          <a href="/pdfs/Open_Switch_Enrollment_fPY2025/Delta/2024 NMPSIA OE video.FINAL.mp4"
            class="sidenav-link" target="_blank">Open/Switch Enrollment Recorded Presentation</a>
        </li>
        
        <h4 class="mt-4 mb-3">Member Information</h4>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a href="/pdfs/Delta_Dental_Info_2024_2025/DDNM Member Portal Flyer ENGLISH 2024-016-DDNM-MKT.pdf"
            target="_blank"> Member
            Portal Login</a>
        </li>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a target="_blank" href="/pdfs/DDNM_Dental_Claim_Form_Accessible_2024_J43024T.pdf">American Dental Association (ADA) Delta Dental Claim Form</a>
        </li>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a target="_blank" href="/pdfs/Delta_Dental_of_NM_Explanation_of_Benefits_Sample_2025.pdf">Delta Dental of NM Explanation of Benefits Sample</a>
        </li>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a target="_blank"
            href="/pdfs/Delta_Dental_Info_2024_2025/DDNM Mobile App Flyer ENGLISH 2024-017-DDNM-MKT.pdf">
            Delta Dental Mobile App</a>
        </li>
        
       
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a target="_blank"
            href="https://nmpsia.com/pdfs/FLI-6592 v1 Member Portal for Members Flyer (13).pdf"> Delta
            Dental Member Portal</a>
        </li>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a target="_blank"
            href="/pdfs/Delta_Dental_Info_2024_2025/DDNM Generic Pre-Treatment Flyer 2024-124-DDNM-MKT.pdf">
            Pre-treatment
            Estimate</a>
        </li>
        
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a href="/pdfs/Delta_Dental_Info_2024_2025/DDNM Teledentistry Flyer ENGLISH 2023-002-DDNM-MKT.pdf"
            target="_blank">
            Teledentistry Highlights</a>
        </li>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a href="/pdfs/DDNM_2024_Teledentistry_Flyer_FINAL.pdf" target="_blank">
            Delta Dental Virtual Visits -
            How it Works</a>
        </li>
      
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a href="/pdfs/Delta_Dental_Info_2024_2025/DDNM Finding an In-Network Dentist ENGLISH 2024-122-DDNM-MKT.pdf"
            target="_blank"> Finding In-Network Dentists</a>
        </li>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a href="/pdfs/Delta_Dental_Info_2024_2025/DDNM EBD WITH PCS Flyer 2024-004-DDNM-MKT.pdf"
            target="_blank"> Evidence Based Dentistry</a>
        </li>
      </ul>
    `;
  }
}

customElements.define("delta-dental-info", DeltaDental);
