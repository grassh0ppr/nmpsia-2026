class CarriersGrid extends HTMLElement {
  constructor() {
    super();
    this.currentFilter = 'All Benefits';
    this.currentSearch = '';
  }

  connectedCallback() {
    this.render();
    this.attachEventListeners();
  }

  render() {
    const benefitTypes = getAllBenefitTypes();
    
    this.innerHTML = /*html*/ `
      <div class="carriers-search-filter-section">
        <div class="search-container">
          <div class="search-input-wrapper">
            <i class="bx bx-search search-icon"></i>
            <input 
              type="text" 
              id="carrierSearchInput" 
              class="carrier-search-input" 
              placeholder="Search for carriers, documents, or resources..."
              aria-label="Search carriers"
            />
          </div>
        </div>
        
        <div class="filter-section">
          <label class="filter-label">
            <i class="bx bx-filter-alt"></i>
            Filter by benefit type:
          </label>
          <div class="filter-buttons">
            <button class="filter-btn active" data-filter="All Benefits">
              All Benefits
            </button>
            ${benefitTypes.map(type => `
              <button class="filter-btn" data-filter="${type}">
                ${type}
              </button>
            `).join('')}
          </div>
        </div>
      </div>

      <div class="carriers-grid-container" id="carriersGridContainer">
        ${this.renderCarrierCards(carriersData)}
      </div>

      <div class="no-results-message" id="noResultsMessage" style="display: none;">
        <i class="bx bx-search-alt"></i>
        <p>No carriers found matching your search criteria.</p>
      </div>
    `;
  }

  renderCarrierCards(carriers) {
    const noResultsMsg = this.querySelector('#noResultsMessage');
    
    if (carriers.length === 0) {
      if (noResultsMsg) {
        noResultsMsg.style.display = 'block';
      }
      return '';
    }
    
    if (noResultsMsg) {
      noResultsMsg.style.display = 'none';
    }
    
    return carriers.map(carrier => `
      <div 
        class="carrier-info-card" 
        data-carrier-id="${carrier.id}"
        data-bs-toggle="modal"
        data-bs-target="#${carrier.modalId}"
        role="button"
        tabindex="0"
      >
        <div class="carrier-card-logo">
          <img src="${carrier.logo}" alt="${carrier.name} logo" />
        </div>
        <div class="carrier-card-content">
          <h4 class="carrier-card-name">${carrier.name}</h4>
          <p class="carrier-card-types">${carrier.benefitTypes.join(', ')}</p>
          <div class="carrier-card-actions">
            <button class="btn-view-details" type="button">
              View Details
            </button>
            <a 
              href="${carrier.contact.website}" 
              class="btn-visit-website" 
              target="_blank"
              onclick="event.stopPropagation();"
            >
              Visit Website
            </a>
          </div>
        </div>
      </div>
    `).join('');
  }

  attachEventListeners() {
    // Search input
    const searchInput = this.querySelector('#carrierSearchInput');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        this.currentSearch = e.target.value;
        this.updateDisplay();
      });
    }

    // Filter buttons
    const filterButtons = this.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        // Update active state
        filterButtons.forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        
        this.currentFilter = e.target.dataset.filter;
        this.updateDisplay();
      });
    });
  }

  updateDisplay() {
    const filteredCarriers = filterAndSearchCarriers(this.currentFilter, this.currentSearch);
    const container = this.querySelector('#carriersGridContainer');
    if (container) {
      container.innerHTML = this.renderCarrierCards(filteredCarriers);
    }
  }
}

customElements.define('carriers-grid', CarriersGrid);
