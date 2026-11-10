// Single source of truth for the employer contact update resources.
// When a new version of a form is published, update the path here only.
const CONTACT_UPDATE_RESOURCES = {
  contactForm: "/PDFs/forms/NMPSIA_CONTACT_form_FINAL.pdf",
  additionalContactsSheet:
    "/PDFs/forms/NMPSIA_Contact_Sheet_Additional_Contacts.pdf",
  email: "sf@easitpa.com",
  emailRecipient: "EASI Edu Incorporated",
};

// Usage:
//   <contact-update-notice></contact-update-notice>                 (summary paragraph)
//   <contact-update-notice variant="steps"></contact-update-notice> (two-step list)
class ContactUpdateNotice extends HTMLElement {
  connectedCallback() {
    const { contactForm, additionalContactsSheet, email, emailRecipient } =
      CONTACT_UPDATE_RESOURCES;
    const isSteps = this.getAttribute("variant") === "steps";

    const summaryBody = /*html*/ `
      <h3>Employers: Need to Update Your Contacts?</h3>
      <p>
        If you need to update your district/charter/participating entity
        contacts, please download and complete the NMPSIA Contact Form
        linked below, then send it as an email attachment to ${emailRecipient}.
        <strong>(If you have more than one contact for the job categories
        listed, please also complete the Additional Contacts Sheet,
        using as many copies as needed.)</strong>
      </p>
    `;

    const stepsBody = /*html*/ `
      <h2 class="h3">
        Employers: Keep Your Contacts Updated with Two Easy Steps
      </h2>
      <ol class="mb-4">
        <li class="mb-2">
          <strong>Step 1:</strong> Download and complete the
          <a
            href="${contactForm}"
            target="_blank"
            class="text-white text-decoration-underline"
            >NMPSIA Contact Form</a
          >. If you have more than one contact for the same category,
          also complete the
          <a
            href="${additionalContactsSheet}"
            target="_blank"
            class="text-white text-decoration-underline"
            >Additional Contacts Sheet</a
          >, using as many copies as needed.
        </li>
        <li>
          <strong>Step 2:</strong> Email the completed form(s) to
          <a
            href="mailto:${email}"
            class="text-white text-decoration-underline"
            >${email}</a
          >.
        </li>
      </ol>
    `;

    this.innerHTML = /*html*/ `
      <section class="contact-update-notice">
        <div class="notice-content">
          <div class="notice-icon">
            <i class="bx ${isSteps ? "bx-edit" : "bx-info-circle"}"></i>
          </div>
          <div class="notice-text">
            ${isSteps ? stepsBody : summaryBody}
            <div class="notice-actions">
              <a href="${contactForm}" target="_blank" class="btn btn-primary">
                <i class="bx bxs-file-pdf"></i>
                Contact Update Form
              </a>
              <a
                href="${additionalContactsSheet}"
                target="_blank"
                class="btn btn-primary"
              >
                <i class="bx bxs-file-pdf"></i>
                Additional Contacts Sheet
              </a>
              <a href="mailto:${email}" class="btn btn-outline-primary">
                <i class="bx bx-envelope"></i>
                Email ${emailRecipient}
              </a>
            </div>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define("contact-update-notice", ContactUpdateNotice);
