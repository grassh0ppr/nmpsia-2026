class ReproductiveHealth extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /*html*/ `
        <div class="heading-and-element-flexbox">
        <h2 class="display-4">Maternity, Pregnancy, and Parenthood</h2>
        <img src="images/nmpsia_logo_2024.png" alt="NMPSIA logo" />
      </div>
      <hr />
      <div class="container banner">
        <img
          src="images/wellness/pregnant_lady.png"
          alt="Stock photo of a pregnant woman, hands on belly forming a heart shape"
        />
      </div>
      <h3 class="sub-heading">
        Maternity, Parenthood, & Reproductive Health Resources
      </h3>
      <ul class="content-list">
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a
            target="_blank"
            href="/pdfs/wellness/Womens_Eye_Health_CST_1411_DVSV.pdf"
            >Davis Vision + Superior Vision - Women's Eye Health</a
          >
        </li>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a
            target="_blank"
            href="/pdfs/wellness/DDNM_Pregnancy_RC_2024_057_DDNM_MKT_ENGLISH.pdf"
            >Delta Dental - Staying Healthy for baby</a
          >
        </li>
     
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a
            target="_blank"
            href="/pdfs/wellness/DDNM_EBD_WITHOUT_PCS_Flyer_2024_005_DDNM_MKT.pdf"
            >Delta Dental - Evidence Based Dentistry (EBD)</a
          >
        </li>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a
            target="_blank"
            href="/pdfs/wellness/DDNM_Pregnancy_and_Oral_Health_Member_brochure_2024.pdf"
            >Delta Dental - Pregnancy and Oral Health</a
          >
        </li>
        <li>
          <i class="bx bx-link-external"></i>
          <a
            target="_blank"
            href="https://blog.deltadentalnm.com/2022/07/pregnant-women-skip-dentist/"
            >Delta Dental - Debunking the myth that pregnant women should
            skip the dentist</a
          >
        </li>
        <li>
          <i class="bx bx-link-external"></i>
          <a
            target="_blank"
            href="https://blog.deltadentalnm.com/2022/07/oral-health-pregnancy/"
            >Delta Dental - Why oral health care is essential during
            pregnancy</a
          >
        </li>
        <li>
          <i class="bx bx-link-external"></i>
          <a
            target="_blank"
            href="https://blog.deltadentalnm.com/2017/11/toothpaste-dental-products-pregnancy/"
            >Delta Dental - Toothpaste + Other Dental Products for Your
            Pregnancy</a
          >
        </li>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a
            href="/pdfs/wellness/BH_Maternity_Postpartum_Flyer_NMPSIA.pdf"
            target="_blank"
            >MDLive - Support During <em>and</em> After Your Pregnancy</a
          >
        </li>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a
            href="/pdfs/wellness/2025_Pregnancy_Benefit_Flyer.pdf"
            target="_blank"
            >United Concordia Dental - Your plan includes the Pregnancy
            Benefit!</a
          >
        </li>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a
            href="/pdfs/wellness/2025_Oral_Wellness_Series_Pregnancy_Flyer.pdf"
            target="_blank"
            >United Concordia Dental - Dental Concerns During Pregnancy</a
          >
        </li>
      </ul>
        `;
  }
}

customElements.define("reproductive-health", ReproductiveHealth);
