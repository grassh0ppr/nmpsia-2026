class TeleHealthVirtual extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /*html*/ `
       
      <div class="heading-and-element-flexbox">
        <h2 class="display-4">Video Visits/Telehealth</h2>
        <img src="images/nmpsia_logo_2024.png" alt="NMPSIA logo" />
      </div>
      <hr />
      <div class="container banner">
        <img
          src="images/wellness/getty-images-telehealth-care.jpg"
          alt="Stock photo of person in telehealth appointment from the comfort of their home"
        />
      </div>
      <p class="mt-3">
        <b>$0 copay for Telehealth virtual video visits/telehealth</b>
        <br /><span class="text-danger bold"
          >(when accessing through your medical carrier’s nationwide
          network)</span
        >
      </p>
      <h3 class="sub-heading">Blue Cross Blue Shield of New Mexico</h3>
      <ul class="content-list">
        <li>
          <i class="bx bx-link-external"></i>
          <a
            href="https://members.mdlive.com/bcbsnm/landing_home"
            target="_blank"
            >MDLIVE</a
          >
        </li>
        <li>
          <i class="bx bx-link-external"></i>
          <a href="/pdfs/bcbs_galileo_flyer_2025.pdf" target="_blank"
            >Galileo - Virtual Primary Care</a
          >
        </li>
      </ul>

      <h3 class="sub-heading">Virtual Dental Care</h3>
      <ul class="content-list">
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a
            target="_blank"
            href="/pdfs/carriers/blueCare_dental/BlueCare Dental Teledentistry Member Flier.pdf"
            >BlueCare Dental Teledentistry Services</a
          >
        </li>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a
            target="_blank"
            href="/pdfs/2024 Teledentistry Rebrand final.pdf"
            >Teledentistry Services from Dental.com</a
          >
        </li>
      </ul>
      

      <h3 class="sub-heading">Presbyterian Members</h3>
      <ul class="content-list">
        <li>
          <i class="bx bx-link-external"></i>
          <a
            target="_blank"
            href="https://www.phs.org/tools-resources/member/video-visit/Pages/default.aspx"
            >myPRES</a
          >
        </li>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a
            href="/PDFs/wellness/virtual/presbyterian/PMG_VPC_Gen_Flyer_2023_011224_WEB_FINAL.pdf"
            target="_blank"
            >About Virtual Primary Care
          </a>
        </li>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a
            href="/PDFs/wellness/virtual/presbyterian/How_to_Schedule_Virtual_Primary_Care_Final.pdf"
            target="_blank"
            >How to make an appointment for Virtual Primary Care
          </a>
        </li>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a
            href="/PDFs/wellness/virtual/presbyterian/Virtual_Urgent_Care_Gen_Flyer_011724_WEB_FINAL.pdf"
            target="_blank"
            >About Virtual Urgent Care
          </a>
        </li>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a
            href="/PDFs/wellness/virtual/presbyterian/How_to_Schedule_Virtual_Urgent_Care_ENG_PQ_020224.pdf"
            target="_blank"
            >How to make an appointment for Virtual Urgent Care
          </a>
        </li>

        <li>
          <i class="bx bxs-file-pdf"></i>
          <a
            href="/PDFs/wellness/virtual/presbyterian/Virtual_BH_General_Flyer_ENG_SP_WEB.pdf"
            target="_blank"
            >About Virtual Behavioral Health
          </a>
        </li>
      </ul>
        `;
  }
}

customElements.define("telehealth-virtual", TeleHealthVirtual);
