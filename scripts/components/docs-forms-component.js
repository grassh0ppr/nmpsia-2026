class DocsForms extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /*html*/ `
      <div class="heading-and-element-flexbox">
        <h2 class="display-4">Important Documents and Forms</h2>
        <img src="images/nmpsia_logo_2024.png" alt="NMPSIA logo" />
      </div>
      <hr />
      <ul class="content-list grid-layout">
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a
            href="/pdfs/Enrollment_Change_Form_01012026.pdf"
            target="_blank"
            >1-1-2026 Enrollment Change Form</a
          >
        </li>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a href="/pdfs/BeneficiaryDesignationQuestion.pdf" target="_blank"
            >Beneficiary Questions & Answers</a
          >
        </li>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a
            href="/pdfs/sample-part-time-resolution-form.pdf"
            target="_blank"
          >
            Part Time Resolution Template
          </a>
        </li>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a
            href="/pdfs/Sample_Loss_of_Coverage_Notice_Form.pdf"
            target="_blank"
          >
            Sample Loss of Coverage Form
          </a>
        </li>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a href="./auth-release-health-info.html" target="_blank">
            Release of Health Information
          </a>
        </li>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a
            href="/pdfs/Updated_Fillable_Affidavit_for_Domestic_Partnership_4.9.19.pdf"
            target="_blank"
          >
            Affidavit for Domestic Partner
          </a>
        </li>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a
            href="/pdfs/Updated_Fillable_Termination_of_Domestic_Partnership_4.9.19.pdf"
            target="_blank"
          >
            Termination of Domestic Partner
          </a>
        </li>

        <li>
          <i class="bx bxs-file-pdf"></i>
          <a href="/pdfs/Retiree_Application_2024_01.pdf" target="_blank">
            Retiree Life Insurance Application <br />(under age 65)
          </a>
        </li>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a
            href="/pdfs/Options_for_Continuing_Life_Insurance_Due_to_Retirement_8.2020-1.pdf"
            target="_blank"
          >
            Options for Continuing Life Insurance <br />Due to Retirement
          </a>
        </li>

        <li>
          <i class="bx bxs-file-pdf"></i>
          <a
            href="pdfs/Board_Member_Enrollment_Application_2024_07.pdf"
            target="_blank"
            >Board Member Enrollment Application</a
          >
        </li>
      </ul>
    `;
  }
}

customElements.define("docs-forms-component", DocsForms);
