class GymMembership extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /*html*/ `
        <div class="heading-and-element-flexbox">
        <h2 class="display-4">Gym Membership Wellness Offerings</h2>
        <img src="images/nmpsia_logo_2024.png" alt="NMPSIA logo" />
      </div>
      <hr />
      <div class="container banner">
        <img
          src="images/wellness/clay-banks-gym-membership.jpg"
          alt="Stock photo of a person at the gym"
        />
      </div>
      <h3 class="sub-heading">Blue Cross Blue Shield</h3>
      <ul class="content-list">
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a target="_blank" href="/pdfs/NM Fitness Program.pdf"
            >Fitness Program Membership</a
          >
        </li>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a target="_blank" href="/pdfs/NM Fitness Program SP.pdf"
            >Fitness Program Membership - en espa&ntilde;ol</a
          >
        </li>
      </ul>

      <h3 class="sub-heading">Presbyterian</h3>
      <ul class="content-list">
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a
            target="_blank"
            href="/pdfs/2024_fitness_pass_flyer_corrected.pdf"
            >Fitness Pass Membership</a
          >
        </li>
      </ul>
        `;
  }
}

customElements.define("gym-membership", GymMembership);
