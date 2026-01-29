class StopItContent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /*html*/ `
    <div class="heading-and-element-flexbox">
    <h2 class="display-4">Lightspeed STOPit</h2>
    <img
      src="images/lightspeed_systems_logo.svg"
      alt="Lightspeed Systems logo"
      style="width: 400px"
    />
  </div>
  <hr />
  <h3 class="sub-heading">
    NMPSIA and Lightspeed STOPit introduce a fully funded Safety and Wellness
    Program to support New Mexico School Districts
  </h3>
  <p>
    NMPSIA is partnering with Lightspeed STOPit to provide their
    best-in-class Anonymous Reporting System (ARS), SEL & Wellness
    Center, and other services to NMPSIA Member School Districts.
  </p>
  <p>
    Since 2014, our partner Lightspeed STOPit has been offering safety &
    wellness solutions that are deployed in more than 1600 districts
    including more than 25 in New Mexico. Their solutions are focused on
    the physical and mental wellbeing of students, staff, and families.
    It is one of the most efficient and affordable ways for schools to
    prevent multiple types of mistreatments including bullying,
    cyberbullying, harassment, violence, and other forms of
    exploitation, helping to ensure the safety & wellness of your school
    community.
  </p>

  <p>
    When incidents do occur, Lightspeed STOPit helps you maintain an electronic
    record of your positive interventions, available as a legal defense
    in the event of a lawsuit alleging failure to act.
  </p>

  <div class="text-center my-2 mb-4">
    <a
      href="https://www.lightspeedsystems.com/products/lightspeed-stopit/"
      target="_blank"
      class="btn btn-primary my-4 mx-auto"
      >NMPSIA / Lightspeed STOPit Program Sign Up</a
    >
  </div>

  <h3 class="sub-heading">Helpful Resources</h3>

  <div class="video-grid">
    <div class="video-container">
      <iframe
        src="https://player.vimeo.com/video/1005921288?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
        title="Recognizing and Reporting Sexual Abuse in Schools - High School"
      >
      </iframe>
    </div>

    <div class="video-container">
      <iframe
        src="https://player.vimeo.com/video/1005921357?badge=0&autopause=0&player_id=0&app_id=58479"
        allow="autoplay; fullscreen; picture-in-picture"
        allowfullscreen
      >
      </iframe>
    </div>

    <div class="video-container">
      <iframe
        src="https://player.vimeo.com/video/1005921234?badge=0&autopause=0&player_id=0&app_id=58479"
        allow="autoplay; fullscreen; picture-in-picture"
        allowfullscreen
      >
      </iframe>
    </div>
  </div>

  <div class="banner container">
    <a
      href="/pdfs/NMPSIA_School_Safety_Partnership_Program.pdf"
      class="text-center"
      target="_blank"
    >
      <img
        class="flyer-img"
        src="/images/NMPSIA_School_Safety_Partnership_Program_Page_1.png"
        alt="Lightspeed STOPit ARS flyer"
      />
    </a>
  </div>
    `;
  }
}

customElements.define("stop-it-content", StopItContent);
