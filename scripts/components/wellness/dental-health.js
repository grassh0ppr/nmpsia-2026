class DentalHealth extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /*html*/ `
        <div class="heading-and-element-flexbox">
        <h2 class="display-4">Dental Health Wellness Offerings</h2>
        <img src="images/nmpsia_logo_2024.png" alt="NMPSIA logo" />
      </div>
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
      </ul>
        `;
  }
}
customElements.define("dental-health", DentalHealth);
