class ActiveProcurements extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /*html*/ `
      <div class="heading-and-element-flexbox">
        <h2 class="display-4">Active Procurements</h2>
        <img src="images/nmpsia_logo_2024.png" alt="NMPSIA logo" />
      </div>
      <hr />
      <div class="table-responsive-wrapper">
         <table class="table table-bordered">
          <caption class="visually-hidden">Active NMPSIA procurement solicitations with due dates and descriptions</caption>
          <thead>
            <tr class="table-heading">
              <th scope="col">Due Date</th>
              <th scope="col">Solicitation Reference</th>
              <th scope="col">Description</th>
            </tr>
          </thead>
          <tbody>
          <tr>
          <td>&mdash;</td>
          <td>RFP# 342-2026-03</td>
          <td>
            <a href="/docs/Questions and Answers 4-17.pdf" target="_blank">RFP# 342-2026-03 Property & Liability Workers' Compensation Claims Auditing Services - Questions and Answers</a>
          </td>
        </tr>
          <tr>
          <td>05/04/2026</td>
          <td>RFP# 342-2026-03</td>
          <td>
            <a href="/docs/PandL WC Claims Auditing Services RFP - Amendment_2.pdf" target="_blank">RFP# 342-2026-03 Property & Liability Workers' Compensation Claims Auditing Services - Amendment #2</a>
          </td>
        </tr>
          <tr>
          <td>05/04/2026</td>
          <td>RFP# 342-2026-03</td>
          <td>
            <a href="/docs/P_and_L_WC_Claims_Auditing_Services_RFP_Amendment_1.pdf" target="_blank">RFP# 342-2026-03 RFP Property Liability Workers' Compensation Claims Auditing Services - Amendment #1</a>
          </td>
        </tr>
          <tr>
          <td>04/30/2026</td>
          <td>RFP# 342-2026-03</td>
          <td>
            <a href="/docs/Property_Liability_Workers_Compensation_Claims_Auditing_Services_RFP_FINAL.pdf" target="_blank">RFP# 342-2026-03 RFP Property Liability Workers' Compensation Claims Auditing Services</a>
          </td>
        </tr>
          <tr>
          <td>&mdash;</td>
          <td>RFP# 342-2026-02</td>
          <td>
            <a href="/docs/342_2026_02_RFP_Workplace_Ergonomic_Training_and_Consulting_Services.pdf" target="_blank">RFP# 342-2026-02 RFP: Workplace Ergonomic Training and Consulting Services Q & A</a>
          </td>
        </tr>
        <tr>
          <td>03/03/2026</td>
          <td>RFP# 342-2026-02</td>
          <td>
            <a href="/docs/Legal_Advertisement_Workplace_Ergonomic_Training_and_Consulting_Services.pdf" target="_blank">Legal Advertisement - Workplace Ergonomic Training and Consulting Services</a>
          </td>
        </tr>
        <tr>
          <td>03/03/2026</td>
          <td>RFP# 342-2026-02</td>
          <td>
            <a href="/docs/Workplace_Ergonomic_RFP_FINAL.pdf" target="_blank">RFP# 342-2026-02 RFP: Workplace Ergonomic Training and Consulting Services</a>
          </td>
        </tr>
          <tr>
          <td>11/03/2025</td>
          <td>RFP# 342-2026-01</td>
          <td>
            <a href="https://nmpsia.com/docs/Amendment_3_11_4_2025.pdf" target="_blank">Pharmaceutical Benefit Management Services - Amendment #3.</a>
          </td>
        </tr> 

          <tr>
            <td>11/03/2025</td>
            <td>RFP# 342-2026-01</td>
            <td>
              <a href="https://nmpsia.com/docs/IBAC_PBM_RFP_QA_Responses_Second_Set_Completed.pdf" target="_blank">IBAC PBM RFP Q & A Responses to Cost Proposal</a>
            </td>
          </tr> 

          <tr>
            <td>11/03/2025</td>
            <td>RFP# 342-2026-01</td>
            <td>
              <a href="https://nmpsia.com/docs/NMPSIA-Pharm-Benefit-Management-Services-Amendment-2.pdf" target="_blank">Pharmaceutical Benefit Management Services - Amendment #2.</a>
            </td>
          </tr> 

          <tr>
            <td>11/03/2025</td>
            <td>RFP# 342-2026-01</td>
            <td>
              <a href="https://nmpsia.com/docs/Amendment_1_10102025.pdf" target="_blank">Pharmaceutical Benefit Management Services - Amendment #1</a>
            </td>
          </tr>

          <tr>
            <td>11/03/2025</td>
            <td>RFP# 342-2026-01</td>
            <td>
              <a href="https://nmpsia.com/docs/Appendix_D_Amended_PBM_RFP_Cost_Proposal_Response_Updated_10012025.xlsx" target="_blank">Appendix D - Amended PBM RFP Cost Proposal Response</a>
            </td>
          </tr>

          <tr>
            <td>11/03/2025</td>
            <td>RFP# 342-2026-01</td>
            <td>
              <a href="https://nmpsia.com/docs/Appendix D - PBM RFP Cost Proposal Response.xlsx" target="_blank">Appendix D - PBM RFP Cost Proposal Response</a>
            </td>
          </tr>

          <tr>
            <td>11/03/2025</td>
            <td>RFP# 342-2026-01</td>
            <td>
              <a href="https://nmpsia.com/docs/RFP%20342-2026-01%20IBAC%20Pharm.pdf" target="_blank">Pharmaceutical Benefits Management Services</a>
            </td>
          </tr>

          
          <tr>
            <td>10/10/2025</td>
            <td>RFP# 342-2026-01</td>
            <td>
              <a href="https://nmpsia.com/docs/IBAC_PBM_RFP_QA_Responses_10102025.pdf" target="_blank">IBAC PBM RFP Q & A Responses</a>
            </td>
          </tr> 

          <tr>
            <td>04/09/2025</td>
            <td>RFP# 342-2025-02</td>
            <td>
              <a href="https://nmpsia.com/docs/ibac_claims_integrity_audit_rfp_final.pdf" target="_blank">Benefits Claims Integrity Audit & Review Services</a>
            </td>
          </tr>
          
          <tr>
            <td>05/15/2025</td>
            <td>RFP# 342-2025-03</td>
            <td>
              <a href="/docs/IBAC_PBM_Consultant _Final_A3.pdf" target="_blank">Amendment #3 - Consultant for Pharmaceutical Benefit Management Services</a>
            </td>
          </tr>
          <tr>
            <td>05/15/2025</td>
            <td>RFP# 342-2025-03</td>
            <td>
              <a href="/docs/2025_0506_IBAC_PBM_Consultant_Questions_and_Answers_Final.pdf" target="_blank">IBAC Consultant for Pharmaceutical Benefit Management Services Questions and Answers</a>
            </td>
          </tr>
          <tr>
            <td>05/15/2025</td>
            <td>RFP# 342-2025-03</td>
            <td>
              <a href="/docs/IBAC_PBM_Consultant_Cost_Form_Amended.pdf" target="_blank">Amendment #2 - Consultant for Pharmaceutical Benefit Management Services</a>
            </td>
          </tr>
          <tr>
            <td>05/15/2025</td>
            <td>RFP# 342-2025-03</td>
            <td>
              <a href="/docs/IBAC_PBM_Consultant_Email_Amended.pdf" target="_blank">Amendment #1 - Consultant for Pharmaceutical Benefit Management Services</a>
            </td>
          </tr>
          <tr>
            <td>05/15/2025</td>
            <td>RFP# 342-2025-03</td>
            <td>
              <a href="/docs/Legal Advertisement - PBM Consultant 2025.pdf" target="_blank">Legal Advertisement - PBM Consultant</a>
            </td>
          </tr>
          <tr>
            <td>05/15/2025</td>
            <td>RFP# 342-2025-03</td>
            <td>
              <a href="/docs/RFP 342-2025-03 Consultant for Pharmaceutical Benefit Management Services.pdf" target="_blank">Consultant for Pharmaceutical Benefit Management Services</a>
            </td>
          </tr>
          <tr>
            <td>&mdash;</td>
            <td>RFP# 342-2025-01</td>
            <td>
              <a href="/docs/RFP_342_2025_01_School_Sexual_Misconduct_Trainng_Videos_Answers.pdf" target="_blank">School Sexual Misconduct Training Videos Questions and Answers</a>
            </td>
          </tr>
          <tr>
            <td>05/06/2025</td>
            <td>RFP# 342-2025-01</td>
            <td>
              <a href="/docs/Sexual_Misconduct_Training_Videos_FY_26_Final.pdf" target="_blank">School Sexual Misconduct Training Videos</a>
            </td>
          </tr>
          <tr>
            <td>&mdash;</td>
            <td>RFP# 342-2025-02</td>
            <td>
              <a href="/docs/RFP_342_2025_02_Questions_from_Bidders_w_IBAC_responses.pdf" target="_blank">IBAC Claims Integrity Audit and Review Services Question and Answer</a>
            </td>
          </tr>
          <tr>
            <td>04/09/2025</td>
            <td>RFP# 342-2025-02-02</td>
            <td>
              <a href="/docs/Amendment_2_IBAC_Claims_Integrity_Audit_RFP.pdf" target="_blank">Amendment # 2 IBAC Claims Integrity Audit and Review Services</a>
            </td>
          </tr>
          <tr>
            <td>04/09/2025</td>
            <td>RFP# 342-2025-02-01</td>
            <td>
              <a href="/docs/Amendment 1 IBAC Claims Integrity Audit RFP Final.pdf" target="_blank">Amendment #1 IBAC Claims Integrity Audit and Review Services</a>
            </td>
          </tr>
          <tr>
            <td>04/09/2025</td>
            <td>RFP# 342-2025-02</td>
            <td>
              <a href="/docs/IBAC Claims Integrity Audit RFP Final.pdf" target="_blank">IBAC Claims Integrity Audit and Review Services</a>
            </td>
          </tr>
            
          </tbody>
        </table>
      </div>
        `;
  }
}
customElements.define("active-procurements", ActiveProcurements);
