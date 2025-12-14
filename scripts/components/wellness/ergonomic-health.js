class ErgonomicHealth extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /*html*/ `
            <div class="heading-and-element-flexbox">
            <h2 class="display-4">Ergonomic Health Wellness Offerings</h2>
            <img src="images/nmpsia_logo_2024.png" alt="NMPSIA logo" />
          </div>
          <hr />
          <div class="container banner">
            <img
              src="images/wellness/jason-strull-ergonomics-desk.jpg"
              alt="decorative element"
            />
          </div>
          <h3 class="sub-heading">NMPSIA Ergonomics Helpful Resources</h3>
          <ul class="content-list">
            <li>
              <i class="bx bxs-file-pdf"></i>
              <a
                href="/pdfs/Fall_2023_Ergo_Newsletter_NMPSIA_Version.pdf"
                target="_blank"
                >Poms/NMPSIA Fall 2023 Ergonomics Newsletter</a
              >
            </li>
            <li>
              <i class="bx bxs-file-pdf"></i>
              <a
                href="/pdfs/Keys to Mastering Your Mobility.pdf"
                target="_blank"
                >Keys to Mastering Your Mobility 10/26/2022 - PDF</a
              >
            </li>
            <li>
              <i class="bx bxs-file-pdf"></i>
              <a href="https://www.surveymonkey.com/r/L6KN9ND" target="_blank"
                >Mastering Your Mobility - 10/26/2022 Recorded Webinar</a
              >
            </li>
            <li>
              <i class="bx bxs-file-pdf"></i>
              <a
                href="/pdfs/Guide_to_an_Ergonomically_Correct_Workstation_NM_INTERACTIVE.pdf"
                target="_blank"
                >POMS - Guide to an Ergonomically Correct Workstation</a
              >
            </li>
            <li>
              <i class="bx bxs-file-pdf"></i>
              <a href="/pdfs/Healthy_eating_infographic.pdf" target="_blank"
                >POMS - Office Ergonomics Best Practices</a
              >
            </li>
            <li>
              <i class="bx bxs-file-pdf"></i>
              <a href="/pdfs/Quick_and_Easy_Stretches_NM.pdf" target="_blank"
                >POMS - Quick and Easy Stretches at Your Desk</a
              >
            </li>
            <li>
              <i class="bx bxs-file-pdf"></i>
              <a href="/pdfs/Tips_for_Working_from_Home.pdf" target="_blank"
                >POMS - Helpful Tips When Working from Home</a
              >
            </li>
            <li>
              <i class="bx bxs-file-pdf"></i>
              <a href="/pdfs/Virtual_Ergonomics.pdf" target="_blank"
                >POMS - Virtual Guide to Home Workstation Ergonomic Practices</a
              >
            </li>
          </ul>
        `;
  }
}

customElements.define("ergonomic-health", ErgonomicHealth);
