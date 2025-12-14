class StatReporting extends HTMLElement {
    connectedCallback() {
        this.innerHTML = /*html*/ `
        <div class="heading-and-element-flexbox">
                    <h2 class="display-4">NMPSIA Statistical Reports</h2>
                    <img src="images/nmpsia_logo_2024.png" alt="NMPSIA logo">
                </div>
                <hr>
                <ul class="content-list with-descriptions">
                    <li>
                        <span>
                            <i class="bx bx-link-external"></i>
                            <a target="_blank"
                                href="https://datamining.nmpsia.com/helpwizards/datamining/SumOut.aspx">834
                                Weekly Data File</a>
                        </span>
                        <p>
                            Summary of most recent weekly benefit enrollment information
                            reported to carriers.
                        </p>
                    </li>
                    <li>
                        <span>
                            <i class="bx bx-link-external"></i>
                            <a target="_blank"
                                href="https://datamining.nmpsia.com/helpwizards/datamining/billsum.aspx">Billing Grand
                                Totals by
                                Month by Carrier</a>
                        </span>
                        <p>
                            Summary of most recent weekly benefit enrollment information
                            reported to carriers.
                        </p>
                    </li>
                    <li>
                        <span>
                            <i class="bx bx-link-external"></i>
                            <a href="https://datamining.nmpsia.com/helpwizards/datamining/premiumbyyear.aspx"
                                target="_blank">Budget Assistant</a>
                        </span>
                        <p>
                            Historical and current employee benefit participation with
                            information by salary range, percentage of employer
                            contribution, and enrollment tier.
                        </p>
                    </li>
                </ul>
        `;
    }
}

customElements.define('stat-reporting-component', StatReporting);