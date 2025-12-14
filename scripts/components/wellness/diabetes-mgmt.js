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
            target="_blank"
            href="/pdfs/Healthy_Choices_Make_a_Big_Difference.pdf"
            >BCBS - Healthy Choices Make a Big Difference</a
          >
        </li>
      </ul>
      
        `;
  }
}

customElements.define("diabetes-mgmt", DiabetesMgmt);
