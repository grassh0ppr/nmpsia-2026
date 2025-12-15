class ClosedProcurements extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /*html*/ `
        <table class="table table-bordered">
          <thead>
            <tr class="table-heading">
              <th scope="col">Due Date</th>
              <th scope="col">Solicitation Reference</th>
              <th scope="col">Description</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
          <tr>
              <td>04/25/2024</td>
              <td>RFP #342-2024-08-01</td>
              <td>Financial and Compliance Audit, Amendment #1</td>
              <td>
                <a href="/docs/RFP_34220240801_AUDIT_SERVICES_412.pdf" target="_blank">(link to form)</a>
              </td>
            </tr>
            <tr>
              <td>04/25/2024</td>
              <td>RFP #342-2024-08-01</td>
              <td>Notice: Financial and Compliance Audit, Amendment #1</td>
              <td>
                <a href="/docs/342202408_Audit_Services_A1_Notice_Appendix.pdf" target="_blank">(link to form)</a>
              </td>
            </tr>
            <tr>
              <td>04/25/2024</td>
              <td>RFP #342-2024-08</td>
              <td>Financial and Compliance Audit</td>
              <td>
                <a href="/docs/RFP_342202408_AUDIT_SERVICES.pdf" target="_blank">(link to form)</a>
              </td>
            </tr>
            <tr>
              <td>04/25/2024</td>
              <td>RFP #342-2024-08</td>
              <td>Notice: Financial and Compliance Audit</td>
              <td>
                <a href="/docs/One_Page_Notice_342202408.pdf" target="_blank">(link to form)</a>
              </td>
            </tr>
            <tr>
              <td>04/30/2024</td>
              <td>RFP #342-2024-07</td>
              <td>
                Capital Asset Valuation Services Questions and Answers,
                Amendment 1
              </td>
              <td>
                <a href="/docs/RFP 342-2024-07 Capital Asset Valuation A1 Final.pdf" target="_blank">(link to form)</a>
              </td>
            </tr>
            <tr>
              <td>&mdash;</td>
              <td>RFP #342-2024-07-01</td>
              <td>
                Notice: Capital Asset Valuation Services Questions and
                Answers, Amendment 1
              </td>
              <td>
                <a href="/docs/342-2024-07-01 Notice Final.pdf" target="_blank">(link to form)</a>
              </td>
            </tr>
            <tr>
              <td>&mdash;</td>
              <td>RFP #342-2024-09</td>
              <td>
                RFP - Asset Management Consulting Services Questions and
                Answers
              </td>
              <td>
                <a href="/docs/342202409_Asset_Management_Consulting_Services_Questions_Answers_4824.pdf"
                  target="_blank">(link to form)</a>
              </td>
            </tr>
            <tr>
              <td>&mdash;</td>
              <td>RFP #342-2024-07</td>
              <td>
                RFP - Capital Asset Valuation Services Questions and Answers
              </td>
              <td>
                <a href="/docs/342202407_Capital_Asset_Valuation_Services_Questions_and_Answers.pdf"
                  target="_blank">(link to form)</a>
              </td>
            </tr>
            <tr>
              <td>04/22/2024</td>
              <td>RFP #342-2024-09</td>
              <td>RFP - Asset Management Consulting Services</td>
              <td>
                <a href="/docs/342_2024_09_Asset_Management_Consulting_Services_342_2024_09.pdf" target="_blank">(link
                  to form)</a>
              </td>
            </tr>
            <tr>
              <td>03/20/2024</td>
              <td>RFP #342-2024-09</td>
              <td>Notice - Asset Management Consulting Services</td>
              <td>
                <a href="/docs/One_Page_Notice_342_2024_09_Asset_Management_w_RHCA_Final.pdf" target="_blank">(link to
                  form)</a>
              </td>
            </tr>
            <tr>
              <td>04/30/2024</td>
              <td>RFP #342-2024-07</td>
              <td>RFP - Capital Asset Valuation Services</td>
              <td>
                <a href="/docs/RFP_342_2024_07_Capital_Asset_Valuation_Services.pdf" target="_blank">(link to form)</a>
              </td>
            </tr>
            <tr>
              <td>&mdash;</td>
              <td>RFP #342-2024-06</td>
              <td>RFP - Actuarial Services: Question and Answers</td>
              <td>
                <a href="/docs/QA_RFP_342_2024_06_Actuarial_Services_Final.pdf" target="_blank">(link to form)</a>
              </td>
            </tr>
            <tr>
              <td>03/21/2024</td>
              <td>RFP #342-2024-06</td>
              <td>RFP - Actuarial Services, Amendment #2</td>
              <td>
                <a href="/docs/Actuarial_RFP_342_2024_06_A2.pdf" target="_blank">(link to form)</a>
              </td>
            </tr>
            <tr>
              <td>03/13/2024</td>
              <td>RFP #342-2024-06</td>
              <td>Notice - Actuarial Services, Amendment #2</td>
              <td>
                <a href="/docs/342_2024_06_02_Notice.pdf" target="_blank">(link to form)</a>
              </td>
            </tr>
            <tr>
              <td>03/27/2024</td>
              <td>RFI #342-2024-04</td>
              <td>Viability of Plan-Owned Medical Clinics - Amendment #1</td>
              <td>
                <a href="/docs/Clinic_RFI_Amendment_1.pdf" target="_blank">(link to form)</a>
              </td>
            </tr>
            <tr>
              <td>&mdash;</td>
              <td>RFI #342-2024-04</td>
              <td>
                RFI - Question & Answer: Viability of Plan-Owned Medical
                Clinics
              </td>
              <td>
                <a href="/docs/Question_and_Answer_final_342_2024_04_v2.pdf" target="_blank">(link to form)</a>
              </td>
            </tr>
            <tr>
              <td>03/21/2024</td>
              <td>RFP #342-2024-06-01</td>
              <td>RFP - Actuarial Services - Amendment #1</td>
              <td>
                <a href="/docs/Actuarial_RFP_342_2024_06_A1_Final.pdf" target="_blank">(link to form)</a>
              </td>
            </tr>
            <tr>
              <td>03/01/2024</td>
              <td>RFP #342-2024-06-01</td>
              <td>RFP - Actuarial Services - Pre-Proposal Conference</td>
              <td>
                <a href="/docs/Pre_Proposal_Conference_RFP_342_2024_06.pdf" target="_blank">(link to form)</a>
              </td>
            </tr>
            <tr>
              <td>03/21/2024</td>
              <td>RFP #342-2024-06-01</td>
              <td>Notice - Actuarial Services, Amendment #1</td>
              <td>
                <a href="/docs/342_2024_06_01_Amend1_Notice.pdf" target="_blank">(link to form)</a>
              </td>
            </tr>
            <tr>
              <td>02/20/2024</td>
              <td>RFP #342-2024-05</td>
              <td>Notice of Cancellation - Asset Management Services</td>
              <td>
                <a href="/docs/Cancellation_Notice_342_2024_05_2202024.pdf" target="_blank">(link to form)</a>
              </td>
            </tr>
            <tr>
              <td>03/21/2024</td>
              <td>RFP #342-2023-06</td>
              <td>RFP - Actuarial Services</td>
              <td>
                <a href="/docs/Actuarial_RFP_342_2024_06_FINAL.pdf" target="_blank">(link to form)</a>
              </td>
            </tr>
            <tr>
              <td>03/21/2024</td>
              <td>RFP #342-2023-05</td>
              <td>Notice - Asset Management Services</td>
              <td>
                <a href="/docs/One_Page_Notice_342_2024_05.pdf" target="_blank">(link to form)</a>
              </td>
            </tr>
            <tr>
              <td>03/21/2024</td>
              <td>RFI #342-2024-06</td>
              <td>Notice - Actuarial Services</td>
              <td>
                <a href="/docs/One_Page_Notice_342_2024_06.pdf" target="_blank">(link to form)</a>
              </td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td>RFP #342-2023-13</td>
              <td>
                Notice of Cancellation - Capital Asset Valuation Services
              </td>
              <td>
                <a href="/docs/Cancellation_Notice_342_2023_13.pdf" target="_blank">(link to form)</a>
              </td>
            </tr>
            <tr>
              <td>03/27/2024</td>
              <td>RFI #342-2024-04</td>
              <td>Viability of Plan-Owned Medical Clinics</td>
              <td>
                <a href="/docs/RFI_342_2024_04_Viability_of_Plan_Owned_Medical_Clinics.pdf" target="_blank">(link to
                  form)</a>
              </td>
            </tr>
            <tr>
              <td>02/15/2024</td>
              <td>RFI #342-2024-04</td>
              <td>
                Pre-Proposal Conference - Viability of Plan-Owned Medical
                Clinics
              </td>
              <td>
                <a href="/docs/342_2024_04_Notice_Pre_Proposal_Conf_v2.pdf" target="_blank">(link to form)</a>
              </td>
            </tr>
            <tr>
              <td>01/11/2024</td>
              <td>RFP #342-2024-03-01</td>
              <td>
                Third Party Administrator Services - Question and Answer
              </td>
              <td>
                <a href="/docs/342-2024-03_TPA_A1_Questions_and_Answers.pdf" target="_blank">(link to form)</a>
              </td>
            </tr>
            <tr>
              <td>12/19/2023</td>
              <td>RFP #342-2024-03-01</td>
              <td>
                Third Party Administrator Services - Pre-Proposal Conference
              </td>
              <td>
                <a href="/docs/342-2024-03-TPA-A1-Notice-Pre-Proposal-Conf.pdf" target="_blank">(link to form)</a>
              </td>
            </tr>
            <tr>
              <td>01/08/2024</td>
              <td>RFP #342-2024-03-01</td>
              <td>Third Party Administrator Services - Amendment 1</td>
              <td>
                <a href="/docs/342-2024-03-TPA-A1-final.pdf" target="_blank">(link to form)</a>
              </td>
            </tr>
            <tr>
              <td>01/08/2024</td>
              <td>RFP #342-2024-03</td>
              <td>Third Party Administrator Services</td>
              <td>
                <a href="/docs/342-2024-03-Third-Party-Administrator.pdf" target="_blank">(link to form)</a>
              </td>
            </tr>
            <tr>
              <td>01/08/2024</td>
              <td>RFP #342-2024-03</td>
              <td>One-Page Notice - Third Party Administrator Services</td>
              <td>
                <a href="/docs/One-Page-Notice-342-2024-03.pdf" target="_blank">(link to form)</a>
              </td>
            </tr>
            <tr>
              <td>11/17/2023</td>
              <td>
                RFP #24-021CG <span style="font-weight: 700">Part A</span>
              </td>
              <td>IBAC Medical, Dental, Vision Plans and Related Services</td>
              <td>
                <a href="https://www.aps.edu/procurement/current-bids-and-rfps/rfp-24-021cg-part-a"
                  target="_blank">(link to form)</a>
              </td>
            </tr>
            <tr>
              <td>11/17/2023</td>
              <td>
                RFP #24-021CG <span style="font-weight: 700">Part B</span>
              </td>
              <td>IBAC Medical, Dental, Vision Plans and Related Services</td>
              <td>
                <a href="https://www.aps.edu/procurement/current-bids-and-rfps/rfp-24-021cg-part-b"
                  target="_blank">(link to form)</a>
              </td>
            </tr>
            <tr>
              <td>&ndash;</td>
              <td>RFP# 342-2023-11-01</td>
              <td>Facility Maintenance Services - Amendment 1</td>
              <td>
                <a href="/docs/Facility-Maintenance-342-2023-11-Amendment-1.pdf" target="_blank">(link to form)</a>
              </td>
            </tr>
            <tr>
              <td>05/23/2023</td>
              <td>RFP# 342-2023-11</td>
              <td>Facility Maintenance Services</td>
              <td>
                <a href="/docs/Facility-Maintenance-342-2023-11-Final.pdf" target="_blank">(link to form)</a>
              </td>
            </tr>
            <tr>
              <td>05/05/2023</td>
              <td>RFP# 342-2023-13</td>
              <td>Capital Asset Valuation Services</td>
              <td>
                <a href="/docs/Capital-Asset-Valuation-Services-342-2023-13-Final.pdf" target="_blank">(link to
                  form)</a>
              </td>
            </tr>
            <tr>
              <td>&mdash;</td>
              <td>RFP# 342-2023-12</td>
              <td>
                Questions and Answers for RFP# 342-2023-12 Workers'
                Compensation Third Party Dedicated Claims Administration
                Services
              </td>
              <td>
                <a href="/docs/Questions-and-Answers-RFP-342-2023-12.pdf" target="_blank">(link to form)</a>
              </td>
            </tr>
            <tr>
              <td>04/20/2023</td>
              <td>RFP# 342-2023-12</td>
              <td>
                Workers’ Compensation Third-Party Dedicated Claims
                Administration Services
              </td>
              <td>
                <a href="/docs/RFP342-2023-12-Workers-Compensation-Third-Party-Dedicated-Claims-Administration-Services.pdf"
                  target="_blank">(link to form)</a>
              </td>
            </tr>
            <tr>
              <td>&mdash;</td>
              <td>RFP# 342-2023-08</td>
              <td>
                Questions and Answers for RFP# 342-2023-08 Student Athletic
                and Vocational Accident Insurance
              </td>
              <td>
                <a href="/docs/Questions and Answers-Student Athletic Vocational accident insurance.pdf"
                  target="_blank">(link to form)</a>
              </td>
            </tr>
            <tr>
              <td>&mdash;</td>
              <td>RFP# 342-2023-10</td>
              <td>Questions and Answers for RFP# 342-2023-10</td>
              <td>
                <a href="/docs/Questions-and-Answers-for-RFP-342-2023-10.pdf" target="_blank">(link to form)</a>
              </td>
            </tr>
            <tr>
              <td>04/20/2023</td>
              <td>RFP# 342-2023-10</td>
              <td>General Legal Counsel Services Amendment No. 1</td>
              <td>
                <a href="/docs/342-2023-10 General Legal Counsel Services Amendment No.1.pdf" target="_blank">(link to
                  form)</a>
              </td>
            </tr>
            <tr>
              <td>04/20/2023</td>
              <td>RFP# 342-2023-10</td>
              <td>General Legal Counsel Services</td>
              <td>
                <a href="/docs/342-2023-10 General Legal Counsel Services Final 3-28-2023.pdf" target="_blank">(link to
                  form)</a>
              </td>
            </tr>
            <tr>
              <td>04/20/2023</td>
              <td>RFP# 342-2023-08</td>
              <td>
                Legal Advertisement - Student Athletic and Vocational Accident
                Insurance
              </td>
              <td>
                <a href="/docs/Legal Advertisement - Student Athletic and Vocational Accident Insurance.pdf"
                  target="_blank">(link to form)</a>
              </td>
            </tr>
            <tr>
              <td>04/20/2023</td>
              <td>RFP# 342-2023-08</td>
              <td>Student Athletic and Vocational Accident Insurance</td>
              <td>
                <a href="/docs/Student Accident and Vocational Accident Insurance Final.pdf" target="_blank">(link to
                  form)</a>
              </td>
            </tr>
            <tr>
              <td>&mdash;</td>
              <td>RFP# 342-2023-07-02</td>
              <td>
                Questions and Answers RFP#342-2023-07-02 Inurance Broker,
                Consulting, Admin Services
              </td>
              <td>
                <a href="/docs/Questions and Answers 342-2023-07-02 Inurance Broker, Consulting, Admin Services.pdf"
                  target="_blank">(link to form)</a>
              </td>
            </tr>
            <tr>
              <td>03/31/2023</td>
              <td>RFP# 342-2023-09</td>
              <td>
                Driving Record Information, Retrieval and Dessemination
                Services
              </td>
              <td>
                <a href="/docs/RFP-342-2023-09-Driving-Record-Final.pdf" target="_blank">(link to form)</a>
              </td>
            </tr>

            <tr>
              <td>03/29/2023</td>
              <td>RFP# 23-066 NLM</td>
              <td>
                Benefits Consultant for NM IBAC Medical, Dental & Vision Plan
              </td>
              <td>
                <a href="/docs/RFP23-066-NLM-Consultant-for-IBAC-Medical-Dental-Vision-PlanPOSTED-03-03-2023.pdf"
                  target="_blank">(link to form)</a>
              </td>
            </tr>

            <tr>
              <td>03/23/2023</td>
              <td>RFP# 342-2023-07-02</td>
              <td>
                Amendment #2 Insurance Broker, Consulting, Administrative
                Services and Loss Prevention Services
              </td>
              <td>
                <a href="/docs/Insurance-Broker-Consulting-Administrative-Services-A2-Final.pdf" target="_blank">(link
                  to form)</a>
              </td>
            </tr>
            <tr>
              <td>03/23/2023</td>
              <td>RFP# 342-2023-07</td>
              <td>
                Amendment #1 Insurance Broker, Consulting, Administrative
                Services and Loss Prevention Services
              </td>
              <td>
                <a href="/docs/Insurance-Broker-Consulting-Administrative-Services-A1-Final.pdf" target="_blank">(link
                  to form)</a>
              </td>
            </tr>
            <tr>
              <td>03/23/2023</td>
              <td>RFP# 342-2023-07</td>
              <td>
                Insurance Broker, Consulting, Administrative Services and Loss
                Prevention Services
              </td>
              <td>
                <a href="/docs/Insurance Broker, Consulting, Administrative Services Final.pdf" target="_blank">(link to
                  form)</a>
              </td>
            </tr>
            <tr>
              <td>03/23/2023</td>
              <td>RFP# 342-2023-07</td>
              <td>
                Insurance Broker, Consulting, Pool Administration Services and
                Loss Prevention Services
              </td>
              <td>
                <a href="/docs/One_Page_Notice_342-2023-07.pdf" target="_blank">(link to form)</a>
              </td>
            </tr>
            <tr>
              <td>02/28/2023</td>
              <td>RFP# 342-2023-06</td>
              <td>Workers Compensation Claims Auditing Services</td>
              <td>
                <a target="_blank"
                  href="/docs/NMPSIA_Workers_Comp_Third_Party_Claims_Adminstration_Serv_RFP_342-2023-06_12323.pdf">(link
                  to form)</a>
              </td>
            </tr>
            <tr>
              <td>02/28/2023</td>
              <td>RFP# 342-2023-06</td>
              <td>
                Legal Advertisement for RFP# 342-2023-06 Workers Compensation
                Claims Auditing Services
              </td>
              <td>
                <a target="_blank" href="/docs/One-Page-Notice-342-2023-06.pdf">(link to form)</a>
              </td>
            </tr>
            <tr>
              <td>&mdash;</td>
              <td>RFP# 342-2023-05</td>
              <td>
                Response to Written Questions RFP# 342-2023-05 Property and
                Liability Claims Administration Services
              </td>
              <td>
                <a target="_blank" href="/docs/Question_Answers_113022_Final.pdf">(link to form)</a>
              </td>
            </tr>

            <tr>
              <td>12/13/2022</td>
              <td>RFP# 342-2023-05</td>
              <td>Property and Liability Claims Administration Services</td>
              <td>
                <a target="_blank" href="/docs/NMPSIA Property and Liability RFP Final.pdf">(link to form)</a>
              </td>
            </tr>

            <tr>
              <td>12/13/2022</td>
              <td>RFP# 342-2023-05</td>
              <td>
                Legal Advertisement for RFP# 342-2023-05 Property and
                Liability Claims Administration Services
              </td>
              <td>
                <a target="_blank"
                  href="/docs/Legal Advertisement - Property and Liability Claims Administration Services.pdf">(link to
                  form)</a>
              </td>
            </tr>

            <tr>
              <td>&mdash;</td>
              <td>RFP# 342-2023-04</td>
              <td>
                Response to Written Questions RFP# 342-2023-04 Anonymous
                Reporting System
              </td>
              <td>
                <a target="_blank" href="/docs/Questions_for_ARS_RFP_11172022_PS.pdf">(link to form)</a>
              </td>
            </tr>

            <tr>
              <td>12/06/2022</td>
              <td>RFP# 342-2023-04</td>
              <td>Anonymous Reporting System</td>
              <td>
                <a target="_blank" href="/docs/Anonymous Reporting System Final.pdf">(link to form)</a>
              </td>
            </tr>

            <tr>
              <td>12/06/2022</td>
              <td>RFP# 342-2023-04</td>
              <td>
                Legal Advertisement for RFP# 342-2023-04 Anonymous Reporting
                System
              </td>
              <td>
                <a target="_blank" href="/docs/Legal Advertisement - Anonymous Reporting System.pdf">(link to form)</a>
              </td>
            </tr>

            <tr>
              <td>&mdash;</td>
              <td>RFP# 342-2023-03</td>
              <td>
                Bundled Payment Arrangement for Surgical Services Response to
                Written Questions
              </td>
              <td>
                <a target="_blank" href="/docs/Response_to_Written_Questions_9_29_22.pdf">(link to form)</a>
              </td>
            </tr>
            <tr>
              <td>&mdash;</td>
              <td>RFP #342-2023-02</td>
              <td>
                Benefits Consulting and Actuarial Services Amendment # 1
              </td>
              <td>
                <a target="_blank" href="/docs/Benefits_Consulting_and_Actuarial_Services_Amended092222.pdf">(link to
                  form)</a>
              </td>
            </tr>
            <tr>
              <td>&mdash;</td>
              <td>RFP #342-2023-02</td>
              <td>
                Benefits Consulting and Actuarial Services Response to Written
                Questions
              </td>
              <td>
                <a target="_blank" href="/docs/Combined_Q-A_NMPSIA_NMRHCA_Contracts_and_Amendments.pdf">(link to
                  form)</a>
              </td>
            </tr>
            <tr>
              <td>10/11/2022</td>
              <td>RFP#342-2023-02</td>
              <td>
                Notice of Request for Proposal for Professional Services:
                <br />Benefits Consulting and Actuarial Services
              </td>
              <td>
                <a target="_blank"
                  href="/docs/Legal_Advertisement_Benefits_Consulting_and_Actuarial_Services_Revised.pdf">(link to
                  form)</a>
              </td>
            </tr>
            <tr>
              <td>10/06/2022</td>
              <td>RFP#342-2023-03</td>
              <td>
                Notice of Request for Proposal for Professional Services:
                <br />Bundled Payment Arrangement for Surgical Services
              </td>
              <td>
                <a target="_blank"
                  href="/docs/Legal_Advertisement_Bundled_Payment_Arrangement_for_Surgical_Services.pdf">(link to
                  form)</a>
              </td>
            </tr>
            <tr>
              <td>10/11/2022</td>
              <td>RFP#342-2023-02</td>
              <td>
                RFP#342-2023-02 Benefits Consulting and Actuarial Services
              </td>
              <td>
                <a target="_blank" href="/docs/Benefits_Consulting_and_Actuarial_Services_Final.pdf">(link to form)</a>
              </td>
            </tr>
            <tr>
              <td>10/06/2022</td>
              <td>RFP#342-2023-03</td>
              <td>
                RFP#342-2023-03 Bundled Payment Arrangement for Surgical
                Services
              </td>
              <td>
                <a target="_blank"
                  href="/docs/NMPSIA_Bundled_Payment_Arrangement_for_Surgical_Services_RFP_Final.pdf">(link to form)</a>
              </td>
            </tr>
            <!-- <tr>
                            <td>12/13/2022</td>
                            <td>RFP# 342-2023-04</td>
                            <td>Amendment #1 Property and Liability Claims Administration Services
                            </td>
                            <td>
                                <a target="_blank" href="/docs/NMPSIA_Property_and_Liability_RFP_Amendment_1.pdf">(link
                                    to form)</a>
                            </td>
                        </tr> -->
            <!-- <tr>
                            <td>12/6/2022</td>
                            <td>RFP# 342-2023-04</td>
                            <td>Amendment #1 Anonymous Reporting System</td>
                            <td>
                                <a target="_blank" href="/docs/Anonymous_Reporting_System_Amendment_1.pdf">(link to
                                    form)</a>
                            </td>
                        </tr> -->
            <!-- <tr>
                            <td>12/13/2022</td>
                            <td>RFP# 342-2023-05</td>
                            <td>Legal Advertisement for RFP# 342-2023-05 Property and Liability Claims Administration Services
                            </td>
                            <td>
                                <a target="_blank" href="/docs/Legal Advertisement - Property and Liability Claims Administration Services.pdf">(link
                                    to form)</a>
                            </td>
                        </tr> -->
            <!-- <tr>
                            <td>12/13/2022</td>
                            <td>RFP# 342-2023-05</td>
                            <td>Property and Liability Claims Administration Services</td>
                            <td>
                                <a target="_blank" href="/docs/NMPSIA Property and Liability RFP Final.pdf">(link to
                                    form)</a>
                            </td>
                        </tr> -->
            <!-- <tr>
                            <td>12/06/2022</td>
                            <td>RFP# 342-2023-04</td>
                            <td>Legal Advertisement for RFP# 342-2023-04 Anonymous Reporting System</td>
                            <td>
                                <a target="_blank" href="/docs/Legal Advertisement - Anonymous Reporting System.pdf">(link to form)</a>
                            </td>
                        </tr> -->
            <!-- <tr>
                            <td>12/06/2022</td>
                            <td>RFP# 342-2023-04</td>
                            <td>Anonymous Reporting System</td>
                            <td>
                                <a target="_blank" href="/docs/Anonymous Reporting System Final.pdf">(link to form)</a>
                            </td>
                        </tr> -->

            <tr>
              <td>05/16/2022</td>
              <td>RFP#342-2022-03</td>
              <td>
                RFP#342-2022-03 Cyber Risk Assessment and Consulting Services
                Amendment #1
              </td>
              <td>
                <a target="_blank"
                  href="/docs/NMPSIA_Cyber_Risk_Assessment_and_Consulting_Services_Amendment_1.pdf">(link to form)</a>
              </td>
            </tr>
            <tr>
              <td>05/06/2022</td>
              <td>RFP#342-2022-03</td>
              <td>RFP#342-2022-03 Response to Written Questions</td>
              <td>
                <a target="_blank" href="/docs/Questions_to_Cyber_RFP_Answers_to_Bidders_5.6.22.pdf">(link to form)</a>
              </td>
            </tr>
            <tr>
              <td>05/18/2022</td>
              <td></td>
              <td>
                Request for Quotation for Project Manager to Handle RFP for
                Life & Long-Term Disability
              </td>
              <td>
                <a target="_blank" href="/docs/Scope_for_Life_and_LTD_RFP_Project_Manager_Final.pdf">(link to form)</a>
              </td>
            </tr>
            <tr>
              <td>05/16/2022</td>
              <td>RFP#342-2022-03</td>
              <td>
                RFP# 342-2022-03 Cyber Security Risk Assessment &amp;
                Consulting Services
              </td>
              <td>
                <a target="_blank"
                  href="/docs/NMPSIA _Cyber_Risk_Assessment_and_Consulting_Services_Final_42222.pdf">(link to form)</a>
              </td>
            </tr>
            <tr>
              <td>05/16/2022</td>
              <td>RFP#342-2022-03</td>
              <td>
                Notice of Request for Proposal for Professional Services:
                <br />Cyber Security Risk Assessment &amp; Consulting
              </td>
              <td style="padding-left: 0px; text-align: center">
                <a target="_blank" href="/docs/Legal_Advertisement _Cyber_Security.pdf">(link to form)</a>
              </td>
            </tr>

            <tr>
              <td>03/17/2022</td>
              <td>RFP#342-2022-01</td>
              <td>
                RFP# 342-2022-01 Response to Written Questions Second Release
              </td>
              <td><a href="#">(link to form)</a></td>
            </tr>
            <tr>
              <td>03/17/2022</td>
              <td>RFP#342-2022-01</td>
              <td>
                Property and Liability Workers' Compensation Claims Auditing
                Services RFP# 342-2022-01 Amendment #1
              </td>
              <td><a href="#">(link to form)</a></td>
            </tr>

            <tr>
              <td>03/17/2022</td>
              <td>RFP#342-2022-01</td>
              <td>RFP#342-2022-01 Response to Written Questions</td>
              <td><a href="#">(link to form)</a></td>
            </tr>
            <tr>
              <td>03/17/2022</td>
              <td>RFP#342-2022-01</td>
              <td>
                Property and Liability Workers' Compensation Claims Auditing
                Services RFP#342-2022-01
              </td>
              <td><a href="#">(link to form)</a></td>
            </tr>
            <tr>
              <td>03/17/2022</td>
              <td>RFP#342-2022-02</td>
              <td>
                Workplace Ergonomic Training and Consulting Services
                RFP#342-2022-02
              </td>
              <td><a href="#">(link to form)</a></td>
            </tr>
            <tr>
              <td>03/17/2022</td>
              <td>RFP#342-2022-01</td>
              <td>
                Legal Advertisement: RFP for PROFFESSIONAL SERVICES: Property
                and Liability Workers' Compensation Claims Auditing
              </td>
              <td><a href="#">(link to form)</a></td>
            </tr>
            <tr>
              <td>03/17/2022</td>
              <td>RFP#342-2022-02</td>
              <td>
                Legal Advertisement: RFP for PROFFESSIONAL SERVICES: Workplace
                Ergonomic Training and Consulting Services
              </td>
              <td><a href="#">(link to form)</a></td>
            </tr>
            <tr>
              <td>11/10/2021</td>
              <td>RFP#342-2021-03</td>
              <td>RFP#342-2021-03 Response to Written Questions Updated</td>
              <td><a href="#">(link to form)</a></td>
            </tr>
            <tr>
              <td>11/08/2021</td>
              <td>RFP#342-2021-03</td>
              <td>Amendment 2: Proposal Due Date & Timeline</td>
              <td><a href="#">(link to form)</a></td>
            </tr>
            <tr>
              <td>11/05/2021</td>
              <td>RFP#342-2021-03</td>
              <td>RFP#342-2021-03 Response to Written Questions</td>
              <td><a href="#">(link to form)</a></td>
            </tr>
            <tr>
              <td>11/05/2021</td>
              <td>RFP#342-2021-03</td>
              <td>Amendment 1: Proposal Due Date & Timeline</td>
              <td><a href="#">(link to form)</a></td>
            </tr>
            <tr>
              <td>11/15/2021</td>
              <td>RFP#342-2021-03</td>
              <td>Legal_Advertisement: IBAC_UNM PBM RFP</td>
              <td><a href="#">(link to form)</a></td>
            </tr>
            <tr>
              <td>11/15/2021</td>
              <td>RFP#342-2021-03</td>
              <td>
                RFP for PROFFESSIONAL SERVICES: Pharmaceutical Benefits
                Management Services
              </td>
              <td><a href="#">(link to form)</a></td>
            </tr>
            <tr>
              <td>04/12/2021</td>
              <td>Questions and Answers RFP#_342-2021-02 Final</td>
              <td>School Sexual Misconduct Training Videos</td>
              <td></td>
            </tr>
            <tr>
              <td>03/25/2021</td>
              <td>Amendment #1 for RFP# 342-2021-02</td>
              <td>
                RFP# 342-2021-02 School Sexual Misconduct Training Videos
              </td>
              <td></td>
            </tr>

            <tr>
              <td>03/25/2021</td>
              <td>Amendment #1 for RFP# 342-2021-02</td>
              <td>School Sexual Misconduct Training Videos</td>
              <td></td>
            </tr>
            <tr>
              <td>03/25/2021</td>
              <td>RFP #342-2021-02</td>
              <td>School Sexual Misconduct Training Videos</td>
              <td></td>
            </tr>
            <tr>
              <td>01/13/2021</td>
              <td>Sole Source Request</td>
              <td>Soul Source CR</td>
              <td><a href="#">(link to form)</a></td>
            </tr>
            <tr>
              <td>05/05/2020</td>
              <td>RFP#342-2022-02</td>
              <td>Questions and Answers #1</td>
              <td></td>
            </tr>
            <tr>
              <td>05/05/2020</td>
              <td>RFP#342-2022-01</td>
              <td>
                Actuarial Services for Property, Automobile Physical Damage,
                General and Automobile Liability, and Errors and Omissions and
                Workers' Compensation Claims
              </td>
              <td></td>
            </tr>
            <tr>
              <td>05/05/2020</td>
              <td>RFP#342-2022-02</td>
              <td>Professional Services: Financial Advisor Services</td>
              <td></td>
            </tr>
            <tr>
              <td>05/05/2020</td>
              <td>Request for Proposal Amendment #1</td>
              <td>
                Professional Services: Property, Liability and Workers'
                Compensation Actuarial Services
              </td>
              <td></td>
            </tr>

            <tr>
              <td>05/05/2020</td>
              <td>Request for Proposal</td>
              <td>
                Professional Services: Property, Liability and Workers'
                Compensation Actuarial Services
              </td>
              <td></td>
            </tr>
            <tr>
              <td>05/05/2020</td>
              <td>Request for Proposal</td>
              <td>Professional Services: Financial Advisor Services</td>
              <td></td>
            </tr>
            <tr>
              <td>04/10/2020</td>
              <td>Sole Source Request</td>
              <td>Sole Source Request and Determination Form</td>
              <td></td>
            </tr>
            <tr>
              <td>11/13/2019</td>
              <td>RFP# 342-2019-10 Questions and Answers-First Release</td>
              <td>Professional Services: Financial Advisor Services</td>
              <td></td>
            </tr>
            <tr>
              <td>11/13/2019</td>
              <td>RFP #342-2019-10 Amendment #01</td>
              <td>
                Third-Party Administrator Services for Eligibility, Billing
                and Premium
              </td>
              <td></td>
            </tr>
            <tr>
              <td>11/13/2019</td>
              <td>RFP #342-2019-10</td>
              <td>
                Third-Party Administrator Services for Eligibility, Billing
                and Premium
              </td>
              <td></td>
            </tr>
            <tr>
              <td>11/13/2019</td>
              <td>RFP #342-2019-10 Amendment #01</td>
              <td>
                Third-Party Administrator Services for Eligibility, Billing
                and Premium
              </td>
              <td></td>
            </tr>
            <tr>
              <td>11/13/2019</td>
              <td>RFP #342-2019-10</td>
              <td>
                Third-Party Administrator Services for Eligibility, Billing
                and Premium
              </td>
              <td></td>
            </tr>
          </tbody>
        </table>
        `;
  }
}

customElements.define("closed-procurements", ClosedProcurements);
