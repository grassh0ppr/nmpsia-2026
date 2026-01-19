class WebflowNavbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /*html*/ `
      <section style="margin-bottom: 0;">
        <div
          data-animation="default"
          data-collapse="medium"
          data-duration="400"
          data-easing="ease-in-out"
          data-easing2="ease-in-out"
          data-doc-height="1"
          role="banner"
          class="navbar w-nav"
        >
          <div class="nav-container w-container">
            <a href="./index.html" class="brand w-nav-brand">
              <img
                src="styles/webflow_navbar/images/NMPSIA-logo-white.png"
                loading="lazy"
                width="205"
                alt="NMPSIA Logo"
                class="image"
              />
            </a>
            <nav role="navigation" class="nav-menu w-nav-menu">
              <div data-hover="false" data-delay="100" class="w-dropdown">
                <div class="navlink w-dropdown-toggle">
                  <div class="w-icon-dropdown-toggle"></div>
                  <div>NMPSIA</div>
                </div>
                <nav class="dropdown-list w-dropdown-list">
                <a href="./plan.html" class="dropdown-link w-dropdown-link"
                    >NMPSIA &ndash; About the Authority</a
                  >
                  <a href="./board-login.html" class="dropdown-link w-dropdown-link">NMPSIA &ndash; Board Login</a>

                  <a href="./benefits.html" class="dropdown-link w-dropdown-link"
                    >NMPSIA &ndash; Benefits Division</a
                  >
                  <a href="./wellness.html" class="dropdown-link w-dropdown-link"
                    >NMPSIA &ndash; Wellness Programs Division</a
                  >
                  <a href="./behavioral-health.html" class="dropdown-link w-dropdown-link"
                  >NMPSIA &ndash; Behavioral Health Resources</a
                >
                  <a href="./risk.html" class="dropdown-link w-dropdown-link"
                    >NMPSIA &ndash; Risk Division</a
                  >
                  <a href="./procurements.html" class="dropdown-link w-dropdown-link"
                    >NMPSIA &ndash; Procurements</a
                  >
                  <a href="./plan.html#IPRArequest" class="dropdown-link w-dropdown-link"
                    >Request Inspection of Public Records (IPRA)</a
                  >
                  <a href="./natural-disaster-aid.html" class="dropdown-link w-dropdown-link"
                    >Disaster Aid Request Form</a
                  >
                  <a href="./transparency-rule.html" class="dropdown-link w-dropdown-link"
                    >Transparency Rule</a
                  >
                </nav>
              </div>
              <div data-hover="false" data-delay="100" class="w-dropdown">
                <div class="navlink w-dropdown-toggle">
                  <div class="w-icon-dropdown-toggle"></div>
                  <div>Employers</div>
                </div>
                <nav class="dropdown-list w-dropdown-list">
                  <a href="./support.html" class="dropdown-link w-dropdown-link"
                    >Request NMPSIA Support</a
                  >
                  <a href="./employer-trainings.html" class="dropdown-link w-dropdown-link"
                    >Training Tutorials and Videos</a
                  >
                  <a href="./employer-enrollment.html" class="dropdown-link w-dropdown-link"
                    >Enrollment, Forms, and Resources</a
                  >
                  <a href="./benefits.html" class="dropdown-link w-dropdown-link"
                    >Carrier Benefits Information</a
                  >
                  <a href="./premiums.html" class="dropdown-link w-dropdown-link"
                    >Benefit Premiums</a
                  >
                  <a href="./plan.html#acaNotice" class="dropdown-link w-dropdown-link"
                    >Vital Program Information</a
                  >
                 
                
                </nav>
              </div>
              <div data-hover="false" data-delay="100" class="w-dropdown">
                <div class="navlink w-dropdown-toggle">
                  <div class="w-icon-dropdown-toggle"></div>
                  <div>Employees</div>
                </div>
                <nav class="dropdown-list w-dropdown-list">
                  <a href="./enrollment-tutorials.html" class="dropdown-link w-dropdown-link"
                    >Employee Enrollment Tutorials</a
                  >
                  <a href="./employee-enrollment.html" class="dropdown-link w-dropdown-link"
                    >Enrollment, Forms, and Resources</a
                  >
                  <a href="./benefits.html" class="dropdown-link w-dropdown-link"
                    >Carrier Benefits Information</a
                  >
                  <a href="./premiums.html" class="dropdown-link w-dropdown-link"
                    >Benefit Premiums</a
                  >
               
                </nav>
              </div>
              <a href="./contact-us.html" class="navlink w-nav-link">Contact</a>
              <a href="https://nmpsiaonline.nmpsia.com/" class="navlink w-nav-link">Benefits Portal Login</a>
              <a href="#" class="search-toggle navlink w-nav-link" id="searchToggle">
                <i class="bx bx-search" style="color: #fff;font-size: 1.2rem;"></i>
              </a>
            </nav>
            <div class="menu-button w-nav-button">
              <div class="w-icon-nav-menu"></div>
            </div>
          </div>
        </div>
      </section>
      
      <!-- Search Modal -->
      <div class="search-modal" id="searchModal">
        <div class="search-modal-backdrop" id="searchModalBackdrop"></div>
        <div class="search-modal-content">
          <div class="search-modal-header">
            <h3>Search NMPSIA</h3>
            <button class="search-modal-close" id="searchModalClose" aria-label="Close search">
              <i class="bx bx-x" style="color: #fff;font-size: 1.5rem;"></i>
            </button>
          </div>
          <form class="search-modal-form" action="search.html" method="GET">
            <div class="search-input-wrapper">
              <input 
                type="text" 
                name="q" 
                class="search-modal-input" 
                placeholder="Enter your search terms..." 
                id="searchModalInput"
                autocomplete="off"
                required
              />
              <button type="submit" class="search-modal-submit" aria-label="Submit search">
                <i class="bx bx-search" style="color: #fff;font-size: 1.2rem;"></i>
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
        `;

    // Initialize Webflow functionality after component is loaded
    this.initializeWebflow();

    // Initialize search functionality
    this.initializeSearch();
  }

  initializeWebflow() {
    // Load Boxicons CSS if not already loaded
    if (!document.querySelector('link[href*="boxicons"]')) {
      const boxiconsCSS = document.createElement("link");
      boxiconsCSS.href =
        "https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css";
      boxiconsCSS.rel = "stylesheet";
      document.head.appendChild(boxiconsCSS);
    }

    // Load Webflow CSS if not already loaded
    if (!document.querySelector('link[href*="webflow-navbar.css"]')) {
      const normalizeCSS = document.createElement("link");
      normalizeCSS.href = "styles/webflow_navbar/css/normalize.css";
      normalizeCSS.rel = "stylesheet";
      normalizeCSS.type = "text/css";
      document.head.appendChild(normalizeCSS);

      const webflowCSS = document.createElement("link");
      webflowCSS.href = "styles/webflow_navbar/css/webflow.css";
      webflowCSS.rel = "stylesheet";
      webflowCSS.type = "text/css";
      document.head.appendChild(webflowCSS);

      const navbarCSS = document.createElement("link");
      navbarCSS.href = "styles/webflow_navbar/css/webflow-navbar.css";
      navbarCSS.rel = "stylesheet";
      navbarCSS.type = "text/css";
      document.head.appendChild(navbarCSS);
    }

    // Load jQuery if not already loaded
    if (typeof jQuery === "undefined") {
      const jqueryScript = document.createElement("script");
      jqueryScript.src =
        "https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=68926bee194567c80801ac68";
      jqueryScript.integrity =
        "sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=";
      jqueryScript.crossOrigin = "anonymous";
      jqueryScript.onload = () => {
        this.loadWebflowJS();
      };
      document.head.appendChild(jqueryScript);
    } else {
      this.loadWebflowJS();
    }
  }

  loadWebflowJS() {
    // Load Webflow JS if not already loaded
    if (!document.querySelector('script[src*="webflow.js"]')) {
      const webflowScript = document.createElement("script");
      webflowScript.src = "styles/webflow_navbar/js/webflow.js";
      webflowScript.type = "text/javascript";
      webflowScript.onload = () => {
        this.initializeWebflowComponents();
      };
      document.head.appendChild(webflowScript);
    } else {
      this.initializeWebflowComponents();
    }
  }

  initializeWebflowComponents() {
    // Initialize Webflow components for this navbar instance
    const navbar = this.querySelector(".w-nav");
    if (navbar && window.Webflow) {
      // Re-initialize Webflow components for this specific navbar
      window.Webflow.push(() => {
        // Force re-initialization of dropdowns and navigation
        const dropdowns = navbar.querySelectorAll(".w-dropdown");
        dropdowns.forEach((dropdown) => {
          if (window.Webflow && window.Webflow.require) {
            try {
              window.Webflow.require("ix2").init();
            } catch (e) {
              console.log("Webflow components initialized");
            }
          }
        });
      });
    }
  }

  initializeSearch() {
    // Load Google Custom Search Engine script
    if (!document.querySelector('script[src*="cse.google.com"]')) {
      const gcseScript = document.createElement("script");
      gcseScript.src = "https://cse.google.com/cse.js?cx=1a04339760c2f9046";
      gcseScript.async = true;
      document.head.appendChild(gcseScript);
    }

    // Initialize search toggle functionality
    this.setupSearchFunctionality();

    // Re-initialize search when mobile menu opens (for Webflow navigation)
    this.setupMobileMenuHandler();
  }

  setupSearchFunctionality() {
    const searchToggle = this.querySelector("#searchToggle");
    const searchModal = this.querySelector("#searchModal");
    const searchModalBackdrop = this.querySelector("#searchModalBackdrop");
    const searchModalClose = this.querySelector("#searchModalClose");
    const searchModalInput = this.querySelector("#searchModalInput");

    if (searchToggle && searchModal) {
      // Remove any existing event listeners to prevent duplicates
      if (this.handleSearchToggle) {
        searchToggle.removeEventListener("click", this.handleSearchToggle);
      }

      // Store the handler as a property so we can remove it later
      this.handleSearchToggle = (e) => {
        e.preventDefault();
        e.stopPropagation(); // Prevent navbar menu from closing
        this.openSearchModal();
      };

      // Add the event listener
      searchToggle.addEventListener("click", this.handleSearchToggle);

      // Close modal handlers
      const closeModal = () => {
        this.closeSearchModal();
      };

      // Backdrop click
      if (searchModalBackdrop) {
        searchModalBackdrop.addEventListener("click", closeModal);
      }

      // Close button
      if (searchModalClose) {
        searchModalClose.addEventListener("click", closeModal);
      }

      // Escape key
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && searchModal.classList.contains("active")) {
          closeModal();
        }
      });

      // Focus input when modal opens
      if (searchModalInput) {
        searchModal.addEventListener("transitionend", () => {
          if (searchModal.classList.contains("active")) {
            searchModalInput.focus();
          }
        });
      }
    }
  }

  openSearchModal() {
    const searchModal = this.querySelector("#searchModal");
    if (searchModal) {
      searchModal.classList.add("active");
      document.body.style.overflow = "hidden"; // Prevent background scrolling
    }
  }

  closeSearchModal() {
    const searchModal = this.querySelector("#searchModal");
    if (searchModal) {
      searchModal.classList.remove("active");
      document.body.style.overflow = ""; // Restore scrolling
    }
  }

  setupMobileMenuHandler() {
    // Wait for Webflow to be ready
    if (window.Webflow) {
      window.Webflow.push(() => {
        this.observeMobileMenu();
      });
    } else {
      // Fallback: observe the navbar for changes
      setTimeout(() => {
        this.observeMobileMenu();
      }, 1000);
    }
  }

  observeMobileMenu() {
    const navbar = this.querySelector(".w-nav");
    if (!navbar) return;

    // Use MutationObserver to watch for class changes on the navbar
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.type === "attributes" &&
          mutation.attributeName === "class"
        ) {
          const navMenu = navbar.querySelector(".w-nav-menu");
          if (navMenu && navMenu.classList.contains("w--open")) {
            // Mobile menu is open, re-setup search functionality
            setTimeout(() => {
              this.setupSearchFunctionality();
            }, 100);
          }
        }
      });
    });

    observer.observe(navbar, {
      attributes: true,
      attributeFilter: ["class"],
    });
  }
}

customElements.define("webflow-navbar-component", WebflowNavbar);
