class EyeHealth extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /*html*/ `
    <div class="heading-and-element-flexbox">
        <h2 class="display-4">Eye Health and Wellness</h2>
        <img src="images/nmpsia_logo_2024.png" alt="NMPSIA logo" />
      </div>
      <hr />
      <div class="container banner">
        <img
          src="images/wellness/jsb-co-vision-wellness.jpg"
          alt="stock photo of a person taking an eye exam"
        />
      </div>
      <h3 class="sub-heading">Davis Vision</h3>
      <ul class="content-list">
        <li>
          <i class="bx bx-link-external"></i>
          <a href="https://davisvision.com" target="_blank">Davis Vision Website</a>
        </li>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a
            href="/pdfs/davis_vision_nmpsia_summary_of_plan_description.pdf"
            target="_blank"
            >Summary of Plan Description</a
          >
        </li>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a href="/wellness/vision/Davis_vision/Into_Aging_Eyes_Infographic_CST_1284_DVSV.pdf" target="_blank">A Deeper Look into Aging Eyes Infographic</a>
        </li>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a href="/wellness/vision/Davis_vision/Women's_Eye_Health_CST_1411_DVSV.pdf" target="_blank">Women's Eye Health Deserves Special Attention</a>
        </li>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a href="/wellness/vision/Davis_vision/Lens_Upgrades_Infographic_CST_1330_18x24_508.pdf" target="_blank">A Guide to Lens Types</a>
        </li>
      </ul>
      <h3 class="sub-heading">Versant Health</h3>
      <ul class="content-list">
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a href="/pdfs/Healthy_eating_infographic.pdf" target="_blank"
            >Healthy Eating Information</a
          >
        </li>
      </ul>
        `;
  }
}

customElements.define("eye-health", EyeHealth);
