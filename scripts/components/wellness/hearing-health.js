class HearingHealth extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /*html*/ `
    <div class="heading-and-element-flexbox">
      <h2 class="display-4">Hearing Health Resources</h2>
      <img src="images/nmpsia_logo_2024.png" alt="NMPSIA logo" />
    </div>
    <div class="container banner">
      <img src="images/wellness/yunus-tug-hearing-health-unsplash.jpg" alt="Hearing health banner" />
    </div>
    <h3 class="sub-heading">BlueCross BlueShield of New Mexico</h3>
    <ul class="content-list">
      <li>
        <i class="bx bxs-file-pdf"></i>
        <a href="/wellness/hearing/NM ENG Group Blue365 Overview Member Flyer Hearing.pdf" target="_blank">BCBS - Blue365 Hearing Discount Program Flyer</a>
      </li>
      <li>
        <i class="bx bx-link-external"></i>
        <a href="https://www.blue365deals.com/BCBSNM/join?destination=%2Foffers%3Fcategory%255Bhearing_aids%255D%3Dh%E2%80%A6" target="_blank">BCBS - Blue365 Hearing Discount Program Information</a>
      </li>
      <li>
        <i class="bx bxs-detail"></i>
        <a href="#" data-bs-toggle="modal" data-bs-target="#blue365HowToModal">How to Get Started with Blue365 Hearing Benefits through BCBS</a>
      </li>
    </ul>

    <!-- BCBS Blue365 How-To Modal -->
    <div class="modal fade" id="blue365HowToModal" tabindex="-1" aria-labelledby="blue365HowToModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg modal-dialog-scrollable document-modal">
        <div class="modal-content">
          <div class="modal-header">
            <h2 class="modal-title" id="blue365HowToModalLabel">How to use Blue365</h2>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <p>Blue365 offers savings on health and wellness products and services that are not covered by insurance. The supplied flyer lists <strong>TruHearing, Beltone, and Start Hearing</strong> as hearing discount options.</p>
            <ol>
              <li>
                <strong>Visit the BCBSNM Blue365 website.</strong>
                <p>Go to blue365deals.com/bcbsnm.</p>
              </li>
              <li>
                <strong>Sign up for Blue365.</strong>
                <p>Follow the website registration instructions for BCBSNM members.</p>
              </li>
              <li>
                <strong>Explore hearing offers.</strong>
                <p>Review available vendors, discounts, eligibility, and offer terms. Discounts may also be available for immediate family members.</p>
              </li>
              <li>
                <strong>Follow the selected offer instructions.</strong>
                <p>Use the vendor contact or redemption steps shown in the offer to arrange services.</p>
              </li>
            </ol>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>

    <h3 class="sub-heading">Davis Vision</h3>
    <ul class="content-list">
      <li>
        <i class="bx bxs-file-pdf"></i>
        <a href="/wellness/hearing/Davis Vision Hearing Aid Discount Program.pdf" target="_blank">Davis Vision Hearing Aid Discount Program Flyer</a>
      </li>
      <li>
        <i class="bx bx-link-external"></i>
        <a href="https://davisvision.yourhearing.com" target="_blank">Davis Vision Hearing Aid Discount Program Information</a>
      </li>
      <li>
        <i class="bx bxs-detail"></i>
        <a href="#" data-bs-toggle="modal" data-bs-target="#truHearingDavisModal">How to Get Started with Hearing Benefits through Davis Vision</a>
      </li>
    </ul>

    <!-- Davis Vision Hearing How-To Modal -->
    <div class="modal fade" id="truHearingDavisModal" tabindex="-1" aria-labelledby="truHearingDavisModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg modal-dialog-scrollable document-modal">
        <div class="modal-content">
          <div class="modal-header">
            <h2 class="modal-title" id="truHearingDavisModalLabel">How to Get Started with Hearing Benefits through Davis Vision</h2>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <h3>Through Your Hearing Network</h3>
            <p>Members can get started by calling <strong>1-888-809-0044</strong> or visiting <a href="https://davisvision.yourhearing.com" target="_blank">davisvision.yourhearing.com</a> — the dedicated hearing program member line and website listed on the flyer.</p>
            <p>A representative can help them locate a participating hearing care provider and assist with scheduling a hearing exam.</p>
            <p>If hearing aids are recommended, members can take advantage of the program's discounted pricing and other hearing aid benefits.</p>
            <p><a href="/wellness/hearing/Davis Vision Hearing Aid Discount Program.pdf" target="_blank">Check this program flyer</a> for additional details, contact information, and program features.</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>

    <h3 class="sub-heading">Presbyterian Health Plan</h3>
    <ul class="content-list">
      <li>
        <i class="bx bxs-file-pdf"></i>
        <a href="/wellness/hearing/Pres True Hearing Flyer.pdf" target="_blank">Presbyterian TruHearing Flyer</a>
      </li>
      <li>
        <i class="bx bx-link-external"></i>
        <a href="https://www.shoeboxonline.com/truhearing-presbyterian/" target="_blank">Presbyterian TruHearing Program Information</a>
      </li>
      <li>
        <i class="bx bxs-detail"></i>
        <a href="#" data-bs-toggle="modal" data-bs-target="#truHearingPresModal">How to Get Started with TruHearing through Presbyterian</a>
      </li>
    </ul>

    <!-- TruHearing Presbyterian How-To Modal -->
    <div class="modal fade" id="truHearingPresModal" tabindex="-1" aria-labelledby="truHearingPresModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg modal-dialog-scrollable document-modal">
        <div class="modal-content">
          <div class="modal-header">
            <h2 class="modal-title" id="truHearingPresModalLabel">How to Use Your Presbyterian TruHearing Benefit</h2>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <ol>
              <li>
                <strong>Call TruHearing.</strong>
                <p>Call <strong>1-833-731-4168</strong> (TTY: <strong>711</strong>), Monday–Friday, <strong>8 a.m.–8 p.m.</strong> A Hearing Consultant can answer questions and help you get started.</p>
              </li>
              <li>
                <strong>Confirm your benefit and costs.</strong>
                <p>Ask the consultant to verify your current hearing aid coverage, exam copay, hearing aid copays, and any additional fees.</p>
              </li>
              <li>
                <strong>Schedule your hearing exam.</strong>
                <p>The consultant will help schedule an appointment with a licensed <strong>TruHearing network provider</strong> near you. The exam must be performed by a network provider to use the benefit described in the <a href="/wellness/hearing/Pres True Hearing Flyer.pdf" target="_blank">flyer</a>.</p>
              </li>
              <li>
                <strong>Attend your appointment.</strong>
                <p>The provider will evaluate your hearing and discuss hearing aid options that fit your needs.</p>
              </li>
              <li>
                <strong>Select and order your hearing aids.</strong>
                <p>If hearing aids are recommended, review the available styles, features, and total cost with your provider before ordering.</p>
              </li>
              <li>
                <strong>Attend your fitting.</strong>
                <p>Your provider will fit and adjust your hearing aids and explain how to use and care for them.</p>
              </li>
              <li>
                <strong>Use your trial period and follow-up care.</strong>
                <p>The <a href="/wellness/hearing/Pres True Hearing Flyer.pdf" target="_blank">Presbyterian TruHearing Flyer</a> lists a <strong>60-day risk-free trial</strong>, <strong>one year of follow-up visits</strong>, and a <strong>three-year manufacturer warranty</strong>. Ask about applicable repair or replacement fees.</p>
              </li>
            </ol>
            <p><strong>Learn more:</strong> <a href="https://www.truhearing.com/Presbyterian-HS" target="_blank">TruHearing.com/Presbyterian-HS</a></p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>

    <h3 class="sub-heading">United Concordia Dental</h3>
    <ul class="content-list">
      <li>
        <i class="bx bxs-file-pdf"></i>
        <a href="/wellness/hearing/TruHearing-UCD-EnhancedDiscount-Flyer-1025-P2.pdf" target="_blank">United Concordia Dental - TruHearing Program Flyer</a>
      </li>
      <li>
        <i class="bx bx-link-external"></i>
        <a href="https://www.truhearing.com/unitedconcordiadental/" target="_blank">United Concordia Dental - TruHearing Program Information</a>
      </li>
      <li>
        <i class="bx bxs-detail"></i>
        <a href="#" data-bs-toggle="modal" data-bs-target="#truHearingUCDModal">How to Get Started with TruHearing through United Concordia Dental</a>
      </li>
    </ul>

    <!-- TruHearing UCD How-To Modal -->
    <div class="modal fade" id="truHearingUCDModal" tabindex="-1" aria-labelledby="truHearingUCDModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg modal-dialog-scrollable document-modal">
        <div class="modal-content">
          <div class="modal-header">
            <h2 class="modal-title" id="truHearingUCDModalLabel">How to use TruHearing</h2>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <p><strong>Call 1-833-723-8777 | TTY: 711</strong></p>
            <ol>
              <li>
                <strong>Call to book your appointment.</strong>
                <p>Contact TruHearing to arrange a visit with a hearing care provider.</p>
              </li>
              <li>
                <strong>Visit for a hearing exam.</strong>
                <p>The provider performs an exam and discusses your hearing needs.</p>
              </li>
              <li>
                <strong>Select and order hearing aids.</strong>
                <p>Your provider helps you choose hearing aids and places the order.</p>
              </li>
              <li>
                <strong>Attend your fitting.</strong>
                <p>The provider ensures your hearing aids fit properly.</p>
              </li>
              <li>
                <strong>Return for follow-up care.</strong>
                <p>Receive in-office support after your purchase.</p>
              </li>
            </ol>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  `;
  }
}

customElements.define("hearing-health", HearingHealth);
