const reviewBtn = document.getElementById("reviewBtn");
const goBackBtn = document.getElementById("goBack");
const submitBtn = document.getElementById("submitBtn");

reviewBtn.addEventListener("click", showConfirmation);
goBackBtn.addEventListener("click", goBack);
submitBtn.addEventListener("click", submitForm);

let storedFormData = null;
let generatedPDFBlob;

async function showConfirmation() {
  let recaptchaToken = grecaptcha.getResponse();
  if (!recaptchaToken) {
    alert("Please complete the reCAPTCHA to proceed.");
    return;
  }
  // if patient signature empty, alert user
  if (
    !document.getElementById("signaturePatient").value ||
    !document.getElementById("patientSigDate").value
  ) {
    alert("Please provide the patient's signature and/or date to continue!");
    return;
  }
  window.scrollTo({ top: 0, behavior: "smooth" });
  let crumbly = document.getElementById("crumbly");
  if (crumbly) crumbly.scrollIntoView();

  document.getElementById("healthInfoForm").style.display = "none";
  document.getElementById("confirmationSection").style.display = "block";

  let formData = new FormData(document.getElementById("healthInfoForm"));
  formData.append("g-recaptcha-response", recaptchaToken);

  let reviewContent = `
        <p><strong>Policy holder name:</strong> ${formData.get(
          "policyHolderName"
        )}</p>
        <p><strong>Patient name:</strong> ${formData.get("patientName")}</p>
        <p><strong>Point of contact:</strong> ${formData.get(
          "authorizedEntity"
        )}</p>
        <p><strong>Authorized organization(s):</strong> ${getSelectedCarriers()}</p>
        <p><strong>Provider name:</strong> ${formData.get("providerName")}</p>
        <p><strong>Provider phone:</strong> ${formData.get("providerPhone")}</p>
        <p><strong>Provider email:</strong> ${formData.get("providerEmail")}</p>
        <p><strong>Claim details:</strong> ${formData.get("claimDetails")}</p>
        <p><strong>Purpose of request:</strong> ${formData.get(
          "purposeOfReq"
        )}</p>
        <p><strong>Right to revoke:</strong> ${
          formData.get("rightToRevoke") ? "Agreed" : "Not agreed"
        }</p>
        <p><strong>Disclosure agreement:</strong> ${
          formData.get("understandDisclosureAndCopy") ? "Agreed" : "Not agreed"
        }</p>
        <p><strong>Personal representative:</strong> ${formData.get(
          "personalRepName"
        )}</p>
        <p><strong>Representative contact:</strong> ${formData.get(
          "personalRepContactInfo"
        )}</p>
        <p><strong>Patient signature:</strong> ${formData.get(
          "signaturePatient"
        )} (Date: ${formData.get("patientSigDate")})</p>
        <p><strong>Policyholder signature:</strong> ${formData.get(
          "signaturePolicyholder"
        )} (Date: ${formData.get("policyholderSigDate")})</p>
        <p><strong>Personal rep signature:</strong> ${formData.get(
          "signaturePersonalRep"
        )} (Date: ${formData.get("personalRepSigDate")})</p>
    `;

  // display selected supporting documents
  let fileInput = document.getElementById("supportingDocs");
  let fileNames = [];
  for (let i = 0; i < fileInput.files.length; i++) {
    fileNames.push(fileInput.files[i].name);
  }
  reviewContent += `<p><strong>Supporting documents:</strong> ${fileNames.join(
    ", "
  )}</p>`;

  document.getElementById("reviewYourStuff").innerHTML = reviewContent;
}

function getSelectedCarriers() {
  let carriers = [];
  document.querySelectorAll(".carrier-checkbox:checked").forEach((checkbox) => {
    carriers.push(checkbox.nextElementSibling.textContent);
  });
  return carriers.length ? carriers.join(", ") : "None";
}

