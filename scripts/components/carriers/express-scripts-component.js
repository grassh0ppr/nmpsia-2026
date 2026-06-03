class ExpressScriptsInfo extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /*html*/ `
    <div class="heading-and-element-flexbox">
      <h2 class="display-4">Express Scripts</h2>
      <a href="https://www.express-scripts.com/frontend/commercial-open-enrollment/nmpsia" target="_blank" title="Visit carrier website">
        <img class="my-4 mx-3" src="images/carriers/express evernorth.png" alt="Express Scripts logo" style="max-height: 80px;">
      </a>
    </div>

    <ul class="content-list">
      <h4 class="mt-4 mb-3">Express Scripts Prescription Benefits</h4>
      <li>
        <i class="bx bx-link-external"></i>
        <a target="_blank"
          href="https://www.express-scripts.com/login?routingpage=/consumer/mybenefits/pl.jsp&CID=se:bob:pharmacyrx1:Bing2025:B:RT0&msclkid=77814cbed3ea17dbe5e026b982e64012&gclid=77814cbed3ea17dbe5e026b982e64012&gclsrc=3p.ds">
          Member Portal Login</a>
      </li>

      <h4 class="mt-4 mb-3">Contact Information</h4>
      <li>
        <i class="bx bx-phone"></i>
        Telephone: <a href="tel:18008189281">1-800-818-9281</a>
      </li>
      <li>
        <i class="bx bx-phone"></i>
        TTY: <a href="tel:18007163231">1-800-716-3231</a>
      </li>

      <h4 class="mt-4 mb-3">Prescription Card Information</h4>
      <li>
        <i class="bx bx-id-card"></i>
        <strong>RxBIN:</strong> 003858
      </li>
      <li>
        <i class="bx bx-id-card"></i>
        <strong>RxPCN:</strong> A4
      </li>
      <li>
        <i class="bx bx-id-card"></i>
        <strong>RxGrp:</strong> NMPSRX1
      </li>
    </ul>
    `;
  }
}

customElements.define("express-scripts-info", ExpressScriptsInfo);
