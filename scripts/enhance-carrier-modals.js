// Enhance carrier modals with contact and provider search information
document.addEventListener('DOMContentLoaded', function() {
  // Function to enhance a modal with carrier data
  function enhanceModal(modalId, carrierData) {
    const modal = document.getElementById(modalId);
    if (!modal) return;

    const modalBody = modal.querySelector('.modal-body');
    if (!modalBody) return;

    // Check if we've already enhanced this modal
    if (modalBody.querySelector('.carrier-contact-section')) return;

    // Create contact and provider section
    const contactSection = document.createElement('div');
    contactSection.className = 'carrier-contact-section mb-4';
    contactSection.innerHTML = /*html*/ `
      <div class="carrier-modal-contact-info">
        <h4 class="mb-3"><i class="bx bx-phone me-2"></i>Contact Information</h4>
        <div class="contact-details-grid">
          <div class="contact-item">
            <strong>Phone:</strong>
            <a href="${carrierData.contact.phoneLink}" class="contact-link">
              <i class="bx bx-phone"></i> ${carrierData.contact.phone}
            </a>
          </div>
          ${carrierData.contact.groupNumbers ? `
          <div class="contact-item">
            <strong>Group Number(s):</strong>
            <span>${carrierData.contact.groupNumbers}</span>
          </div>
          ` : ''}
          ${carrierData.contact.note ? `
          <div class="contact-item">
            <strong>Note:</strong>
            <span>${carrierData.contact.note}</span>
          </div>
          ` : ''}
          <div class="contact-item">
            <strong>Website:</strong>
            <a href="${carrierData.contact.website}" target="_blank" class="contact-link">
              <i class="bx bx-link-external"></i> ${carrierData.contact.websiteText}
            </a>
          </div>
        </div>
      </div>
      ${carrierData.providerSearch ? `
      <div class="carrier-modal-provider-search mt-4">
        <h4 class="mb-3"><i class="bx bx-search-alt me-2"></i>Find a Provider</h4>
        <a href="${carrierData.providerSearch.url}" target="_blank" class="btn btn-primary provider-search-btn">
          <i class="bx bx-search-alt"></i> ${carrierData.providerSearch.text}
        </a>
      </div>
      ` : ''}
      <hr class="my-4">
    `;

    // Insert at the beginning of modal body
    modalBody.insertBefore(contactSection, modalBody.firstChild);
  }

  // Enhance each carrier modal
  carriersData.forEach(carrier => {
    enhanceModal(carrier.modalId, carrier);
  });
});