function goBack() {
  // Display the form and hide the confirmation section
  document.getElementById("healthInfoForm").style.display = "block";
  document.getElementById("confirmationSection").style.display = "none";

  // Clear stored FormData to ensure changes are reflected next time
  storedFormData = null;
}

async function submitForm() {
  // Disable go back button and submit button
  goBackBtn.disabled = true;
  submitBtn.disabled = true;

  // Show loading indicator
  document.getElementById("loading").style.display = "block";

  let formData = new FormData(document.getElementById("healthInfoForm"));
  let attachmentsStr = "(n/a)";
  // Add the user-uploaded files to the formData object
  let fileInput = document.getElementById("supportingDocs");
  for (let i = 0; i < fileInput.files.length; i++) {
    formData.append("supportingDocs[]", fileInput.files[i]);
  }

  // if the user uploads any files, set the attachments string to say "See attached"
  if (fileInput.files.length > 0) {
    attachmentsStr = "See attached!";
  }

  // add the attachments string to the formData
  formData.append("attachments", attachmentsStr);
  console.log("Form data being sent off:", formData);
  console.log(attachmentsStr);

  // console.log(fileInput.files);

  try {
    generatedPDFBlob = await generatePDF(formData); // Store the generated PDF blob
    // Check if the PDF was successfully generated and append it to the formData
    if (!generatedPDFBlob) {
      throw new Error("PDF generation failed.");
    }
    const pdfFile = new File(
      [generatedPDFBlob],
      `Authorization Form ${formData.get("patientName")}.pdf`,
      { type: "application/pdf" }
    );

    formData.append(
      "supportingDocs",
      pdfFile,
      `Authorization_Form_${formData.get("patientName")}.pdf`
    );

    // Submit form data via fetch
    let response = await fetch("/nmpsiaapi/Sender/AuthReleaseHealthInfo", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      // Correctly download and open the new generated PDF
      const pdfURL = URL.createObjectURL(generatedPDFBlob);
      const downloadLink = document.createElement("a");
      downloadLink.href = pdfURL;
      downloadLink.download = `Authorization_Form_${formData.get(
        "patientName"
      )}_${new Date().toLocaleString()}.pdf`;
      downloadLink.click();

      // Open the PDF in a new tab
      // window.open(pdfURL, '_blank');

      // Show thank you message
      document.getElementById("confirmationSection").style.display = "none";
      document.getElementById("thankYouDriveThru").style.display = "block";
    } else {
      alert("There was an error submitting your form. Please try again.");
    }
  } catch (error) {
    console.error("Error generating PDF or submitting the form:", error);
    alert(
      "There was an error generating the PDF or submitting your form. Please try again."
    );
  } finally {
    // Re-enable buttons and hide the loading indicator
    goBackBtn.disabled = false;
    submitBtn.disabled = false;
    document.getElementById("loading").style.display = "none";
  }

  console.log(formData);
}

function generatePDF(formData) {
  return new Promise((resolve, reject) => {
    const { jsPDF } = window.jspdf;
    let doc = new jsPDF();
    let x = 10; // Starting x position
    let y = 40; // Starting y position
    let lineHeight = 10; // Line height for regular text

    // Add logo
    const logoPath = "images/nmpsia_logo_2024.png";
    const img = new Image();

    img.onload = function () {
      const logoWidth = 32;
      const logoHeight = (img.height * logoWidth) / img.width;

      // Add logo when the image is loaded
      doc.addImage(img, "png", 10, 10, logoWidth, logoHeight);

      // Add the PDF content
      addPDFContent(doc, formData, x, y, lineHeight);

      try {
        // Convert the document to a blob and resolve the promise with it
        const pdfBlob = doc.output("blob");
        resolve(pdfBlob);
      } catch (error) {
        reject(error);
      }
    };

    img.onerror = function () {
      reject(new Error("Failed to load logo image"));
    };

    // Set the image source to start loading
    img.src = logoPath;
  });
}

