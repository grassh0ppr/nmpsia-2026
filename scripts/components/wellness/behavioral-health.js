class BehavioralHealth extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /*html*/ `
      <div class="heading-and-element-flexbox">
        <h2 class="display-4">Behavioral Health</h2>
        <img src="images/nmpsia_logo_2024.png" alt="NMPSIA logo" />
      </div>
      <hr />
      <div class="container">
        <img
          style="border-radius: 4px"
          class="mt-3"
          width="100%"
          src="images/wellness/kelly-sikkema-behavioral-health.jpg"
          alt="Stock photo representing mental/behavioral health care and support"
        />
      </div>
      <h3 class="sub-heading">Blue Cross Blue Shield</h3>
      <ul class="content-list">
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a
            href="/pdfs/Strong_Habits_Strong_Brains_all_agencies.pdf"
            target="_blank"
            >Strong Habits = Strong Brains</a
          >
        </li>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a
            href="/pdfs/NM_Educator_Well-Being_Hub_NMPSIA_One_Pager_2021_02-24-2022.pdf"
            target="_blank"
            >New Mexico Educator Well-Being Hub by EVERFI</a
          >
        </li>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a
            target="_blank"
            href="/pdfs/9100605.0920_BlueResource_Stress_Relief_Staying_Relaxed_PDF.pdf"
            >BlueResource Stress Relief and Staying Relaxed</a
          >
        </li>

        <li>
          <i class="bx bxs-file-pdf"></i>
          <a target="_blank" href="/pdfs/WA_presentation.pdf"
            >Digital Mental Health</a
          >
        </li>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a target="_blank" href="/pdfs/NM_COVID-19_Flier.pdf"
            >March 2020 Notice: Coronavirus and What It Means (English)</a
          >
        </li>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a target="_blank" href="/pdfs/Spanish_202019_nco_factsheet.pdf"
            >March 2020 Notice: Coronavirus and What It Means (Spanish)</a
          >
        </li>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a target="_blank" href="https://nmpsia.com/pdfs/490973.0325 NM Group Behavioral Health Mental Health Hub Core Toolkit Member Flier.pdf"
            ><span style="text-transform: uppercase;">New</span> Mental Health Hub - Get the Right Care</a
          >
        </li>
      </ul>
      <h3 class="sub-heading">Presbyterian</h3>
      <ul class="content-list">
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a target="_blank" href="/pdfs/PHPNL_12-2021.pdf"
            >HealthyLife Letter - Four Ways to Develop Empathy</a
          >
        </li>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a
            target="_blank"
            href="/pdfs/NMPSIA_Mental_Well-Being_Skill_Builder.pdf"
            >NMPSIA Mental Well-Being Skill Builder</a
          >
        </li>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a
            target="_blank"
            href="/pdfs/March_2021_Resources_for_Resilience.pdf"
            >2021 Resources for Resilience</a
          >
        </li>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a target="_blank" href="/pdfs/2021_Wellness_Engagement.pdf">
            2021 Wellness Engagement Programs</a
          >
        </li>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a target="_blank" href="/pdfs/April_2021_Sleep_Skill_Builder.pdf"
            >2021 Sleep Skill Builder</a
          >
        </li>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a
            target="_blank"
            href="/pdfs/April_2021_Health_Observance_Poster.pdf"
            >April 2021 Health Observance Poster</a
          >
        </li>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a
            target="_blank"
            href="/pdfs/May_2021_Health_Observance_Poster.pdf"
            >May 2021 Health Observance Poster</a
          >
        </li>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a
            target="_blank"
            href="/pdfs/June_2021_Health_Observance_Poster.pdf"
            >June 2021 Health Observance Poster</a
          >
        </li>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a href="/pdfs/Talkspace_Flyer_Updated_2024.pdf" target="_blank"
            >Talkspace Messaging Therapy</a
          >
        </li>
      </ul>
      <h3 class="sub-heading">Additional Behavioral Health Offerings</h3>
      <ul class="content-list">
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a
            target="_blank"
            href="/pdfs/MBSR_Flyer_21_Day_Calm_and_Strong_Flyer_2022.pdf"
            >21 Day Calm and Strong - Meditation & Exercise Challenge
            2022</a
          >
        </li>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a
            target="_blank"
            href="/pdfs/Quarterly_Wellness_Ambassador_Meeting_November_2021.pdf#page=3.pdf"
            >Mindfulness-Based Stress Reduction - Open to Everyone!</a
          >
        </li>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a
            target="_blank"
            href="/pdfs/Quarterly_Wellness_Ambassador_Meeting_November_2021.pdf#page=2.pdf"
            >Talkspace Resilience Series by PHP</a
          >
        </li>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a
            target="_blank"
            href="/pdfs/Quarterly_Wellness_Ambassador_Meeting_November_2021.pdf#page=4.pdf"
            >Monthly Skill Builders - Self Care BINGO</a
          >
        </li>
      </ul>
      `;
  }
}

customElements.define("behavioral-health", BehavioralHealth);
