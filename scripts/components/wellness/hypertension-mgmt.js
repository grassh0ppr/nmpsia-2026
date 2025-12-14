class HypertensionMgmt extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /*html*/ `
        <div class="heading-and-element-flexbox">
        <h2 class="display-4">Hypertension Management</h2>
        <img src="images/nmpsia_logo_2024.png" alt="NMPSIA logo" />
      </div>
      <hr />
      <div class="container banner">
        <img
          src="images/wellness/ahmed-getty-imgs-hypertension.jpg"
          alt="Stock photo of a person getting a blood pressure reading."
        />
      </div>
      <h3 class="sub-heading">Blue Cross Blue Shield of New Mexico</h3>
      <ul class="content-list">
       
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a href="/pdfs/Less_ChoLESterol_is_Better.pdf" target="_blank"
            >Less Cho<em>LES</em>terol is Better</a
          >
        </li>
      
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a
            target="_blank"
            href="/pdfs/Smart_Ways_to_Lower_Your_Risk_for_Stroke.pdf"
            >Smart Ways to Lower Your Risk for Stroke</a
          >
        </li>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a target="_blank" href="/pdfs/Ways_to_Love_Your_Heart_Flier.pdf"
            >Ways to Love Your Heart</a
          >
        </li>
      </ul>
    
        `;
  }
}

customElements.define("hypertension-mgmt", HypertensionMgmt);
