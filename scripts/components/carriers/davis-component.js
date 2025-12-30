class DavisVision extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /*html*/ `
        <div class="heading-and-element-flexbox">
          <h2 class="display-4">Davis Vision</h2>
          <a href="https://www.visionworks.com/davis-vision" target="_blank" title="Visit carrier website">
            <img class="my-3" src="images/carriers/logo2.png" alt="Davis Vision logo" />
          </a>
        </div>
        <ul class="content-list">
        <h4 class="mt-4 mb-3">2025 Open Enrollment Presentations</h4>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a href="/pdfs/Open_Switch_Enrollment_fPY2025/Davis/NMPSIA OE Deck_2024 Final.pdf"
            class="sidenav-link" target="_blank">Open/Switch Enrollment Slideshow Presentation</a>
        </li>
        <li>
          <i class="bx bxs-movie-play"></i>
          <a href="/pdfs/Open_Switch_Enrollment_fPY2025/Davis/NMPSIA 2025 Davis Vision 2025.mp4"
            class="sidenav-link" target="_blank">Open/Switch Enrollment Recorded Presentation</a>
        </li>
        <h4 class="mt-4 mb-3">2024 Open Enrollment Presentations</h4>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a target="_blank"
            href="/docs/Open-Switch-Enrollment-2024/NMPSIA-OE-Davis-2024-presentation-slides.pdf">Open/Switch
            Enrollment Slideshow Presentation</a>
        </li>
        <li>
          <i class="bx bxs-movie-play"></i>
          <a target="_blank"
            href="/docs/Open-Switch-Enrollment-2024/NMPSIA-OE-Davis-2024-presentation-video.mp4">Open/Switch
            Enrollment Recorded Presentation</a>
        </li>

        <h4 class="mt-4 mb-3">Member Information</h4>

        <li>
          <i class="bx bx-link-external"></i>
          <a href="https://davisvision.com/members/registration/?lang=1&amp;langtype=1033&amp;isiframe=true"
            target="_blank"> Member Portal Registration</a>
        </li>
        <li>
          <i class="bx bx-link-external"></i>
          <a href="https://davisvision.com/members/" target="_blank">
            Member Portal
            Login</a>
        </li>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a href="/pdfs/Summary_Of_Plan_Description_Davis_2024.pdf" target="_blank">
            Summary of Plan
            Description</a>
        </li>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a target="_blank"
            href="pdfs/Davis_Vision_2023-24/Davis Vision 2024 Online Retailers Flyer.pdf"> Davis Vision
            Online
            Retailers</a>
        </li>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a target="_blank"
            href="/pdfs/Davis_Vision_2023-24/Davis_Vision_Hobbs-Enhanced_Benefits_10.2.2023.pdf"> Enhanced
            Vision Benefit for
            Members Residing in Hobbs and Alamogordo</a>
        </li>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a href="/pdfs/Davis_Vision_2023-24/OE02776.pdf" target="_blank">
            Davis
            Vision Benefits Effective
            7/1/2019</a>
        </li>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a target="_blank" href="/pdfs/Davis_Vision_2023-24/NM Vision Providers 10.2023.pdf"> NM Vision
            Providers</a>
        </li>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a href="/pdfs/carriers/davis-vision/Davis_Estimator_Tool_Flyer_2024.pdf" target="_blank">
            Davis Vision Estimator Tool Flyer
          </a>
        </li>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a target="_blank" href="/pdfs/carriers/davis-vision/Davis_Vision_2025_OON_Claims_Flyer.pdf">
            Davis Vision Out-of-Network Claims</a>
        </li>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a target="_blank" href="https://nmpsia.com/pdfs/Davis_Vision_Claim_form_2019.pdf"> Davis Vision
            Claim Form</a>
        </li>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a target="_blank"
            href="pdfs/Davis_Vision_2023-24/251479_-_New_Mexico_Public_Schools_Insurance_Authority_-_251479-1-G_-_Certificate -9-01-23.pdf">
            Coverage Certificate and
            Amendment</a>
        </li>
        <h4 class="mt-4 mb-3">Student Vision Program</h4>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a target="_blank" href="pdfs/DV_Focus_on_America_2024_2025_Letter_to_Nurses_NMPSIA.pdf"> 2024 -
            2025 Student Eye Exam
            Notice to School Nurses</a>
        </li>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a target="_blank" href="pdfs/NMPSIA_STUDENT_VISION_VOUCHER_FORM_2025-2026.pdf">2025 - 2026
            Davis Vision Student
            Eye Exam and Eyeglass Voucher</a>
        </li>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a target="_blank" href="pdfs/Why_Children_Need_Regular_Vision_Screenings_and_Eye_Exams.pdf">
            Why Children Need Regular
            Vision Screenings and Eye Exams</a>
        </li>
        <h4 class="mt-4 mb-3">Davis Vision Hearing Benefit</h4>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a target="_blank" href="pdfs/yourhearingnetwork.pdf"> Your
            Hearing Benefit
            for Davis
            Vision</a>
        </li>
      </ul>
      `;
  }
}

customElements.define("davis-vision-info", DavisVision);
