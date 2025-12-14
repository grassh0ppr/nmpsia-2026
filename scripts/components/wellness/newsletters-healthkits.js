class NewslettersHealthkits extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /*html*/ `
        <div class="heading-and-element-flexbox">
            <h2 class="display-4">Health Kits & Wellness Newsletters</h2>
            <img src="images/nmpsia_logo_2024.png" alt="NMPSIA logo" />
          </div>
          <hr />
          <div class="container banner">
            <img
              src="images/wellness/roman-kraft-person-reading-news.jpg"
              alt="Stock photo of a person reading the newspaper"
            />
          </div>
          <h3 class="sub-heading">Monthly Health Kits/Newsletters</h3>
          <div class="accordion my-3" id="accordion2024"></div>
        `;
  }
}

customElements.define("newsletters-healthkits", NewslettersHealthkits);
