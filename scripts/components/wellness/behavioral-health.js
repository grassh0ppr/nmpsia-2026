class BehavioralHealth extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /*html*/ `
      <div class="heading-and-element-flexbox">
        <h2 class="display-4">Behavioral Health</h2>
        <img src="images/nmpsia_logo_2024.png" alt="NMPSIA logo" />
      </div>
      <hr />
      <div class="container">
        <img
          style="border-radius: 4px"
          class="mt-3"
          width="100%"
          src="images/wellness/kelly-sikkema-behavioral-health.jpg"
          alt="Stock photo representing mental/behavioral health care and support"
        />
      </div>
      <h3 class="sub-heading">Blue Cross Blue Shield</h3>
      <ul class="content-list">
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a target="_blank" href="https://nmpsia.com/pdfs/490973.0325 NM Group Behavioral Health Mental Health Hub Core Toolkit Member Flier.pdf"
            ><span style="text-transform: uppercase;">New</span> Mental Health Hub - Get the Right Care</a
          >
        </li>
      </ul>
      <h3 class="sub-heading">Presbyterian</h3>
      <ul class="content-list">
      <li>
      <i class="bx bxs-file-pdf"></i>
      <a
        target="_blank"
        href="/pdfs/NMPSIA_Mental_Well-Being_Skill_Builder.pdf"
        >NMPSIA Mental Well-Being Skill Builder</a
      >
    </li>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a href="/pdfs/Talkspace_Flyer_Updated_2024.pdf" target="_blank"
            >Talkspace Messaging Therapy</a
          >
        </li>
      </ul>
     
      `;
  }
}

customElements.define("behavioral-health", BehavioralHealth);
