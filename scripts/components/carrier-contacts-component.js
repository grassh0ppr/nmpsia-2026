class CarrierContacts extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /*html*/ `
          
          <div class="heading-and-element-flexbox">
            <h2 class="display-4">Carrier Contacts</h2>
            <a href="/pdfs/carriers/carrier_contacts_chart_2025.pdf" class="btn btn-primary" target="_blank">Download
              PDF</a>
          </div>
          <p class="py-4 mb-0">Click on logos to navigate to carrier site.</p>
          <!-- table -->
          <div class="table-responsive">
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th colspan="4" scope="col">Benefits</th>
                  <!-- <th scope="col">First</th> -->
                  <!-- <th scope="col">Last</th> -->
                  <!-- <th scope="col">Handle</th> -->
                </tr>
              </thead>
              <tbody>
                <!-- NMPSIA ROW -->
                <tr class="table-secondary">
                  <!-- <th scope="row">1</th> -->
                  <td colspan="2">
                    New Mexico Public Schools Insurance Authority
                  </td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td colspan="2">
                    <a href="https://nmpsia.com" target="_blank">
                      <img src="images/carriers/logo8.png" alt="nmpsia logo" style="width: 80px" />
                    </a>
                    <span>
                      <strong>Customer Service for Administrative issues</strong>
                      <br />Issues | Claim Issues | Appeals
                    </span>
                  </td>
                  <td><a href="tel:18005483724">1-800-548-3724</a></td>
                  <td>
                    <a href="https://nmpsia.com">nmpsia.com</a>
                  </td>
                </tr>
                <!-- ERISA ROW title-->
                <tr class="table-secondary">
                  <td colspan="2">NMPSIA Eligibility Administrative Office</td>
                  <td></td>
                  <td></td>
                </tr>
                <!-- Erisa Row logo + description -->
                <tr>
                  <td colspan="2">
                    <a href="https://nmpsiaonline.nmpsia.com/" target="_blank">
                      <img src="images/carriers/logo11.png" alt="erisa logo" style="width: 80px" />
                    </a>
                    <span>
                      <strong>Erisa Administrative Services, Inc.</strong>
                      <br />Eligibility | Enrollment | Premium Billing | COBRA
                      Administrator
                    </span>
                  </td>
                  <td>
                    <a href="tel:18002333164">1-800-233-3164</a>
                  </td>
                  <td>
                    <a href="https://nmpsiaonline.nmpsia.com/" target="_blank">nmpsiaonline.nmpsia.com</a>
                  </td>
                </tr>
  
                <!-- START OF MEDICAL CARRIERS INFO IN TABLE -->
                <tr class="table-secondary">
                  <!-- <th scope="row">1</th> -->
                  <td colspan="2">MEDICAL</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row">Carrier</th>
                  <th scope="row">Group #</th>
                  <th scope="row">Customer Service</th>
                  <th scope="row">Website Address</th>
                </tr>
                <!-- BCBSNM row -->
                <tr>
                  <td class="carrier-td">
                    <a href="https://www.bcbsnm.com/nmpsia/" target="_blank">
                      <img class="carrierImg" width="200" src="images/carriers/logo10.png" alt="blue cross logo" />
                    </a>
                  </td>
                  <td>N05501 – High <br />N05502 – Low <br />213895 – EPO</td>
                  <td>
                    <a href="tel:18889667742">1-888-966-7742</a>
                  </td>
                  <td>
                    <a href="https://www.bcbsnm.com/nmpsia" target="_blank"
                      style="text-decoration: underline">www.bcbsnm.com/nmpsia</a>
                  </td>
                </tr>
                <!-- video visits blurb -->
                <tr class="orange-blerb">
                  <td colspan="4" class="text-center">
                    <em>
                      Video Visits: mdlive.com!NMPSIA (or visit bcbsnm.com; log
                      in as a member to locate the link)</em>
                  </td>
                </tr>
  
                <!-- Presbyterian row -->
                <tr>
                  <td class="carrier-td">
                    <a href="https://www.phs.org/health-plans/employer-plans/Pages/new-mexico-public-schools-insurance-authority.aspx"
                      target="_blank">
                      <img class="carrierImg" width="240" src="images/carriers/presbyterian-logo-red.svg" alt="Presbyterian logo" />
                    </a>
                  </td>
                  <td>A0000035</td>
                  <td>
                    <a href="tel:18882757737">1-888-275-7737</a>
                  </td>
                  <td>
                    <a href="https://www.phs.org/health-plans/employer-plans/Pages/new-mexico-public-schools-insurance-authority.aspx"
                      target="_blank">www.phs.org/health-plans/employer-plans/Pages/new-mexico-public-schools-insurance-authority.aspx</a>
                  </td>
                </tr>
                <!-- video visits presbyterian -->
                <tr class="orange-blerb">
                  <td colspan="4" class="text-center">
                    <em>Video Visits: visit phs.org and click on "Login to
                      MyPres" to locate link</em>
                  </td>
                </tr>
  
                <!-- SURGERY PLUS -->
                <tr>
                  <td class="carrier-td">
                    <a href="https://surgeryplus.com/" target="_blank">
                      <img class="carrierImg"
                        src="/images/carriers/lantern_logo.png" width="200px"
                        alt="Lantern logo" />
                        </a>
                        <br>
                        <span class="text-danger" style="text-decoration: none;">Formerly:</span>
                        <br>
                        <img class="carrierImg"
                        src="/images/carriers/surgery_plus_screenshot.png" width="100px"
                        alt="Surgery Plus logo" />
                  </td>
                  <td>n/a</td>
                  <td>
                    <a href="tel:18887261350">1-888-726-1350</a>
                  </td>
                  <td>
                    <a href="https://surgeryplus.com/" target="_blank"
                      style="text-decoration: underline">surgeryplus.com</a>
                  </td>
                </tr>
  
                <!-- PRESCRIPTION DRUGS -->
                <tr class="table-secondary">
                  <!-- <th scope="row">1</th> -->
                  <td colspan="2">PRESCRIPTION DRUGS</td>
                  <td></td>
                  <td></td>
                </tr>
  
                <!-- CVS caremark ROW -->
                <tr>
                  <td class="carrier-td">
                    <a href="https://www.caremark.com/" target="_blank">
                      <img class="carrierImg" src="images/carriers/CVS_Caremark_logo.jpg" width="200px" alt="cvs logo" />
                    </a>
                  </td>
                  <td>RxBIN 004336<br />RxPCN ADV <br />RxGRP RX22AS</td>
                  <td>
                    <a href="tel:18777870652">1-877-787-0652</a>
                  </td>
                  <td>
                    <a href="https://www.caremark.com/" target="_blank"
                      style="text-decoration: underline">www.caremark.com</a>
                  </td>
                </tr>
  
                <tr class="table-secondary">
                  <td colspan="2">DENTAL</td>
                  <td></td>
                  <td></td>
                </tr>
  
                 <!-- BCBS Dental ROW -->
                <tr>
                 <td class="carrier-td">
                 <a href="https://www.bcbsnm.com/nmpsia/benefits/dental" target="_blank">
                 <img class="carrierImg" width="200" src="images/carriers/BlueCare DentalSM.png" alt="BlueCare Dental logo" />
                 <br>
                 </a>
                 <span class="text-danger" style="text-decoration: none;">Effective 1/1/2025</span>
                 </td>
                 <td>
                 319228 – Low <br />
                 319225 – High
                 </td>
                 <td>
                   <a href="tel:18777235697">1-877-723-5697</a>
                 </td>
                 <td>
                   <a href="https://www.bcbsnm.com/nmpsia/benefits/dental" target="_blank"
                     style="text-decoration: underline">bcbsnm.com/nmpsia/benefits/dental</a>
                 </td>
               </tr>
  
                <!-- DELTA DENTAL ROW -->
                <tr>
                  <td class="carrier-td">
                    <a href="https://www.deltadentalnm.com/member/nmpsia-members/" target="_blank">
                      <img class="carrierImg" src="images/carriers/logo1.png" width="180" alt="delta dental logo" />
                    </a>
                  </td>
                  <td>
                    8564 – Low <br />
                    8565 – High
                  </td>
                  <td>
                    <a href="tel:18773959420">1-877-395-9420</a>
                  </td>
                  <td>
                    <a href="https://www.deltadentalnm.com/member/nmpsia-members/" target="_blank"
                      style="text-decoration: underline">www.deltadentalnm.com/</a>
                  </td>
                </tr>
                <!-- UNITED CONCORDIA DENTAL ROW -->
                <tr>
                  <td class="carrier-td">
                    <a href="https://www.unitedconcordia.com/benefits/clients-corner/New-Mexico-Public-School-Client-Corner-Dental-Benefits"
                      target="_blank">
                      <img class="carrierImg" src="images/carriers/UCD_logo_2024.jpg" width="180"
                        alt="UNITED CONCORDIA dental logo" />
                    </a>
                  </td>
                  <td>812022 (refer to ID card or subgroup #)</td>
                  <td>
                    <a href="tel:18888980370">1-888-898-0370</a>
                  </td>
                  <td>
                    <a href="https://www.unitedconcordia.com/benefits/clients-corner/New-Mexico-Public-School-Client-Corner-Dental-Benefits"
                      target="_blank"
                      style="text-decoration: underline">www.unitedconcordia.com/benefits/clients-corner/New-Mexico-Public-School-Client-Corner-Dental-Benefits</a>
                  </td>
                </tr>
  
                <tr class="table-secondary">
                  <td colspan="2">VISION</td>
                  <td></td>
                  <td></td>
                </tr>
                <!-- DAVIS VISION ROW -->
                <tr>
                  <td class="carrier-td">
                    <a href="https://davisvision.com/" target="_blank">
                      <img class="carrierImg" src="images/carriers/logo2.png" width="180" alt="Davis vision logo" />
                    </a>
                  </td>
                  <td>3066</td>
                  <td>
                    <a href="tel:18009995431">1-800-999-5431</a>
                  </td>
                  <td>
                    <a href="https://www.davisvision.com/member" target="_blank"
                      style="text-decoration: underline">www.davisvision.com/member</a>
                  </td>
                </tr>
                <tr class="table-secondary">
                  <td colspan="4">LIFE AND DISABILITY</td>
                </tr>
                <tr>
                  <td class="carrier-td">
                    <a href="https://nmpsia.com/TheStandard.html">
                      <img class="carrierImg" src="images/carriers/logo5.png" width="80" alt="The Standard logo" />
                    </a>
                  </td>
                  <td>645549</td>
                  <td>
                    <a href="tel:18886099763">1-888-609-9763<br />
                      Ext. 0957</a>
                  </td>
                  <td>
                    <a href="https://nmpsia.com/TheStandard.html" target="_blank"
                      style="text-decoration: underline">nmpsia.com/TheStandard.html</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        
          `;
  }
}

customElements.define("carrier-contacts", CarrierContacts);
