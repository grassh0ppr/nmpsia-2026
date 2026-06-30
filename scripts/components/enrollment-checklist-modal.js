class EnrollmentChecklistModal extends HTMLElement {
  connectedCallback() {
    if (!document.getElementById("enrollment-checklist-modal-styles")) {
      const style = document.createElement("style");
      style.id = "enrollment-checklist-modal-styles";
      style.textContent = `
        #enrollmentChecklistModal .modal-header {
          background: linear-gradient(135deg, #667eea 0%, #4e4ba2 100%);
          color: white;
          border-bottom: none;
          border-radius: 0.3rem 0.3rem 0 0;
          padding: 1.25rem 1.5rem;
        }

        #enrollmentChecklistModal .modal-title {
          font-size: 1.25rem;
          font-weight: 700;
          letter-spacing: 0.02em;
        }

        #enrollmentChecklistModal .modal-header .btn-close {
          filter: brightness(0) invert(1);
          opacity: 0.85;
        }

        #enrollmentChecklistModal .modal-header .btn-close:hover {
          opacity: 1;
        }

        #enrollmentChecklistModal .checklist-intro {
          color: #5a6268;
          font-size: 0.95rem;
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        #enrollmentChecklistModal .progress-bar-wrapper {
          margin-bottom: 1.75rem;
        }

        #enrollmentChecklistModal .progress-label {
          display: flex;
          justify-content: space-between;
          font-size: 0.85rem;
          font-weight: 600;
          color: #495057;
          margin-bottom: 0.4rem;
        }

        #enrollmentChecklistModal .progress {
          height: 10px;
          border-radius: 999px;
          background: #e9ecef;
        }

        #enrollmentChecklistModal .progress-bar {
          background: linear-gradient(90deg, #667eea, #4e4ba2);
          border-radius: 999px;
          transition: width 0.3s ease;
        }

        #enrollmentChecklistModal .checklist-section {
          margin-bottom: 1.5rem;
        }

        #enrollmentChecklistModal .checklist-section-header {
          background: linear-gradient(135deg, #667eea 0%, #4e4ba2 100%);
          color: white;
          font-weight: 700;
          font-size: 0.95rem;
          padding: 0.6rem 1rem;
          border-radius: 8px;
          margin-bottom: 0.75rem;
          letter-spacing: 0.01em;
        }

        #enrollmentChecklistModal .checklist-items {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        #enrollmentChecklistModal .checklist-item {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          padding: 0.75rem 1rem;
          background: #f8f9fa;
          border-radius: 8px;
          border: 1px solid #e9ecef;
          border-left: 3px solid #667eea;
          transition: background 0.2s ease, border-color 0.2s ease, opacity 0.2s ease;
          cursor: pointer;
        }

        #enrollmentChecklistModal .checklist-item:hover {
          background: #eef0fd;
          border-left-color: #4e4ba2;
        }

        #enrollmentChecklistModal .checklist-item input[type="checkbox"] {
          width: 1.15rem;
          height: 1.15rem;
          flex-shrink: 0;
          margin-top: 0.1rem;
          accent-color: #667eea;
          cursor: pointer;
        }

        #enrollmentChecklistModal .checklist-item label {
          font-size: 0.9rem;
          color: #343a40;
          line-height: 1.5;
          cursor: pointer;
          margin: 0;
        }

        #enrollmentChecklistModal .checklist-item.is-checked {
          opacity: 0.55;
          background: #f0f0f0;
          border-left-color: #adb5bd;
        }

        #enrollmentChecklistModal .checklist-item.is-checked label {
          text-decoration: line-through;
          color: #6c757d;
        }

        #enrollmentChecklistModal .modal-footer {
          border-top: 1px solid #dee2e6;
          gap: 0.5rem;
        }

        #enrollmentChecklistModal .btn-reset {
          background: none;
          border: 1px solid #adb5bd;
          color: #6c757d;
          font-size: 0.85rem;
          padding: 0.4rem 0.9rem;
          border-radius: 6px;
          transition: all 0.2s ease;
        }

        #enrollmentChecklistModal .btn-reset:hover {
          background: #f8f9fa;
          border-color: #6c757d;
          color: #343a40;
        }

        #enrollmentChecklistModal .btn-close-footer {
          background: linear-gradient(135deg, #667eea 0%, #4e4ba2 100%);
          color: white;
          border: none;
          font-size: 0.9rem;
          padding: 0.5rem 1.25rem;
          border-radius: 6px;
          transition: opacity 0.2s ease;
        }

        #enrollmentChecklistModal .btn-close-footer:hover {
          opacity: 0.9;
        }
      `;
      document.head.appendChild(style);
    }

    const sections = [
      {
        title: "1. Pre-Enrollment Tasks",
        items: [
          "Evaluate current insurance needs",
          "Identify an enrollment opportunity (Have you experienced a qualifying event or is it currently the Annual Open/Switch Enrollment window?)",
          "Research available providers on the NMPSIA website",
          "Ask HR to meet to discuss any uncertainties you might have up to this point",
        ],
      },
      {
        title: "2. During Enrollment",
        items: [
          "Attend benefits orientation (if one is not offered, HR may request NMPSIA support) and ask questions to clarify uncertainties",
          "Choose the appropriate plan options",
          "Submit your request to add or change coverage via the MyBenefits Portal",
          "Submit enrollment request and all required supportive documentation before deadline",
          "Check with HR to ensure the supportive documents meet the criteria to support the request",
        ],
      },
      {
        title: "3. Post-Enrollment Follow-Up",
        items: [
          "Ensure receipt of Confirmation Notice, confirming all paperwork has been processed",
          "Keep a copy of forms and confirmation for your records",
          "Verify enrollment with insurance carrier(s) prior to any upcoming appointments",
        ],
      },
      {
        title: "4. Mid-Year Updates and Changes (if needed)",
        items: [
          "Understand how life changes will impact your benefits",
          "Check for updates from NMPSIA regarding new providers or plans offered",
          "Review current plan and assess any need for changes",
          "Modify or cancel benefits during Annual Open Enrollment period or with a qualifying event",
          "Ensure receipt of Confirmation Notice, confirming all paperwork has been processed",
        ],
      },
    ];

    const STORAGE_KEY = "enrollmentChecklist2026";
    const totalItems = sections.reduce((sum, s) => sum + s.items.length, 0);

    const buildSectionsHTML = () =>
      sections
        .map((section, sIdx) =>
          `<div class="checklist-section">
            <div class="checklist-section-header">${section.title}</div>
            <ul class="checklist-items">
              ${section.items
                .map(
                  (item, iIdx) =>
                    `<li class="checklist-item" id="ecl-row-${sIdx}-${iIdx}">
                      <input
                        type="checkbox"
                        id="ecl-${sIdx}-${iIdx}"
                        name="ecl-${sIdx}-${iIdx}"
                      />
                      <label for="ecl-${sIdx}-${iIdx}">${item}</label>
                    </li>`
                )
                .join("")}
            </ul>
          </div>`
        )
        .join("");

    this.innerHTML = /*html*/ `
      <div
        class="modal fade"
        id="enrollmentChecklistModal"
        tabindex="-1"
        aria-labelledby="enrollmentChecklistModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg modal-dialog-scrollable">
          <div class="modal-content">
            <div class="modal-header">
              <h2 class="modal-title" id="enrollmentChecklistModalLabel">
                <i class="bx bx-list-check me-2" aria-hidden="true"></i>Benefits Enrollment Checklist
              </h2>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <p class="checklist-intro">
                Use this checklist to guide you through the enrollment process.
                It ensures you do not overlook important tasks and helps you
                adhere to NMPSIA's rules of enrollment. Your progress is saved
                automatically in your browser.
              </p>

              <div class="progress-bar-wrapper" aria-live="polite">
                <div class="progress-label">
                  <span id="ecl-progress-text">0 of ${totalItems} tasks completed</span>
                  <span id="ecl-progress-pct">0%</span>
                </div>
                <div class="progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" aria-labelledby="ecl-progress-text">
                  <div class="progress-bar" id="ecl-progress-bar" style="width: 0%"></div>
                </div>
              </div>

              ${buildSectionsHTML()}
            </div>
            <div class="modal-footer">
              <button type="button" class="btn-reset" id="ecl-reset-btn">
                <i class="bx bx-reset me-1" aria-hidden="true"></i>Reset checklist
              </button>
              <button type="button" class="btn-close-footer" data-bs-dismiss="modal">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    `;

    this._initChecklist(sections, totalItems, STORAGE_KEY);
  }

  _initChecklist(sections, totalItems, storageKey) {
    const saved = JSON.parse(localStorage.getItem(storageKey) || "{}");

    const updateProgress = () => {
      let checked = 0;
      sections.forEach((section, sIdx) => {
        section.items.forEach((_, iIdx) => {
          if (document.getElementById(`ecl-${sIdx}-${iIdx}`)?.checked) {
            checked++;
          }
        });
      });
      const pct = Math.round((checked / totalItems) * 100);
      document.getElementById("ecl-progress-text").textContent =
        `${checked} of ${totalItems} tasks completed`;
      document.getElementById("ecl-progress-pct").textContent = `${pct}%`;
      const bar = document.getElementById("ecl-progress-bar");
      bar.style.width = `${pct}%`;
      bar.closest("[role='progressbar']").setAttribute("aria-valuenow", pct);
    };

    // Restore saved state and wire up listeners
    sections.forEach((section, sIdx) => {
      section.items.forEach((_, iIdx) => {
        const checkbox = document.getElementById(`ecl-${sIdx}-${iIdx}`);
        const row = document.getElementById(`ecl-row-${sIdx}-${iIdx}`);
        if (!checkbox || !row) return;

        const key = `${sIdx}-${iIdx}`;
        if (saved[key]) {
          checkbox.checked = true;
          row.classList.add("is-checked");
        }

        checkbox.addEventListener("change", () => {
          row.classList.toggle("is-checked", checkbox.checked);
          const current = JSON.parse(localStorage.getItem(storageKey) || "{}");
          if (checkbox.checked) {
            current[key] = true;
          } else {
            delete current[key];
          }
          localStorage.setItem(storageKey, JSON.stringify(current));
          updateProgress();
        });

        // Allow clicking anywhere on the row to toggle
        row.addEventListener("click", (e) => {
          if (e.target !== checkbox && e.target.tagName !== "LABEL") {
            checkbox.checked = !checkbox.checked;
            checkbox.dispatchEvent(new Event("change"));
          }
        });
      });
    });

    document.getElementById("ecl-reset-btn").addEventListener("click", () => {
      localStorage.removeItem(storageKey);
      sections.forEach((section, sIdx) => {
        section.items.forEach((_, iIdx) => {
          const checkbox = document.getElementById(`ecl-${sIdx}-${iIdx}`);
          const row = document.getElementById(`ecl-row-${sIdx}-${iIdx}`);
          if (checkbox) checkbox.checked = false;
          if (row) row.classList.remove("is-checked");
        });
      });
      updateProgress();
    });

    updateProgress();
  }
}

customElements.define("enrollment-checklist-modal", EnrollmentChecklistModal);
