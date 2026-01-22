class FooterSitemap extends HTMLElement {
  connectedCallback() {
    // Load the component's CSS if not already loaded
    if (!document.querySelector('link[href*="footer-sitemap.css"]')) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "./scripts/components/footer/footer-sitemap.css";
      document.head.appendChild(link);
    }

    this.innerHTML = /*html*/ `
      <footer class="footer-sitemap">
        <div class="footer-sitemap-container">
          <div class="footer-column">
            <h3 class="footer-column-title">GENERAL INFO</h3>
            <ul class="footer-links">
              <li><a href="plan.html">About the NMPSIA Plan</a></li>
              <li><a href="benefits.html">NMPSIA Benefits Division</a></li>
              <li><a href="risk.html">NMPSIA Risk Division</a></li>
              <li><a href="wellness.html">NMPSIA Wellness Programs</a></li>
              <li><a href="plan.html">2025 Program Guide</a></li>
              <li><a href="benefits.html#compare">Compare plans</a></li>
              <li><a href="accessibility.html">Accessibility statement</a></li>
            </ul>
          </div>
          
          <div class="footer-column">
            <h3 class="footer-column-title">EMPLOYERS</h3>
            <ul class="footer-links">
              <li><a href="support.html">Request NMPSIA Support</a></li>
              <li><a href="update-contacts.html">Update District Contact Information</a></li>
              <li><a href="employer-trainings.html">Trainings and tutorials</a></li>
              <li><a href="employer-enrollment.html">Enrollment, forms, & resources</a></li>
              <li><a href="premiums.html">Benefit Premiums</a></li>
            </ul>
          </div>
          
          <div class="footer-column">
            <h3 class="footer-column-title">EMPLOYEES</h3>
            <ul class="footer-links">
              <li><a href="enrollment-tutorials.html">Enrollment Tutorials & How-To's</a></li>
              <li><a href="employee-enrollment.html">Enrollment, forms, & resources</a></li>
              <li><a href="premiums.html">Benefit Premiums</a></li>
            </ul>
          </div>
          
          <div class="footer-column">
            <h3 class="footer-column-title">GET IN TOUCH</h3>
            <ul class="footer-links">
              <li><a href="contact-us.html">Contact us</a></li>
              <li><a href="auth-release-health-info.html">Release of Health Information Authorization</a></li>
              <li><a href="natural-disaster-aid.html">Apply for natural disaster relief assistance</a></li>
              <li><a href="IPRA.html">Request Inspection of Public Records (IPRA)</a></li>
            </ul>
          </div>
        </div>
        
        <div class="footer-copyright">
          <p>Copyright 2025 <a href="#" class="copyright-link">Erisa Administrative Services, Inc.</a></p>
        </div>
      </footer>
    `;
  }
}

customElements.define("footer-sitemap", FooterSitemap);
