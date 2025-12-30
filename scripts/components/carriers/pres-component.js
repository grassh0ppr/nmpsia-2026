class PresbyterianHealthPlan extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /*html*/ `
        <div class="heading-and-element-flexbox">
          <h2 class="display-4">
            Presbyterian Healthcare Services
          </h2>
          <a href="https://www.phs.org/health-plans/employer-plans/Pages/new-mexico-public-schools-insurance-authority.aspx"
            target="_blank" title="Visit carrier website">
            <img src="images/carriers/presbyterian-logo-red.svg" style="width: 240px" alt="Pres logo"
              class="my-4 mx-3" />
          </a>
        </div>
        <ul class="content-list">
                      <h4 class="mt-4 mb-3">2025 Open Enrollment Presentations</h4>
                      <li>
                        <i class="bx bxs-file-pdf"></i>
                        <a href="/pdfs/Open_Switch_Enrollment_fPY2025/Presbyterian/PHP2024 NMPSIA Open Switch Meetings 2 with voice.pdf"
                          class="sidenav-link" target="_blank">Open/Switch Enrollment
                          Slideshow Presentation</a>
                      </li>
                      <li>
                        <i class="bx bxs-movie-play"></i>
                        <a href="/pdfs/Open_Switch_Enrollment_fPY2025/Presbyterian/PHP2024 NMPSIA Open Switch Meetings 2 with voice.mp4"
                          class="sidenav-link" target="_blank">Open/Switch Enrollment Recorded
                          Presentation</a>
                      </li>
                      <h4 class="mt-4 mb-3">2024 Open Enrollment Presentations</h4>

                      <li>
                        <i class="bx bxs-file-pdf"></i>
                        <a target="_blank"
                          href="/docs/Open-Switch-Enrollment-2024/PHP2023_NMPSIA_Open_Switch_Slides.pdf"
                          class="">Open/Switch Enrollment Slideshow Presentation</a>
                      </li>
                      <li>
                        <i class="bx bxs-movie-play"></i>
                        <a target="_blank"
                          href="/docs/Open-Switch-Enrollment-2024/PHP2023_NMPSIA_Open_Switch_Recording.mp4">Open/Switch
                          Enrollment
                          Recorded Presentation</a>
                      </li>

                      <h4 class="mt-4 mb-3">Member Information</h4>

                      <li>
                        <i class="bx bx-link-external"></i>
                        <a target="_blank" href="https://mypres.phs.org/Pages/registration.aspx">
                          Member Portal Login</a>
                      </li>
                    
                      <!-- 2025 SBC -->
                      <li>
                        <i class="bx bxs-file-pdf"></i>
                        <a target="_blank"
                          href="/pdfs/2025_SBCs/NMPSIA_2025_SBC_for_PRES_High_Option_final.pdf"> 2025
                          NMPSIA Summary of Benefits
                          and Coverage Presbyterian High Option</a>
                      </li>

                      <li>
                        <i class="bx bxs-file-pdf"></i>
                        <a target="_blank"
                          href="pdfs/2025_SBCs/NMPSIA_2025_SBC_for_PRES_Low_Option_final.pdf"> 2025
                          NMPSIA Summary of Benefits
                          and Coverage Presbyterian Low Option</a>
                      </li>
                      <!-- 2024 SBC -->
                      <li>
                        <i class="bx bxs-file-pdf"></i>
                        <a target="_blank"
                          href="/pdfs/2024_SBCs/NMPSIA_2024_SBC_for_PRES_High_Option_Final_TH_Update_062124.pdf"> 2024
                          NMPSIA Summary of Benefits
                          and Coverage Presbyterian High Option</a>
                      </li>

                      <li>
                        <i class="bx bxs-file-pdf"></i>
                        <a target="_blank"
                          href="pdfs/2024_SBCs/NMPSIA_2024_SBC_for_PRES_Low_Option_Final_TH_Update_062124.pdf"> 2024
                          NMPSIA Summary of Benefits
                          and Coverage Presbyterian Low Option</a>
                      </li>
                    
                      <li>
                        <i class="bx bxs-file-pdf"></i>
                        <a target="_blank" href="/pdfs/PHP-Cost_Estimator_12-2021.pdf">
                          Treatment
                          Cost Estimator</a>
                      </li>
                      <li>
                        <i class="bx bx-link-external"></i>
                        <a target="_blank" href="https://vimeo.com/495245588/d19b310ea7">
                          Tutorial to Enroll in your
                          myPRES Account</a>
                      </li>
                      <li>
                        <i class="bx bx-link-external"></i>
                        <a target="_blank"
                          href="https://www.phs.org/health-plans/employer-plans/Pages/new-mexico-public-schools-insurance-authority.aspx">
                          Presbyterian Benefit
                          Booklet</a>
                      </li>
                      <li>
                        <i class="bx bxs-file-pdf"></i>
                        <a target="_blank" href="/pdfs/Video_Visit_Member_Flyer_2016-06-30.pdf">
                          Physician Video Visit</a>
                      </li>

                      <li>
                        <i class="bx bx-link-external"></i>
                        <a target="_blank"
                          href="/pdfs/Aetna_Network_Flyer.pdf" target="_blank"> For Providers
                          Outside of
                          New Mexico</a>
                      </li>
                      <li>
                        <i class="bx bxs-file-pdf"></i>
                        <a target="_blank" href="/pdfs/PRES_Claim_Form.pdf"> Presbyterian
                          Claim
                          Form</a>
                      </li>
                      <li>
                        <i class="bx bxs-file-pdf"></i>
                        <a target="_blank" href="/pdfs/Disabled_Dep_Questionnaire.pdf">
                          Disabled
                          Dependent Child
                          Eligibility Questionnaire</a>
                      </li>
                      <li>
                        <i class="bx bxs-file-pdf"></i>
                        <a target="_blank"
                          href="https://nmpsia.com/pdfs/Notice_of_Nondiscrimination_and_Accessibility.pdf"> Notice of
                          Nondiscrimination and
                          Accessibility</a>
                      </li>
                     
                      <li>
                        <i class="bx bxs-file-pdf"></i>
                        <a target="_blank" href="/pdfs/Presbyterian_RN_Flyer_2024.pdf">
                          PresRN - 24/7
                          Nurse Advice Line</a>
                      </li>
                      
                    </ul>
        `;
  }
}

customElements.define("presbyterian-info", PresbyterianHealthPlan);
