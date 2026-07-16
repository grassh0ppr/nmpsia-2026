class DavisVision extends HTMLElement {
  connectedCallback() {
    if (!document.getElementById("davis-vision-styles")) {
      const style = document.createElement("style");
      style.id = "davis-vision-styles";
      style.textContent = `
        /* Kids eye care expandable item */
        .kec-details {
          width: 100%;
        }
        .kec-details > summary {
          display: flex;
          gap: 10px;
          align-items: flex-start;
          cursor: pointer;
          list-style: none;
          font-weight: 600;
          color: #667eea;
          padding: 2px 0;
        }
        .kec-details > summary::-webkit-details-marker { display: none; }
        .kec-details > summary::marker { display: none; }
        .kec-details > summary:hover { text-decoration: underline; }
        .kec-details > summary:focus-visible {
          outline: 3px solid #667eea;
          outline-offset: 2px;
          border-radius: 2px;
          text-decoration: none;
        }
        .kec-details > summary .kec-summary-icon {
          color: #667eea;
          font-size: 20px;
          line-height: 1.5;
          flex-shrink: 0;
          width: 20px;
          text-align: center;
        }
        .kec-details > summary .kec-chevron {
          margin-left: auto;
          font-size: 18px;
          line-height: 1.5;
          transition: transform 0.2s ease;
          flex-shrink: 0;
          color: #667eea;
        }
        .kec-details[open] > summary .kec-chevron {
          transform: rotate(180deg);
        }
        .kec-article {
          margin-top: 1.25rem;
          padding: 1.25rem 1.25rem 1rem;
          border: 1px solid #e0e4f7;
          border-radius: 8px;
          background: #f9f9ff;
          font-size: 0.96rem;
          line-height: 1.7;
          color: #222;
        }
        .kec-article p { margin-bottom: 0.85rem; }
        .kec-article p:last-child { margin-bottom: 0; }
        .kec-intro-layout {
          display: flex;
          gap: 1.25rem;
          align-items: flex-start;
          margin-bottom: 0.85rem;
        }
        .kec-hero-image {
          width: 180px;
          flex-shrink: 0;
          border-radius: 6px;
          object-fit: cover;
        }
        @media (max-width: 600px) {
          .kec-intro-layout { flex-direction: column-reverse; }
          .kec-hero-image { width: 100%; }
        }
        .kec-section-heading {
          color: #006d77;
          font-size: 1rem;
          font-weight: 700;
          margin: 1.5rem 0 0.4rem;
        }
        .kec-subsection-heading {
          color: #b83228;
          font-size: 0.96rem;
          font-weight: 700;
          margin: 1.1rem 0 0.3rem;
        }
        .kec-article ul {
          padding-left: 1.4rem;
          margin-bottom: 0.85rem;
        }
        .kec-article ul li { margin-bottom: 0.4rem; }
        .kec-sources {
          margin-top: 1.5rem;
          padding-top: 0.85rem;
          border-top: 1px solid #d8dce8;
          font-size: 0.88rem;
        }
        .kec-sources strong { display: block; margin-bottom: 0.35rem; }
        .kec-sources ul {
          padding-left: 1.1rem;
          margin-bottom: 0;
          word-break: break-all;
        }
        .kec-sources li { margin-bottom: 0.3rem; }
      `;
      document.head.appendChild(style);
    }

    this.innerHTML = /*html*/ `
      <div class="heading-and-element-flexbox">
        <h2 class="display-4">Davis Vision</h2>
        <a href="https://www.visionworks.com/davis-vision" target="_blank" title="Visit carrier website">
          <img class="my-3" src="images/carriers/logo2.png" alt="Davis Vision logo" />
        </a>
      </div>
      <ul class="content-list">
        <h4 class="mt-4 mb-3">2025 Open Enrollment Presentations</h4>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a href="/pdfs/Open_Switch_Enrollment_fPY2025/Davis/NMPSIA OE Deck_2024 Final.pdf"
            target="_blank">Open/Switch Enrollment Slideshow Presentation</a>
        </li>
        <li>
          <i class="bx bxs-movie-play"></i>
          <a href="/pdfs/Open_Switch_Enrollment_fPY2025/Davis/NMPSIA 2025 Davis Vision 2025.mp4"
            target="_blank">Open/Switch Enrollment Recorded Presentation</a>
        </li>
       
        <h4 class="mt-4 mb-3">Member Information</h4>
        <li>
          <i class="bx bx-link-external"></i>
          <a href="https://davisvision.com/members/registration/?lang=1&amp;langtype=1033&amp;isiframe=true"
            target="_blank"> Member Portal Registration</a>
        </li>
        <li>
          <i class="bx bx-link-external"></i>
          <a href="https://davisvision.com/members/" target="_blank">
            Member Portal
            Login</a>
        </li>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a href="/pdfs/Summary_Of_Plan_Description_Davis_2024.pdf" target="_blank">
            Summary of Plan
            Description</a>
        </li>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a target="_blank"
            href="pdfs/Davis_Vision_2023-24/Davis Vision 2024 Online Retailers Flyer.pdf"> Davis Vision
            Online
            Retailers</a>
        </li>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a target="_blank"
            href="/pdfs/Davis_Vision_2023-24/Davis_Vision_Hobbs-Enhanced_Benefits_10.2.2023.pdf"> Enhanced
            Vision Benefit for
            Members Residing in Hobbs and Alamogordo</a>
        </li>
     
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a target="_blank" href="/pdfs/Davis_Vision_2023-24/NM Vision Providers 10.2023.pdf"> NM Vision
            Providers</a>
        </li>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a href="/pdfs/carriers/davis-vision/Davis_Estimator_Tool_Flyer_2024.pdf" target="_blank">
            Davis Vision Estimator Tool Flyer
          </a>
        </li>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a target="_blank" href="/pdfs/carriers/davis-vision/Davis_Vision_2025_OON_Claims_Flyer.pdf">
            Davis Vision Out-of-Network Claims</a>
        </li>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a target="_blank" href="https://nmpsia.com/pdfs/Davis_Vision_Claim_form_2019.pdf"> Davis Vision
            Claim Form</a>
        </li>
       
        <h4 class="mt-4 mb-3">Student Vision Program</h4>
       
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a target="_blank" href="pdfs/NMPSIA_STUDENT_VISION_VOUCHER_FORM_2026-2027.pdf">2026 - 2027
            Davis Vision Student
            Eye Exam and Eyeglass Voucher</a>
        </li>
        <li style="display: block;">
          <details class="kec-details">
            <summary>
              <i class="bx bx-book-open kec-summary-icon" aria-hidden="true"></i>
              <span>Why Children Need Regular Vision Screenings and Eye Exams</span>
              <i class="bx bx-chevron-down kec-chevron" aria-hidden="true"></i>
            </summary>
            <div class="kec-article" role="region" aria-label="Why Children Need Regular Vision Screenings and Eye Exams">

              <div class="kec-intro-layout">
                <div>
                  <p>As a parent, seeing your children excel in school is ecstatic. All parents do everything possible to provide their kids with the best education opportunities.</p>
                  <p>A child requires various abilities to thrive in school, and good vision is paramount. Students engage in many visual learning activities such as reading, writing, using computers, chalkboard work and sports. Eyes are constantly utilized in classroom and in outdoor activities. As such, poor vision adversely affects a child's education and sports participation.</p>
                  <p>Demand for visual abilities increase as children progress in school. School years are important pillars in every child's life. Parents strive to provide the best environment and resources for their kids to learn. Unfortunately, vision is often overlooked.</p>
                  <p>Understanding visual skills needed by your child to succeed in school is key.</p>
                </div>
                <img src="/images/child-eye-exam.jpg" alt="A child receiving an eye exam" class="kec-hero-image" />
              </div>

              <h3 class="kec-section-heading">Vision skills necessary to succeed in school</h3>
              <p>Although there are numerous vision skills beyond seeing that come together to realize academic success, eyes play a vital role. Every child requires the following vision skills to effectively read and learn:</p>
              <ul>
                <li><strong>Visual acuity:</strong> describes the ability of a child to see clearly when reading a book up close, viewing chalkboard at a distance and viewing a computer at an intermediate distance.</li>
                <li><strong>Eye focusing:</strong> refers to the ability to accurately and quickly keep clear vision as object distances change. For instance, when looking at the chalkboard and changing to a paper on the desk quickly back and forth.</li>
                <li><strong>Eye tracking:</strong> describes the ability to maintain eyes on target when looking from one object to another. For example, when moving eyes while reading a printed page or keeping an eye at a moving object like a ball.</li>
                <li><strong>Eye teaming:</strong> ability to use both eyes and coordinate when moving them along a page, and judging distances in sports or seeing classwork depth.</li>
                <li><strong>Eye hand coordination:</strong> ability to visually monitor and direct hands when hitting a ball or drawing pictures.</li>
                <li><strong>Visual perception:</strong> ability to organize images on a page into words, letters and ideas, understand and remember.</li>
              </ul>
              <p>As kids progress in school, demand on their visual capabilities rises. Books become small and the duration spent studying and reading increases exponentially. Additional homework and classwork increases the need for a child's vision. Sadly, some children have visual challenges.</p>

              <h3 class="kec-section-heading">Signs of learning related visual challenges</h3>
              <p>When some visual skills are undeveloped or underdeveloped, learning becomes difficult and stressful. Such children will typically show the following signs:</p>
              <ul>
                <li>Avoid visual work like reading as much as possible</li>
                <li>Struggle doing visual assignments with lowered efficiency or comprehension</li>
                <li>Experience fatigue, short attention and discomfort</li>
                <li>Slow reading and poor reading comprehension</li>
                <li>Confusing similar words</li>
                <li>Persistent word reversal</li>
                <li>Difficulty identifying and reproducing shapes</li>
                <li>Excessive eye rubbing or blinking</li>
                <li>Crossed eyes or eyes moving independently</li>
                <li>Double or blurred vision</li>
                <li>Eye strain or headaches</li>
                <li>Tilting head to use one eye, closing or covering one</li>
                <li>Placing head very close to a book when reading</li>
                <li>Behavioral signs such as inattentiveness and acting out</li>
              </ul>
              <p>Since vision may change often during school years, frequent eye and vision care is vital. Although myopia is the most common vision challenge, some children exhibit other forms of refractive error such as astigmatism and farsightedness.</p>
              <p>Eyeglasses and contact lenses may correct most visual issues. However, vision therapy programs can also help in enhancing vision skills.</p>
              <p>Identifying causes of learning challenges related to vision can increase the chances of addressing them successfully.</p>

              <h3 class="kec-section-heading">Learning challenges related to vision</h3>
              <p>Vision is a multifaceted process that involves both the brain and the eyes. Learning challenges related to vision can affect visual input, processing and integration. They include:</p>

              <h4 class="kec-subsection-heading">Eye refractive challenges</h4>
              <p>Eye refractive problems affects visual acuity of a child's eyes as shown by an eye chart. Some common refractive errors include farsightedness, astigmatism and nearsightedness. Other problems may include subtle optical errors, commonly referred to as higher order aberrations.</p>
              <p>Eye refractive challenges can cause low vision including permanently decreased visual acuity that may not be corrected by ordinary eye glasses, refractive surgery or contact lenses.</p>

              <h4 class="kec-subsection-heading">Functional vision challenges</h4>
              <p>Functional vision challenges describe a variety of particular eye functions and neurological control of these functions. Functions include accommodation, eye teaming and fine eye movement which are important for reading.</p>
              <p>Problems with functional visual skills can result in double or blurred vision, headaches and eye strain that hinder learning. For example, convergence insufficiency hinders the ability of both eyes to focus accurately, and comfortably remain aligned when reading.</p>

              <h4 class="kec-subsection-heading">Perceptual vision challenges</h4>
              <p>Visual perceptions range from comprehending what a child sees to identifying, judging its use or importance and connecting it with previously known information. As a child learns, recognizing previously seen words visually, and creating a mental picture of such words is crucial.</p>
              <p>Vision plays a major role in learning. As such, your child should get an eye examination at least once every year or more frequently if risk factors or problems exist. Unfortunately, most parents and educators incorrectly assume that once children pass school screening, they have no vision problems.</p>

            </div>
          </details>
        </li>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a target="_blank" href="pdfs/DV_Letter_to_Nurses_2026-2027.pdf">A Note to NM Public School Nurses on Vision Care and Vouchers</a>
        </li>
        <h4 class="mt-4 mb-3">Davis Vision Hearing Benefit</h4>
        <li>
          <i class="bx bxs-file-pdf"></i>
          <a target="_blank" href="pdfs/yourhearingnetwork.pdf"> Your
            Hearing Benefit
            for Davis
            Vision</a>
        </li>
      </ul>
    `;
  }
}

customElements.define("davis-vision-info", DavisVision);
