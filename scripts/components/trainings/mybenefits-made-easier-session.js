class MyBenefitsMadeEasierSession extends HTMLElement {
  connectedCallback() {
    if (!document.getElementById("mybenefits-made-easier-session-styles")) {
      const style = document.createElement("style");
      style.id = "mybenefits-made-easier-session-styles";
      style.textContent = `
        .session-block {
          background: #f8f9ff;
          border-radius: 10px;
          padding: 1.25rem 1.5rem;
          margin-bottom: 1.5rem;
          border: 1px solid #e0e4f8;
        }

        .session-block:last-child {
          margin-bottom: 0;
        }

        .session-title {
          font-size: 0.82rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          color: white;
          background: linear-gradient(135deg, #667eea 0%, #4e4ba2 100%);
          padding: 0.5rem 1rem;
          border-radius: 6px;
          margin-bottom: 1.25rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .no-slides-note {
          display: flex;
          align-items: flex-start;
          gap: 0.6rem;
          background: #fff8e1;
          border: 1px solid #ffe082;
          border-radius: 8px;
          padding: 0.75rem 1rem;
          font-size: 0.85rem;
          color: #6c5a00;
          margin-top: 1rem;
        }

        .no-slides-note i {
          margin-top: 0.1rem;
          flex-shrink: 0;
          color: #f59e0b;
        }

        .training-links-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(min(300px, 100%), 1fr));
          gap: 1.25rem;
          align-items: stretch;
          grid-auto-rows: 1fr;
          margin-top: 1rem;
          width: 100%;
          min-width: 0;
          box-sizing: border-box;
        }

        .training-link {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1rem;
          background: #f8f9fa;
          border-radius: 10px;
          text-decoration: none;
          color: #495057;
          transition: all 0.3s ease;
          border: 1px solid #e9ecef;
          height: 100%;
          min-height: 110px;
          min-width: 0;
          overflow-wrap: break-word;
        }

        .training-link:hover {
          background: #e9ecef;
          color: #667eea;
          text-decoration: none;
          transform: translateX(5px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }

        .training-link i {
          font-size: 1.5rem;
          color: #667eea;
          min-width: 1.5rem;
        }

        .training-link-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .training-link-title {
          font-weight: 600;
          margin-bottom: 0.25rem;
          font-size: 0.95rem;
        }

        .training-link-description {
          font-size: 0.85rem;
          color: #6c757d;
          margin: 0;
        }

        .year-badge {
          background: linear-gradient(135deg, #667eea 0%, #4e4ba2 100%);
          color: white;
          padding: 0.25rem 0.75rem;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 600;
          margin-left: auto;
        }

        @media (max-width: 768px) {
          .training-links-grid {
            grid-template-columns: 1fr;
          }
        }
      `;
      document.head.appendChild(style);
    }

    this.innerHTML = /*html*/ `
      <div class="session-block">
        <div class="session-title">
          <i class="bx bx-devices"></i>
          MyBenefits Made Easier: What's Changed
        </div>

        <figure class="mb-3">
          <video
            controls
            style="width: 100%; border-radius: 8px; background: #000"
            aria-label="MyBenefits Made Easier — What's Changed: Session Recording"
          >
            <source
              src="https://nmpsia.com/trainings/regional/2026/MYBENEFITS_MADE_EASIER_WHAT_CHANGED_VIDEO_DEMO.mp4"
              type="video/mp4"
            />
            <track
              kind="captions"
              src="https://nmpsia.com/trainings/regional/2026/captions-mybenefits-made-easier-chere.vtt"
              srclang="en"
              label="English"
              default
            />
            Your browser does not support the video element.
          </video>
          <figcaption style="font-size: 0.82rem; color: #6c757d; margin-top: 0.5rem;">
            <i class="bx bx-video me-1"></i>Session recording with English captions
          </figcaption>
        </figure>

        <div class="no-slides-note">
          <i class="bx bx-info-circle"></i>
          <span>Slide deck not available — this session was conducted as a live portal demo.</span>
        </div>

        <div class="training-links-grid">
          <a
            href="https://nmpsia.com/trainings/regional/2026/MyBenefits_Portal_FAQ_2026_v2.pdf"
            target="_blank"
            class="training-link"
          >
            <i class="bx bxs-file-pdf"></i>
            <div class="training-link-content">
              <div class="training-link-title">MyBenefits Portal FAQ</div>
              <div class="training-link-description">
                Frequently asked questions about the new MFA secured login
              </div>
            </div>
            <span class="year-badge">2026</span>
          </a>
        </div>

        <p class="mt-3 mb-2" style="font-size: 0.85rem; font-weight: 600; color: #495057;">
          <i class="bx bx-lock-alt me-1" style="color: #667eea;"></i>MFA Secured Login Resources
        </p>
        <div class="training-links-grid">
          <a
            href="/trainings/2026/Employer - Log In Process.pptx"
            target="_blank"
            class="training-link"
          >
            <i class="fa-solid fa-file-powerpoint"></i>
            <div class="training-link-content">
              <div class="training-link-title">Employer — Log In Process</div>
              <div class="training-link-description">
                Employer portal login walkthrough
              </div>
            </div>
            <span class="year-badge">2026</span>
          </a>
          <a
            href="/trainings/2026/EMPLOYEE Login Process.pptx"
            target="_blank"
            class="training-link"
          >
            <i class="fa-solid fa-file-powerpoint"></i>
            <div class="training-link-content">
              <div class="training-link-title">Employee — Log In Process</div>
              <div class="training-link-description">
                Employee portal login walkthrough
              </div>
            </div>
            <span class="year-badge">2026</span>
          </a>
        </div>
      </div>
    `;

    // Enable captions on the video after innerHTML is set
    const video = this.querySelector("video");
    function enableCaptions() {
      if (video.textTracks && video.textTracks.length > 0) {
        video.textTracks[0].mode = "showing";
      }
    }
    if (video.readyState >= 1) {
      enableCaptions();
    } else {
      video.addEventListener("loadedmetadata", enableCaptions);
    }
  }
}

customElements.define("mybenefits-made-easier-session", MyBenefitsMadeEasierSession);
