// Modern JS for Annual Risk Premium Invoice with improved UX

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const districtInput = document.getElementById("District");
  const nameInput = document.getElementById("Name");
  const yearSelect = document.getElementById("datelist");
  const modal = document.getElementById("myModal");
  const submitBtn = document.getElementById("Submit");
  let isValidDistrict = false;

  // Create or select feedback element
  let feedback = document.getElementById("district-feedback");
  if (!feedback) {
    feedback = document.createElement("div");
    feedback.id = "district-feedback";
    feedback.setAttribute("aria-live", "polite");
    feedback.style.fontSize = "0.95em";
    feedback.style.marginTop = "0.25rem";
    districtInput.parentNode.appendChild(feedback);
  }

  // Helper: Show modal
  const showModal = () => {
    if (modal) modal.style.display = "block";
  };

  // Helper: Hide modal
  const hideModal = () => {
    if (modal) modal.style.display = "none";
  };

  // Helper: Set feedback
  const setFeedback = (msg, color = "#dc3545") => {
    feedback.textContent = msg;
    feedback.style.color = color;
  };

  // Get school name by district ID (live)
  const getSchoolName = () => {
    const districtId = districtInput.value.trim();
    const found = schoolList.find((s) => String(s.distId) === districtId);
    if (found) {
      nameInput.value = found.schoolName;
      isValidDistrict = true;
      setFeedback("Valid District ID ✓", "#198754"); // green
      submitBtn.disabled = false;
      nameInput.classList.add("is-valid");
      nameInput.classList.remove("is-invalid");
    } else {
      nameInput.value = "";
      isValidDistrict = false;
      if (districtId.length > 0) {
        setFeedback("No matching school found for this District ID.");
      } else {
        setFeedback("");
      }
      submitBtn.disabled = true;
      nameInput.classList.remove("is-valid");
      nameInput.classList.remove("is-invalid");
    }
  };

  // Generate PDF URL and open
  const getPdf = () => {
    if (!isValidDistrict) {
      showModal();
      return;
    }
    const year = yearSelect.value;
    const distId = districtInput.value.trim();
    let url = "";
    if (year && distId) {
      if (parseInt(year) > 2014 && parseInt(distId) > 99) {
        url = `https://nmpsia.com/DistInvoice_${year}/FY${year.slice(
          -2
        )}-${distId}.PDF`;
      } else if (parseInt(distId) < 10) {
        url = `https://nmpsia.com/DistInvoice_${year}/FY${year.slice(
          -2
        )}-00${distId}.PDF`;
      } else if (parseInt(distId) < 100) {
        url = `https://nmpsia.com/DistInvoice_${year}/FY${year.slice(
          -2
        )}-0${distId}.PDF`;
      } else {
        url = `https://nmpsia.com/DistInvoice_${year}/FY15-${distId}.PDF`;
      }
      window.open(url, "_blank");
    }
  };

  // Live lookup as user types
  districtInput.addEventListener("input", getSchoolName);
  // Also on blur for good measure
  districtInput.addEventListener("blur", getSchoolName);

  // Event: Form submit
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!isValidDistrict) {
      setFeedback("Please enter a valid District ID before submitting.");
      showModal();
      return;
    }
    getPdf();
  });

  // Initialize state on load
  getSchoolName();
});
