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

  <div class="table-responsive-wrapper">
  <table class="table table-bordered" role="presentation">
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
  </div>

  <style>
    online-trainings .link-icon {
      width: 42px;
      height: 42px;
      margin-bottom: 0.5rem;
    }
    online-trainings .link-icon i {
      font-size: 1.2rem;
    }
  </style>

  <div class="links-grid">
    <a href="/PDFs/poms-risk-docs/NMPSIA_Poms_CSAP_and_Safety_Compliance_Training_Flyer_12012025.pdf" target="_blank" class="link-card">
      <div class="link-icon">
        <i class="bx bxs-file-pdf"></i>
      </div>
      <h4>Child Sexual Abuse Prevention in Schools</h4>
      <p>
        Recognizing and Reporting Child Abuse training is required when an
        employee first starts employment at a district.
      </p>
    </a>

    <a href="https://www.pomsassoc.com/webinars" target="_blank" class="link-card">
      <div class="link-icon">
        <i class="bx bx-video"></i>
      </div>
      <h4>Webinar Library</h4>
      <p>
        Poms keeps an extensive library of recorded webinars on a variety
        of human resources and risk control topics.
      </p>
    </a>

    <a href="https://vimeo.com/showcase/9806690" target="_blank" class="link-card">
      <div class="link-icon">
        <i class="bx bx-book-reader"></i>
      </div>
      <h4>Title IX Training</h4>
      <p>
        This Vimeo playlist contains training videos regarding the new
        Title IX regulations.
      </p>
    </a>
  </div>
    `;
  }
}

customElements.define("online-trainings", OnlineTrainings);