function addPDFContent(doc, formData, x, y, lineHeight) {
  // Add the heading
  doc.setFontSize(18);
  doc.text("Authorization for Release of Health Information", x + 40, 20);

  doc.setFontSize(12);

  // General information fields
  doc.text(`Policy holder name: ${formData.get("policyHolderName")}`, x, y);
  y += lineHeight;
  doc.text(`Patient name: ${formData.get("patientName")}`, x, y);
  y += lineHeight;
  doc.text(`Point of contact: ${formData.get("authorizedEntity")}`, x, y);
  y += lineHeight;
  doc.text(`Authorized organization(s): ${getSelectedCarriers()}`, x, y);
  y += lineHeight;
  doc.text(`Provider name: ${formData.get("providerName")}`, x, y);
  y += lineHeight;
  doc.text(`Provider phone: ${formData.get("providerPhone")}`, x, y);
  y += lineHeight;
  doc.text(`Provider email: ${formData.get("providerEmail")}`, x, y);
  y += lineHeight;

  // Handle long text for "Claim details" using splitTextToSize
  let claimDetails = (formData.get("claimDetails") || "N/A").replace(
    /\r?\n|\r/g,
    " "
  );
  let claimDetailsLines = doc.splitTextToSize(
    `Claim details: ${claimDetails}`,
    180
  ); // 180 is the width of the text block
  doc.text(claimDetailsLines, x, y);
  y += claimDetailsLines.length * lineHeight;

  // Handle long text for "Purpose of request" using splitTextToSize
  let purposeOfRequest = (formData.get("purposeOfReq") || "N/A").replace(
    /\r?\n|\r/g,
    " "
  );
  let purposeOfRequestLines = doc.splitTextToSize(
    `Purpose of request: ${purposeOfRequest}`,
    180
  );
  doc.text(purposeOfRequestLines, x, y);
  y += purposeOfRequestLines.length * lineHeight;

  // Continue with other form fields
  doc.text(
    `Right to revoke: ${
      formData.get("rightToRevoke") ? "Agreed" : "Not agreed"
    }`,
    x,
    y
  );
  y += lineHeight;
  doc.text(
    `Disclosure agreement: ${
      formData.get("understandDisclosureAndCopy") ? "Agreed" : "Not agreed"
    }`,
    x,
    y
  );
  y += lineHeight;
  doc.text(`Personal representative: ${formData.get("personalRepName")}`, x, y);
  y += lineHeight;
  doc.text(
    `Representative contact: ${formData.get("personalRepContactInfo")}`,
    x,
    y
  );
  y += lineHeight;

  // Add the signature fields
  // Signatures
  doc.text(
    `Patient signature: ${formData.get(
      "signaturePatient"
    )} (Date: ${formData.get("patientSigDate")})`,
    x,
    y
  );
  y += lineHeight;
  doc.text(
    `Policyholder signature: ${formData.get(
      "signaturePolicyholder"
    )} (Date: ${formData.get("policyholderSigDate")})`,
    x,
    y
  );
  y += lineHeight;
  doc.text(
    `Personal rep signature: ${formData.get(
      "signaturePersonalRep"
    )} (Date: ${formData.get("personalRepSigDate")})`,
    x,
    y
  );
  y += lineHeight;

  // handle long text for authorization statement
  let authorizationStatement = `By signing and submitting this form electronically, I (Patient, Policy Holder and/or Personal Representative) confirm that I am the individual identified in this document and that I have read, understood, and agree to the terms and conditions outlined herein. My electronic signature is equivalent to my handwritten signature and is intended to have the same legal effect as a physical signature. I understand that I am providing consent to use my electronic signature in connection with this document and that I have the right to withdraw my consent at any time. If I am signing on behalf of another person/entity represented in this form, I certify that I am legally authorized to do so.`;
  let authorizationStatementLines = doc.splitTextToSize(
    `Authorization statement: ${authorizationStatement}`,
    180
  );
  doc.text(authorizationStatementLines, x, y);
  y += authorizationStatementLines.length * lineHeight;
}
