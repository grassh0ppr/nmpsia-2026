/**
 * Sidebar Navigation Component
 * Consolidated JavaScript for sidebar navigation functionality across NMPSIA pages
 *
 * Features:
 * - Sidebar toggle with overlay
 * - Smooth scrolling to sections
 * - Scroll spy for active link highlighting
 * - iOS Safari compatibility fixes
 * - Hash navigation support
 * - Responsive behavior
 * - Keyboard accessibility
 */

class SidebarNavigation {
  constructor(options = {}) {
    // Default configuration
    this.config = {
      sidebarId: "benefitsSidebar",
      sidebarToggleId: "sidebarToggle",
      closeSidebarId: "closeSidebar",
      overlayId: "sidebarOverlay",
      sidebarLinksSelector: ".benefits-sidebar .nav-item",
      sectionsSelector: ".content-section",
      scrollOffset: 100,
      mobileBreakpoint: 1000,
      hideMode: false, // When true, shows/hides sections instead of scrolling
      defaultSection: null, // Default section to show in hide mode
      ...options,
    };

    // Initialize when DOM is ready
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", () => this.init());
    } else {
      this.init();
    }
  }

  init() {
    this.elements = this.getElements();
    this.isIOS = this.detectIOS();
    this.isSafari = this.detectSafari();

    if (!this.elements.sidebar || !this.elements.sidebarToggle) {
      console.warn("Sidebar navigation elements not found");
      return;
    }

    // Initialize hide mode if enabled
    if (this.config.hideMode) {
      this.initializeHideMode();
    }

    this.setupEventListeners();
    this.handleInitialHash();
    this.setupIOSFixes();
    this.initializeToggleButtonState();
  }

  getElements() {
    return {
      sidebar: document.getElementById(this.config.sidebarId),
      sidebarToggle: document.getElementById(this.config.sidebarToggleId),
      closeSidebar: document.getElementById(this.config.closeSidebarId),
      overlay: document.getElementById(this.config.overlayId),
      sidebarLinks: document.querySelectorAll(this.config.sidebarLinksSelector),
      sections: document.querySelectorAll(this.config.sectionsSelector),
      main: document.querySelector("main[data-default-section]"),
    };
  }

  detectIOS() {
    return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  }

  detectSafari() {
    return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  }

  setupEventListeners() {
    // Sidebar toggle events
    if (this.elements.sidebarToggle) {
      this.elements.sidebarToggle.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.openSidebar();
      });
    }

    if (this.elements.closeSidebar) {
      this.elements.closeSidebar.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.closeSidebar();
      });
    }

    if (this.elements.overlay) {
      this.elements.overlay.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.closeSidebar();
      });
    }

    // Keyboard support
    document.addEventListener("keydown", (e) => {
      if (
        e.key === "Escape" &&
        this.elements.sidebar.classList.contains("sidebar-open")
      ) {
        this.closeSidebar();
      }
    });

    // Sidebar link clicks
    this.elements.sidebarLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        const href = link.getAttribute("href");

        // Check if this is a same-page anchor link (starts with #)
        if (href && href.startsWith("#")) {
          // This is a same-page anchor link
          e.preventDefault();
          e.stopPropagation();

          const targetId = href.substring(1);

          // Use hide mode if enabled, otherwise scroll
          if (this.config.hideMode) {
            this.showSection(targetId);
          } else {
            this.scrollToSection(targetId);
          }

          this.updateActiveLink(link);

          // Update URL hash
          window.location.hash = targetId;

          // Close sidebar on mobile after clicking a link
          if (window.innerWidth <= this.config.mobileBreakpoint) {
            this.closeSidebar();
          }
        } else {
          // This is an external link - let it navigate normally
          // Just close sidebar on mobile after clicking
          if (window.innerWidth <= this.config.mobileBreakpoint) {
            this.closeSidebar();
          }
          // Don't prevent default - let the browser handle the navigation
        }
      });
    });

    // Scroll spy (only if not in hide mode)
    if (!this.config.hideMode) {
      let scrollTimeout;
      const handleScrollSpy = () => {
        if (scrollTimeout) return;

        scrollTimeout = setTimeout(
          () => {
            const scrollPosition = window.scrollY + 150;

            this.elements.sections.forEach((section) => {
              const sectionTop = section.offsetTop;
              const sectionHeight = section.offsetHeight;
              const sectionId = section.getAttribute("id");

              if (
                scrollPosition >= sectionTop &&
                scrollPosition < sectionTop + sectionHeight
              ) {
                const correspondingLink = document.querySelector(
                  `${this.config.sidebarLinksSelector}[href="#${sectionId}"]`
                );
                this.updateActiveLink(correspondingLink);
              }
            });
            scrollTimeout = null;
          },
          this.isIOS ? 100 : 16
        ); // Throttle more on iOS
      };

      window.addEventListener("scroll", handleScrollSpy, { passive: true });
    }

    // Hash changes
    window.addEventListener("hashchange", () => {
      const targetId = window.location.hash.substring(1);
      const targetLink = document.querySelector(
        `${this.config.sidebarLinksSelector}[href="#${targetId}"]`
      );
      if (targetLink) {
        if (this.config.hideMode) {
          this.showSection(targetId);
        } else {
          this.scrollToSection(targetId);
        }
        this.updateActiveLink(targetLink);
      }
    });

    // Window resize
    let resizeTimeout;
    window.addEventListener("resize", () => {
      if (resizeTimeout) clearTimeout(resizeTimeout);

      resizeTimeout = setTimeout(() => {
        if (
          window.innerWidth > this.config.mobileBreakpoint &&
          this.elements.sidebar.classList.contains("sidebar-open")
        ) {
          this.closeSidebar();
        }
        // Ensure toggle button is visible on larger screens when sidebar is closed
        if (
          window.innerWidth > this.config.mobileBreakpoint &&
          !this.elements.sidebar.classList.contains("sidebar-open") &&
          this.elements.sidebarToggle
        ) {
          this.elements.sidebarToggle.style.display = "none";
        }
        // Show toggle button on mobile screens
        if (
          window.innerWidth <= this.config.mobileBreakpoint &&
          this.elements.sidebarToggle
        ) {
          this.elements.sidebarToggle.style.display = "flex";
        }
      }, 250);
    });
  }

  openSidebar() {
    this.elements.sidebar.classList.add("sidebar-open");
    this.elements.overlay.classList.add("sidebar-open");

    // Hide the toggle button when sidebar is open
    if (this.elements.sidebarToggle) {
      this.elements.sidebarToggle.style.display = "none";
    }

    // iOS Safari specific handling
    if (this.isIOS && this.isSafari) {
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
      document.body.style.top = `-${window.scrollY}px`;
    } else {
      document.body.style.overflow = "hidden";
    }
  }

  closeSidebar() {
    this.elements.sidebar.classList.remove("sidebar-open");
    this.elements.overlay.classList.remove("sidebar-open");

    // Show the toggle button when sidebar is closed
    if (this.elements.sidebarToggle) {
      this.elements.sidebarToggle.style.display = "flex";
    }

    // iOS Safari specific handling
    if (this.isIOS && this.isSafari) {
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.width = "";
      document.body.style.top = "";
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
    } else {
      document.body.style.overflow = "";
    }
  }

  scrollToSection(sectionId) {
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      const targetPosition = targetSection.offsetTop - this.config.scrollOffset;

      // iOS Safari smooth scrolling fix
      if (this.isIOS && this.isSafari) {
        window.scrollTo({
          top: targetPosition,
          behavior: "auto",
        });
      } else {
        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    }
  }

  updateActiveLink(activeLink) {
    this.elements.sidebarLinks.forEach((link) => {
      link.classList.remove("active");
    });
    if (activeLink) {
      activeLink.classList.add("active");
    }
  }

  handleInitialHash() {
    if (this.config.hideMode) {
      // In hide mode, show default section or section from hash
      const targetId = window.location.hash
        ? window.location.hash.substring(1)
        : this.config.defaultSection || "overview";

      const targetLink = document.querySelector(
        `${this.config.sidebarLinksSelector}[href="#${targetId}"]`
      );

      if (targetLink || targetId) {
        setTimeout(() => {
          this.showSection(targetId);
          if (targetLink) {
            this.updateActiveLink(targetLink);
          }
        }, 50);
      }
    } else {
      // Original scroll behavior
      if (window.location.hash) {
        const targetId = window.location.hash.substring(1);
        const targetLink = document.querySelector(
          `${this.config.sidebarLinksSelector}[href="#${targetId}"]`
        );
        if (targetLink) {
          setTimeout(
            () => {
              this.scrollToSection(targetId);
              this.updateActiveLink(targetLink);
            },
            this.isIOS ? 200 : 100
          );
        }
      }
    }
  }

  initializeHideMode() {
    // Hide all sections initially
    this.elements.sections.forEach((section) => {
      section.classList.add("wellness-section-hidden");
    });

    // Get default section from data attribute or config
    if (!this.config.defaultSection && this.elements.main) {
      this.config.defaultSection = this.elements.main.getAttribute(
        "data-default-section"
      );
    }
  }

  showSection(sectionId) {
    // Hide all sections first (batch DOM updates)
    this.elements.sections.forEach((section) => {
      section.classList.remove("wellness-section-visible");
      section.classList.add("wellness-section-hidden");
    });

    // Show the target section with fade-in
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      // Use requestAnimationFrame to batch the show operation
      requestAnimationFrame(() => {
        // Remove hidden class first
        targetSection.classList.remove("wellness-section-hidden");

        // Then trigger fade-in animation on next frame for smooth transition
        requestAnimationFrame(() => {
          targetSection.classList.add("wellness-section-visible");
        });
      });
    }
  }

  setupIOSFixes() {
    if (this.isIOS && this.isSafari) {
      // Fix for iOS Safari viewport height
      const setViewportHeight = () => {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty("--vh", `${vh}px`);
      };

      setViewportHeight();
      window.addEventListener("resize", setViewportHeight);
      window.addEventListener("orientationchange", setViewportHeight);

      // Fix for iOS Safari touch events
      document.addEventListener("touchstart", () => {}, { passive: true });
    }
  }

  initializeToggleButtonState() {
    // Set initial toggle button visibility based on screen size
    if (this.elements.sidebarToggle) {
      if (window.innerWidth <= this.config.mobileBreakpoint) {
        // Show toggle button on mobile screens
        this.elements.sidebarToggle.style.display = "flex";
      } else {
        // Hide toggle button on larger screens (desktop sidebar is always visible)
        this.elements.sidebarToggle.style.display = "none";
      }
    }
  }
}

