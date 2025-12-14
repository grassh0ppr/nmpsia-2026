// Get references to the links and sections
const links = document.querySelectorAll("aside a, .grid-layout a");
const sections = document.querySelectorAll(".section, .content-section");
const mainElement = document.querySelector("main");
const defaultSection = mainElement.dataset.defaultSection || "overview";

// Function to show the correct section and update the active link
function showSection(sectionId) {
  // Temporarily disable scroll events to prevent shaking
  const originalScrollBehavior = document.documentElement.style.scrollBehavior;
  document.documentElement.style.scrollBehavior = "auto";

  sections.forEach((section) => {
    section.classList.toggle(
      "active",
      section.id.toLowerCase() === sectionId.toLowerCase()
    );
  });

  links.forEach((link) => {
    link.classList.toggle(
      "active",
      link.getAttribute("href").toLowerCase() === `#${sectionId.toLowerCase()}`
    );
  });

  // Force a reflow to ensure changes are applied
  document.body.offsetHeight;

  // Restore original scroll behavior after a brief delay
  // setTimeout(() => {
  //   document.documentElement.style.scrollBehavior = originalScrollBehavior;
  // }, 100);
}

// Event listener for navigation clicks
links.forEach((link) => {
  link.addEventListener("click", (event) => {
    // Skip modal trigger clicks - let Bootstrap handle them
    if (
      event.target.hasAttribute("data-bs-toggle") &&
      event.target.getAttribute("data-bs-toggle") === "modal"
    ) {
      return; // Let Bootstrap handle the modal
    }

    if (!event.target.href.includes("#") && event.target.target !== "_blank") {
      // if no hash and no target=blank, open link in same tab
      window.location = event.target.href;
    } else if (
      !event.target.href.includes("#") &&
      event.target.target == "_blank"
    ) {
      // if no hash and has target=blank, open link in new tab
      event.preventDefault(); // Prevent default browser behavior
      window.open(event.target.href, "_blank");
    } else if (event.target.href.includes(".html")) {
      // if link has .html, open link in same tab
      window.location = event.target.href;
    } else {
      event.preventDefault();
      const sectionId = link.dataset.section.toLowerCase();
      window.location.hash = sectionId;
      showSection(sectionId);
    }

    // ALWAYS close mobile sidebar when ANY sidenav link is clicked
    document.querySelector("aside")?.classList.remove("open");
    document.querySelector(".show-aside")?.classList.remove("open");
  });
});

// Check hash on page load and show the corresponding section
window.addEventListener("DOMContentLoaded", () => {
  const hash = window.location.hash.substring(1).toLowerCase();
  if (hash) {
    showSection(hash);
  } else {
    showSection(defaultSection.toLowerCase()); // Default section
  }
});

// Listen for hash changes
window.addEventListener("hashchange", () => {
  const hash = window.location.hash.substring(1).toLowerCase();
  if (hash) {
    showSection(hash);
  } else {
    showSection(defaultSection.toLowerCase()); // Default section
  }
});

// listen for click on .show-aside icon
document.querySelector(".show-aside").addEventListener("click", () => {
  const aside = document.querySelector("aside");
  const showAside = document.querySelector(".show-aside");
  aside.classList.toggle("open");
  showAside.classList.toggle("open");
});

// listen for click on anywhere outside of aside to close it
document.addEventListener("click", (event) => {
  if (event.target.closest("aside") || event.target.closest(".show-aside"))
    return;
  const aside = document.querySelector("aside");
  const showAside = document.querySelector(".show-aside");
  aside.classList.remove("open");
  showAside.classList.remove("open");
});

// Handle go-back button clicks
document.addEventListener("click", (event) => {
  if (event.target.classList.contains("go-back-button")) {
    event.preventDefault();
    const sectionId = "overview";
    window.location.hash = sectionId;
    showSection(sectionId);
    // Close aside on click
    const aside = document.querySelector("aside");
    const showAside = document.querySelector(".show-aside");
    if (aside) aside.classList.remove("open");
    if (showAside) showAside.classList.remove("open");
  }
});
