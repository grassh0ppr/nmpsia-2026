class CybersecurityInfo extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /*html*/ `
    <div class="heading-and-element-flexbox">
    <h2 class="display-4">Cybersecurity Information</h2>
   
  </div>
  <hr />
  <ul class="content-list grid-layout">
    <li>
      <i class="bx bxs-file-pdf"></i>
      <a
        href="https://nmpsia.com/pdfs/poms-risk-docs/Cyber Insurance Coverage in Schools - NMPED Charter School Conference, June 10, 2025.pdf"
        target="_blank"
        >Cyber Insurance Coverage in Schools - 2025 NMPED Charter School
        Conference</a
      >
    </li>
    <li>
      <i class="bx bxs-file-pdf"></i>
      <a
        href="https://nmpsia.com/pdfs/poms-risk-docs/2025_NM_OCS_No_Cost_Cybersecurity_Services_for_K_12_and_Higher_Education_Institutions.pdf"
        target="_blank"
        >OCS No-Cost Cybersecurity Services and Solutions</a
      >
    </li>
    <li>
      <i class="bx bxs-file-pdf"></i>
      <a
        href="/pdfs/poms-risk-docs/2025_CISA_No_Cost_Resource_Detail_Presentation.pdf"
        target="_blank"
        >CISA NM No-Cost Cybersecurity Mission & Resource Brief</a
      >
    </li>
    <li>
      <i class="bx bxs-file-pdf"></i>
      <a
        href="/pdfs/poms-risk-docs/2025_CISA_NM_No_Cost_Federally_Funded_Cybersecurity_Resources.pdf"
        target="_blank"
        >CISA NM No-Cost Federally Funded Cybersecurity Resources</a
      >
    </li>
    <li>
      <i class="bx bxs-file-pdf"></i>
      <a
        href="/pdfs/poms-risk-docs/2025_NM_OCS_Recent_Cyber_Threat_Activity_in_New_Mexico.pdf"
        target="_blank"
        >OCS Public Service Announcement - Recent Cyber Threat Activity
        in New Mexico</a
      >
    </li>
    <!-- <li>
      <i class="bx bxs-file-pdf"></i>
      <a href="/pdfs/POMS_Cyber_Security_Message.pdf" target="_blank"
        >POMS Cyber Security Message</a
      >
    </li> -->
    <li>
      <i class="bx bxs-file-pdf"></i>
      <a
        href="/pdfs/poms-risk-docs/Ransomware_Playbook.pdf"
        target="_blank"
        >Incident Response Playbook - Ransomware</a
      >
    </li>
    
  </ul>
    `;
  }
}

customElements.define("cybersecurity-info", CybersecurityInfo);
