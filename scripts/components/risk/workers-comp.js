class WorkersComp extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /*html*/ `
    <div class="header-flex">
            <h3
              class="display-5"
              style="border-bottom: 1px solid #eee; padding-bottom: 32px"
            >
              Workers' Compensation
            </h3>
            <img style="max-width: 140px; width: 100%; height: auto;" src="images/Logo_CCMSI.png" alt="CCMSI logo" />
          </div>

          <h5 class="mt-4 subheading">
            Reporting a Workers' Compensation Claim:
          </h5>
          <p>
            <span class="emphasis"
              >The Internal (customizable) First Report of Injury (FROI)</span
            >
            may be uploaded & submitted electronically into the
            <span class="emphasis"
              >CCMSI Internet Claims Edge system (ICE)</span
            >
            or scanned/emailed to the dedicated Workers' Compensation email of
            <a href="mailto:nmpsiawc@ccmsi.com">nmpsiawc@ccmsi.com</a>. CCMSI
            encourages NMPSIA members to obtain an ICE ID to submit the FROI
            electronically. If you need an ICE ID and passcode, please email a
            supervisor on the list of contacts at the bottom of this page.
          </p>
          <h6 class="mt-4 subsubheading">
            Timely Reporting of Workers' Compensation Claims and Potential
            Penalties
          </h6>
          <p>
            NMPSIA requests that all Members submit FROIs to CCMSI within twenty
            four (24) hours but no later than seventy two (72) hours of their
            first knowledge of the injury or illness.
          </p>
          <h6 class="mt-2">NMAC Rule 11.4.3.13.B(4) states the following:</h6>
          <blockquote class="fancy">
            (4) The employer shall report every accident to their insurer or, in
            the case of self-insured employer or member of a self-insurance
            group, their claims administrator, whether or not the employer
            considers the claim to be valid, within 72 hours of the earlier of:
          </blockquote>
          <blockquote class="ms-5 ps-5 fancy">
            (a) actual knowledge of the accident by the employer, or
          </blockquote>
          <blockquote class="ms-5 ps-5 fancy">
            (b) presentation of a notice of accident form to the employer.
          </blockquote>
          <div class="my-3">
            <h5 class="emphasis text-danger mb-0">Please note:</h5>
            <p class="emphasis fancy text-danger">
              Under Section 52-1-61 (NMSA 1978), Employers who report injuries
              late are subject to penalties of up to one thousand dollars
              ($1,000) for each occurrence.
            </p>
          </div>
          <h5 class="subsubheading mt-4">Claims Workbook:</h5>
          <p>
            General information about reporting, investigating and managing
            Workers' Compensation Claims can be found in the
          </p>

          <p class="ms-5 ps-5">
            <i class="bx bxs-edit"></i>
            <a
              href="/pdfs/CCMSI_Workbook_for_NMPSIA_Member_20180823_2.pdf"
              target="_blank"
              >Workers' Compensation and Property & Liability Claims Workbook
              (fillable PDF)</a
            >
          </p>

          <h5 class="mt-5 subheading">
            Workers' Compensation Forms &amp; Policy Options
          </h5>
          <!-- accordion -->
          <div class="accordion" id="workersCompAccordion">
            <!-- FORMS -->
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Forms
                </button>
              </h2>
              <div
                id="collapseOne"
                class="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#workersCompAccordion"
              >
                <div class="accordion-body">
                  <ul class="grid-layout-docs">
                    <li>
                      <i class="bx bxs-file-pdf"></i>
                      <a
                        href="/pdfs/Notice_of_Accident_Form.pdf"
                        class="sidenav-link"
                        target="_blank"
                        >Notice of Accident or Occupational Disease</a
                      >
                    </li>

                    <li>
                      <i class="bx bxs-file-pdf"></i>
                      <a
                        href="/pdfs/poms-risk-docs/NOA-2_Employees_Choice.pdf"
                        class="sidenav-link"
                        target="_blank"
                        >Alternative Notice of Accident (NOA-2 Employee's
                        Choice)</a
                      >
                    </li>
                    <li>
                      <i class="bx bxs-file-pdf"></i>
                      <a
                        href="/pdfs/poms-risk-docs/workers-comp/Supervisors_WC_GrabNGo_Kit/Internal_First_Report_of_Injury_Customizable_Template.docx"
                        class="sidenav-link"
                        target="_blank"
                        >Internal First Report of Injury - Customizable
                        Template</a
                      >
                    </li>
                    <li>
                      <i class="bx bxs-file-doc"></i>
                      <a
                        href="/PDFs/poms-risk-docs/workers-comp/WC_Quick_Start_2025.docx"
                        >QUICK START - Workers' Compensation reporting</a
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <!-- accordion item for Grab N Go Kits -->
            <div class="accordion-item">
              <h2 class="accordion-header" id="wcKitsFull">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapsewcKitsFull"
                  aria-expanded="false"
                  aria-controls="collapsewcKitsFull"
                >
                  WC Grab-N-Go Kits
                </button>
              </h2>
              <div
                id="collapsewcKitsFull"
                class="accordion-collapse collapse"
                aria-labelledby="headingwcKitsFull"
                data-bs-parent="#workersCompAccordion"
              >
                <div class="accordion-body">
                  <ul class="grid-layout-docs">
                    <li>
                      <i class="bx bx-folder"></i>
                      <a href="#" data-bs-toggle="modal" data-bs-target="#supervisorsWCKitModal" class="sidenav-link"
                        >Supervisors' WC Grab-N-Go Kit</a
                      >
                    </li>

                    <li>
                      <i class="bx bx-folder"></i>
                      <a href="#" data-bs-toggle="modal" data-bs-target="#workersWCKitModal" class="sidenav-link"
                        >Workers' WC Grab-N-Go Toolkit</a
                      >
                    </li>

                    <li>
                      <i class="bx bx-folder"></i>
                      <a href="#" data-bs-toggle="modal" data-bs-target="#employersWCKitModal" class="sidenav-link"
                        >Employers' WC Grab-N-Go Toolkit</a
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- *** SAMPLE WORKERS COMP POLICY OPTIONS *** -->
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingTwo">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Sample Workers' Compensation Policy Options
                </button>
              </h2>
              <div
                id="collapseTwo"
                class="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#workersCompAccordion"
              >
                <div class="accordion-body">
                  <ul class="grid-layout-docs">
                    <li>
                      <i class="bx bxs-file-pdf"></i>
                      <a
                        href="https://view.officeapps.live.com/op/view.aspx?src=https%3A%2F%2Fnmpsia.com%2Fdocs%2FOPTION_1_WC_POLICY.DOC&wdOrigin=BROWSELINK"
                        class="sidenav-link"
                        >Workers' Compensation Policy Option 1</a
                      >
                    </li>
                    <li>
                      <i class="bx bxs-file-pdf"></i>
                      <a
                        href="https://view.officeapps.live.com/op/view.aspx?src=https%3A%2F%2Fnmpsia.com%2Fdocs%2FOPTION_2_WC_POLICY.DOC&wdOrigin=BROWSELINK"
                        class="sidenav-link"
                        >Workers' Compensation Policy Option 2</a
                      >
                    </li>
                    <li>
                      <i class="bx bxs-file-pdf"></i>
                      <a
                        href="https://view.officeapps.live.com/op/view.aspx?src=https%3A%2F%2Fnmpsia.com%2Fdocs%2FOPTION_3_WC_POLICY.DOC&wdOrigin=BROWSELINK"
                        class="sidenav-link"
                        >Workers' Compensation Policy Option 3</a
                      >
                    </li>
                    <li>
                      <i class="bx bxs-file-pdf"></i>
                      <a
                        href="https://view.officeapps.live.com/op/view.aspx?src=https%3A%2F%2Fnmpsia.com%2Fdocs%2FOPTION_4_WC_POLICY.DOC&wdOrigin=BROWSELINK"
                        class="sidenav-link"
                        >Workers' Compensation Policy Option 4</a
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <!-- CCMSI Workers' Compensation team contact cards -->
          <h5 class="subheading mt-5 mb-3">CCMSI Workers' Compensation Team</h5>
          <ul class="wc-contact-cards" aria-label="CCMSI Workers' Compensation team contact information">
            <li class="wc-contact-card">
              <h6 class="wc-contact-name">Cindy Carrillo</h6>
              <p class="wc-contact-title">NMPSIA Claims Supervisor</p>
              <dl class="wc-contact-details">
                <dt><i class="bx bx-phone" aria-hidden="true"></i><span class="wc-contact-label">Office</span></dt>
                <dd><a href="tel:15054319287">(505) 431-9287</a></dd>
                <dt><i class="bx bx-printer" aria-hidden="true"></i><span class="wc-contact-label">Fax</span></dt>
                <dd>(217) 477-6342</dd>
                <dt><i class="bx bx-envelope" aria-hidden="true"></i><span class="wc-contact-label">Email</span></dt>
                <dd><a href="mailto:cindy.carrillo@ccmsi.com">cindy.carrillo@ccmsi.com</a></dd>
              </dl>
            </li>

            <li class="wc-contact-card">
              <h6 class="wc-contact-name">Renee Cobb</h6>
              <p class="wc-contact-title">NMPSIA Claims Supervisor</p>
              <dl class="wc-contact-details">
                <dt><i class="bx bx-phone" aria-hidden="true"></i><span class="wc-contact-label">Office</span></dt>
                <dd><a href="tel:15058378711">(505) 837-8711</a></dd>
                <dt><i class="bx bx-printer" aria-hidden="true"></i><span class="wc-contact-label">Fax</span></dt>
                <dd>(217) 477-5924</dd>
                <dt><i class="bx bx-envelope" aria-hidden="true"></i><span class="wc-contact-label">Email</span></dt>
                <dd><a href="mailto:renee.cobb@ccmsi.com">renee.cobb@ccmsi.com</a></dd>
              </dl>
            </li>

            <li class="wc-contact-card">
              <h6 class="wc-contact-name">Audrey Perea</h6>
              <p class="wc-contact-title">NMPSIA Claims Representative</p>
              <dl class="wc-contact-details">
                <dt><i class="bx bx-phone" aria-hidden="true"></i><span class="wc-contact-label">Office</span></dt>
                <dd><a href="tel:15058378714">(505) 837-8714</a></dd>
                <dt><i class="bx bx-printer" aria-hidden="true"></i><span class="wc-contact-label">Fax</span></dt>
                <dd>(217) 477-3118</dd>
                <dt><i class="bx bx-envelope" aria-hidden="true"></i><span class="wc-contact-label">Email</span></dt>
                <dd><a href="mailto:audrey.perea@ccmsi.com">audrey.perea@ccmsi.com</a></dd>
              </dl>
            </li>

            <li class="wc-contact-card">
              <h6 class="wc-contact-name">Elka Espinoza-Medina</h6>
              <p class="wc-contact-title">NMPSIA Claims Representative</p>
              <dl class="wc-contact-details">
                <dt><i class="bx bx-phone" aria-hidden="true"></i><span class="wc-contact-label">Office</span></dt>
                <dd><a href="tel:15054319274">(505) 431-9274</a></dd>
                <dt><i class="bx bx-printer" aria-hidden="true"></i><span class="wc-contact-label">Fax</span></dt>
                <dd>(217) 477-5470</dd>
                <dt><i class="bx bx-envelope" aria-hidden="true"></i><span class="wc-contact-label">Email</span></dt>
                <dd><a href="mailto:emedina@ccmsi.com">emedina@ccmsi.com</a></dd>
              </dl>
            </li>

            <li class="wc-contact-card">
              <h6 class="wc-contact-name">Haley Magwood</h6>
              <p class="wc-contact-title">NMPSIA Claims Representative</p>
              <dl class="wc-contact-details">
                <dt><i class="bx bx-phone" aria-hidden="true"></i><span class="wc-contact-label">Office</span></dt>
                <dd><a href="tel:15055442288">(505) 544-2288</a></dd>
                <dt><i class="bx bx-printer" aria-hidden="true"></i><span class="wc-contact-label">Fax</span></dt>
                <dd>(217) 477-5948</dd>
                <dt><i class="bx bx-envelope" aria-hidden="true"></i><span class="wc-contact-label">Email</span></dt>
                <dd><a href="mailto:hmagwood@ccmsi.com">hmagwood@ccmsi.com</a></dd>
              </dl>
            </li>

            <li class="wc-contact-card">
              <h6 class="wc-contact-name">Natasha Orona</h6>
              <p class="wc-contact-title">NMPSIA Claims Representative</p>
              <dl class="wc-contact-details">
                <dt><i class="bx bx-phone" aria-hidden="true"></i><span class="wc-contact-label">Phone</span></dt>
                <dd><a href="tel:15054319283">(505) 431-9283</a></dd>
                <dt><i class="bx bx-printer" aria-hidden="true"></i><span class="wc-contact-label">Fax</span></dt>
                <dd>(217) 477-7462</dd>
                <dt><i class="bx bx-envelope" aria-hidden="true"></i><span class="wc-contact-label">Email</span></dt>
                <dd><a href="mailto:natasha.orona@ccmsi.com">natasha.orona@ccmsi.com</a></dd>
              </dl>
            </li>

            <li class="wc-contact-card">
              <h6 class="wc-contact-name">Nicole Lujan</h6>
              <p class="wc-contact-title">NMPSIA Claims Representative</p>
              <dl class="wc-contact-details">
                <dt><i class="bx bx-phone" aria-hidden="true"></i><span class="wc-contact-label">Office</span></dt>
                <dd><a href="tel:15054319275">(505) 431-9275</a></dd>
                <dt><i class="bx bx-printer" aria-hidden="true"></i><span class="wc-contact-label">Fax</span></dt>
                <dd>(217) 477-6705</dd>
                <dt><i class="bx bx-envelope" aria-hidden="true"></i><span class="wc-contact-label">Email</span></dt>
                <dd><a href="mailto:nicole.lujan@ccmsi.com">nicole.lujan@ccmsi.com</a></dd>
              </dl>
            </li>

            <li class="wc-contact-card">
              <h6 class="wc-contact-name">Sharon Griego</h6>
              <p class="wc-contact-title">NMPSIA Claims Representative</p>
              <dl class="wc-contact-details">
                <dt><i class="bx bx-phone" aria-hidden="true"></i><span class="wc-contact-label">Office</span></dt>
                <dd><a href="tel:15058378713">(505) 837-8713</a></dd>
                <dt><i class="bx bx-printer" aria-hidden="true"></i><span class="wc-contact-label">Fax</span></dt>
                <dd>(217) 477-6812</dd>
                <dt><i class="bx bx-envelope" aria-hidden="true"></i><span class="wc-contact-label">Email</span></dt>
                <dd><a href="mailto:sharon.griego@ccmsi.com">sharon.griego@ccmsi.com</a></dd>
              </dl>
            </li>
          </ul>
    `;
  }
}

customElements.define("workers-comp", WorkersComp);
