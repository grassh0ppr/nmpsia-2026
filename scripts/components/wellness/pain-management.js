class PainManagement extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /*html*/ `
        <div class="heading-and-element-flexbox">
        <h2 class="display-4">NMPSIA Pain Management Program</h2>
        <img src="images/nmpsia_logo_2024.png" alt="NMPSIA logo" />
        </div>
        <div class="container banner">
            <img src="images/wellness/pain-management.jpg" alt="Pain Management Program" style="max-height: 1000px;"/>
        </div>
        <h3 class="sub-heading">Sword - $0 Pain Management Program</h3>
        
        <ul class="content-list">
            <li>
                <i class="bx bxs-file-pdf"></i>
                <a href="/wellness/2026/Sword Pain Management.pdf" target="_blank"
                >Sword - $0 Pain Management Program Flyer</a
                >
            </li>
            </li>
            <li>
                <i class="bx bx-link"></i>
                <a href="https://sword.health/platform/nmpsia/go" target="_blank"
                >Access Sword Program and Find Your Treatment</a
                >
            </li>
        </ul>
        `;
  }
}
customElements.define("pain-management", PainManagement);
