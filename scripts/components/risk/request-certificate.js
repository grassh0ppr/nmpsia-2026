class RequestCertificate extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /*html*/ `
    <div class="heading-and-element-flexbox">
    <h3 class="display-4">Poms Portal to Request a Certificate, Report a New Location or Report a Construction Project</h3>
    <img
      src="images/Logo_POMS.png"
      alt="POMS logo"
      class="section-logo"
    />
  </div>
  <hr />
  <ul>
    <li>
      Name of your district, charter school, college or organization.
    </li>
    <li>
      Contact information including your name, phone number and email
      address.
    </li>
    <li>
      Name and address of certificate holder – this is the entity,
      business, or individual requesting the certificate.
    </li>
    <li>You will need to know the desired type of coverage.</li>
    <li>
      Describe the event and/or activity and include all necessary
      dates.
    </li>
    <li>
      Attach a copy of the written requirement, if applicable, requiring
      the insurance coverage.
    </li>
    <li>
      For leased or loaned machinery, office equipment, vehicle rental,
      etc., you will need to provide the replacement cost value, and the
      serial and/or vehicle identification number.
    </li>
    <li>
      Bus Contractors: a copy of the contract or agreement is required
      along with a complete schedule of buses including year, make,
      model and VIN.
    </li>
    <li>
      You will need to include method of delivery, fax number, email or
      mail address.
    </li>
    <li>
      The email with the attached Certificate will be sent from
      notifications@origamirisk.com
    </li>
  </ul>
  <div class="text-center my-4">
   
      <a
        target="_blank"
        href="https://live.origamirisk.com/Origami/IncidentEntry/Direct?token=9wYFmptnrbcfctnUCouRsVqLDpVkM14QrgD1U3Y%2BeXP3FPLL23L9SAokTEoDF8Wk9lQZwyBi78qX0D8WevHhk8Cww6jmYSV3E6XajqCO7deZftio4lJuZu8ZQljgwuYj"
        >Request Certificate</a
      >
    
  </div>
    `;
  }
}

customElements.define("request-certificate", RequestCertificate);
