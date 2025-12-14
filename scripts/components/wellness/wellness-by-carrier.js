class WellnessByCarrier extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /*html*/ `
        <div class="heading-and-element-flexbox">
        <h2 class="display-4">
          Various Wellness Programs Offered by Our Carriers
        </h2>
        <img src="images/nmpsia_logo_2024.png" alt="NMPSIA logo" />
      </div>
      <hr />
      <div class="container banner">
        <img
          src="images/wellness/fellipe-ditadi-wellness-by-carrier.jpg"
          alt="decorative element"
        />
      </div>
      <h3 class="sub-heading">Blue Cross Blue Shield</h3>
      <ul class="content-list">
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a
            target="_blank"
            href="https://account.wellontarget.com/login/?goto=https%3A%2F%2Fcim.wellontarget.com%3A443%2Fam%2Foauth2%2Fmembers%2Fauthorize%3Fclient_id%3Doauth_mma_wot_APP00046856%26scope%3Dopenid%2520profile%26redirect_uri%3Dhttps%3A%2F%2Fwellontarget.onlifehealth.com%2FHome%2FLoginCallback%26response_type%3Dcode%26state%3DDeH6RrxWkedTA8OLik5P1Pdq6rv9B4D57Mxko8m7mJA%26code_challenge%3DV6srKHzSTsC_UTOqNiRPYZdaAItsikxucOllgkEYHgM%26code_challenge_method%3DS256%26service%3Dhcsc-members-mma-mfa%26locale%3Dwot&amp;realm=/members&amp;service=hcsc-members-mma-mfa"
          >
            Blue Cross Blue Shield Well On Target Login (Note: Must create a
            Blue Access for Members (BAM) profile prior to logging in)
          </a>
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
            href="/pdfs/NM Group  Retail Social Media Overview Member Flier Spanish.pdf"
          >
            El lado social de tu seguro m&eacute;dico</a
          >
        </li>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a
            target="_blank"
            href="/pdfs/NM-Group-QIP-Adult-Wellness-Member-Guidelines.pdf"
          >
            Adult Wellness Guidelines - Making Preventative Care a
            Priority</a
          >
        </li>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a
            target="_blank"
            href="/pdfs/NM-Group-QIP-Childrens-Wellness-Member-Guidelines.pdf"
          >
            Children's Wellness Guidelines - Laying the Groundwork for a
            Healthy Tomorrow</a
          >
        </li>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a
            target="_blank"
            href="/pdfs/NM-SP-Group-QIP-Adult-Wellness-Member-Guidelines.pdf"
          >
            Gu&iacute;a para el bienestar de los adultos - Dele prioidad a
            la atenci&oacute;n m&eacute;dica preventiva</a
          >
        </li>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a
            target="_blank"
            href="/pdfs/NM-SP-Group-QIP-Childrens-Wellness-Member-Guidelines.pdf"
          >
            Gu&iacute;a para el bienestar de los ni&ntilde;os - C&oacute;mo
            sentar las bases para un futuro saludable</a
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
          <a
            target="_blank"
            href="/pdfs/NM_SP_BlueResource_Screening_for_Cervical_Cancer_Member_Flier.pdf"
          >
            BlueResource (en espa&ntilde;ol) - C&oacute;mo protegerse contra
            un asesino silencioso</a
          >
        </li>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a target="_blank" href="/pdfs/BCBS_Flu_Season_2024.pdf">
            BCBS - Who should get a flu shot and when?</a
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
          <a target="_blank" href="/pdfs/Talkspace_Flyer_Updated_2024.pdf">
            Talkspace Messaging Therapy - A new solution for emotional
            well-being</a
          >
        </li>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a
            target="_blank"
            href="/pdfs/Presbyterian_Flu_Prevention_2024.pdf"
          >
            Presbyterian - Flu Prevention and Treatment</a
          >
        </li>
      </ul>
        `;
  }
}

customElements.define("wellness-by-carrier", WellnessByCarrier);
