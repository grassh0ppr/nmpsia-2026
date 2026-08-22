class SiteNavbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /*html*/ `
      <a href="#main-content" class="skip-to-main-content">Skip to main content</a>
      <header class="site-header" style="margin-bottom: 0;">
        <div class="nav-container">
          <a href="./index.html" class="nav-brand">
            <img
              src="css/webflow_navbar/images/NMPSIA-logo-white.png"
              loading="lazy"
              style="max-width: 205px; width: 100%; height: auto;"
              alt="NMPSIA Logo"
            />
          </a>

          <nav class="nav-menu" id="nav-menu" aria-label="Main navigation">
            <!-- NMPSIA dropdown -->
            <div class="nav-dropdown">
              <button class="navlink nav-dropdown-toggle" aria-expanded="false" aria-haspopup="true">
                NMPSIA
                <i class="bx bx-chevron-down nav-dropdown-arrow" aria-hidden="true"></i>
              </button>
              <div class="dropdown-list" role="menu">
                <a href="./plan.html" class="dropdown-link" role="menuitem">NMPSIA &ndash; About the Authority</a>
                <a href="./board-login.html" class="dropdown-link" role="menuitem">NMPSIA &ndash; Board Login</a>
                <a href="./benefits.html" class="dropdown-link" role="menuitem">NMPSIA &ndash; Benefits Division</a>
               
                <a href="./risk.html" class="dropdown-link" role="menuitem">NMPSIA &ndash; Risk Division</a>
                <a href="./procurements.html" class="dropdown-link" role="menuitem">NMPSIA &ndash; Procurements</a>
                <a href="./plan.html#IPRArequest" class="dropdown-link" role="menuitem">Request Inspection of Public Records (IPRA)</a>
                <a href="./transparency-rule.html" class="dropdown-link" role="menuitem">Transparency Rule</a>
              </div>
            </div>

            <!-- Employers dropdown -->
            <div class="nav-dropdown">
              <button class="navlink nav-dropdown-toggle" aria-expanded="false" aria-haspopup="true">
                Employers
                <i class="bx bx-chevron-down nav-dropdown-arrow" aria-hidden="true"></i>
              </button>
              <div class="dropdown-list" role="menu">
                <a href="./support.html" class="dropdown-link" role="menuitem">Request NMPSIA Support</a>
                <a href="./employer-trainings.html" class="dropdown-link" role="menuitem">Training Tutorials and Videos</a>
                <a href="./employer-enrollment.html" class="dropdown-link" role="menuitem">Enrollment, Forms, and Resources</a>
                <a href="./benefits.html" class="dropdown-link" role="menuitem">Carrier Benefits Information</a>
                <a href="./premiums.html" class="dropdown-link" role="menuitem">Benefit Premiums</a>
                <a href="./wellness.html" class="dropdown-link" role="menuitem">Wellness and Well-Being Resources</a>
                <a href="./behavioral-health.html" class="dropdown-link" role="menuitem">Behavioral Health Resources</a>
              </div>
            </div>

            <!-- Employees dropdown -->
            <div class="nav-dropdown">
              <button class="navlink nav-dropdown-toggle" aria-expanded="false" aria-haspopup="true">
                Employees
                <i class="bx bx-chevron-down nav-dropdown-arrow" aria-hidden="true"></i>
              </button>
              <div class="dropdown-list" role="menu">
                <a href="./employee-enrollment.html" class="dropdown-link" role="menuitem">Enrollment, Forms, and Resources</a>
                <a href="./benefits.html" class="dropdown-link" role="menuitem">Carrier Benefits Information</a>
                <a href="./premiums.html" class="dropdown-link" role="menuitem">Benefit Premiums</a>
                <a href="./wellness.html" class="dropdown-link" role="menuitem">Wellness and Well-Being Resources</a>
                <a href="./behavioral-health.html" class="dropdown-link" role="menuitem">Behavioral Health Resources</a>
              </div>
            </div>

            <a href="./contact-us.html" class="navlink nav-link">Contact</a>
            <a href="https://nmpsiaonline.nmpsia.com/" class="navlink nav-link" target="_blank" rel="noopener">Benefits Portal Login</a>
            <button class="navlink search-toggle" id="searchToggle" aria-label="Open site search">
              <i class="bx bx-search" style="color: #fff; font-size: 1.2rem;" aria-hidden="true"></i>
            </button>
          </nav>

          <button
            class="nav-hamburger"
            id="navToggle"
            aria-label="Toggle navigation menu"
            aria-expanded="false"
            aria-controls="nav-menu"
          >
            <i class="bx bx-menu" style="font-size: 24px; color: #fff;" aria-hidden="true"></i>
          </button>
        </div>
      </header>

      <!-- Search Modal -->
      <div class="search-modal" id="searchModal" role="dialog" aria-modal="true" aria-label="Site search">
        <div class="search-modal-backdrop" id="searchModalBackdrop"></div>
        <div class="search-modal-content">
          <div class="search-modal-header">
            <h3>Search NMPSIA</h3>
            <button class="search-modal-close" id="searchModalClose" aria-label="Close search">
              <i class="bx bx-x" style="color: #fff; font-size: 1.5rem;" aria-hidden="true"></i>
            </button>
          </div>
          <form class="search-modal-form" action="search.html" method="GET">
            <div class="search-input-wrapper">
              <input
                type="search"
                name="q"
                class="search-modal-input"
                placeholder="Enter your search terms..."
                id="searchModalInput"
                autocomplete="off"
                aria-label="Search query"
                required
              />
              <button type="submit" class="search-modal-submit" aria-label="Submit search">
                <i class="bx bx-search" style="color: #fff; font-size: 1.2rem;" aria-hidden="true"></i>
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
    `;

    this._initSkipLink();
    this._initNav();
    this._initSearch();
  }

  _initSkipLink() {
    const main = document.querySelector("main");
    if (main && !main.id) {
      main.id = "main-content";
      main.setAttribute("tabindex", "-1");
    }
  }

  _initNav() {
    const hamburger = this.querySelector("#navToggle");
    const navMenu = this.querySelector("#nav-menu");
    const dropdowns = [...this.querySelectorAll(".nav-dropdown")];

    // Hamburger toggle
    hamburger.addEventListener("click", () => {
      const isOpen = navMenu.classList.toggle("open");
      hamburger.setAttribute("aria-expanded", String(isOpen));
      // Close all dropdowns when collapsing the menu
      if (!isOpen) dropdowns.forEach((d) => this._closeDropdown(d));
    });

    dropdowns.forEach((dropdown) => {
      const toggle = dropdown.querySelector(".nav-dropdown-toggle");
      let hoverTimer;

      // Desktop: hover to open
      dropdown.addEventListener("mouseenter", () => {
        if (window.innerWidth > 992) {
          clearTimeout(hoverTimer);
          dropdowns.forEach((d) => {
            if (d !== dropdown) this._closeDropdown(d);
          });
          this._openDropdown(dropdown);
        }
      });
      dropdown.addEventListener("mouseleave", () => {
        if (window.innerWidth > 992) {
          hoverTimer = setTimeout(() => this._closeDropdown(dropdown), 100);
        }
      });

      // Click: toggle (mobile + keyboard)
      toggle.addEventListener("click", (e) => {
        e.stopPropagation();
        const wasOpen = dropdown.classList.contains("open");
        dropdowns.forEach((d) => this._closeDropdown(d));
        if (!wasOpen) this._openDropdown(dropdown);
      });

      // Escape key inside dropdown
      dropdown.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
          this._closeDropdown(dropdown);
          toggle.focus();
        }
      });
    });

    // Close nav + dropdowns on outside click
    document.addEventListener("click", (e) => {
      if (!this.contains(e.target)) {
        navMenu.classList.remove("open");
        hamburger.setAttribute("aria-expanded", "false");
        dropdowns.forEach((d) => this._closeDropdown(d));
      }
    });

    // Close nav + dropdowns on Escape (global)
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        navMenu.classList.remove("open");
        hamburger.setAttribute("aria-expanded", "false");
        dropdowns.forEach((d) => this._closeDropdown(d));
      }
    });
  }

  _openDropdown(dropdown) {
    dropdown.classList.add("open");
    dropdown
      .querySelector(".nav-dropdown-toggle")
      .setAttribute("aria-expanded", "true");
  }

  _closeDropdown(dropdown) {
    dropdown.classList.remove("open");
    dropdown
      .querySelector(".nav-dropdown-toggle")
      .setAttribute("aria-expanded", "false");
  }

  _initSearch() {
    const searchToggle = this.querySelector("#searchToggle");
    const searchModal = this.querySelector("#searchModal");
    const searchModalBackdrop = this.querySelector("#searchModalBackdrop");
    const searchModalClose = this.querySelector("#searchModalClose");
    const searchModalInput = this.querySelector("#searchModalInput");

    if (!searchToggle || !searchModal) return;

    searchToggle.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      this._openSearch();
    });

    searchModalBackdrop.addEventListener("click", () => this._closeSearch());
    searchModalClose.addEventListener("click", () => this._closeSearch());

    // Focus input after transition
    searchModal.addEventListener("transitionend", () => {
      if (searchModal.classList.contains("active")) {
        searchModalInput.focus();
      }
    });

    // Escape closes search (registered separately from nav Escape handler)
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && searchModal.classList.contains("active")) {
        this._closeSearch();
      }
    });
  }

  _openSearch() {
    const searchModal = this.querySelector("#searchModal");
    if (searchModal) {
      searchModal.classList.add("active");
      document.body.style.overflow = "hidden";
    }
  }

  _closeSearch() {
    const searchModal = this.querySelector("#searchModal");
    if (searchModal) {
      searchModal.classList.remove("active");
      document.body.style.overflow = "";
    }
  }
}

customElements.define("webflow-navbar-component", SiteNavbar);
