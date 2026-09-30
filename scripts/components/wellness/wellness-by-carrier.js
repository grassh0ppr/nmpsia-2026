class WellnessByCarrier extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /*html*/ `
      <div class="heading-and-element-flexbox">
        <h2 class="display-4">
          Wellness Program Offerings by Carrier
        </h2>
        <img src="images/nmpsia_logo_2024.png" alt="NMPSIA logo" />
      </div>
      <div class="container banner">
        <img
          src="images/wellness/fellipe-ditadi-wellness-by-carrier.jpg"
          alt="decorative element"
        />
      </div>
      <p class="mt-3">Find all wellness resources available through your specific carrier(s) below. For a program-by-program view, use the navigation on the left.</p>

      <h3 class="sub-heading">Blue Cross Blue Shield of New Mexico</h3>
      <ul class="content-list">
        <li>
          <i class="bx bx-link-external"></i>
          <a
            target="_blank"
            href="https://account.wellontarget.com/login/?goto=https%3A%2F%2Fcim.wellontarget.com%3A443%2Fam%2Foauth2%2Fmembers%2Fauthorize%3Fclient_id%3Doauth_mma_wot_APP00046856%26scope%3Dopenid%2520profile%26redirect_uri%3Dhttps%3A%2F%2Fwellontarget.onlifehealth.com%2FHome%2FLoginCallback%26response_type%3Dcode%26state%3DDeH6RrxWkedTA8OLik5P1Pdq6rv9B4D57Mxko8m7mJA%26code_challenge%3DV6srKHzSTsC_UTOqNiRPYZdaAItsikxucOllgkEYHgM%26code_challenge_method%3DS256%26service%3Dhcsc-members-mma-mfa%26locale%3Dwot&amp;realm=/members&amp;service=hcsc-members-mma-mfa"
          >
            Well On Target Login (Note: Must create a Blue Access for Members (BAM) profile prior to logging in)
          </a>
        </li>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a target="_blank" href="/pdfs/NM_Group_Well_onTarget_Overview_Flyer.pdf">
            Well onTarget™ Overview Flyer</a
          >
        </li>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a target="_blank" href="/pdfs/BCBS_Health_Assesment_2024.pdf">
            Well onTarget™ - Are you living a healthy lifestyle? (Health Assessment)</a
          >
        </li>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a
            target="_blank"
            href="/pdfs/NM Group Retail Social Media Overview Member Flier - English.pdf"
          >
            The Social Side of Your Health Insurance</a
          >
        </li>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a
            target="_blank"
            href="/pdfs/NM-Group-QIP-Adult-Wellness-Member-Guidelines.pdf"
          >
            Adult Wellness Guidelines - Making Preventative Care a Priority</a
          >
        </li>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a
            target="_blank"
            href="/pdfs/NM-Group-QIP-Childrens-Wellness-Member-Guidelines.pdf"
          >
            Children's Wellness Guidelines - Laying the Groundwork for a Healthy Tomorrow</a
          >
        </li>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a
            target="_blank"
            href="/pdfs/NM_BlueResource_Screening_for_Cervical_Cancer_Member_Flier.pdf"
          >
            BlueResource - Take Action Against a Silent Killer</a
          >
        </li>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a target="_blank" href="/pdfs/BCBS_Flu_Season_2024.pdf">
            Who should get a flu shot and when?</a
          >
        </li>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a target="_blank" href="https://nmpsia.com/pdfs/490973.0325 NM Group Behavioral Health Mental Health Hub Core Toolkit Member Flier.pdf"
            ><span style="text-transform: uppercase;">New</span> Mental Health Hub - Get the Right Care</a
          >
        </li>
        <li>
          <i class="bx bx-link-external"></i>
          <a href="https://members.mdlive.com/bcbsnm/landing_home" target="_blank"
            >MDLIVE - Virtual/Telehealth Visits</a
          >
        </li>
        <li>
          <i class="bx bx-link-external"></i>
          <a href="/pdfs/bcbs_galileo_flyer_2025.pdf" target="_blank"
            >Galileo - Virtual Primary Care</a
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
          <a target="_blank" href="/pdfs/NM Fitness Program.pdf"
            >Fitness Program Membership</a
          >
        </li>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a target="_blank" href="/pdfs/NM Fitness Program SP.pdf"
            >Fitness Program Membership - en espa&ntilde;ol</a
          >
        </li>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a href="/pdfs/Less_ChoLESterol_is_Better.pdf" target="_blank"
            >Less Cho<em>LES</em>terol is Better</a
          >
        </li>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a target="_blank" href="/pdfs/Smart_Ways_to_Lower_Your_Risk_for_Stroke.pdf"
            >Smart Ways to Lower Your Risk for Stroke</a
          >
        </li>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a target="_blank" href="/pdfs/Ways_to_Love_Your_Heart_Flier.pdf"
            >Ways to Love Your Heart</a
          >
        </li>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a target="_blank" href="/pdfs/Healthy_Choices_Make_a_Big_Difference.pdf"
            >Healthy Choices Make a Big Difference (Diabetes)</a
          >
        </li>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a href="/pdfs/wellness/BH_Maternity_Postpartum_Flyer_NMPSIA.pdf" target="_blank"
            >MDLive - Support During <em>and</em> After Your Pregnancy</a
          >
        </li>
      </ul>

      <h3 class="sub-heading">Presbyterian Health Plan</h3>
      <ul class="content-list">
        <li>
          <i class="bx bx-link-external"></i>
          <a
            target="_blank"
            href="https://login.personifyhealth.com/auth/realms/platform/protocol/openid-connect/auth?client_id=platform-ui&redirect_uri=https%3A%2F%2Fapp.personifyhealth.com%2F%23%2Fhome&state=e7abd542-12f2-4278-9261-69c2bcd0dbab&response_mode=fragment&response_type=code&scope=openid&nonce=97efaff5-86d6-45c9-8fd2-a88d581d4591"
          >
            Presbyterian Wellness at Work Login</a
          >
        </li>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a target="_blank" href="/pdfs/Presbyterian_Flu_Prevention_2024.pdf">
            Flu Prevention and Treatment</a
          >
        </li>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a target="_blank" href="/pdfs/NMPSIA_Mental_Well-Being_Skill_Builder.pdf"
            >NMPSIA Mental Well-Being Skill Builder</a
          >
        </li>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a href="/pdfs/Talkspace_Flyer_Updated_2024.pdf" target="_blank"
            >Talkspace Messaging Therapy</a
          >
        </li>
        <li>
          <i class="bx bx-link-external"></i>
          <a
            target="_blank"
            href="https://www.phs.org/tools-resources/member/video-visit/Pages/default.aspx"
            >myPRES - Video Visits</a
          >
        </li>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a
            href="/PDFs/wellness/virtual/presbyterian/PMG_VPC_Gen_Flyer_2023_011224_WEB_FINAL.pdf"
            target="_blank"
            >About Virtual Primary Care</a
          >
        </li>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a
            href="/PDFs/wellness/virtual/presbyterian/How_to_Schedule_Virtual_Primary_Care_Final.pdf"
            target="_blank"
            >How to Make an Appointment for Virtual Primary Care</a
          >
        </li>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a
            href="/PDFs/wellness/virtual/presbyterian/Virtual_Urgent_Care_Gen_Flyer_011724_WEB_FINAL.pdf"
            target="_blank"
            >About Virtual Urgent Care</a
          >
        </li>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a
            href="/PDFs/wellness/virtual/presbyterian/How_to_Schedule_Virtual_Urgent_Care_ENG_PQ_020224.pdf"
            target="_blank"
            >How to Make an Appointment for Virtual Urgent Care</a
          >
        </li>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a
            href="/PDFs/wellness/virtual/presbyterian/Virtual_BH_General_Flyer_ENG_SP_WEB.pdf"
            target="_blank"
            >About Virtual Behavioral Health</a
          >
        </li>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a target="_blank" href="/pdfs/2024_fitness_pass_flyer_corrected.pdf"
            >Fitness Pass Membership</a
          >
        </li>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a target="_blank" href="/pdfs/Presbyterian_Wellness_at_work_fall_2024.pdf">
            Wellness at Work</a
          >
        </li>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a
            target="_blank"
            href="/pdfs/Small_Changes_Big_Results_Good_Measures_NMPSIA_Healthy_Weight_Flyer_RD1.pdf"
            >Good Measures Healthy Weight Program - Small changes, big results!</a
          >
        </li>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a target="_blank" href="/pdfs/Nutrition_Program_Selection_NoomGMHC.pdf"
            >Find the Right Nutrition Program for You - Good Measures | Noom | Health Coaching</a
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
          <a target="_blank" href="/pdfs/2024_GM_Achieve_your_health_goals_NMPSIA_Flyer.pdf"
            >Good Measures - Achieve your health goals and feel your best!</a
          >
        </li>
      </ul>

      <h3 class="sub-heading">Express Scripts Evernorth / Omada</h3>
      <ul class="content-list">
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a target="_blank" href="/wellness/2026/Omada Diabetes.pdf"
            >Omada Diabetes Program Flyer</a
          >
        </li>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a target="_blank" href="/wellness/2026/Omada Weight Management.pdf"
            >Omada Weight Management Program Flyer</a
          >
        </li>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a target="_blank" href="/wellness/2026/Omada Hypertension.pdf"
            >Omada Hypertension Program Flyer</a
          >
        </li>
      </ul>

      <h3 class="sub-heading">Sword Health (Pain Management)</h3>
      <ul class="content-list">
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a href="/wellness/2026/Sword Pain Management.pdf" target="_blank"
            >Sword - $0 Pain Management Program Flyer</a
          >
        </li>
        <li>
          <i class="bx bx-link"></i>
          <a href="https://sword.health/platform/nmpsia/go" target="_blank"
            >Access Sword Program and Find Your Treatment</a
          >
        </li>
      </ul>

      <h3 class="sub-heading">Delta Dental</h3>
      <ul class="content-list">
        <li>
          <i class="bx bx-link-external"></i>
          <a href="https://www.deltadentalnm.com/member/nmpsia-members/" target="_blank"
            >Delta Dental Website</a
          >
        </li>
        <li>
          <i class="bx bx-link-external"></i>
          <a href="https://blog.deltadentalnm.com/category/dental-benefits/" target="_blank"
            >Delta Dental Blog – Dental Benefits</a
          >
        </li>
        <li>
          <i class="bx bx-link-external"></i>
          <a href="https://blog.deltadentalnm.com/category/oral-health/" target="_blank"
            >Delta Dental Blog – Oral Health</a
          >
        </li>
        <li>
          <i class="bx bx-link-external"></i>
          <a href="https://blog.deltadentalnm.com/category/health-and-fitness/" target="_blank"
            >Delta Dental Blog – Health and Fitness</a
          >
        </li>
        <li>
          <i class="bx bx-link-external"></i>
          <a href="https://blog.deltadentalnm.com/category/fear-free/" target="_blank"
            >Delta Dental Blog – Fear Free</a
          >
        </li>
        <li>
          <i class="bx bx-link-external"></i>
          <a href="https://www.deltadentalnm.com/wellness/wellness-resource-library/#oralhealthwellnesscards" target="_blank"
            >Oral Health Wellness Cards</a
          >
        </li>
        <li>
          <i class="bx bx-link-external"></i>
          <a href="https://www.deltadentalnm.com/wellness/wellness-resource-library/#oralhealthvideos" target="_blank"
            >Oral Health Videos</a
          >
        </li>
        <li>
          <i class="bx bx-link-external"></i>
          <a href="https://www.deltadentalnm.com/wellness/wellness-resource-library/#oralhealthteachingtoolsforchildren" target="_blank"
            >Oral Health Teaching Tools for Children</a
          >
        </li>
        <li>
          <i class="bx bx-link-external"></i>
          <a href="https://www.deltadentalnm.com/wellness/wellness-resource-library/#additionaloralhealthresources" target="_blank"
            >Additional Oral Health Resources</a
          >
        </li>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a target="_blank" href="/pdfs/wellness/DDNM_Pregnancy_RC_2024_057_DDNM_MKT_ENGLISH.pdf"
            >Staying Healthy for Baby</a
          >
        </li>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a target="_blank" href="/pdfs/wellness/DDNM_EBD_WITHOUT_PCS_Flyer_2024_005_DDNM_MKT.pdf"
            >Evidence Based Dentistry (EBD)</a
          >
        </li>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a target="_blank" href="/pdfs/wellness/DDNM_Pregnancy_and_Oral_Health_Member_brochure_2024.pdf"
            >Pregnancy and Oral Health</a
          >
        </li>
        <li>
          <i class="bx bx-link-external"></i>
          <a target="_blank" href="https://blog.deltadentalnm.com/2022/07/pregnant-women-skip-dentist/"
            >Debunking the myth that pregnant women should skip the dentist</a
          >
        </li>
        <li>
          <i class="bx bx-link-external"></i>
          <a target="_blank" href="https://blog.deltadentalnm.com/2022/07/oral-health-pregnancy/"
            >Why oral health care is essential during pregnancy</a
          >
        </li>
        <li>
          <i class="bx bx-link-external"></i>
          <a target="_blank" href="https://blog.deltadentalnm.com/2017/11/toothpaste-dental-products-pregnancy/"
            >Toothpaste + Other Dental Products for Your Pregnancy</a
          >
        </li>
      </ul>

      <h3 class="sub-heading">BlueCare Dental</h3>
      <ul class="content-list">
        <li>
          <i class="bx bx-link-external"></i>
          <a target="_blank" href="https://ohl.go2dental.com/oral-systemic?cli=dnoa&brand=nm&sm=33"
            >BlueCare Wellness Blogs</a
          >
        </li>
        <li>
          <i class="bx bx-link-external"></i>
          <a target="_blank" href="https://ohl.go2dental.com/news-list?cli=dnoa&brand=nm&sm=13"
            >BlueCare Newsletters</a
          >
        </li>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a target="_blank" href="/pdfs/carriers/blueCare_dental/BlueCare Dental PPO Member Flier.pdf"
            >BlueCare Dental PPO Member Information</a
          >
        </li>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a target="_blank" href="/pdfs/carriers/blueCare_dental/BlueCare Dental Teledentistry Member Flier.pdf"
            >BlueCare Dental Teledentistry Services</a
          >
        </li>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a target="_blank" href="/pdfs/2024 Teledentistry Rebrand final.pdf"
            >Teledentistry Services from Dental.com</a
          >
        </li>
      </ul>

      <h3 class="sub-heading">United Concordia</h3>
      <ul class="content-list">
        <li>
          <i class="bx bx-link-external"></i>
          <a
            target="_blank"
            href="https://www.unitedconcordia.com/benefits/clients-corner/New-Mexico-Public-School-Client-Corner-Dental-Benefits"
            >United Concordia Website</a
          >
        </li>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a href="/pdfs/2023 Cost_Feature_Flyer.pdf" target="_blank"
            >Know Your Costs Before You Go</a
          >
        </li>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a target="_blank" href="/pdfs/College_Tuition_Benefit_Member_Flyer_01282022_high.pdf"
            >College Tuition Benefits Program</a
          >
        </li>
        <li>
          <i class="bx bx-link-external"></i>
          <a
            target="_blank"
            href="http://view.email-unitedconcordia.com/?qs=06659da2a9b58c757cd5a561d9839e35d949ce5d49f6d09b3af749dc52124d4db315a8a4dc5d1df91ffe23a8b078f4f7f6eca0d32d165e8b4f1cdb97b707b73fc0acd61778f7a45e53342223e28bf38b0a8a0c7e4213a65f"
            >Diabetes and Oral Health Newsletter</a
          >
        </li>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a target="_blank" href="PDFs/Diabetes_and_Gum_Disease.pdf"
            >Diabetes and Your Oral Health</a
          >
        </li>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a target="_blank" href="/pdfs/Smile_for_HealthWellness 2023 New Logo.pdf"
            >Smile for Health&reg; Wellness</a
          >
        </li>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a target="_blank" href="https://nmpsia.com/pdfs/UCDental_Value_of_Going_infographic-2022.pdf"
            >The Value of Going to the Dentist</a
          >
        </li>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a target="_blank" href="/pdfs/2020 SFHW Member Flyer.pdf"
            >Oral Wellness Program: Smile for Health-Wellness</a
          >
        </li>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a
            href="https://www.unitedconcordia.com/content/dam/ucd/en/commercial/website/docs/email/WC_News_September2025.pdf"
            target="_blank"
            >September 2025 UCD Wellness Connection Newsletter</a
          >
        </li>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a href="/pdfs/wellness/2025_Pregnancy_Benefit_Flyer.pdf" target="_blank"
            >Your plan includes the Pregnancy Benefit!</a
          >
        </li>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a href="/pdfs/wellness/2025_Oral_Wellness_Series_Pregnancy_Flyer.pdf" target="_blank"
            >Dental Concerns During Pregnancy</a
          >
        </li>
      </ul>

      <h3 class="sub-heading">Davis Vision</h3>
      <ul class="content-list">
        <li>
          <i class="bx bx-link-external"></i>
          <a href="https://davisvision.com" target="_blank">Davis Vision Website</a>
        </li>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a href="/pdfs/davis_vision_nmpsia_summary_of_plan_description.pdf" target="_blank"
            >Summary of Plan Description</a
          >
        </li>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a href="/wellness/vision/Davis_vision/Into_Aging_Eyes_Infographic_CST_1284_DVSV.pdf" target="_blank"
            >A Deeper Look into Aging Eyes Infographic</a
          >
        </li>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a href="/wellness/vision/Davis_vision/Women's_Eye_Health_CST_1411_DVSV.pdf" target="_blank"
            >Women's Eye Health Deserves Special Attention</a
          >
        </li>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a href="/wellness/vision/Davis_vision/Lens_Upgrades_Infographic_CST_1330_18x24_508.pdf" target="_blank"
            >A Guide to Lens Types</a
          >
        </li>
      </ul>

      <h3 class="sub-heading">Versant Health</h3>
      <ul class="content-list">
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a href="/pdfs/Healthy_eating_infographic.pdf" target="_blank"
            >Healthy Eating Information</a
          >
        </li>
      </ul>
    `;
  }
}

customElements.define("wellness-by-carrier", WellnessByCarrier);
