class DentalHealth extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /*html*/ `
        <div class="heading-and-element-flexbox">
        <h2 class="display-4">Dental Health Wellness Offerings</h2>
        <img src="images/nmpsia_logo_2024.png" alt="NMPSIA logo" />
      </div>
      <hr />
      <div class="container banner">
        <img
          src="images/wellness/shedrack-salami-dental-cleaning.jpg"
          alt="Stock photo of person in a dental examination"
        />
      </div>
      <h3 class="sub-heading">Delta Dental Members</h3>
      <ul class="content-list">
        <li>
          <i class="bx bx-link-external"></i>
          <a
            href="https://www.deltadentalnm.com/member/nmpsia-members/"
            target="_blank"
            >Delta Dental Website</a
          >
        </li>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a
            href="/PDFs/The_Risks_of_Oral_Piercings_DDNM.pdf"
            target="_blank"
            >The Risks of Oral Piercings</a
          >
        </li>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a
            href="/pdfs/Healthy-Lunches-School-Fuel-for-Kids-Rack-Card_1.pdf"
            target="_blank"
            >Healthy School Lunches</a
          >
        </li>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a
            href="/pdfs/Maintaining-Your-Childhood-Smile-Delta.pdf"
            target="_blank"
            >Maintaining Your Childhood Smile</a
          >
        </li>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a
            target="_blank"
            href="/pdfs/Delta_Dental_Info_2024_2025/DDNM Generic Pre-Treatment Flyer 2024-124-DDNM-MKT.pdf"
            >Pre-treatment Estimate</a
          >
        </li>

        <li>
          <i class="bx bxs-file-pdf"></i>
          <a
            target="_blank"
            href="/pdfs/FLI_6492_DNLD_Cardiovascular_Flyer.pdf"
            >The Connection Between Periodontitis (gum disease) and
            Cardiovascular Disease</a
          >
        </li>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a
            target="_blank"
            href="/pdfs/Delta_Dental_Info_2024_2025/DDNM Mobile App Flyer ENGLISH 2024-017-DDNM-MKT.pdf"
            >Delta Dental Mobile App</a
          >
        </li>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a
            target="_blank"
            href="/pdfs/Delta_Dental_Info_2024_2025/DDNM Member Portal Flyer ENGLISH 2024-016-DDNM-MKT.pdf"
            >Delta Dental Member Portal</a
          >
        </li>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a
            target="_blank"
            href="/PDFs/DDNM Toothbrush care RC 2024-061-DDNM-MKT.pdf"
            >The Truths About Toothbrushes</a
          >
        </li>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a target="_blank" href="/PDFs/Fillings_101_DDNM.pdf"
            >Fillings 101</a
          >
        </li>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a href="pdfs/DDNM Avoiding-Oral-Cancer Flyer.pdf" target="_blank"
            >Avoiding Oral Cancer</a
          >
        </li>
        <!-- new links here -->
        <li>
          <i class="bx bx-link-external"></i>
          <a
            href="https://blog.deltadentalnm.com/category/dental-benefits/"
            target="_blank"
          >
            Delta Dental of New Mexico Blog – Dental Benefits
          </a>
        </li>
        <li>
          <i class="bx bx-link-external"></i>
          <a
            href="https://blog.deltadentalnm.com/category/oral-health/"
            target="_blank"
          >
            Delta Dental of New Mexico Blog – Oral Health
          </a>
        </li>
        <li>
          <i class="bx bx-link-external"></i>
          <a
            href="https://blog.deltadentalnm.com/category/health-and-fitness/"
            target="_blank"
          >
            Delta Dental of New Mexico Blog – Health and Fitness
          </a>
        </li>
        <li>
          <i class="bx bx-link-external"></i>
          <a
            href="https://blog.deltadentalnm.com/category/fear-free/"
            target="_blank"
          >
            Delta Dental of New Mexico Blog – Fear Free
          </a>
        </li>
        <li>
          <i class="bx bx-link-external"></i>
          <a
            href="https://www.deltadentalnm.com/wellness/wellness-resource-library/#oralhealthwellnesscards"
            target="_blank"
          >
            Oral Health Wellness Cards
          </a>
        </li>
        <li>
          <i class="bx bx-link-external"></i>
          <a
            href="https://www.deltadentalnm.com/wellness/wellness-resource-library/#oralhealthvideos"
            target="_blank"
          >
            Oral Health Videos
          </a>
        </li>
        <li>
          <i class="bx bx-link-external"></i>
          <a
            href="https://www.deltadentalnm.com/wellness/wellness-resource-library/#oralhealthteachingtoolsforchildren"
            target="_blank"
          >
            Oral Health Teaching Tools for Children
          </a>
        </li>
        <li>
          <i class="bx bx-link-external"></i>
          <a
            href="https://www.deltadentalnm.com/wellness/wellness-resource-library/#additionaloralhealthresources"
            target="_blank"
          >
            Additional Oral Health Resources
          </a>
        </li>
      </ul>
      <h3 class="sub-heading">BlueCare Dental</h3>
      <ul class="content-list">
        <li>
          <i class="bx bx-link-external"></i>
          <a
            target="_blank"
            href="https://ohl.go2dental.com/oral-systemic?cli=dnoa&brand=nm&sm=33"
            target="_blank"
            >BlueCare Wellness Blogs</a
          >
        </li>
        <li>
          <i class="bx bx-link-external"></i>
          <a
            target="_blank"
            href="https://ohl.go2dental.com/news-list?cli=dnoa&brand=nm&sm=13"
            target="_blank"
            >BlueCare Newsletters</a
          >
        </li>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a
            target="_blank"
            href="/pdfs/carriers/blueCare_dental/BlueCare Dental PPO Member Flier.pdf"
            >BlueCare Dental PPO Member Information</a
          >
        </li>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a
            target="_blank"
            href="/pdfs/carriers/blueCare_dental/BlueCare Dental Teledentistry Member Flier.pdf"
            >BlueCare Dental Teledentistry Services</a
          >
        </li>
      </ul>

      <h3 class="sub-heading">United Concordia Members</h3>
      <ul class="content-list">
        <li>
          <i class="bx bx-link-external"></i>
          <a
            target="_blank"
            href="https://www.unitedconcordia.com/benefits/clients-corner/New-Mexico-Public-School-Client-Corner-Dental-Benefits"
            target="_blank"
            >United Concordia Website</a
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

        <li>
          <i class="bx bxs-file-pdf"></i>
          <a href="/pdfs/2023 Cost_Feature_Flyer.pdf" target="_blank"
            >Know Your Costs Before You Go</a
          >
        </li>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a
            target="_blank"
            href="/pdfs/College_Tuition_Benefit_Member_Flyer_01282022_high.pdf"
            >College Tuition Benefits Program</a
          >
        </li>
        <li>
          <i class="bx bx-link-external"></i>
          <a
            target="_blank"
            href="http://view.email-unitedconcordia.com/?qs=06659da2a9b58c757cd5a561d9839e35d949ce5d49f6d09b3af749dc52124d4db315a8a4dc5d1df91ffe23a8b078f4f7f6eca0d32d165e8b4f1cdb97b707b73fc0acd61778f7a45e53342223e28bf38b0a8a0c7e4213a65f"
            >Diabetes and Oral Health Newsletter</a
          >
        </li>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a target="_blank" href="/pdfs/2020 SFHW Member Flyer.pdf"
            >Oral Wellness Program: Smile for Health-Wellness</a
          >
        </li>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a
            href="https://www.unitedconcordia.com/content/dam/ucd/en/commercial/website/docs/email/WC_News_September2025.pdf"
            target="_blank"
            >September 2025 UCD Wellness Connection Newsletter</a
          >
        </li>
        <li>
          <i class="bx bx-folder"></i>
          <!-- modal trigger link -->
          <a
            href="#"
            data-bs-toggle="modal"
            data-bs-target="#ucdWellnessConnectionModal"
            >UCD Wellness Connection Newsletters Archive</a
          >
        </li>
        <!-- modal -->
        <div
          class="modal fade"
          id="ucdWellnessConnectionModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  United Concordia Wellness Connection Newsletter Archive
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <ul class="content-list">
                <li>
                <i class="bx bxs-file-pdf"></i>
                <a
                  href="/wellness/july_2025/WC_News_July2025.pdf"
                  target="_blank"
                  >July 2025</a
                >
              </li>
                <li>
                <i class="bx bxs-file-pdf"></i>
                <a href="https://www.unitedconcordia.com/content/dam/ucd/en/commercial/website/docs/email/WC_News_June2025.pdf" target="_blank">June 2025</a>
                </li>
                <li>
                <i class="bx bxs-file-pdf"></i>
                <a href="/pdfs/wellness/may_2025/WC_News_May2025.pdf" target="_blank">May 2025</a>
                </li>
                <li>
          <i class="bx bxs-file-pdf"></i>
          <a
            href="/pdfs/wellness/april_2025/WC_News_Apr2025.pdf"
            target="_blank"
            >April 2025</a
          >
        </li>
                  <li>
                    <i class="bx bxs-file-pdf"></i>
                    <a href="/pdfs/march_2025/WC_News_Mar2025.pdf" target="_blank"
                      >March 2025</a
                    >
                  </li>
                  <li>
                    <i class="bx bxs-file-pdf"></i>
                    <a href="/pdfs/WC_News_Feb2025.pdf" target="_blank"
                      >February 2025</a
                    >
                  </li>
                  <li>
                    <i class="bx bxs-file-pdf"></i>
                    <a
                      href="/pdfs/wellness/december_2024/WC_News_Dec2024.pdf"
                      target="_blank"
                      >December 2024</a
                    >
                  </li>
                  <li>
                    <i class="bx bxs-file-pdf"></i>
                    <a
                      href="/pdfs/wellness/november_2024/WC_News_Nov2024.pdf"
                      target="_blank"
                      >November 2024</a
                    >
                  </li>
                  <li>
                    <i class="bx bxs-file-pdf"></i>
                    <a href="/pdfs/WC_News_Oct2024.pdf" target="_blank"
                      >October 2024</a
                    >
                  </li>
                  <li>
                    <i class="bx bxs-file-pdf"></i>
                    <a
                      href="/pdfs/wellness/september_2024/WC_News_Sept2024_UCCI.pdf"
                      target="_blank"
                      >September 2024</a
                    >
                  </li>
                  <li>
                    <i class="bx bxs-file-pdf"></i>
                    <a
                      href="/pdfs/wellness/august_2024/WC_News_Aug2024.pdf"
                      target="_blank"
                      >August 2024</a
                    >
                  </li>
                  <li>
                  <i class="bx bxs-file-pdf"></i>
                  <a
                    href="PDFs/2024_May_Wellness/WC_News_May2024.pdf"
                    target="_blank"
                    >May 2024</a
                  >
                </li>
                  <li>
                    <i class="bx bxs-file-pdf"></i>
                    <a href="PDFs/WC_News_April2024.pdf" target="_blank"
                      >April 2024</a
                    >
                  </li>
                 
                  
                  
                  
                  
                  
                  
                </ul>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </ul>
        `;
  }
}
customElements.define("dental-health", DentalHealth);
