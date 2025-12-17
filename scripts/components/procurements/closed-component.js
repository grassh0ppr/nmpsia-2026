class ClosedProcurements extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /*html*/ `
        <table class="table table-bordered">
          <thead>
            <tr class="table-heading">
              <th scope="col">Due Date</th>
              <th scope="col">Solicitation Reference</th>
              <th scope="col">Description</th>
            </tr>
          </thead>
          <tbody>
            
            <tr>
              <td>05/05/2020</td>
              <td>RFP#342-2022-02</td>
              <td>Questions and Answers #1</td>
            </tr>
            <tr>
              <td>05/05/2020</td>
              <td>RFP#342-2022-01</td>
              <td>
                Actuarial Services for Property, Automobile Physical Damage,
                General and Automobile Liability, and Errors and Omissions and
                Workers' Compensation Claims
              </td>
            </tr>
            <tr>
              <td>05/05/2020</td>
              <td>RFP#342-2022-02</td>
              <td>Professional Services: Financial Advisor Services</td>
            </tr>
            <tr>
              <td>05/05/2020</td>
              <td>Request for Proposal Amendment #1</td>
              <td>
                Professional Services: Property, Liability and Workers'
                Compensation Actuarial Services
              </td>
            </tr>

            <tr>
              <td>05/05/2020</td>
              <td>Request for Proposal</td>
              <td>
                Professional Services: Property, Liability and Workers'
                Compensation Actuarial Services
              </td>
            </tr>
            <tr>
              <td>05/05/2020</td>
              <td>Request for Proposal</td>
              <td>Professional Services: Financial Advisor Services</td>
            </tr>
            <tr>
              <td>04/10/2020</td>
              <td>Sole Source Request</td>
              <td>Sole Source Request and Determination Form</td>
            </tr>
            <tr>
              <td>11/13/2019</td>
              <td>RFP# 342-2019-10 Questions and Answers-First Release</td>
              <td>Professional Services: Financial Advisor Services</td>
            </tr>
            <tr>
              <td>11/13/2019</td>
              <td>RFP #342-2019-10 Amendment #01</td>
              <td>
                Third-Party Administrator Services for Eligibility, Billing
                and Premium
              </td>
            </tr>
            <tr>
              <td>11/13/2019</td>
              <td>RFP #342-2019-10</td>
              <td>
                Third-Party Administrator Services for Eligibility, Billing
                and Premium
              </td>
            </tr>
            <tr>
              <td>11/13/2019</td>
              <td>RFP #342-2019-10 Amendment #01</td>
              <td>
                Third-Party Administrator Services for Eligibility, Billing
                and Premium
              </td>
            </tr>
            <tr>
              <td>11/13/2019</td>
              <td>RFP #342-2019-10</td>
              <td>
                Third-Party Administrator Services for Eligibility, Billing
                and Premium
              </td>
            </tr>
          </tbody>
        </table>
        `;
  }
}

customElements.define("closed-procurements", ClosedProcurements);
