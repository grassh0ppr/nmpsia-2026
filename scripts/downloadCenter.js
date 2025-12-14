// monthly agendas/packets for BAC,RAC,IFR, and Board meetings in a js object

// each month has an id in pattern of "YYYYMM" e.g. "202503" for March 2025
// this id matches the name of the directory in /nmpsiadownload
// each month has a dates array with the dates of the meetings e.g. [5, 6]
// use js to render the repetitive html for each month
// four meeting categories: BAC, RAC, IFR, Board
// URL pattern for agendas: /nmpsiadownload/YYYYMM/Board_Meeting_Agenda.pdf

// URL pattern for packets: /nmpsiadownload/YYYYMM/packets/Board_Meeting_Packet.pdf

// use string interpolation to build the URLs
// use string interpolation to build the html
// use js to render the html

// Updated Meeting Data
import { meetings } from "./meetingsData.js";

// Function to dynamically generate URLs
function generateDocumentURL(monthId, committee, type) {
  if (type === "agenda") {
    return `https://nmpsia.com/nmpsiadownload/${monthId}/${committee}_Meeting_agenda.pdf`;
  } else if (type === "packet") {
    return `https://nmpsia.com/nmpsiadownload/${monthId}/packets/${committee}_Meeting_packet.pdf`;
  }
  //   else if (type === "special") {
  //     return `https://nmpsia.com/nmpsiadownload/${monthId}/${committee}_Meeting_agenda.pdf`;
  //   }
  return "#"; // Default fallback URL
}

// Function to generate meeting HTML
function generateMeetingHTML(monthId, committee, data) {
  const { date, documents } = data;

  let documentsHTML = "";
  documents.forEach((type) => {
    const url = generateDocumentURL(monthId, committee, type);
    const icon =
      type === "agenda"
        ? "bx bx-list-ol"
        : type === "packet"
        ? "bx bxs-file"
        : "bx bx-link-external";
    documentsHTML += `
      <li>
        <i class="${icon}"></i>
        <a href="${url}" target="_blank">${committee} Meeting ${type}</a>
      </li>
    `;
  });

  return `
    <div class="meeting">
      <h4 class="sub-heading">${committee} Meeting</h4>
      <span class="date">${monthId.slice(4)}/${date}</span>
      <ul class="content-list grid-layout mt-1">
        ${documentsHTML || "<li>No documents available yet.</li>"}
      </ul>
    </div>
  `;
}

// Function to generate additional info HTML
function generateInfoHTML(info) {
  return info
    .map(
      (item) => `
      <li>
        <i class="bx bx-link-external"></i>
        <a href="${item.url}" target="_blank">${item.textContent}</a>
      </li>
    `
    )
    .join("");
}

// Function to render meetings for a specific month
function renderMeetings(monthId) {
  const container = document.getElementById(monthId);
  if (!container) return;

  const { monthTitle, committees, info } = meetings[monthId];
  let html = `<h3 class="display-5">${monthTitle}</h3>`;

  for (const [committee, data] of Object.entries(committees)) {
    html += generateMeetingHTML(monthId, committee, data);
  }

  // Conditionally render additional info if it exists
  if (info && info.length > 0) {
    html += `
      <div class="additional-info">
        <h4 class="sub-heading">Additional Information</h4>
        <ul class="content-list">
          ${generateInfoHTML(info)}
        </ul>
      </div>
    `;
  }

  container.innerHTML = html;
}

// Render all meetings
document.addEventListener("DOMContentLoaded", () => {
  Object.keys(meetings).forEach((monthId) => renderMeetings(monthId));
});
