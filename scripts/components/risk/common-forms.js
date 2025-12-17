class CommonForms extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /*html*/ `
    <div class="header-flex">
      <h2 class="display-4">Commonly Used Forms</h2>
      <img class="section-logo" src="images/nmpsia_logo_2024.png" alt="NMPSIA logo" />
    </div>
    
    <ul class="content-list grid-layout">
      <li>
        <i class="bx bxs-file-pdf"></i>
        <a
          href="/pdfs/poms-risk-docs/workers-comp/Supervisors_WC_GrabNGo_Kit/Internal_First_Report_of_Injury_Customizable_Template.docx"
          target="_blank"
          >Employer First Report of Injury or Illness</a
        >
      </li>
      <li>
        <i class="bx bxs-file-pdf"></i>
        <a
          href="/pdfs/poms-risk-docs/General_Products_Liability.pdf"
          target="_blank"
        >
          General Products Liability Form</a
        >
      </li>
      <li>
        <i class="bx bxs-file-pdf"></i>
        <a href="/pdfs/Notice_of_Accident_Form.pdf" target="_blank">
          Notice of Accident or Occupational Disease</a
        >
      </li>
      <li>
        <i class="bx bxs-file-pdf"></i>
        <a
          href="/pdfs/poms-risk-docs/NOA-2_Employees_Choice.pdf"
          target="_blank"
        >
          Alternative Notice of Accident (NOA-2 Employee's Choice)</a
        >
      </li>
      <li>
        <i class="bx bxs-file-pdf"></i>
        <a
          href="/pdfs/poms-risk-docs/Loss_Report_Property.pdf"
          target="_blank"
          >Property Loss Report</a
        >
      </li>

      <li>
        <i class="bx bxs-file-pdf"></i>
        <a
          href="pdfs/poms-risk-docs/Student_Incident_Report.pdf"
          target="_blank"
          >Student Accident Report</a
        >
      </li>

      <li>
        <i class="bx bxs-file-pdf"></i>
        <a
          href="/pdfs/poms-risk-docs/Vehicle_Accident_Report.pdf"
          target="_blank"
          >Vehicle Accident Report</a
        >
      </li>
      <li>
        <i class="bx bxs-file-pdf"></i>
        <a
          href="/pdfs/poms-risk-docs/Windshield_Only_Report.pdf"
          target="_blank"
          >Windshield Report</a
        >
      </li>
    
    </ul>
    `;
  }
}

customElements.define("common-forms", CommonForms);
