const csvFilePath = "/docs/event_registration/Event_Registration_All.csv";
let emailArray = []; // Declare the array outside to store all emails
let attendees = []; // Declare the array outside to store all attendees

fetch(csvFilePath)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.text();
  })
  .then((csvText) => {
    const rows = csvText.split("\n");
    rows.forEach((row) => {
      const columns = row.split(",");
      const email = columns.find((col) => col.includes("@"));
      if (email) {
        emailArray.push(email.trim()); // Add email to the array
      }
    });
    console.log(emailArray); // Log the array of emails for debugging
  })
  .catch((error) => {
    console.error("Error fetching or parsing the CSV file:", error);
  });

// when user clicks in the email input, remove the placeholder text
const emailInput = document.getElementById("userInput");
emailInput.addEventListener("click", function () {
  this.placeholder = "";
});

// when user clicks submit, check if email is valid
const submitButton = document.getElementById("submitButton");
submitButton.addEventListener("click", function (event) {
  event.preventDefault(); // Prevent the default form submission
  if (!emailInput.value) {
    // alert("Please enter an email address.");
    // show the sign in error bootstrap modal
    const signInErrorModal = new bootstrap.Modal(
      document.getElementById("signInErrorModal")
    );
    signInErrorModal.show();
    return;
  }
  const email = emailInput.value.trim();
  if (email && emailArray.includes(email)) {
    // show the sign in success bootstrap modal
    const signInSuccessModal = new bootstrap.Modal(
      document.getElementById("signInSuccessModal")
    );
    signInSuccessModal.show();
    // clear the input field
    emailInput.value = "";
    emailInput.disabled = true; // Disable the input field after successful sign-in
    // disable submit button
    submitButton.disabled = true;
    // pause for effect
    setTimeout(() => {
      // redirect to the employer trainings page
      window.location.href =
        "https://nmpsia.com/employer-trainings.html#trainings-library";
    }, 2000);
  } else {
    // alert("Email address not found. Please enter a valid one.");
    // show the sign in error bootstrap modal
    const signInFailureModal = new bootstrap.Modal(
      document.getElementById("signInFailureModal")
    );
    signInFailureModal.show();
    // clear the input field
    emailInput.value = "";
  }
});
