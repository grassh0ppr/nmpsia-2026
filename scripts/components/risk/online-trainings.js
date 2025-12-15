class OnlineTrainings extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /*html*/ `
    <div class="header-flex">
    <h2 class="display-4">Online Training</h2>
    <img
      src="images/nmpsia_logo_2024.png"
      alt="NMPSIA logo"
      class="section-logo"
    />
  </div>
  <p>
    For your convenience, Poms & Associates has an online training
    system to provide trainings to you and your staff via webinars,
    eLearning, email updates on topical issues, and more!
  </p>
  <p>
    Poms & Associates Provides access to education opportunities,
    technical assistance, and information resources to help meet the
    challenges you face in today's work environment, giving you access
    to services in the following key areas:
  </p>

  <table class="table table-bordered">
    <tbody>
      <tr>
        <td>Human Resource Management</td>
        <td>Employee Benefits</td>
        <td>Safety and Security</td>
      </tr>
      <tr>
        <td>Risk Management & Loss Control</td>
        <td>Organizational Effectiveness</td>
        <td>…and much more!</td>
      </tr>
    </tbody>
  </table>

  <ul class="content-list">
    <li>
      <a
        href="/pdfs/poms-risk-docs/Poms_Child-Abuse-Prevention-Flier-NMPSIA-combined.pdf"
        target="_blank"
        >Child Sexual Abuse Prevention in Schools</a
      >
    </li>
    <p>
      Recognizing and Reporting Child Abuse training is required when an
      employee first starts employment at a district.
    </p>
    <li>
      <a href="https://www.pomsassoc.com/webinars" target="_blank"
        >Webinar Library</a
      >
    </li>
    <p>
      Poms keeps an extensive
      <a href="https://www.pomsassoc.com/webinars" target="_blank"
        >library</a
      >
      of recorded webinars on a variety of human resources and risk
      control topics.
    </p>

    <li>
      <a href="https://vimeo.com/showcase/9806690" target="_blank"
        >Title IX Training</a
      >
    </li>
    <p>
      This Vimeo playlist contains
      <a href="https://vimeo.com/showcase/9806690" target="_blank"
        >training videos</a
      >
      regarding the new Title IX regulations
    </p>
  </ul>
    `;
  }
}

customElements.define("online-trainings", OnlineTrainings);
