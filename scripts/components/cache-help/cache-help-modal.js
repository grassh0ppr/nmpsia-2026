class CacheHelpModal extends HTMLElement {
  connectedCallback() {
    // Load the component's CSS if not already loaded
    if (!document.querySelector('link[href*="cache-help-modal.css"]')) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "./scripts/components/cache-help/cache-help-modal.css";
      document.head.appendChild(link);
    }

    this.innerHTML = /*html*/ `
      <div class="modal fade cache-help-modal" id="cacheHelpModal" tabindex="-1" aria-labelledby="cacheHelpModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-scrollable">
          <div class="modal-content">
            <div class="modal-header">
              <div>
                <h5 class="modal-title" id="cacheHelpModalLabel">
                  <i class="bx bx-refresh"></i> Page Not Displaying Correctly?
                </h5>
                <p class="modal-subtitle">How to clear your browser cache and see the latest version of this site</p>
              </div>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <p class="intro-text">
                If this page looks outdated, has broken styling, or something just seems off, your browser may be loading an older saved version.
                Clearing your browser's <strong>cache</strong> forces it to download the newest files. Choose your device below for step-by-step instructions.
              </p>

              <div class="accordion" id="cacheHelpAccordion">

                <!-- Windows -->
                <div class="accordion-item">
                  <h2 class="accordion-header" id="cacheHeadingWindows">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#cacheCollapseWindows" aria-expanded="false" aria-controls="cacheCollapseWindows">
                      <i class="bx bxl-windows"></i> Windows (Desktop)
                    </button>
                  </h2>
                  <div id="cacheCollapseWindows" class="accordion-collapse collapse" aria-labelledby="cacheHeadingWindows" data-bs-parent="#cacheHelpAccordion">
                    <div class="accordion-body">

                      <div class="browser-section">
                        <div class="browser-name">Google Chrome</div>
                        <ol class="browser-steps">
                          <li>Press <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Delete</kbd></li>
                          <li>Set the time range to <strong>"All time"</strong></li>
                          <li>Check <strong>"Cached images and files"</strong></li>
                          <li>Click <strong>"Delete data"</strong></li>
                        </ol>
                        <div class="shortcut-tip">
                          <strong>Quick refresh:</strong> Press <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>R</kbd> to force-reload just this page without clearing your entire cache.
                        </div>
                      </div>

                      <div class="browser-section">
                        <div class="browser-name">Microsoft Edge</div>
                        <ol class="browser-steps">
                          <li>Press <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Delete</kbd></li>
                          <li>Set the time range to <strong>"All time"</strong></li>
                          <li>Check <strong>"Cached images and files"</strong></li>
                          <li>Click <strong>"Clear now"</strong></li>
                        </ol>
                        <div class="shortcut-tip">
                          <strong>Quick refresh:</strong> Press <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>R</kbd> to force-reload this page.
                        </div>
                      </div>

                      <div class="browser-section">
                        <div class="browser-name">Mozilla Firefox</div>
                        <ol class="browser-steps">
                          <li>Press <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Delete</kbd></li>
                          <li>Set the time range to <strong>"Everything"</strong></li>
                          <li>Check <strong>"Cache"</strong></li>
                          <li>Click <strong>"Clear Now"</strong></li>
                        </ol>
                        <div class="shortcut-tip">
                          <strong>Quick refresh:</strong> Press <kbd>Ctrl</kbd> + <kbd>F5</kbd> to force-reload this page.
                        </div>
                      </div>

                    </div>
                  </div>
                </div>

                <!-- Mac -->
                <div class="accordion-item">
                  <h2 class="accordion-header" id="cacheHeadingMac">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#cacheCollapseMac" aria-expanded="false" aria-controls="cacheCollapseMac">
                      <i class="bx bxl-apple"></i> Mac (Desktop)
                    </button>
                  </h2>
                  <div id="cacheCollapseMac" class="accordion-collapse collapse" aria-labelledby="cacheHeadingMac" data-bs-parent="#cacheHelpAccordion">
                    <div class="accordion-body">

                      <div class="browser-section">
                        <div class="browser-name">Safari</div>
                        <ol class="browser-steps">
                          <li>Click <strong>Safari</strong> in the menu bar, then <strong>Settings</strong> (or <strong>Preferences</strong>)</li>
                          <li>Go to the <strong>Advanced</strong> tab and check <strong>"Show features for web developers"</strong> at the bottom</li>
                          <li>Close Settings, then click <strong>Develop</strong> in the menu bar</li>
                          <li>Click <strong>"Empty Caches"</strong></li>
                        </ol>
                        <div class="shortcut-tip">
                          <strong>Quick refresh:</strong> Press <kbd>&#8984; Cmd</kbd> + <kbd>Option</kbd> + <kbd>R</kbd> to force-reload this page. Or hold <kbd>Shift</kbd> while clicking the reload button.
                        </div>
                      </div>

                      <div class="browser-section">
                        <div class="browser-name">Google Chrome</div>
                        <ol class="browser-steps">
                          <li>Press <kbd>&#8984; Cmd</kbd> + <kbd>Shift</kbd> + <kbd>Delete</kbd></li>
                          <li>Set the time range to <strong>"All time"</strong></li>
                          <li>Check <strong>"Cached images and files"</strong></li>
                          <li>Click <strong>"Delete data"</strong></li>
                        </ol>
                        <div class="shortcut-tip">
                          <strong>Quick refresh:</strong> Press <kbd>&#8984; Cmd</kbd> + <kbd>Shift</kbd> + <kbd>R</kbd> to force-reload this page.
                        </div>
                      </div>

                      <div class="browser-section">
                        <div class="browser-name">Mozilla Firefox</div>
                        <ol class="browser-steps">
                          <li>Press <kbd>&#8984; Cmd</kbd> + <kbd>Shift</kbd> + <kbd>Delete</kbd></li>
                          <li>Set the time range to <strong>"Everything"</strong></li>
                          <li>Check <strong>"Cache"</strong></li>
                          <li>Click <strong>"Clear Now"</strong></li>
                        </ol>
                        <div class="shortcut-tip">
                          <strong>Quick refresh:</strong> Press <kbd>&#8984; Cmd</kbd> + <kbd>Shift</kbd> + <kbd>R</kbd> to force-reload this page.
                        </div>
                      </div>

                    </div>
                  </div>
                </div>

                <!-- iPhone / iPad -->
                <div class="accordion-item">
                  <h2 class="accordion-header" id="cacheHeadingIOS">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#cacheCollapseIOS" aria-expanded="false" aria-controls="cacheCollapseIOS">
                      <i class="bx bxl-apple"></i> iPhone &amp; iPad
                    </button>
                  </h2>
                  <div id="cacheCollapseIOS" class="accordion-collapse collapse" aria-labelledby="cacheHeadingIOS" data-bs-parent="#cacheHelpAccordion">
                    <div class="accordion-body">

                      <div class="browser-section">
                        <div class="browser-name">Safari (default browser)</div>
                        <ol class="browser-steps">
                          <li>Open the <strong>Settings</strong> app on your home screen</li>
                          <li>Scroll down and tap <strong>Apps</strong></li>
                          <li>Find and tap <strong>Safari</strong></li>
                          <li>Scroll down and tap <strong>"Clear History and Website Data"</strong></li>
                          <li>Choose the time range (select <strong>"All history"</strong> to be thorough)</li>
                          <li>Tap <strong>"Clear History"</strong> to confirm</li>
                        </ol>
                        <div class="shortcut-tip">
                          <strong>Note:</strong> This will also clear your browsing history and sign you out of some websites. Your saved passwords and bookmarks will not be affected.
                        </div>
                      </div>

                      <div class="browser-section">
                        <div class="browser-name">Google Chrome</div>
                        <ol class="browser-steps">
                          <li>Open the <strong>Chrome</strong> app</li>
                          <li>Tap the <strong>three dots</strong> (&bull;&bull;&bull;) at the bottom of the screen</li>
                          <li>Tap <strong>"Clear Browsing Data"</strong></li>
                          <li>Make sure <strong>"Cached Images and Files"</strong> is checked</li>
                          <li>Set the time range to <strong>"All Time"</strong></li>
                          <li>Tap <strong>"Clear Browsing Data"</strong> at the bottom</li>
                        </ol>
                      </div>

                    </div>
                  </div>
                </div>

                <!-- Android -->
                <div class="accordion-item">
                  <h2 class="accordion-header" id="cacheHeadingAndroid">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#cacheCollapseAndroid" aria-expanded="false" aria-controls="cacheCollapseAndroid">
                      <i class="bx bxl-android"></i> Android
                    </button>
                  </h2>
                  <div id="cacheCollapseAndroid" class="accordion-collapse collapse" aria-labelledby="cacheHeadingAndroid" data-bs-parent="#cacheHelpAccordion">
                    <div class="accordion-body">

                      <div class="browser-section">
                        <div class="browser-name">Google Chrome</div>
                        <ol class="browser-steps">
                          <li>Open the <strong>Chrome</strong> app</li>
                          <li>Tap the <strong>three dots</strong> (&vellip;) in the top-right corner</li>
                          <li>Tap <strong>"Delete browsing data"</strong></li>
                          <li>Make sure <strong>"Cached images and files"</strong> is checked</li>
                          <li>Set the time range to <strong>"All time"</strong></li>
                          <li>Tap <strong>"Delete data"</strong></li>
                        </ol>
                      </div>

                      <div class="browser-section">
                        <div class="browser-name">Samsung Internet</div>
                        <ol class="browser-steps">
                          <li>Open the <strong>Samsung Internet</strong> app</li>
                          <li>Tap the <strong>menu icon</strong> (three lines) at the bottom-right</li>
                          <li>Tap <strong>Settings</strong></li>
                          <li>Tap <strong>"Browsing data"</strong> under Personal data</li>
                          <li>Tap <strong>"Delete browsing data"</strong></li>
                          <li>Check <strong>"Cache"</strong> and tap <strong>"Delete data"</strong></li>
                        </ol>
                      </div>

                      <div class="browser-section">
                        <div class="browser-name">Mozilla Firefox</div>
                        <ol class="browser-steps">
                          <li>Open the <strong>Firefox</strong> app</li>
                          <li>Tap the <strong>three dots</strong> (&vellip;) in the bottom-right corner</li>
                          <li>Tap <strong>Settings</strong></li>
                          <li>Tap <strong>"Delete browsing data"</strong></li>
                          <li>Check <strong>"Cached images and files"</strong></li>
                          <li>Tap <strong>"Delete browsing data"</strong></li>
                        </ol>
                      </div>

                    </div>
                  </div>
                </div>

              </div>
              <!-- end accordion -->

              <div class="still-stuck">
                <strong>Still seeing issues?</strong> If clearing your cache didn't fix things, try opening this website in a
                <strong>private/incognito window</strong> (this always loads a completely fresh version). If the problem persists even in a private window,
                please <a href="contact-us.html">contact us</a> and we'll look into it.
              </div>

            </div>
            <!-- end modal-body -->

            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define("cache-help-modal", CacheHelpModal);
