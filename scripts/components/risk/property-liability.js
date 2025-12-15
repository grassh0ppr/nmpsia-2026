class PropertyLiability extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /*html*/ `
    

  <div class="header-flex">
    <h2 class="display-4">Property &amp; Liability Claims</h2>
    <img
      src="images/nmpsia_logo_2024.png"
      alt="NMPSIA logo"
      class="section-logo"
    />
  </div>
  <p>
    Under the supervision of Steve Vanetsky, Senior Claims Supervisor,
    all property and liability claims are assigned to a team of claim
    adjusters. There are currently seven (7) claim adjusters to handle
    and service all of your claims.
  </p>
  <p>
    Following procedure for reporting of claims is important. As soon as
    you obtain knowledge or become aware of a circumstance that could
    give rise to a claim, you should report it immediately using the
    appropriate claim form.
  </p>
  <p>
    If you receive a summons or any written or verbal communication from
    an attorney, contact CCMSI immediately. Any time delay can impact
    the investigation of the allegations.
  </p>
  <p>
    The first reporting notification should be sent directly to
    <a href="#stevePlz">Steve Vanetsky</a>. If he is not available, any
    one of the adjusters will gladly assist you. Simply ask for a
    general liability adjuster and advise the operator that you are a
    Member of the New Mexico Public Schools Insurance Authority.
  </p>

  <ul class="flex-layout-docs ps-0">
    <li>
      <i class="bx bxs-file-pdf"></i>
      <a
        href="/pdfs/CCMSI_Workbook_for_NMPSIA_Member_20180823_2.pdf"
        class="sidenav-link"
        target="_blank"
        >Workers' Compensation and Property & Liability Claims Workbook
        (PDF)</a
      >
    </li>
  </ul>

  <!-- FORMS accordion can go here -->
  <div class="accordion" id="accordionForms">
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingPropLiabForms">
        <button
          class="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsePropLiabForms"
          aria-expanded="true"
          aria-controls="collapsePropLiabForms"
        >
          Forms
        </button>
      </h2>
      <div
        id="collapsePropLiabForms"
        class="accordion-collapse collapse show"
        aria-labelledby="headingPropLiabForms"
        data-bs-parent="#accordionForms"
      >
        <div class="accordion-body">
          <ul>
            <li>
              <a
                href="/pdfs/poms-risk-docs/Student_Incident_Report.pdf"
                target="_blank"
                >Student Accident Report</a
              >
            </li>
            <li>
              <a
                href="/pdfs/poms-risk-docs/Vehicle_Accident_Report.pdf"
                target="_blank"
                >Vehicle Accident Report</a
              >
            </li>
            <li>
              <a
                href="/pdfs/poms-risk-docs/Loss_Report_Property.pdf"
                target="_blank"
                >Property Loss Report</a
              >
            </li>
            <li>
              <a
                href="/pdfs/poms-risk-docs/General_Products_Liability.pdf"
                target="_blank"
                >General/Products Liability Report</a
              >
            </li>
            <li>
              <a
                href="/pdfs/poms-risk-docs/Windshield_Only_Report.pdf"
                target="_blank"
                >Windshield Report</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <!-- tables for steve and claims adjusters -->
  <div id="stevePlz" class="d-flex my-5">
    <table
      style="width: 45%; margin: 0 auto"
      class="table table-striped"
    >
      <thead>
        <tr>
          <th scope="col">Steve Vanetsky, Claims Manager</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Phone: <a href="tel:5058378722">(505) 837-8722</a></td>
        </tr>
        <tr>
          <td>
            Toll free:<a href="tel:18006350679"
              >(800) 635-0679, ext. 8722</a
            >
          </td>
        </tr>
        <tr>
          <td>
            Direct Fax: <a href="tel:12174776317">(217) 477-6317</a>
          </td>
        </tr>
        <tr>
          <td>
            Email:
            <a href="mailto:svanetsky@ccmsi.com">svanetsky@ccmsi.com</a>
          </td>
        </tr>
        <tr>
          <td>
            CCMSI Main Office:
            <a href="tel:5058378700">(505) 837-8700</a>
          </td>
        </tr>
        <tr>
          <td>
            CCMSI Main Fax: <a href="tel:5058886901">(505) 888-6901</a>
            <br /><strong
              >(Do not use for Workers' Compensation)</strong
            >
          </td>
        </tr>
      </tbody>
    </table>

    <table
      style="width: 45%; margin: 0 auto"
      class="table table-striped"
    >
      <thead>
        <tr>
          <th scope="col">Claims Adjusters:</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            Cathy Lundy –
            <a href="mailto:clundy@ccmsi.com">clundy@ccmsi.com</a>
          </td>
        </tr>
        <tr>
          <td>
            Marc Berstein –
            <a href="mailto:mbernstein@ccmsi.com"
              >mbernstein@ccmsi.com</a
            >
          </td>
        </tr>
        <tr>
          <td>
            Joe Klaus –
            <a href="mailto:mklaus@ccmsi.com">mklaus@ccmsi.com</a>
          </td>
        </tr>
        <tr>
          <td>
            Estevan Reyes –
            <a href="mailto:ereyes@ccmsi.com">ereyes@ccmsi.com</a>
          </td>
        </tr>
        <tr>
          <td>
            Greg Ramirez –
            <a href="mailto:greg.ramirez@ccmsi.com"
              >greg.ramirez@ccmsi.com</a
            >
          </td>
        </tr>
        <tr>
          <td>
            Kerry Sabado –
            <a href="mailto:kerry.sabado@ccmsi.com"
              >kerry.sabado@ccmsi.com</a
            >
          </td>
        </tr>
      </tbody>
    </table>
  </div>
    `;
  }
}

customElements.define("property-liability", PropertyLiability);
