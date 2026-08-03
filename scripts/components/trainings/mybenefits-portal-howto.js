class MyBenefitsPortalHowTo extends HTMLElement {
  connectedCallback() {
    if (!document.getElementById("mybenefits-howto-styles")) {
      const style = document.createElement("style");
      style.id = "mybenefits-howto-styles";
      style.textContent = `
        .mbp-howto {
          font-family: inherit;
          width: 100%;
          border: 2px solid #c4aed8;
          border-radius: 12px;
          overflow: hidden;
          background: #fff;
        }

        /* ── Header ── */
        .mbp-howto__header {
          background: #ddd0ea;
          padding: 1.5rem 1.75rem 1.25rem;
          text-align: center;
        }

        .mbp-howto__title {
          font-size: 1.6rem;
          font-weight: 700;
          color: #2d1b4e;
          margin: 0 0 0.6rem;
          line-height: 1.2;
        }

        .mbp-howto__description {
          font-size: 0.95rem;
          color: #3b2a58;
          margin: 0 0 1rem;
          line-height: 1.5;
        }

        .mbp-howto__section-label {
          font-size: 1rem;
          font-weight: 700;
          color: #2d1b4e;
          margin: 0;
        }

        /* ── Card grid ── */
        .mbp-howto__body {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: auto auto auto;
          gap: 10px;
          padding: 10px;
          background: #ede5f5;
        }

        /* Card 1 spans all three row-slots on the left */
        .mbp-howto__card--span-left {
          grid-column: 1;
          grid-row: 1 / 4;
        }

        .mbp-howto__card {
          background: #f9f5fd;
          border: 1.5px solid #c4aed8;
          border-radius: 10px;
          padding: 0.85rem 1rem;
        }

        .mbp-howto__card-header {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          margin-bottom: 0.6rem;
        }

        .mbp-howto__number {
          flex-shrink: 0;
          width: 2rem;
          height: 2rem;
          border-radius: 50%;
          background: #5a3e82;
          color: #fff;
          font-size: 1.1rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          line-height: 1;
        }

        .mbp-howto__card-title {
          font-size: 0.95rem;
          font-weight: 700;
          color: #2d1b4e;
          margin: 0;
        }

        .mbp-howto__card p {
          font-size: 0.85rem;
          color: #3b2a58;
          margin: 0 0 0.5rem;
          line-height: 1.45;
        }

        .mbp-howto__card ul {
          margin: 0.4rem 0 0;
          padding-left: 1.2rem;
        }

        .mbp-howto__card ul li {
          font-size: 0.85rem;
          color: #3b2a58;
          margin-bottom: 0.35rem;
          line-height: 1.4;
        }

        /* ── Log On / Need Help box ── */
        .mbp-howto__logon {
          background: #f9f5fd;
          border: 1.5px solid #c4aed8;
          border-radius: 10px;
          padding: 0.85rem 1rem;
          text-align: center;
        }

        .mbp-howto__logon-heading {
          font-size: 0.95rem;
          font-weight: 700;
          color: #2d1b4e;
          margin: 0 0 0.4rem;
        }

        .mbp-howto__logon a {
          font-size: 0.85rem;
          color: #204f9a;
          word-break: break-all;
        }

        .mbp-howto__logon-divider {
          border: none;
          border-top: 1px solid #c4aed8;
          margin: 0.6rem 0;
        }

        .mbp-howto__logon p {
          font-size: 0.82rem;
          color: #3b2a58;
          margin: 0.3rem 0 0;
          line-height: 1.45;
          text-align: left;
        }

        /* ── EASI Edu logo ── */
        .mbp-howto__footer {
          background: #fff;
          padding: 0.9rem 1rem 1rem;
          display: flex;
          justify-content: center;
          align-items: center;
          border-top: 1px solid #e0d4f0;
        }

        .mbp-howto__easi-logo img {
          max-height: 60px;
          width: auto;
        }

        /* ── Responsive: single column on mobile ── */
        @media (max-width: 540px) {
          .mbp-howto__title {
            font-size: 1.25rem;
          }

          .mbp-howto__body {
            grid-template-columns: 1fr;
          }

          .mbp-howto__card--span-left {
            grid-column: 1;
            grid-row: auto;
          }
        }
      `;
      document.head.appendChild(style);
    }

    this.innerHTML = /*html*/ `
      <section class="mbp-howto" aria-label="Welcome to the MyBenefits Portal – How-To Guide">

        <div class="mbp-howto__header">
          <h2 class="mbp-howto__title">Welcome to the MyBenefits Portal</h2>
          <p class="mbp-howto__description">
            The MyBenefits Portal is your secure, online hub for managing your employee
            health benefits anytime, anywhere. Whether you're enrolling for the first time
            or making updates later, MyBenefits puts everything you need in one place.
          </p>
          <p class="mbp-howto__section-label">What You Can Do in MyBenefits?</p>
        </div>

        <div class="mbp-howto__body">

          <!-- Card 1 – spans all three right-column rows on desktop -->
          <article class="mbp-howto__card mbp-howto__card--span-left">
            <div class="mbp-howto__card-header">
              <span class="mbp-howto__number" aria-hidden="true">1</span>
              <h3 class="mbp-howto__card-title">Enroll In Benefits</h3>
            </div>
            <p>
              The MyBenefits Portal is available 24/7 and designed to guide you
              step-by-step through each action. Changes are submitted electronically,
              helping ensure your request is accurate and processed on time.
            </p>
            <ul>
              <li>Complete your new hire enrollment</li>
              <li>Add or remove eligible dependents</li>
              <li>Enroll after a qualifying life event (such as marriage, birth, or loss of other coverage)</li>
            </ul>
          </article>

          <!-- Card 2 -->
          <article class="mbp-howto__card">
            <div class="mbp-howto__card-header">
              <span class="mbp-howto__number" aria-hidden="true">2</span>
              <h3 class="mbp-howto__card-title">View Your Benefits</h3>
            </div>
            <ul>
              <li>View your current coverage at any time, including plan details and selected options.</li>
              <li>Verify that your requested changes were successful by reviewing/downloading confirmation of enrollment notices.</li>
            </ul>
          </article>

          <!-- Card 3 -->
          <article class="mbp-howto__card">
            <div class="mbp-howto__card-header">
              <span class="mbp-howto__number" aria-hidden="true">3</span>
              <h3 class="mbp-howto__card-title">Update Your Information</h3>
            </div>
            <ul>
              <li>Change your address and contact details</li>
              <li>Review and update personal information on file</li>
            </ul>
          </article>

          <!-- Log On / Need Help -->
          <div class="mbp-howto__logon" role="complementary" aria-label="Portal access and support">
            <p class="mbp-howto__logon-heading">Log On Today!</p>
            <a href="https://nmpsiaonline.nmpsia.com/" target="_blank" rel="noopener noreferrer">
              https://nmpsiaonline.nmpsia.com/
            </a>
            <hr class="mbp-howto__logon-divider" />
            <p class="mbp-howto__logon-heading">Need Help?</p>
            <p>
              If you have questions or need assistance using the MyBenefits Portal,
              contact your employer's benefits office. They can help you understand
              deadlines, required documentation, and next steps.
            </p>
          </div>

          <!-- Card 4 -->
          <article class="mbp-howto__card">
            <div class="mbp-howto__card-header">
              <span class="mbp-howto__number" aria-hidden="true">4</span>
              <h3 class="mbp-howto__card-title">Access Important Documents</h3>
            </div>
            <ul>
              <li>Download and save benefit confirmation notices</li>
              <li>Keep records of your enrollment and changes for future reference</li>
            </ul>
          </article>

          <!-- Card 5 -->
          <article class="mbp-howto__card">
            <div class="mbp-howto__card-header">
              <span class="mbp-howto__number" aria-hidden="true">5</span>
              <h3 class="mbp-howto__card-title">Manage Beneficiaries</h3>
            </div>
            <ul>
              <li>View your current beneficiary designations</li>
              <li>Add or update beneficiaries for life insurance</li>
            </ul>
          </article>

        </div>

        <div class="mbp-howto__footer">
          <div class="mbp-howto__easi-logo">
            <img src="/images/carriers/logo11.png" alt="EASI Edu Incorporated" />
          </div>
        </div>

      </section>
    `;
  }
}

customElements.define("mybenefits-portal-howto", MyBenefitsPortalHowTo);
