class DiabetesMgmt extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /*html*/ `
        <div class="heading-and-element-flexbox">
            <h2 class="display-4">Diabetes Prevention & Management</h2>
            <img src="images/nmpsia_logo_2024.png" alt="NMPSIA logo" />
        </div>
      <hr />
      <div class="container banner">
        <img
          src="images/wellness/ave-calvar-diabetes-wellness.jpg"
          alt="Stock photo of person checking blood glucose levels"
        />
      </div>

      <h3 class="sub-heading">CVS Caremark</h3>
      <ul class="content-list">
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a href="/pdfs/Diabetic Meter Program (2).pdf" target="_blank"
            >The No-Cost Diabetic Meter Program</a
          >
        </li>
      </ul>
      <h3 class="sub-heading">Blue Cross Blue Shield of New Mexico</h3>
      <ul class="content-list">
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a
            href="pdfs/Flyer-Print-WONDR-New-Year-Option-2-NMPSIA.pdf"
            target="_blank"
            >Wondr Health Program 2023</a
          >
        </li>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a
            href="/pdfs/NMPSIA_Naturally_Slim_Rebrand_Callout.pdf"
            target="_blank"
            >Naturally Slim&trade; rebrands to Wondr Health&trade;</a
          >
        </li>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a
            target="_blank"
            href="/pdfs/Healthy_Choices_Make_a_Big_Difference.pdf"
            >BCBS - Healthy Choices Make a Big Difference</a
          >
        </li>
      </ul>
      <h3 class="sub-heading">Presbyterian Health Plan</h3>
      <ul class="content-list">
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a target="_blank" href="/pdfs/2021_Wellness_Engagement.pdf"
            >2021 Wellness Engagement Programs</a
          >
        </li>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a
            target="_blank"
            href="/pdfs/NMPSIA_Health_Poster_MARCH_2021.pdf"
            >March 2021 Health Observance Poster</a
          >
        </li>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a
            target="_blank"
            href="/pdfs/June_2021_Health_Observance_Poster.pdf"
            >June 2021 Health Observance Poster</a
          >
        </li>
      </ul>
        `;
  }
}

customElements.define("diabetes-mgmt", DiabetesMgmt);
