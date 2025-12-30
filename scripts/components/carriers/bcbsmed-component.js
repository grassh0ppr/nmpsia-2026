class BlueCrossMedical extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /*html*/ `
                <div class="heading-and-element-flexbox">
                    <h2 class="display-4">
                        BlueCross BlueShield of New Mexico
                    </h2>
                    <a href="https://www.bcbsnm.com/nmpsia" target="_blank">
                        <img class="my-4 mx-3" src="images/BCBS.jpg" alt="Blue Cross Blue Shield of New Mexico logo" />
                    </a>
                </div>
        <ul class="content-list">
                      <h4 class="mt-4 mb-3">2025 Open Enrollment Presentations</h4>
                      <li>
                        <i class="bx bxs-file-pdf"></i>
                        <a href="/pdfs/Open_Switch_Enrollment_fPY2025/BlueCross_BlueShield/2025 NMPSIA Annual Switch Presentation_Final v1.kj.pdf"
                          target="_blank">Open/Switch Enrollment Slideshow Presentation</a>
                      </li>
                      <li>
                        <i class="bx bxs-movie-play"></i>
                        <a href="/pdfs/Open_Switch_Enrollment_fPY2025/BlueCross_BlueShield/2025 NMPSIA Annual Switch Presentation_Final v1.kj.mp4"
                          target="_blank">Open/Switch Enrollment
                          Recorded Presentation</a>
                      </li>
                      <h4 class="mt-4 mb-3">2024 Open Enrollment Presentations</h4>
                      <li>
                        <i class="bx bxs-file-pdf"></i>
                        <!-- still need from bcbs -->
                        <a target="_blank"
                          href="/docs/Open-Switch-Enrollment-2024/BCBS2024_NMPSIA_Annual_Switch_Presentation_Final.pdf"
                          class="">Open/Switch Enrollment Slideshow Presentation</a>
                      </li>
                      <!-- still need from bcbs -->
                      <li>
                        <i class="bx bxs-movie-play"></i>
                        <a target="_blank"
                          href="/docs/Open-Switch-Enrollment-2024/NMPSIA-OE-BCBSNM-Video-Presentation.mp4">Open/Switch
                          Enrollment
                          Recorded Presentation</a>
                      </li>
                      <h4 class="mt-3">Member Information</h4>

                      <li><i class="bx bx-link-external"></i>
                        <a target="_blank"
                          href="https://account.bcbsnm.com/login/?goto=https://cim.bcbsnm.com/am/oauth2/realms/members/authorize?client_id%3DOAuth-BlueAccessMember20_APP00007045%26code_challenge%3DLCGomBkHF8v8OnA7h5zMX3UQR_wZd8ilRqdGeU4vNYY%26code_challenge_method%3DS256%26prompt%3Dnone%26redirect_uri%3Dhttps://mybam.bcbsnm.com/%26response_type%3Dcode%26scope%3Dopenid%2520profile%2520bam2.0%2520fr:idm:*%26service%3Dhcsc-members-mma-mfa%26state%3DUW82Rw%253D%253D">
                          Member Portal Login</a>
                      </li>
                    
                      <!-- 2025 Summary of Benefits and Coverage -->
                      <li>
                        <i class="bx bxs-file-pdf"></i>
                        <a target="_blank" href="/pdfs/2025_SBCs/NMPSIA_2025_SBC_for_BCBS_High_Option_final.pdf"> 2025
                          NMPSIA Summary of Benefits
                          and Coverage BCBSNM High Option</a>
                      </li>

                      <li>
                        <i class="bx bxs-file-pdf"></i>
                        <a target="_blank" href="/pdfs/2025_SBCs/NMPSIA_2025_SBC_for_BCBS_Low_Option_final.pdf"> 2025
                          NMPSIA Summary of Benefits
                          and Coverage BCBSNM Low Option</a>
                      </li>
                      <li>
                        <i class="bx bxs-file-pdf"></i>
                        <a target="_blank" href="/pdfs/2025_SBCs/NMPSIA_2025_SBC_for_BluePreferred_EPO_Plan_final.pdf">
                          2025 NMPSIA Summary of Benefits
                          and Coverage BluePreferred EPO Option</a>
                      </li>
                      <!-- 2024 SUMMARY OF BENEFITS AND COVERAGE -->
                      <li>
                        <i class="bx bxs-file-pdf"></i>
                        <a target="_blank" href="/pdfs/2024_SBCs/NMPSIA_2024_SBC_for_BCBS_High_Option_Final.pdf"> 2024
                          NMPSIA Summary of Benefits
                          and Coverage BCBSNM High Option</a>
                      </li>

                      <li>
                        <i class="bx bxs-file-pdf"></i>
                        <a target="_blank" href="/pdfs/2024_SBCs/NMPSIA_2024_SBC_for_BCBS_Low_Option_Final.pdf"> 2024
                          NMPSIA Summary of Benefits
                          and Coverage BCBSNM Low Option</a>
                      </li>
                      <li>
                        <i class="bx bxs-file-pdf"></i>
                        <a target="_blank" href="/pdfs/2024_SBCs/NMPSIA_2024_SBC_for_BluePreferred_EPO_Plan_Final.pdf">
                          2024 NMPSIA Summary of Benefits
                          and Coverage BluePreferred EPO Option</a>
                      </li>
                     
                      <li>
                        <i class="bx bxs-file-pdf"></i>
                        <a target="_blank" href="/pdfs/BCBSNM_San_Juan_IPA_Contracting_Update.pdf">
                          BCBSNM San Juan IPA Contracting
                          Update</a>
                      </li>
                   

                      <li>
                        <i class="bx bx-link-external"></i>
                        <a target="_blank" href="https://www.bcbsnm.com/nmpsia/benefits"> Blue
                          Cross Blue Shield
                          Benefit Booklet</a>
                      </li>
                      <li>
                        <i class="bx bx-link-external"></i>
                        <a target="_blank"
                          href="https://members.mdlive.com/bcbsnm/landing_home"> Physician
                          Video Visit</a>
                      </li>
                      <li>
                        <i class="bx bxs-file-pdf"></i>
                        <a target="_blank"
                          href="/pdfs/476259_0414_NM_Group_Provider_Finder_with_Benefit_Accumulator_PPO_Member_Flier1.pdf">
                          Blue Access for Members
                          Provider Finder and Cost Estimator Flyer</a>
                      </li>
                      <li>
                        <i class="bx bxs-file-pdf"></i>
                        <a target="_blank" href="/pdfs/Pregnancy_Benefits_High_Option_Rev_2019.pdf">
                          High Option Plan Summary of
                          In-Network Pregnancy Benefits</a>
                      </li>
                      <li>
                        <i class="bx bxs-file-pdf"></i>
                        <a target="_blank" href="/pdfs/medical_claim_nm_bcbsmed.pdf"> Blue Cross Blue
                          Shield of New
                          Mexico Claim Form</a>
                      </li>
                      <li>
                        <i class="bx bxs-file-pdf"></i>
                        <a target="_blank" href="/pdfs/medical_claim_nm_spanish_bcbsmed.pdf"> Blue Cross Blue
                          Shield of New
                          Mexico Claim Form - en Español</a>
                      </li>
                      <li>
                        <i class="bx bxs-file-pdf"></i>
                        <a target="_blank" href="/pdfs/Impaired_Dependent_Certification_(revised).pdf"> Impaired
                          Dependent
                          Certification Form</a>
                      </li>
                      <li>
                        <i class="bx bxs-file-pdf"></i>
                        <a target="_blank" href="/pdfs/VirtualCheckup_Launch-Flyer_9.28.pdf">
                          Catapult VirtualCheckup for
                          BCBS Members</a>
                      </li>
                      <li>
                        <i class="bx bxs-file-pdf"></i>
                        <a target="_blank" href="/pdfs/Blue_Cross_and_Blue_Shield_of_New_Mexico_Health_Advocacy_Solutions_Take_the_Call_Member_Flier.pdf">
                          Take the Call</a>
                      </li>
                      
                      
                    </ul>
        `;
  }
}

customElements.define("bcbs-medical-info", BlueCrossMedical);
