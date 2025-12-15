class PublicUseSchools extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /*html*/ `
    
  <div class="heading-and-element-flexbox">
    <h3 class="display-4">Public Use of School Facilities</h3>
    
  </div>
  <p>
    In June 2010, Sammy Quintana, Executive Director sent a letter to
    Superintendents and CEOs of NMPSIA Member agencies informing Members
    of a statutory amendment (§NMAC, Title 6 Primary and Secondary
    Education. Chapter 50. Insurance, Part 17 Use of School Facilities
    by Private Persons) that affects the relationship between public
    schools in New Mexico and third party users of public school
    facilities. The change was effective July 1, 2010.
  </p>
  <h5 class="my-3">Under the new law:</h5>
  <ol>
    <li>
      Public schools in New Mexico are not permitted to deny a facility
      use application because the party has no liability insurance.
    </li>
    <li>
      A school may require a tenant user to purchase insurance as a
      condition of use.
    </li>
    <li>
      The public school is not required to extend its own liability
      insurance to the tenant user. If the tenant user elects to remain
      uninsured, it is at the user's own risk. The personal assets of
      the event sponsor may be in jeopardy if a loss occurs.
    </li>
    <li>
      NMPSIA Members (districts, charter schools, other educational
      entities, etc…) WILL BE insured by NMPSIA for claims which arise
      as a result of the tenant user's event and for which the Member is
      held liable.
    </li>
    <li>
      Since July 1, 2010, the NMPSIA Member's liability exposure is
      statutorily limited to a maximum of $1,000,000 per occurrence for
      damages related to tenant user activities. The Act does not set a
      maximum limit for the sponsor's liability.
    </li>
    <li>
      Public schools may (and should) adopt a Facility Use Policy that
      clarifies all other terms and conditions of facility use. A sample
      <a
        target="_blank"
        href="/docs/2055267_Application-permit_(NMPSIA).doc"
        >Site Use Agreement</a
      >
      is also available for reference. This sample may be adapted for
      use by the Member or Member's counsel. Work with your attorney to
      ensure that your Site Use Policy is appropriately drafted to avoid
      discrimination complaints.
    </li>
  </ol>

  <p>
    To reduce liability, NMPSIA's recommended Site Use Agreement asks
    NMPSIA Member to obtain waiver agreements from the User's event
    participants. Waivers help to mitigate potential damages and control
    premium costs.
  </p>
  <p>
    Members may continue to recommend (but not mandate) the purchase of
    TULIP coverage for the User's own protection. We strongly suggest
    that you inform Tenant User applicants of the continued availability
    of the TULIP program.
  </p>
  <p>
    The sample Site Use Agreement offers specific recommendations for
    safety and other risk management components. The incorporation of
    safety and risk management processes will limit potential liability
    for all parties and safeguard future public access.
  </p>
  <p>
    For questions relating to your obligations under the new law, please
    contact Justin Perkins, Jessie Monterrosa, or Lynn Solomon at Poms &
    Associates: (800) 578-8802. For assistance with safety issues
    associated with Tenant Users, contact Julie Garcia or Larry Vigil at
    (800) 898-6236.
  </p>
  <p>
    <a
      target="_blank"
      href="/docs/2055267_Application-permit_(NMPSIA).doc"
      >Sample Site Use Agreement</a
    >
  </p>
  <p>
    <a target="_blank" href="/pdfs/Use_of_Facilities_Website.pdf"
      >Use of School Facilities by Private Persons</a
    >
  </p>
    `;
  }
}

customElements.define("public-use-schools", PublicUseSchools);
