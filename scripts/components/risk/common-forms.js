class CommonForms extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /*html*/ `
    <div class="header-flex">
      <h2 class="display-4">Commonly Used Forms</h2>
      <img class="section-logo" src="images/nmpsia_logo_2024.png" alt="NMPSIA logo" />
    </div>
    
    <ul class="content-list grid-layout">
      <li>
        <a
          href="/pdfs/poms-risk-docs/workers-comp/Supervisors_WC_GrabNGo_Kit/Internal_First_Report_of_Injury_Customizable_Template.docx"
          target="_blank"
        >
          <i class="bx bxs-file-pdf"></i>
          <span>Employer First Report of Injury or Illness</span>
        </a>
      </li>
      <li>
        <a
          href="/pdfs/poms-risk-docs/General_Products_Liability.pdf"
          target="_blank"
        >
          <i class="bx bxs-file-pdf"></i>
          <span>General Products Liability Form</span>
        </a>
      </li>
      <li>
        <a href="/pdfs/Notice_of_Accident_Form.pdf" target="_blank">
          <i class="bx bxs-file-pdf"></i>
          <span>Notice of Accident or Occupational Disease</span>
        </a>
      </li>
      <li>
        <a
          href="/pdfs/poms-risk-docs/NOA-2_Employees_Choice.pdf"
          target="_blank"
        >
          <i class="bx bxs-file-pdf"></i>
          <span>Alternative Notice of Accident (NOA-2 Employee's Choice)</span>
        </a>
      </li>
      <li>
        <a
          href="/pdfs/poms-risk-docs/Loss_Report_Property.pdf"
          target="_blank"
        >
          <i class="bx bxs-file-pdf"></i>
          <span>Property Loss Report</span>
        </a>
      </li>
      <li>
        <a
          href="pdfs/poms-risk-docs/Student_Incident_Report.pdf"
          target="_blank"
        >
          <i class="bx bxs-file-pdf"></i>
          <span>Student Accident Report</span>
        </a>
      </li>
      <li>
        <a
          href="/pdfs/poms-risk-docs/Vehicle_Accident_Report.pdf"
          target="_blank"
        >
          <i class="bx bxs-file-pdf"></i>
          <span>Vehicle Accident Report</span>
        </a>
      </li>
      <li>
        <a
          href="/pdfs/poms-risk-docs/Windshield_Only_Report.pdf"
          target="_blank"
        >
          <i class="bx bxs-file-pdf"></i>
          <span>Windshield Report</span>
        </a>
      </li>
    </ul>
    `;
  }
}

customElements.define("common-forms", CommonForms);