// Auto-initialize with default configuration
// This will work for most pages with the standard benefits-sidebar setup
document.addEventListener("DOMContentLoaded", () => {
  // Check if we're on the wellness page (has data-default-section on main)
  const wellnessMain = document.querySelector("main[data-default-section]");
  if (wellnessMain && document.getElementById("benefitsSidebar")) {
    const defaultSection = wellnessMain.getAttribute("data-default-section");
    new SidebarNavigation({
      hideMode: true,
      defaultSection: defaultSection,
    });
  }
  // Check if we have the standard benefits sidebar (not wellness page)
  else if (document.getElementById("benefitsSidebar")) {
    new SidebarNavigation();
  }

  // Check for download center sidebar
  if (document.getElementById("downloadSidebar")) {
    new SidebarNavigation({
      sidebarId: "downloadSidebar",
      sidebarLinksSelector: ".download-sidebar .accordion-body a",
      sectionsSelector: ".section",
    });
  }

  // Check for enrollment sidebar
  if (document.getElementById("enrollmentSidebar")) {
    new SidebarNavigation({
      sidebarId: "enrollmentSidebar",
      sidebarLinksSelector: ".enrollment-sidebar .nav-item",
    });
  }
});

// Export for manual initialization if needed
window.SidebarNavigation = SidebarNavigation;
