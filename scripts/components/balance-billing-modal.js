class BalanceBillingModal extends HTMLElement {
  connectedCallback() {
    if (!document.getElementById("balance-billing-modal-styles")) {
      const style = document.createElement("style");
      style.id = "balance-billing-modal-styles";
      style.textContent = `
        #balanceBillingModal .modal-body {
          color: #212529;
        }

        #balanceBillingModal h3 {
          font-size: 1.1rem;
          font-weight: 700;
          color: #204f9a;
          margin-top: 1.75rem;
          margin-bottom: 0.75rem;
          text-decoration: underline;
        }

        #balanceBillingModal h3:first-of-type {
          margin-top: 0.5rem;
        }

        #balanceBillingModal h4 {
          font-size: 1rem;
          font-weight: 700;
          color: #212529;
          margin-top: 1.25rem;
          margin-bottom: 0.5rem;
        }

        #balanceBillingModal p {
          margin-bottom: 1rem;
          line-height: 1.6;
        }

        #balanceBillingModal ul,
        #balanceBillingModal ol {
          margin-bottom: 1rem;
          padding-left: 1.75rem;
        }

        #balanceBillingModal li {
          margin-bottom: 0.5rem;
          line-height: 1.6;
        }

        #balanceBillingModal .intro-box {
          border: 1px solid #212529;
          padding: 1rem 1.25rem;
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }

        #balanceBillingModal .page-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: #204f9a;
          text-align: center;
          margin-bottom: 1.25rem;
        }

        #balanceBillingModal .revised-date {
          text-align: right;
          font-style: italic;
          color: #6c757d;
          margin-top: 1.5rem;
        }
      `;
      document.head.appendChild(style);
    }

    this.innerHTML = /*html*/ `
      <div
        class="modal fade"
        id="balanceBillingModal"
        tabindex="-1"
        aria-labelledby="balanceBillingModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg modal-dialog-scrollable document-modal">
          <div class="modal-content">
            <div class="modal-header">
              <div class="d-flex align-items-center gap-3">
                <img
                  src="images/nmpsia_logo_2024.png"
                  alt="NMPSIA logo"
                  class="modal-header-logo"
                />
                <h2 class="modal-title mb-0" id="balanceBillingModalLabel">
                  Balance Billing Notification
                </h2>
              </div>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">

              <p class="page-title">Your Rights and Protections Against Surprise Medical Bills</p>

              <div class="intro-box">
                <p class="mb-0">When you get emergency care or get treated by an out-of-network provider at an in-network hospital or ambulatory surgical center, you are protected from surprise billing or balance billing. In these cases, you shouldn&rsquo;t be charged more than your plan&rsquo;s copayments, coinsurance and/or deductible.</p>
              </div>

              <h3>What is &ldquo;balance billing&rdquo; (sometimes called &ldquo;surprise billing&rdquo;)?</h3>
              
              <p>When you see a doctor or other health care provider, you may owe certain <a href="https://www.healthcare.gov/glossary/out-of-pocket-costs/" target="_blank">out-of-pocket</a> costs, such as a <a href="https://www.healthcare.gov/glossary/co-payment/" target="_blank">copayment</a>, <a href="https://www.healthcare.gov/glossary/co-insurance/" target="_blank">coinsurance</a>, and/or a <a href="https://www.healthcare.gov/glossary/deductible/" target="_blank">deductible</a>. You may have additional costs or have to pay the entire bill if you see a provider or visit a healthcare facility that isn&rsquo;t in your health plan&rsquo;s network.</p>

              <p>&ldquo;<strong>Out-of-network</strong>&rdquo; means providers and facilities that haven&rsquo;t signed a contract with your health plan to provide services. Out-of-network providers may be allowed to bill you for the difference between what your plan pays and the full amount charged for a service. This is called &ldquo;<strong>balance billing</strong>.&rdquo; This amount is likely more than in-network costs for the same service and might not count toward your plan&rsquo;s deductible or annual out-of-pocket limit.</p>

              <p>&ldquo;<strong>Surprise billing</strong>&rdquo; is an unexpected balance bill. This can happen when you can&rsquo;t control who is involved in your care&mdash;like when you have an emergency or when you schedule a visit at an in-network facility but are unexpectedly treated by an out-of-network provider. Surprise medical bills could cost thousands of dollars depending on the procedure or service.</p>

              <h3>You are protected from balance billing for:</h3>

              <h4>Emergency services</h4>
              <p>If you have an emergency medical condition and get emergency services from an out-of-network provider or facility, the most they can bill you is your plan&rsquo;s in-network cost-sharing amount (such as copayments, coinsurance and deductibles). You <strong>can&rsquo;t</strong> be balance billed for these emergency services. This includes services you may get after you&rsquo;re in stable condition, unless you give written consent and give up your protections not to be balanced billed for these post-stabilization services.</p>

              <h4>Certain services at an in-network hospital or ambulatory surgical center</h4>
              <p>When you get services from an in-network hospital or ambulatory surgical center, certain providers there may be out-of-network. In these cases, the most those providers may bill you is your plan&rsquo;s in-network cost-sharing amount. This applies to emergency medicine, anesthesia, pathology, radiology, laboratory, neonatology, assistant surgeon, hospitalist, or intensivist services. These providers <strong>can&rsquo;t</strong> balance bill you and may <strong>not</strong> ask you to give up your protections not to be balance billed.</p>

              <p>If you get other services at these in-network facilities, out-of-network providers <strong>can&rsquo;t</strong> balance bill you, unless you give written consent and give up your protections.</p>

              <p><strong>You&rsquo;re <u>never</u> required to give up your protections from balance billing. You also aren&rsquo;t required to get care out-of-network. You can choose a provider or facility in your plan&rsquo;s network.</strong></p>

              <h3>When balance billing isn&rsquo;t allowed, you also have the following protections:</h3>

              <ul>
                <li>You&rsquo;re only responsible for paying your share of the cost (like the copayments, coinsurance, and deductibles that you would pay if the provider or facility was in-network). Your health plan will pay any additional costs to out-of-network providers and facilities directly.</li>
                <li>Generally, your health plan must:
                  <ul>
                    <li>Cover emergency services without requiring you to get approval for services in advance (also known as &ldquo;prior authorization&rdquo;).</li>
                    <li>Cover emergency services by out-of-network providers.</li>
                    <li>Base what you owe the provider or facility (cost-sharing) on what it would pay an in-network provider or facility and show that amount in your explanation of benefits.</li>
                    <li>Count any amount you pay for emergency services or out-of-network services toward your in-network deductible and out-of-pocket limit.</li>
                  </ul>
                </li>
              </ul>

              <p><strong>If you believe you have been wrongly billed</strong> and/or have questions about rights under federal law, contact the Centers for Medicare &amp; Medicaid Services at <a href="mailto:NonFed@cms.hhs.gov">NonFed@cms.hhs.gov</a>.</p>

              <p>Visit the <a href="https://www.cms.gov/newsroom/fact-sheets/what-you-need-know-about-biden-harris-administrations-actions-prevent-surprise-billing-september" target="_blank">CMS website</a> for more information about your rights under federal law.</p>

              <p>Additionally, the state of New Mexico has enacted the Surprise Billing Protection Act. <a href="https://www.osi.state.nm.us/wp-content/uploads/2022/01/Press-Release-Surprise-Billing-Act.pdf" target="_blank">Read more about the Surprise Billing Protection Act</a>. You can also contact your medical insurance carrier directly by visiting <a href="https://nmpsia.com/benefits.html" target="_blank">nmpsia.com/benefits.html</a>.</p>

              <p class="revised-date">Revised January 2025</p>

            </div>
            <div class="modal-footer">
              <a
                href="/pdfs/Balance_Billing_Notice_01012025.pdf"
                target="_blank"
                class="btn btn-outline-secondary"
              >
                <i class="bx bxs-file-pdf me-1" aria-hidden="true"></i>
                Download PDF
              </a>
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define("balance-billing-modal", BalanceBillingModal);
