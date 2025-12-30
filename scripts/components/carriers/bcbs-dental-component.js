class BCBSDental extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /*html*/ `
        <div class="heading-and-element-flexbox">
          <h2 class="display-4">
            BlueCare Dental
          </h2>
          <a href="https://www.bcbsnm.com/nmpsia/benefits/dental" target="_blank" title="Visit carrier website">
            <img class="my-4 mx-3" src="images/carriers/BlueCare DentalSM.png"
              alt="BlueCare logo" />
          </a>
        </div>
        <ul class="content-list">
        <h4 class="mt-4 mb-3">2025 Open Enrollment Presentations</h4>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a target="_blank"
            href="/pdfs/Open_Switch_Enrollment_fPY2025/BCBS_Dental/BCBS Dental.pdf">Open/Switch
            Enrollment Presentation</a>
        </li>
        <li>
          <i class="bx bxs-movie-play"></i>
          <a target="_blank"
            href="/pdfs/Open_Switch_Enrollment_fPY2025/BCBS_Dental/BCBS Dental.mp4">Open/Switch
            Enrollment
            Recorded Presentation</a>
        </li>


        <h4 class="mt-4 mb-3">BlueCare Member Information</h4>
        <li>
              <i class="bx bxs-file-pdf"></i>
              <a target="_blank"
                href="https://account.bcbsnm.com/login/?goto=https://cim.bcbsnm.com/am/oauth2/realms/members/authorize?client_id%3DOAuth-BlueAccessMember20_APP00007045%26code_challenge%3Ddc-pc40GhsxBzxd1JcQWml2SFwaRuK4f-Ied9D5oxvg%26code_challenge_method%3DS256%26prompt%3Dnone%26redirect_uri%3Dhttps://mybam.bcbsnm.com/%26response_type%3Dcode%26scope%3Dopenid%2520profile%2520bam2.0%2520fr:idm:*%2520restrictedmids%26service%3Dhcsc-members-mma-mfa%26state%3DMEJ0Yw%253D%253D">Member Portal Login</a>
            </li>
        
            <li>
              <i class="bx bx-link-external"></i>
              <a target="_blank" href="https://ohl.go2dental.com/news-list?cli=dnoa&brand=nm&sm=13" target="_blank">BlueCare
                Newsletters</a>
            </li>
            <li>
              <i class="bx bxs-file-pdf"></i>
              <a target="_blank" href="/pdfs/carriers/blueCare_dental/High_Low_option_Highlights.pdf">BlueCare
                Dental High/Low Option Highlights</a>
            </li>
            <li>
              <i class="bx bxs-file-pdf"></i>
              <a target="_blank" href="/pdfs/carriers/blueCare_dental/Claim form English.pdf">BlueCare Dental Claim
                Form</a>
            </li>
            <li>
              <i class="bx bxs-file-pdf"></i>
              <a target="_blank" href="/pdfs/carriers/blueCare_dental/Claim form Spanish.pdf">BlueCare Dental Claim
                Form (en espa&ntilde;ol)</a>
            </li>
            <li>
              <i class="bx bxs-file-pdf"></i>
              <a target="_blank" href="/pdfs/carriers/blueCare_dental/NM_Group_BlueCare_Dental_PPO_Member_Flier.pdf">BlueCare Dental PPO Member Information</a>
            </li>
            <li>
              <i class="bx bxs-file-pdf"></i>
              <a target="_blank" href="/pdfs/carriers/blueCare_dental/NM_Group_BlueCare_Dental_Teledentistry_Member_Flier.pdf">BlueCare Teledentistry - Virtual Dental Visits 24/7</a>
            </li>
            <li>
              <i class="bx bxs-file-pdf"></i>
              <a target="_blank" href="/pdfs/carriers/blueCare_dental/Enhanced_benefit_BlueCare.pdf">BlueCare Enhanced Dental Benefits for Special Health Conditions</a>
            </li>

      </ul>
        `;
  }
}

customElements.define("bcbs-dental-info", BCBSDental);
