class WeightMgmt extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /*html*/ `
        <div class="heading-and-element-flexbox">
        <h2 class="display-4">Healthy Weight Management</h2>
        <img src="images/nmpsia_logo_2024.png" alt="NMPSIA logo" />
      </div>
      <hr />
      <div class="container banner">
        <img
          src="images/wellness/clay-banks-scale.jpg"
          alt="Stock photo of a weighing scale"
        />
      </div>
      <h3 class="sub-heading">Blue Cross Blue Shield of New Mexico</h3>
      <ul class="content-list">
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a
            target="_blank"
            href="/pdfs/NM_Group_Well_onTarget_Overview_Flyer.pdf"
          >
            Well onTarget™ Overview Flyer</a
          >
        </li>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a target="_blank" href="/pdfs/BCBS_Health_Assesment_2024.pdf">
            BCBS Well onTarget™ - Are you living a healthy lifestyle?</a
          >
        </li>

        <li>
          <i class="bx bxs-file-pdf"></i>
          <a target="_blank" href="/pdfs/5_Sneaky_Ways_to_Stay_Active.pdf"
            >5 Sneaky Ways to Stay Active</a
          >
        </li>

        <li>
          <i class="bx bxs-file-pdf"></i>
          <a
            target="_blank"
            href="/pdfs/Wondr_Digital_Flyer_New_Year_Option_4_NMPSIA.pdf"
            >Wondr &ndash; Skills-based weight-loss program</a
          >
        </li>
      </ul>
      <h3 class="sub-heading">Presbyterian Health Plan</h3>
      <ul class="content-list">
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a
            target="_blank"
            href="/pdfs/2024_fitness_pass_flyer_corrected.pdf"
            >Fitness Pass Membership</a
          >
        </li>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a
            target="_blank"
            href="/pdfs/Presbyterian_Wellness_at_work_fall_2024.pdf"
          >
            Presbyterian - Wellness at Work</a
          >
        </li>

        <li>
          <i class="bx bxs-file-pdf"></i>
          <a
            target="_blank"
            href="/pdfs/Small_Changes_Big_Results_Good_Measures_NMPSIA_Healthy_Weight_Flyer_RD1.pdf"
            >Good Measures Healthy Weight Program - Small changes, big
            results!</a
          >
        </li>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a
            target="_blank"
            href="/pdfs/Nutrition_Program_Selection_NoomGMHC.pdf"
            >Find the Right Nutrition Program for You - Good Measures | Noom
            | Health Coaching</a
          >
        </li>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a target="_blank" href="/pdfs/Health_Coaching_NMPSIA_Flyer.pdf"
            >The Solutions Group - Free Health Coaching</a
          >
        </li>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a
            target="_blank"
            href="/pdfs/2024_GM_Achieve_your_health_goals_NMPSIA_Flyer.pdf"
            >Good Measures - Achieve your health goals and feel your
            best!</a
          >
        </li>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a
            target="_blank"
            href="/pdfs/2024_fitness_pass_flyer_corrected.pdf"
            >Enroll in the 2024 Fitness Pass Program</a
          >
        </li>
      </ul>
      <h3 class="sub-heading">Additional Weight Management Resources</h3>
      <ul class="content-list">
        <li>
          <i class="bx bx-video"></i>
          <a
            target="_blank"
            href="https://files.hesapps.com/walktober_2022/wal-video-nmpsia-compressed.mp4"
            ><em>Walktober</em> 2022 Informational Video</a
          >
        </li>
      </ul>
        `;
  }
}

customElements.define("weight-mgmt", WeightMgmt);
