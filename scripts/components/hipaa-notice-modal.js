class HipaaNoticeModal extends HTMLElement {
  connectedCallback() {
    if (!document.getElementById("hipaa-notice-modal-styles")) {
      const style = document.createElement("style");
      style.id = "hipaa-notice-modal-styles";
      style.textContent = `
        #hipaaNoticeModal .modal-title {
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.02em;
        }

        #hipaaNoticeModal .modal-body {
          color: #212529;
        }

        #hipaaNoticeModal .hipaa-intro {
          font-weight: 700;
        }

        #hipaaNoticeModal h3 {
          font-size: 1.15rem;
          font-weight: 700;
          color: #204f9a;
          margin-top: 1.75rem;
          margin-bottom: 0.75rem;
        }

        #hipaaNoticeModal h3:first-of-type {
          margin-top: 0.5rem;
        }

        #hipaaNoticeModal p {
          margin-bottom: 1rem;
          line-height: 1.6;
        }

        #hipaaNoticeModal ul,
        #hipaaNoticeModal ol {
          margin-bottom: 1rem;
          padding-left: 1.75rem;
        }

        #hipaaNoticeModal li {
          margin-bottom: 0.5rem;
          line-height: 1.6;
        }

        #hipaaNoticeModal address {
          font-style: normal;
          line-height: 1.6;
          margin-bottom: 1rem;
        }

        #hipaaNoticeModal .hipaa-effective-date {
          font-weight: 700;
          border-top: 1px solid #dee2e6;
          padding-top: 1rem;
          margin-top: 1.5rem;
        }
      `;
      document.head.appendChild(style);
    }

    this.innerHTML = /*html*/ `
      <div
        class="modal fade"
        id="hipaaNoticeModal"
        tabindex="-1"
        aria-labelledby="hipaaNoticeModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg modal-dialog-scrollable document-modal">
          <div class="modal-content">
            <div class="modal-header">
              <div class="d-flex align-items-center gap-3">
                <img
                  src="images/nmpsia_logo_2024.png"
                  alt="NMPSIA logo"
                  class="modal-header-logo"
                />
                <h2 class="modal-title mb-0" id="hipaaNoticeModalLabel">
                  Notice of Privacy Practices
                </h2>
              </div>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <p class="hipaa-intro">
                THIS NOTICE DESCRIBES HOW MEDICAL INFORMATION ABOUT YOU MAY BE
                USED AND DISCLOSED AND HOW YOU CAN GET ACCESS TO THIS
                INFORMATION. PLEASE REVIEW THIS NOTICE CAREFULLY.
              </p>
              <p>
                The New Mexico Public Schools Insurance Authority (NMPSIA)
                self-funded group health plan (hereafter referred to as the
                &ldquo;Plan&rdquo;) is required by law to take reasonable
                steps to maintain the privacy of your health information
                (called Protected Health Information or PHI) and to provide
                you with notice of its legal duties and privacy practices
                with respect to your Protected Health Information including:
              </p>
              <ol>
                <li>The Plan&rsquo;s uses and disclosures of PHI,</li>
                <li>Your rights to privacy with respect to your PHI,</li>
                <li>The Plan&rsquo;s duties with respect to your PHI,</li>
                <li>
                  Your right to file a complaint with the Plan and with the
                  Secretary of the U.S. Department of Health and Human
                  Services (HHS), and
                </li>
                <li>
                  The person or office you should contact for further
                  information about the Plan&rsquo;s privacy practices, and
                </li>
                <li>
                  To notify affected individuals following a breach of
                  unsecured Protected Health Information.
                </li>
              </ol>
              <p>
                The Plan Sponsor has amended its Plan documents to protect
                your PHI as required by Federal law.
              </p>
              <p>
                PHI use and disclosure by the Plan is regulated by the Health
                Insurance Portability and Accountability Act of 1996 (HIPAA).
                You may find these rules in Section 45 of the Code of Federal
                Regulations, Parts 160 and 164. The regulations will supersede
                this Notice if there is any discrepancy between the
                information in this Notice and the regulations. The Plan will
                abide by the terms of the Notice currently in effect. The
                Plan reserves the right to change the terms of this Notice
                and to make the new Notice provisions effective for all PHI
                it maintains.
              </p>
              <p>
                You may also receive a Privacy Notice from companies who
                offer Plan participants insured health care services, such as
                the Vision plan benefits. Each of these notices will describe
                your rights as it pertains to that plan and in compliance
                with the Federal regulation, HIPAA. This Privacy Notice,
                however, pertains to your protected health information
                related to the NMPSIA self-funded medical plan options and
                COBRA Administration, (the &ldquo;Plan&rdquo;) and outside
                companies contracted to help administer Plan benefits, also
                called &ldquo;business associates.&rdquo;
              </p>
              <p>
                Among other things, this Notice describes how your protected
                health information may be used or disclosed to carry out
                treatment, payment, or health care operations, or for any
                other purposes that are permitted or required by law.
              </p>
              <p>
                If you have questions about any part of this Notice or if you
                want more information about the privacy practices at NMPSIA,
                please contact NMPSIA located at 410 Old Taos Highway, Santa
                Fe, NM 87501, or by telephone at
                <a href="tel:+18005483724">1-(800) 548-3724</a>.
              </p>

              <h3>Your Protected Health Information</h3>
              <p>
                The term &ldquo;Protected Health Information&rdquo; (PHI)
                includes all information related to your past, present or
                future health condition(s) that individually identifies you
                or could reasonably be used to identify you and is
                transferred to another entity or maintained by the Plan in
                oral, written, electronic or any other form.
              </p>
              <p>
                PHI does not include health information contained in
                employment records held by your employer in its role as an
                employer, including but not limited to health information on
                disability, work-related illness/injury, sick leave, Family
                or Medical Leave (FMLA), life insurance, dependent care
                flexible spending account, drug testing, etc.
              </p>
              <p>
                PHI also does not include health information that has been
                de-identified. De-identified information is information that
                does not identify you and there is no reasonable basis to
                believe that the information can be used to identify you.
              </p>

              <h3>The Plan&rsquo;s Duties</h3>
              <p>The Plan is required by law to:</p>
              <ul>
                <li>
                  Maintain the privacy of your protected health information
                  (PHI);
                </li>
                <li>
                  Inform you promptly if a breach occurs that may have
                  compromised the privacy or security of your information;
                </li>
                <li>
                  Provide you with certain rights with respect to your
                  protected health information;
                </li>
                <li>
                  Provide you and your eligible dependents with a copy of
                  this Notice of our legal duties and privacy practices with
                  respect to your protected health information;
                </li>
                <li>Follow the terms of the Notice that is currently in effect; and</li>
                <li>
                  Not use or share your information other than as described
                  here unless you tell us in writing that we can. If you tell
                  us we can share information, you may change your mind at
                  any time and advise us in writing of such change.
                </li>
              </ul>
              <p>
                <strong>Notice Distribution:</strong> The Notice will be
                provided to each person when they initially enroll for
                benefits in the Plan (the Notice is provided in the Plan&rsquo;s
                Enrollment/Program Guide). The Notice is also available on
                the Plan&rsquo;s website:
                <a
                  href="https://nmpsia.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  >https://nmpsia.com/</a
                >. The Notice will also be provided upon request. Once every
                three years the Plan will notify the individuals then
                covered by the Plan where to obtain a copy of the Notice.
                This Plan will satisfy the requirements of the HIPAA
                regulation by providing the Notice to the named insured
                (covered employee) of the Plan; however, you are encouraged
                to share this Notice with other family members covered under
                the Plan.
              </p>
              <p>
                <strong>Notice Revisions:</strong> If a privacy practice of
                this Plan is changed affecting this Notice, a revised version
                of this Notice will be provided to you and all participants
                covered by the Plan at the time of the change. Any revised
                version of the Notice will be distributed within 60 days of
                the effective date of a material change to the uses and
                disclosures of PHI, your individual rights, the duties of
                the Plan or other privacy practices stated in this Notice.
              </p>
              <p>
                Material changes are changes to the uses and disclosures of
                PHI, an individual&rsquo;s rights, the duties of the Plan or
                other privacy practices stated in the Privacy Notice. Because
                our health plan posts its Notice on its web site, we will
                prominently post the revised Notice on that web site by the
                effective date of the material change to the Notice. We will
                also provide the revised notice, or information about the
                material change and how to obtain the revised Notice, in our
                next annual mailing to individuals covered by the Plan.
              </p>

              <h3>When the Plan May Use or Disclose Your Health Information</h3>
              <p>
                Under the law, the Plan may use and disclose your health
                information without your written authorization in the
                following cases:
              </p>
              <ul>
                <li>
                  At your request. If you request it, the Plan is required
                  to give you access to your PHI in order to inspect it and
                  copy it.
                </li>
                <li>
                  As required by an agency of the government. The Secretary
                  of the Department of Health and Human Services may require
                  the disclosure of your PHI to investigate or determine the
                  Plan&rsquo;s compliance with the privacy regulations.
                </li>
                <li>
                  For treatment, payment or health care operations. The Plan
                  and its Business Associates will use your PHI (except
                  psychotherapy notes in certain instances as described
                  below) without your consent, authorization or opportunity
                  to agree or object in order to carry out treatment,
                  payment, or health care operations.
                </li>
              </ul>
              <ol>
                <li>
                  <strong>For Treatment.</strong> We may use or disclose
                  your protected health information to facilitate medical
                  treatment or services by providers. For example, we may
                  disclose providers, including doctors, nurses,
                  technicians, medical students, or other hospital personnel
                  who are involved in taking care of you to your treating
                  specialist to enable your providers to confer regarding a
                  treatment plan.
                </li>
                <li>
                  <strong>For Payment.</strong> We may use or disclose your
                  protected health information to determine your eligibility
                  for Plan benefits, to facilitate payment for the treatment
                  and services you receive from health care providers, to
                  determine benefit responsibility under the Plan, or to
                  coordinate Plan coverage. For example, we may tell your
                  health care provider about you to determine whether the
                  Plan will cover the treatment recommended by your
                  provider. We may also share your protected health
                  information with a utilization review or pre-certification
                  service provider. Likewise, we may share your protected
                  health information with another entity to assist with the
                  adjudication or subrogation of health claims or to another
                  health plan to coordinate benefit payments.
                </li>
                <li>
                  <strong>Health Care Operations.</strong> We may use and
                  disclose health information about you to carry out
                  necessary insurance-related activities. Such activities
                  may include underwriting, enrollment, premium rating and
                  other activities relating to plan coverage; conducting
                  quality assessment and improvement activities; patient
                  safety activities; submitting claims for stop-loss
                  coverage; conducting or arranging for medical review,
                  legal services, audit services, and fraud and abuse
                  detection programs; and business planning, management and
                  general administration. If use or disclosure of protected
                  health information is made for underwriting purposes, any
                  such protected health information that is genetic
                  information of an individual is prohibited from being used
                  or disclosed. For example, we may use information about
                  your medical claims to project future benefit costs.
                </li>
              </ol>
              <p>
                The Plan may disclose PHI to the Plan Sponsor for purposes of
                treatment, payment, and health care operations in accordance
                with the Plan amendment. The Plan may disclose PHI to the
                Plan Sponsor for review of your appeal of a benefit or for
                other reasons related to the administration of the Plan.
              </p>
              <p>
                Although the Plan does not routinely obtain psychotherapy
                notes, generally, an authorization will be required by the
                Plan before the Plan will use or disclose psychotherapy
                notes about you. Psychotherapy notes are separately filed
                notes about your conversations with your mental health
                professional during a counseling session. They do not
                include summary information about your mental health
                treatment. However, the Plan may use and disclose such notes
                when needed by the Plan to defend itself against litigation
                filed by you.
              </p>
              <p>
                We shall not use or disclose your substance use disorder
                treatment records unless based on written consent, or a
                court order after notice and an opportunity to be heard is
                provided to the individual or holder of the record, as
                provided under law. A court order authorizing use or
                disclosure must be accompanied by a subpoena or other legal
                requirement compelling disclosure before the requested
                record is used or disclosed.
              </p>
              <p>
                The Plan generally will require an authorization form for
                uses and disclosure of your PHI for sales or marketing
                purposes if the Plan receives direct or indirect payment
                from the entity whose product or service is being marketed
                or sold. You have the right to revoke an authorization at
                any time.
              </p>

              <h3>
                Use or Disclosure of Your PHI Where Consent, Authorization or
                Opportunity to Object Is Not Required
              </h3>
              <p>
                In general, the Plan does not need your written
                authorization to release your PHI if required by law or for
                public health and safety purposes. The Plan and its Business
                Associates are allowed to use and disclose your PHI without
                your written authorization (in compliance with section
                164.512) under the following circumstances:
              </p>
              <ol>
                <li>
                  <strong>Required by Law.</strong> As required by law, we
                  may use and disclose your health information. For example,
                  we may disclose medical information when required by a
                  court order in a litigation proceeding such as a
                  malpractice action.
                </li>
                <li>
                  <strong>Public Health.</strong> As authorized by law, we
                  may disclose your health information to public health
                  authorities for purposes related to: preventing or
                  controlling disease, injury or disability; reporting abuse
                  or neglect; reporting domestic violence; reporting to the
                  Food and Drug Administration problems with products and
                  reactions to medications; and reporting disease or
                  infection exposure.
                </li>
                <li>
                  <strong>Proof of Immunization.</strong> We may disclose
                  information about you limited to proof of immunization to
                  a school about an individual who is a student or
                  prospective student of the school.
                </li>
                <li>
                  <strong>Health Oversight Activities.</strong> We may
                  disclose your health information to health agencies during
                  the course of audits, investigations, inspections,
                  licensure and other proceedings related to oversight of
                  the health care system.
                </li>
                <li>
                  <strong>Judicial and Administrative Proceedings.</strong>
                  We may disclose your health information in the course of
                  any administrative or judicial proceeding.
                </li>
                <li>
                  <strong>Law Enforcement.</strong> We may disclose your
                  health information to a law enforcement official for
                  purposes such as identifying or locating a suspect,
                  fugitive, material witness or missing person, complying
                  with a court order or subpoena and other law enforcement
                  purposes.
                </li>
                <li>
                  <strong>Coroners, Medical Examiners and Funeral
                  Directors.</strong> We may disclose your health information
                  to coroners, medical examiners and funeral directors. For
                  example, this may be necessary to identify a deceased
                  person or determine the cause of death.
                </li>
                <li>
                  <strong>Information of Decedent Related to Organ and
                  Tissue Donation.</strong> We may disclose your health
                  information after you have died to organizations involved
                  in procuring, banking or transplanting organs and tissues,
                  as necessary.
                </li>
                <li>
                  <strong>Public Safety.</strong> We may disclose your
                  health information to appropriate persons in order to
                  prevent or lessen a serious and imminent threat to the
                  health or safety of a particular person or the general
                  public.
                </li>
                <li>
                  <strong>National Security.</strong> We may disclose your
                  health information for military, national security,
                  prisoner and government benefits purposes.
                </li>
                <li>
                  <strong>Military and Veterans.</strong> If you are a
                  member of the armed forces, we may release your protected
                  health information as required by military command
                  authorities. We may also release protected health
                  information about foreign military personnel to the
                  appropriate foreign military authority if required.
                </li>
                <li>
                  <strong>Worker&rsquo;s Compensation.</strong> We may
                  disclose your health information as necessary to comply
                  with worker&rsquo;s compensation or similar laws.
                </li>
                <li>
                  <strong>Research.</strong> We may disclose your health
                  information to researchers when:
                  <ul>
                    <li>The individual identifiers have been removed; or</li>
                    <li>
                      When an institutional review board or privacy board
                      (a) has reviewed the research proposal; and (b)
                      established protocols to ensure the privacy of the
                      requested information, and approves the research.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Disclosures to Plan Sponsors.</strong> We may
                  discuss your health information to the sponsor of your
                  group health plan, for purposes of administering benefits
                  under the plan. We share the minimum information necessary
                  to accomplish these purposes.
                </li>
                <li>
                  <strong>Business Associates.</strong> We may contract with
                  individuals or entities known as Business Associates to
                  perform various functions on our behalf or to provide
                  certain types of services. In order to perform these
                  functions or to provide these services, Business
                  Associates will receive, create, maintain, use and/or
                  disclose your protected health information, but only after
                  they agree in writing with us to implement appropriate
                  safeguards regarding your protected health information.
                  For example, we may disclose your protected health
                  information to a Business Associate to administer claims
                  or to provide support services, such as utilization
                  management, pharmacy benefit management or subrogation,
                  but only after the Business Associate enters into a
                  Business Associate Agreement with us.
                </li>
              </ol>
              <p>
                Any other Plan uses and disclosures not described in this
                Notice will be made only if you provide the Plan with
                written authorization, subject to your right to revoke your
                authorization, and information used and disclosed will be
                made in compliance with the minimum necessary standards of
                the regulation.
              </p>

              <h3>Disclosing Only the Minimum Necessary Protected Health Information</h3>
              <p>
                When using or disclosing PHI or when requesting PHI from
                another covered entity, the Plan will make reasonable
                efforts not to use, disclose or request more than the
                minimum amount of PHI necessary to accomplish the intended
                purpose of the use, disclosure or request, taking into
                consideration practical and technological limitations.
                However, the minimum necessary standard will not apply in
                the following situations:
              </p>
              <ul>
                <li>
                  Disclosures to or requests by a health care provider for
                  treatment,
                </li>
                <li>
                  Disclosures to You. When you request, we are required to
                  disclose to you the portion of your protected health
                  information that contains medical records, billing
                  records, and any other records used to make decisions
                  regarding your health care benefits. We are also
                  required, when requested, to provide you with an
                  accounting of most disclosures of your protected health
                  information where the disclosure was for reasons other
                  than for treatment, payment, or health care operations,
                  and where the protected health information was disclosed
                  in accordance with your individual authorization.
                </li>
                <li>
                  Government Audits. We are required to disclose your health
                  information to the Secretary of the United States
                  Department of Health and Human Services when the Secretary
                  is investigating or determining our compliance with the
                  HIPAA privacy rule.
                </li>
                <li>Uses of disclosures required by law, and</li>
                <li>
                  Uses of disclosures required for the Plan&rsquo;s
                  compliance with the HIPAA privacy regulations.
                </li>
              </ul>
              <p>
                As described in the amended Plan document, the Plan may
                share PHI with the Plan Sponsor for limited administrative
                purposes, such as determining claims and appeals, performing
                quality assurance functions and auditing and monitoring the
                Plan. The Plan shares the minimum information necessary to
                accomplish these purposes.
              </p>
              <p>
                In addition, the Plan may use or disclose &ldquo;summary
                health information&rdquo; to the Plan Sponsor for obtaining
                premium bids or modifying, amending or terminating the group
                health Plan. Summary health information means information
                that summarizes claims history, claims expenses or type of
                claims experienced by individuals for whom the Plan Sponsor
                has provided health benefits under a group health plan.
                Identifying information will be deleted from summary health
                information, in accordance with HIPAA.
              </p>

              <h3>
                Use or Disclosure of Your PHI Where You Will Be Given an
                Opportunity to Agree or Disagree Before the Use or Release
              </h3>
              <p>
                Disclosure of your PHI to family members, other relatives
                and your close personal friends without your written
                consent or authorization is allowed if:
              </p>
              <ul>
                <li>
                  The information is directly relevant to the family or
                  friend&rsquo;s involvement with your care or payment for
                  that care, and
                </li>
                <li>
                  You have either agreed to the disclosure or have been
                  given an opportunity to object and have not objected.
                </li>
              </ul>
              <p>
                Under this Plan your PHI will automatically be disclosed to
                your employer&rsquo;s benefits office as outlined below. If
                you disagree with this automatic disclosure by the Plan you
                may contact the Privacy Officer to request that such
                disclosure not occur without your written authorization:
              </p>
              <ul>
                <li>
                  In the event of your death while you are covered by this
                  Plan, when the Plan is notified it will automatically
                  communicate this information to your employer&rsquo;s
                  benefits office.
                </li>
                <li>
                  In the event the Plan is notified of a work-related
                  illness or injury, the Plan will automatically communicate
                  this information to your employer&rsquo;s benefits office
                  to allow the processing of appropriate paperwork.
                </li>
              </ul>
              <p>
                Note that PHI obtained by the Plan Sponsor&rsquo;s employees
                through Plan administration activities will NOT be used for
                employment related decisions.
              </p>

              <h3>Your Personal Representatives</h3>
              <p>
                You may exercise your rights to your Protected Health
                Information (PHI) by designating a person to act as your
                Personal Representative. Your Personal Representative will
                generally be required to produce evidence (proof) of the
                authority to act on your behalf before the Personal
                Representative will be given access to your PHI or be
                allowed to take any action for you.
              </p>
              <p>
                Under this Plan, proof of such authority will include (1) a
                completed, signed and approved Appoint a Personal
                Representative form; (2) a notarized power of attorney for
                health care purposes; or (3) a court-appointed conservator
                or guardian. Note: Under the HIPAA privacy rule, we do not
                have to disclose information to a personal representative if
                we have a reasonable belief that:
              </p>
              <ol>
                <li>
                  You have been, or may be, subjected to domestic violence,
                  abuse or neglect by such person;
                </li>
                <li>
                  Treating such person as your personal representative could
                  endanger you; or
                </li>
                <li>
                  In the exercise of professional judgment, we believe it is
                  not in your best interest to treat the person as your
                  personal representative.
                </li>
              </ol>
              <p>
                Because HIPAA regulations give adults certain rights and
                generally children age 18 and older are adults, if you have
                dependent children age 18 and older covered under the Plan,
                and the child wants you, as the parent(s), to be able to
                access their Protected Health Information (PHI), that child
                will need to complete a form to Appoint a Personal
                Representative to designate you (the employee/retiree)
                and/or your Spouse as their Personal Representatives.
              </p>
              <p>
                The Plan will consider a parent, guardian, or other person
                acting in loco parentis as the Personal Representative of an
                unemancipated minor (a child generally under age 18) unless
                the applicable law requires otherwise. In loco parentis may
                be further defined by State law, but in general it refers to
                a person who has been treated as a parent by the child and
                who has formed a meaningful parental relationship with the
                child for a substantial period of time. Spouses and
                unemancipated minors may, however, request that the Plan
                restrict PHI that goes to family members as described below
                under the section titled &ldquo;Statement of Your Individual
                Privacy Rights.&rdquo;
              </p>

              <h3>Statement of Your Individual Privacy Rights</h3>
              <ol>
                <li>
                  <strong>Right to Request Restrictions.</strong> You have
                  the right to request restrictions on certain uses and
                  disclosures of your protected health information. The Plan
                  is not required to agree to the restrictions that you
                  request. If you would like to make a request for
                  restrictions, you must submit your request in writing to
                  NMPSIA&rsquo;s Administrative Office, 410 Old Taos
                  Highway, Santa Fe, NM 87501.
                </li>
                <li>
                  <strong>Right to Request Confidential
                  Communications.</strong> You have the right to receive
                  your protected health information through a reasonable
                  alternative means or at an alternative location (such as
                  mailing PHI to a different address or allowing you to
                  personally pick up the PHI that would otherwise be
                  mailed), if you provide a written request to the Plan that
                  the disclosure of PHI to your usual location could
                  endanger you. To request confidential communications, you
                  must submit your request in writing to NMPSIA&rsquo;s
                  Administrative Office, 410 Old Taos Highway, Santa Fe, NM
                  87501. We are not required to agree to your request.
                </li>
                <li>
                  <strong>Right to Inspect and Copy.</strong> You have the
                  right to inspect and obtain a copy (in hard copy or
                  electronic form) of your protected health information
                  (except psychotherapy notes and information compiled in
                  reasonable contemplation of an administrative action or
                  proceeding) contained in a &ldquo;designated record
                  set,&rdquo; for as long as the Plan maintains the PHI. You
                  may request your hard copy or electronic information in a
                  format that is convenient for you, and the Plan will honor
                  that request to the extent possible. You may also request
                  a summary of your PHI.
                  <p>
                    A Designated Record Set includes your medical records
                    and billing records that are maintained by or for a
                    covered health care provider. Records include
                    enrollment, payment, billing, claims adjudication and
                    case or medical management record systems maintained by
                    or for a health plan or other information used in whole
                    or in part by or for the covered entity to make
                    decisions about you. Information used for quality
                    control or peer review analyses and not used to make
                    decisions about you is not included in the designated
                    record set.
                  </p>
                  <p>
                    The Plan must provide the requested information within
                    30 days of its receipt of the request, if the
                    information is maintained onsite or within 60 days if
                    the information is maintained offsite. A single 30-day
                    extension is allowed if the Plan is unable to comply
                    with the deadline and notifies you in writing in advance
                    of the reasons for the delay and the date by which the
                    Plan will provide the requested information.
                  </p>
                  <p>
                    To inspect and copy such information, you or your
                    personal representative must submit your request in
                    writing to NMPSIA&rsquo;s Administrative Office, 410 Old
                    Taos Highway, Santa Fe, NM 87501. If you request a copy
                    of the information, we may charge you a reasonable
                    cost-based fee. You may request your hard copy or
                    electronic information in a format that is convenient
                    for you, and we will honor that request to the extent
                    possible. You may also request a summary of your PHI.
                  </p>
                </li>
                <li>
                  <strong>Right to Request Amendment.</strong> You or your
                  personal representative have a right to request that the
                  Plan amend your health information that you believe is
                  incorrect or incomplete. We are not required to change
                  your health information and if your request is denied, we
                  will provide you with information about our denial and
                  how you can disagree with the denial. To request an
                  amendment, you must make your request in writing to
                  NMPSIA&rsquo;s Administrative Office, 410 Old Taos
                  Highway, Santa Fe, NM 87501. You must also provide a
                  reason for your request.
                </li>
                <li>
                  <strong>Right to Accounting of Disclosures.</strong> You
                  have the right to receive a list or &ldquo;accounting of
                  disclosures&rdquo; of your health information made by us,
                  except that we do not have to account for disclosures made
                  for purposes of payment functions or health care
                  operations, or made to you. To request this accounting of
                  disclosures, you must submit your request in writing to
                  NMPSIA&rsquo;s Administrative Office, 410 Old Taos
                  Highway, Santa Fe, NM 87501. Your request should specify a
                  time period of up to six years and may not include dates
                  before April 14, 2003. The Plan has 60 days after its
                  receipt of your request to provide the accounting. The
                  Plan is allowed an additional 30 days if the Plan gives
                  you a written statement of the reasons for the delay and
                  the date by which the accounting will be provided. The
                  Plan will provide one list per 12 month period free of
                  charge; we may charge you for additional lists.
                </li>
                <li>
                  <strong>Right to Paper or Electronic Copy.</strong> You
                  have a right to receive a paper or electronic copy of this
                  Notice of Privacy Practices at any time. To obtain a paper
                  copy of this Notice, send your written request to
                  NMPSIA&rsquo;s Administrative Office, 410 Old Taos
                  Highway, Santa Fe, NM 87501. This right applies even if
                  you have agreed to receive the Notice electronically.
                </li>
                <li>
                  <strong>Right to be Notified of a Breach.</strong> You
                  have the right to receive notification in the event that
                  we (or a Business Associate) discover a breach of
                  unsecured protected health information. Notice of a
                  breach will be provided to you within 60 days of the
                  breach being identified.
                </li>
                <li>
                  <strong>Right to Choose Someone to Act for You.</strong>
                  You have the right to appoint a personal representative to
                  act on your behalf with respect to your protected health
                  information, such as if you have given someone medical
                  power of attorney or if someone is your legal guardian.
                  <p>
                    To appoint a personal representative to act on your
                    behalf, you must make your request in writing to
                    NMPSIA&rsquo;s Administrative Office, 410 Old Taos
                    Highway, Santa Fe, NM 87501. Your request must specify
                    who the individual is that you are appointing, that
                    individual&rsquo;s contact information, and in which
                    matters the appointed individual may act on your behalf.
                  </p>
                </li>
              </ol>
              <p>
                If you would like to have a more detailed explanation of
                these rights or if you would like to exercise one or more of
                these rights, contact NMPSIA&rsquo;s Administrative Office,
                410 Old Taos Highway, Santa Fe, NM 87501, or by telephone at
                <a href="tel:+18005483724">1-800-548-3724</a>.
              </p>

              <h3>Changes to this Notice of Privacy Practices</h3>
              <p>
                The Plan reserves the right to amend this Notice of Privacy
                Practices at any time in the future and to make the new
                Notice provisions effective for all health information that
                it maintains. We will promptly revise our Notice and
                distribute it to you whenever we make material changes to
                the Notice. Until such time, the Plan is required by law to
                comply with the current version of this Notice.
              </p>

              <h3>Your Right to File a Complaint</h3>
              <p>
                If you believe that your privacy rights have been violated,
                you may file a complaint with the Plan in care of the
                Plan&rsquo;s Privacy Officer, at the address listed on the
                first page of this Notice. Neither your employer nor the
                Plan will retaliate against you for filing a complaint.
              </p>
              <p>
                Complaints about this Notice of Privacy Practices or about
                how we handle your health information should be directed to
                NMPSIA&rsquo;s Administrative Office, 410 Old Taos Highway,
                Santa Fe, NM 87501. Neither NMPSIA nor the Plan will
                retaliate against you in any way for filing a complaint. All
                complaints to NMPSIA must be submitted in writing.
              </p>
              <p>
                You may also file a complaint (within 180 days of the date
                you know or should have known about an act or omission)
                with the Secretary of the U.S. Department of Health and
                Human Services by contacting their nearest office as listed
                in your telephone directory or at this website
                <a
                  href="https://www.hhs.gov/ocr/about-us/contact-us/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  >https://www.hhs.gov/ocr/about-us/contact-us/index.html</a
                >.
              </p>

              <h3>Privacy Officer</h3>
              <p>
                NMPSIA has designated a Privacy Officer to oversee the
                administration of privacy by the Plan and to receive
                complaints. The Privacy Officer may be contacted at:
              </p>
              <address>
                Privacy Officer<br />
                NMPSIA Administrative Office<br />
                410 Old Taos Highway<br />
                Santa Fe, NM 87501
              </address>

              <p class="hipaa-effective-date">
                Effective Date of This Notice: January 1, 2026
              </p>
            </div>
            <div class="modal-footer">
              <a
                href="/pdfs/NMPSIA_HIPAA_Notice_of_Privacy_Practices_2026_v3.pdf"
                target="_blank"
                class="btn btn-outline-secondary"
              >
                <i class="bx bxs-file-pdf me-1" aria-hidden="true"></i>
                Download PDF
              </a>
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define("hipaa-notice-modal", HipaaNoticeModal);
