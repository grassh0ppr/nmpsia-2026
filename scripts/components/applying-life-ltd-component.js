class ApplyingLifeLTD extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /*html*/ `
        <div class="heading-and-element-flexbox">
                    <h2 class="display-4">Applying for Life &amp; LTD Coverage</h2>
                    <img src="images/carriers/logo5.png" alt="NMPSIA logo">
                </div>
                <hr>
        <div class="accordion mb-3" id="applyingLifeLtdProcess">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingApplyLifeLTD">
            <button class="accordion-button" type="button" data-bs-toggle="collapse"
              data-bs-target="#collapseApplyLifeLTD" aria-expanded="true" aria-controls="collapseApplyLifeLTD">
              Applying for Life + LTD Coverage Process
            </button>
          </h2>
          <div id="collapseApplyLifeLTD" class="accordion-collapse collapse show" aria-labelledby="headingApplyLifeLTD"
            data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <h5>Applying for Life & LTD Coverage - Late Enrollment</h5>
              <ul class="grid-layout-docs my-4">
                <li>
                  <i class="bx bxs-file-pdf"></i>
                  <a href="pdfs/Employee_Flyer_EOI.pdf" class="sidenav-link" target="_blank">Employee Flyer</a>
                </li>
                <li>
                  <i class="bx bxs-file-pdf"></i>
                  <a href="pdfs/Employer_Flyer_EOI.pdf" class="sidenav-link" target="_blank">Employer Flyer</a>
                </li>
              </ul>
              <p class="instructionsBlue">
                This applies to requests for LTD coverage or Additional Life for the employee and Dependent Life
                coverage for spouse.
              </p>
              <p class="instructionsBlue">
                For Additional Life or Long Term Disability that is declined or if the employee chooses to enroll after
                the 31-day enrollment deadline, to add these coverages the employee needs to:
              </p>


              <!-- indent the following div -->
              <div class="indent--1">
                <p>
                  <span class="instructionsGrey">Step 1</span><br />Complete a paper Employee Enrollment/Change Form and
                  submit to your employer’s Benefits office or apply via Employee Login online system.
                </p>
                <p>
                  <span class="instructionsGrey">Step 2</span><br />Respond to Evidence of Insurability email from The
                  Standard to complete the Evidence of Insurability application
                </p>
                <!-- <p>
                  <span class="instructionsGrey">Step 3</span><br />Submit
                  both forms to your employer's Benefits Office. They will
                  send to the NMPSIA administrator who will expedite to The
                  Standard for review.
                </p> -->
                <!-- more indentation on the following p -->
                <!-- <p>
                  If you do not want to send the Medical History Statement to
                  your employer's Benefits Office, you may mail it to the
                  address on the form.
                  <em>You MUST submit the NMPSIA Employee Change Card to your
                    employer's Benefits Office before you mail the Medical
                    History Statement to The Standard.</em>
                </p> -->
              </div>
              <!-- no indentation on the following p, back to normal -->
              <p style="color: crimson">
                <b>Note</b>: The late enrollment process is available anytime of the year. A tutorial can be found <a
                  href="https://players.brightcove.net/1079186452001/default_default/index.html?videoId=6301863152001"
                  target="_blank">here</a>.
              </p>
              <p>
                <i class="bx bx-info-circle"></i>
                <b>What is evidence of insurability?</b> <br />
                EOI is a statement or proof of a person's physical condition
                that is required to obtain certain types of insurance.
              </p>


            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
              data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
              Life and Disability Certificates and Booklets
            </button>
          </h2>
          <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne"
            data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <ul>
                <li>
                  <a class="dropdown-item" target="_blank" href="https://www.standard.com/eforms/16927_645549.pdf"><i
                      class="bx bx-link-external"></i> Basic and Additional
                    Life Certificate</a>
                </li>
                <li>
                  <a class="dropdown-item" target="_blank" href="https://www.standard.com/eforms/10391d_645549c2.pdf"><i
                      class="bx bx-link-external"></i> Group Additional Life
                    and AD&D Booklet</a>
                </li>
                <li>
                  <a class="dropdown-item" target="_blank" href="https://www.standard.com/eforms/16928_645549.pdf"><i
                      class="bx bx-link-external"></i> Long Term Disability
                    Certificate</a>
                </li>
                <li>
                  <a class="dropdown-item" target="_blank" href="https://www.standard.com/eforms/10386d_645549.pdf"><i
                      class="bx bx-link-external"></i> Long Term Disability
                    Employee Booklet
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwo">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
              data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Claim Packets and Forms
            </button>
          </h2>
          <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <ul>
                <li>
                  <a class="dropdown-item" target="_blank" href="https://www.standard.com/eforms/6913_645549.pdf"><i
                      class="bx bxs-file-pdf"></i> Accelerated Benefit Claim
                    Packet</a>
                </li>
                <li>
                  <a href="https://www.standard.com/eforms/2720_645549.pdf" target="_blank" class="dropdown-item"><i
                      class="bx bxs-file-pdf"></i> Accidental
                    Dismemberment</a>
                </li>
                <li>
                  <a href="https://www.standard.com/eforms/4044_645549.pdf" target="_blank" class="dropdown-item"><i
                      class="bx bxs-file-pdf"></i> Continued Dependent Life
                    Insurance for Disabled Child</a>
                </li>
                <li>
                  <a class="dropdown-item" target="_blank" href="https://www.standard.com/eforms/9563_645549.pdf"><i
                      class="bx bxs-file-pdf"></i> Group Conversion
                    Packet</a>
                </li>
                <li>
                  <a class="dropdown-item" target="_blank" href="https://www.standard.com/eforms/1794_645549.pdf"><i
                      class="bx bxs-file-pdf"></i> Life Claim Packet</a>
                </li>
                <li>
                  <a class="dropdown-item" target="_blank" href="https://www.standard.com/eforms/9178_645549.pdf"><i
                      class="bx bxs-file-pdf"></i> Portability
                    Application</a>
                </li>
                <li>
                  <a class="dropdown-item" target="_blank" href="https://www.standard.com/eforms/1598a_645549.pdf"><i
                      class="bx bxs-file-pdf"></i> Request for Group Life
                    Conversion Materials</a>
                </li>
                <li>
                  <a class="dropdown-item" target="_blank" href="https://www.standard.com/eforms/13789_645549.pdf"><i
                      class="bx bxs-file-pdf"></i> Specified Disease Benefit
                    Packet</a>
                </li>
                <li>
                  <a class="dropdown-item" target="_blank" href="https://www.standard.com/eforms/3379_645549.pdf"><i
                      class="bx bxs-file-pdf"></i> Long Term Disability
                    Claim Packet</a>
                </li>
                <li>
                  <a class="dropdown-item" target="_blank" href="https://www.standard.com/eforms/1284_645549.pdf"><i
                      class="bx bxs-file-pdf"></i> Waiver of Premium Claim
                    Packet</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="accordion-item">
          <h2 class="accordion-header" id="headingThree">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
              data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              Helpful Information
            </button>
          </h2>
          <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
            data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <ul>
                <li>
                  <a class="dropdown-item" target="_blank" href="http://www.standard.com/eforms/17041.pdf"><i
                      class="bx bxs-file-pdf"></i> Beneficiary Questions</a>
                </li>
                <li>
                  <a class="dropdown-item" target="_blank"
                    href="/pdfs/Options_for_Continuing_Life_Insurance_8.2020-1.pdf"><i class="bx bxs-file-pdf"></i>
                    Options for Continuing
                    Life Insurance</a>
                </li>
                <li>
                  <a class="dropdown-item" target="_blank" href="https://www.standard.com/eforms/18955_645549.pdf"><i
                      class="bx bxs-file-pdf"></i> Travel Assistance and
                    Life Services Toolkit Brochure</a>
                </li>
                <li>
                  <a class="dropdown-item" target="_blank" href="https://www.standard.com/eforms/17526.pdf"><i
                      class="bx bxs-file-pdf"></i> Life Services Toolkit
                    (English)</a>
                </li>
                <li>
                  <a class="dropdown-item" target="_blank" href="https://www.standard.com/eforms/17526spu.pdf"><i
                      class="bx bxs-file-pdf"></i> Life Services Toolkit
                    (Spanish)</a>
                </li>
                <li>
                  <a class="dropdown-item" target="_blank" href="https://www.standard.com/eforms/14684.pdf"><i
                      class="bx bxs-file-pdf"></i> Travel Assist Flyer
                    (English)</a>
                </li>
                <li>
                  <a class="dropdown-item" target="_blank" href="https://www.standard.com/eforms/14684spu.pdf"><i
                      class="bx bxs-file-pdf"></i> Travel Assist Flyer
                    (Spanish)</a>
                </li>
                <li>
                  <a class="dropdown-item" target="_blank" href="/pdfs/Travel_Assistance_Program_Description.pdf"><i
                      class="bx bxs-file-pdf"></i> Travel Assistance Program
                    Description</a>
                </li>
                <li>
                  <a class="dropdown-item" target="_blank"
                    href="/pdfs/Employers_Guide_Taxation_IncomeReplacementBenefits.pdf"><i class="bx bxs-file-pdf"></i>
                    For Employers: Guide to
                    Taxation to Income Replacement (LTD) Benefits</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
        `;
  }
}

customElements.define('applying-life-ltd-info', ApplyingLifeLTD);