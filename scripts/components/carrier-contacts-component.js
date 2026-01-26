class CarrierContacts extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /*html*/ `
          <div class="d-flex justify-content-between align-items-center mb-3">
            <h3><i class="bx bx-building-house me-2"></i>Carrier Contacts</h3>
            <a
              href="/pdfs/carriers/carrier_contacts_chart_2025.pdf"
              class="btn btn-primary"
              target="_blank"
            >
              Download PDF
            </a>
          </div>
          <p>
            Contact information for all benefit carriers and administrative
            services.
          </p>

          <div class="carriers-grid">
            <!-- Administrative Services -->
            <div class="carrier-category">
              <h4><i class="bx bx-cog me-2"></i>Administrative Services</h4>
              <div class="carrier-cards">
                <div class="carrier-card">
                  <div class="carrier-header">
                    <img src="images/logo_2022.jpg" alt="NMPSIA" />
                    <h5>NMPSIA</h5>
                  </div>
                  <div class="carrier-details">
                    <p><strong>Customer Service</strong></p>
                    <p>Administrative Issues | Claims | Appeals</p>
                    <a href="tel:18005483724" class="carrier-phone">
                      <i class="bx bx-phone"></i>1-800-548-3724
                    </a>
                    <a
                      href="https://nmpsia.com"
                      class="carrier-website"
                      target="_blank"
                    >
                      <i class="bx bx-link-external"></i>nmpsia.com
                    </a>
                  </div>
                </div>

                <div class="carrier-card">
                  <div class="carrier-header">
                    <img src="images/carriers/logo11.png" alt="ERISA" />
                    <h5>ERISA Administrative Services</h5>
                  </div>
                  <div class="carrier-details">
                    <p><strong>Eligibility & Enrollment</strong></p>
                    <p>Eligibility | Enrollment | Premium Billing | COBRA</p>
                    <a href="tel:18002333164" class="carrier-phone">
                      <i class="bx bx-phone"></i>1-800-233-3164
                    </a>
                    <a
                      href="https://nmpsiaonline.nmpsia.com"
                      class="carrier-website"
                      target="_blank"
                    >
                      <i class="bx bx-link-external"></i>nmpsiaonline.nmpsia.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <!-- Medical Carriers -->
            <div class="carrier-category">
              <h4><i class="bx bx-plus-medical me-2"></i>Medical Carriers</h4>
              <div class="carrier-cards">
                <div class="carrier-card">
                  <div class="carrier-header">
                    <img
                      src="images/carriers/logo10.png"
                      alt="Blue Cross Blue Shield"
                    />
                    <h5>Blue Cross Blue Shield</h5>
                  </div>
                  <div class="carrier-details">
                    <p>
                      <strong>Group #:</strong> N05501 (High), N05502 (Low),
                      213895 (EPO)
                    </p>
                    <a href="tel:18889667742" class="carrier-phone">
                      <i class="bx bx-phone"></i>1-888-966-7742
                    </a>
                    <a
                      href="https://www.bcbsnm.com/nmpsia/"
                      class="carrier-website"
                      target="_blank"
                    >
                      <i class="bx bx-link-external"></i>Visit Website
                    </a>
                  </div>
                </div>

                <div class="carrier-card">
                  <div class="carrier-header">
                    <img src="images/carriers/logo6.png" alt="Presbyterian" />
                    <h5>Presbyterian Health Plan</h5>
                  </div>
                  <div class="carrier-details">
                    <p><strong>Group #:</strong> A0000035</p>
                    <a href="tel:18882757737" class="carrier-phone">
                      <i class="bx bx-phone"></i>1-888-275-7737
                    </a>
                    <a
                      href="https://www.phs.org/health-plans/employer-plans/new-mexico-public-schools-insurance-authority"
                      class="carrier-website"
                      target="_blank"
                    >
                      <i class="bx bx-link-external"></i>Visit Website
                    </a>
                  </div>
                </div>

                <div class="carrier-card">
                  <div class="carrier-header">
                    <img src="images/lantern_logo.png" alt="Lantern" />
                    <h5>Lantern</h5>
                  </div>
                  <div class="carrier-details">
                    <p><strong>Formerly known as Surgery Plus</strong></p>
                    <p>Group #: n/a</p>
                    <a href="tel:18552043922" class="carrier-phone">
                      <i class="bx bx-phone"></i>855-204-3922
                    </a>
                    <a
                      href="https://surgeryplus.com/"
                      class="carrier-website"
                      target="_blank"
                    >
                      <i class="bx bx-link-external"></i>Visit Website
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <!-- Prescription Drugs -->
            <div class="carrier-category">
              <h4><i class="bx bxs-capsule me-2"></i>Prescription Drugs</h4>
              <div class="carrier-cards">
                <div class="carrier-card">
                  <div class="carrier-header">
                    <img
                      src="images/CVS_Caremark_logo.jpg"
                      alt="CVS Caremark"
                    />
                    <h5>CVS Caremark</h5>
                  </div>
                  <div class="carrier-details">
                    <p>
                      <strong>RxBIN:</strong> 004336<br />
                      <strong>RxPCN:</strong> ADV<br />
                      <strong>RxGRP:</strong> RX22AS
                    </p>
                    <a href="tel:18777870652" class="carrier-phone">
                      <i class="bx bx-phone"></i>1-877-787-0652
                    </a>
                    <a
                      href="https://www.caremark.com/"
                      class="carrier-website"
                      target="_blank"
                    >
                      <i class="bx bx-link-external"></i>Visit Website
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <!-- Dental Carriers -->
            <div class="carrier-category">
              <h4><i class="fa-solid fa-tooth me-2"></i>Dental Carriers</h4>
              <div class="carrier-cards">
                <div class="carrier-card">
                  <div class="carrier-header">
                    <img
                      src="images/carriers/logo10.png"
                      alt="BlueCare Dental"
                    />
                    <h5>BlueCare Dental</h5>
                  </div>
                  <div class="carrier-details">
                    <p><strong>Effective 1/1/2025</strong></p>
                    <p>319228 – Low | 319225 – High</p>
                    <a href="tel:18777235697" class="carrier-phone">
                      <i class="bx bx-phone"></i>1-877-723-5697
                    </a>
                    <a
                      href="https://www.bcbsnm.com/nmpsia/benefits/dental"
                      class="carrier-website"
                      target="_blank"
                    >
                      <i class="bx bx-link-external"></i>Visit Website
                    </a>
                  </div>
                </div>

                <div class="carrier-card">
                  <div class="carrier-header">
                    <img src="images/carriers/logo1.png" alt="Delta Dental" />
                    <h5>Delta Dental</h5>
                  </div>
                  <div class="carrier-details">
                    <p><strong>Group #:</strong> 8564 – Low | 8565 – High</p>
                    <a href="tel:18773959420" class="carrier-phone">
                      <i class="bx bx-phone"></i>1-877-395-9420
                    </a>
                    <a
                      href="https://www.deltadentalnm.com/member/nmpsia-members/"
                      class="carrier-website"
                      target="_blank"
                    >
                      <i class="bx bx-link-external"></i>Visit Website
                    </a>
                  </div>
                </div>

                <div class="carrier-card">
                  <div class="carrier-header">
                    <img
                      src="images/UCD_logo_2024.jpg"
                      alt="United Concordia"
                    />
                    <h5>United Concordia Dental</h5>
                  </div>
                  <div class="carrier-details">
                    <p>
                      <strong>Group #:</strong> 812022 (refer to ID card or
                      subgroup #)
                    </p>
                    <a href="tel:18888980370" class="carrier-phone">
                      <i class="bx bx-phone"></i>1-888-898-0370
                    </a>
                    <a
                      href="https://www.unitedconcordia.com/benefits/clients-corner/New-Mexico-Public-School-Client-Corner-Dental-Benefits"
                      class="carrier-website"
                      target="_blank"
                    >
                      <i class="bx bx-link-external"></i>Visit Website
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <!-- Vision -->
            <div class="carrier-category">
              <h4><i class="bx bx-glasses-alt me-2"></i>Vision</h4>
              <div class="carrier-cards">
                <div class="carrier-card">
                  <div class="carrier-header">
                    <img src="images/carriers/logo2.png" alt="Davis Vision" />
                    <h5>Davis Vision</h5>
                  </div>
                  <div class="carrier-details">
                    <p><strong>Group #:</strong> 3066</p>
                    <a href="tel:18009995431" class="carrier-phone">
                      <i class="bx bx-phone"></i>1-800-999-5431
                    </a>
                    <a
                      href="https://www.davisvision.com/member"
                      class="carrier-website"
                      target="_blank"
                    >
                      <i class="bx bx-link-external"></i>Visit Website
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <!-- Life and Disability -->
            <div class="carrier-category">
              <h4><i class="bx bxs-shield me-2"></i>Life and Disability</h4>
              <div class="carrier-cards">
                <div class="carrier-card">
                  <div class="carrier-header">
                    <img src="images/carriers/logo5.png" alt="The Standard" />
                    <h5>The Standard</h5>
                  </div>
                  <div class="carrier-details">
                    <p><strong>Group #:</strong> 645549</p>
                    <a href="tel:18886099763" class="carrier-phone">
                      <i class="bx bx-phone"></i>1-888-609-9763 Ext. 0957
                    </a>
                    <a
                      href="./TheStandard.html"
                      class="carrier-website"
                      target="_blank"
                    >
                      <i class="bx bx-link-external"></i>Visit Website
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          `;
  }
}

customElements.define("carrier-contacts", CarrierContacts);
