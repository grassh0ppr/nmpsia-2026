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
            <img width="140px" src="images/Logo_CCMSI.png" alt="CCMSI logo" />
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
                      <a href="#supervisorsWCKit" class="sidenav-link"
                        >Supervisors' WC Grab-N-Go Kit</a
                      >
                    </li>

                    <li>
                      <i class="bx bx-folder"></i>
                      <a href="#workersWCKit" class="sidenav-link"
                        >Workers' WC Grab-N-Go Toolkit</a
                      >
                    </li>

                    <li>
                      <i class="bx bx-folder"></i>
                      <a href="#employersWCKit" class="sidenav-link"
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
          <!-- table -->
          <table id="ccmsi-wc-contacts" class="table table-striped mt-5 my-2">
            <thead>
              <tr>
                <th scope="col">Team Member</th>
                <th scope="col">Direct Phone &amp; Fax</th>
                <th scope="col">Email</th>
                <th scope="col">Title</th>
              </tr>
            </thead>
            <tbody>
              <!-- <tr>
    
                  <td>Jerry Mayo</td>
                  <td>
                    O: <a href="tel:15058378730">(505) 837-8730</a><br />
                    F: (217) 477-6330
                  </td>
    
                  <td>
                    <a href="mailto:jmayo@ccmsi.com">jmayo@ccmsi.com</a>
                  </td>
                  <td>NMPSIA Claims Supervisor</td>
                </tr> -->
              <tr>
                <td>Cindy Carrillo</td>
                <td>
                  O: <a href="tel:15054319287">(505) 431-9287</a> <br />
                  F: (217) 477-6342
                </td>
                <td>
                  <a href="mailto:cindy.carrillo@ccmsi.com"
                    >cindy.carrillo@ccmsi.com</a
                  >
                </td>
                <td>NMPSIA Claims Supervisor</td>
              </tr>

              <tr>
                <td>Renee Cobb</td>
                <td>
                  O: <a href="tel:15058378711">(505) 837-8711</a> <br />
                  F: (217) 477-5924
                </td>
                <td>
                  <a href="mailto:renee.cobb@ccmsi.com"
                    >renee.cobb@ccmsi.com</a
                  >
                </td>
                <td>NMPSIA Claims Supervisor</td>
              </tr>
              <tr>
                <td>Audrey Perea</td>
                <td>
                  O: <a href="tel:15058378714">(505) 837-8714</a> <br />
                  F: (217) 477-3118
                </td>
                <td>
                  <a href="mailto:audrey.perea@ccmsi.com"
                    >audrey.perea@ccmsi.com</a
                  >
                </td>
                <td>NMPSIA Claims Representative</td>
              </tr>

              <tr>
                <td>Carrie Barnes</td>
                <td>
                  O: <a href="tel:15054319281">(505) 431-9281</a> <br />
                  F: (217) 477-5426
                </td>
                <td>
                  <a href="mailto:carrie.barnes@ccmsi.com"
                    >carrie.barnes@ccmsi.com</a
                  >
                </td>
                <td>NMPSIA Claims Representative</td>
              </tr>

              <tr>
                <td>Elka Espinoza-Medina</td>
                <td>
                  O: <a href="tel:15054319274">(505) 431-9274</a> <br />
                  F: (217) 477-5470
                </td>
                <td>
                  <a href="mailto:emedina@ccmsi.com">emedina@ccmsi.com</a>
                </td>
                <td>NMPSIA Claims Representative</td>
              </tr>

              <tr>
                <td>Haley Magwood</td>
                <td>
                  O: <a href="tel:15055442288">(505) 544-2288</a> <br />
                  F: (217) 477-5948
                </td>
                <td>
                  <a href="mailto:hmagwood@ccmsi.com">hmagwood@ccmsi.com</a>
                </td>
                <td>NMPSIA Claims Representative</td>
              </tr>

              <tr>
                <td>Nicole Lujan</td>
                <td>
                  O: <a href="tel:15054319275">(505) 431-9275</a> <br />
                  F: (217) 477-6705
                </td>
                <td>
                  <a href="mailto:nicole.lujan@ccmsi.com"
                    >nicole.lujan@ccmsi.com</a
                  >
                </td>
                <td>NMPSIA Claims Representative</td>
              </tr>

              <tr>
                <td>Matt Galfano</td>
                <td>
                  O: <a href="tel:15054319280">(505) 431-9280</a> <br />
                  F: (217) 477-7296
                </td>
                <td>
                  <a href="mailto:matt.galfano@ccmsi.com"
                    >matt.galfano@ccmsi.com</a
                  >
                </td>
                <td>NMPSIA Claims Representative</td>
              </tr>
            </tbody>
          </table>
    `;
  }
}

customElements.define("workers-comp", WorkersComp);
