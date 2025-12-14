class BoardMeetingMinutes extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /*html*/ `
        <div class="heading-and-element-flexbox">
                    <h2 class="display-4">Board Meeting Minutes</h2>
                    <img src="images/nmpsia_logo_2024.png" alt="NMPSIA logo" />
                </div>
                <hr>
                <div class="accordion" id="accordionBMM">
                    <!-- MINUTES 2025 -->
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseBMM2025" aria-expanded="true" aria-controls="collapseBMM2025">
                                2025 Board Meeting Minutes
                            </button>
                        </h2>
                        <div id="collapseBMM2025" class="accordion-collapse collapse show"
                            data-bs-parent="#accordionBMM">
                            <div class="accordion-body">
                                <ul class="content-list">
                                    <li>
                                        <i class="bx bxs-file-pdf"></i>
                                        <a target="_blank" href="/pdfs/Nov 2025 Board Minutes Final.pdf">
                                            November 6, 2025</a>
                                    </li>
                                    <li>
                                        <i class="bx bxs-file-pdf"></i>
                                        <a target="_blank" href="/pdfs/October_2025_Board_Meeting_Minutes.pdf">
                                            October 2, 2025</a>
                                    </li>
                                    <li>
                                        <i class="bx bxs-file-doc"></i>
                                        <a target="_blank" href="/docs/september_2025_minutes.pdf">
                                            September 4, 2025</a>
                                    </li>
                                    <li>
                                        <i class="bx bxs-file-pdf"></i>
                                        <a target="_blank" href="/pdfs/Board_minutes_july_2025.pdf">
                                            July 15, 2025</a>
                                    </li>
                                    <li>
                                        <i class="bx bxs-file-pdf"></i>
                                        <a target="_blank" href="/pdfs/Board_minutes_june_2025.pdf">
                                            June 5, 2025</a>
                                    </li>
                                    <li>
                                        <i class="bx bxs-file-pdf"></i>
                                        <a target="_blank" href="/pdfs/May 25 Board Minutes Final.pdf">
                                            May 8, 2025</a>
                                    </li>
                                    <li>
                                        <i class="bx bxs-file-pdf"></i>
                                        <a target="_blank" href="/pdfs/April 3 2025 Board Minutes.pdf">
                                            April 3, 2025</a>
                                    </li>
                                    <li>
                                        <i class="bx bxs-file-pdf"></i>
                                        <a target="_blank" href="https://nmpsia.com/pdfs/March 2025 Board Minutes FINAL.pdf">
                                            March 6, 2025</a>
                                    </li>
                                    <li>
                                        <i class="bx bxs-file-pdf"></i>
                                        <a target="_blank" href="https://nmpsia.com/nmpsiadownload/202504/Feb 6 2025 Board Meeting Minutes.pdf">
                                            February 6, 2025</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <!-- MINUTES 2024 -->
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseBMM2024" aria-expanded="false" aria-controls="collapseBMM2024">
                                2024 Board Meeting Minutes
                            </button>
                        </h2>
                        <div id="collapseBMM2024" class="accordion-collapse collapse"
                            data-bs-parent="#accordionBMM">
                            <div class="accordion-body">
                                <ul class="content-list">
                                    <li>
                                        <i class="bx bxs-file-pdf"></i>
                                        <a target="_blank" href="/pdfs/Board_Meeting_Minutes_Nov_7_2024.pdf">
                                            December 5, 2024</a>
                                    </li>
                                    <li>
                                        <i class="bx bxs-file-pdf"></i>
                                        <a target="_blank" href="/pdfs/Board_Meeting_Minutes_Nov_7_2024.pdf">
                                            November 7, 2024</a>
                                    </li>
                                    <li>
                                        <i class="bx bxs-file-pdf"></i>
                                        <a target="_blank" href="/pdfs/Approved_Minutes_Oct_3_2024.pdf">
                                            October 3, 2024</a>
                                    </li>
                                    <li>
                                        <i class="bx bxs-file-pdf"></i>
                                        <a target="_blank" href="/pdfs/September_5_2024_Minutes_Executed.pdf">
                                            September 5, 2024</a>
                                    </li>
                                    <li>
                                        <i class="bx bxs-file-pdf"></i>
                                        <a target="_blank"
                                            href="/pdfs/8_August_14_2024_Special_Board_Meeting_Minutes.pdf">
                                            August 14, 2024</a>
                                    </li>
                                    <li>
                                        <i class="bx bxs-file-pdf"></i>
                                        <a target="_blank" href="/pdfs/7_July_25_2024_Minutes.pdf">
                                            July 25, 2024</a>
                                    </li>
                                    <li>
                                        <i class="bx bxs-file-pdf"></i>
                                        <a target="_blank" href="/pdfs/June 6 2024 Minutes.pdf">June 6, 2024</a>
                                    </li>
                                    <li>
                                        <i class="bx bxs-file-pdf"></i>
                                        <a target="_blank" href="/pdfs/May_17_2024_Minutes.pdf">
                                            May 17, 2024</a>
                                    </li>
                                    <li>
                                        <i class="bx bxs-file-pdf"></i>
                                        <a target="_blank" href="/pdfs/May_2_2024_Minutes.pdf">
                                            May 2, 2024</a>
                                    </li>
                                    <li>
                                        <i class="bx bxs-file-pdf"></i>
                                        <a target="_blank" href="/pdfs/April_4_2024_Minutes.pdf">
                                            April 4, 2024</a>
                                    </li>

                                    <li>
                                        <i class="bx bxs-file-pdf"></i>
                                        <a target="_blank" href="/pdfs/March_7_2024_Minutes.pdf">
                                            March 7, 2024</a>
                                    </li>
                                    <li>
                                        <i class="bx bxs-file-pdf"></i>
                                        <a target="_blank" href="/pdfs/Board_Meeting_minutes_02_08_2024.pdf">
                                            February 8, 2024</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <!-- MINUTES 2023 -->
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseBMM2023" aria-expanded="false" aria-controls="collapseBMM2023">
                                2023 Board Meeting Minutes
                            </button>
                        </h2>
                        <div id="collapseBMM2023" class="accordion-collapse collapse" data-bs-parent="#accordionBMM">
                            <div class="accordion-body">
                                <ul class="content-list">
                                    <li>
                                    <i class="bx bxs-file-pdf"></i>
                                        <a target="_blank"
                                            href="/nmpsiadownload/202312/Board_Meeting_Minutes_Dec2023.pdf">December 7,
                                            2023</a>
                                    </li>
                                    <li>
                                    <i class="bx bxs-file-pdf"></i>
                                        <a target="_blank"
                                            href="/nmpsiadownload/202311/Board_Meeting_Minutes_112023.pdf">November 2,
                                            2023</a>
                                    </li>
                                    <li>
                                    <i class="bx bxs-file-pdf"></i>
                                        <a target="_blank"
                                            href="/nmpsiadownload/202310/Board_Meeting_Minutes_October2023.pdf">October
                                            5, 2023</a>
                                    </li>
                                    <li>
                                    <i class="bx bxs-file-pdf"></i>
                                        <a target="_blank" href="/pdfs/Board_Meeting_Minutes_9072023.pdf">September 7,
                                            2023</a>
                                    </li>
                                    <li>
                                    <i class="bx bxs-file-pdf"></i>
                                        <a target="_blank" href="/pdfs/Board_Meeting_Min_8302023_final.pdf">August 30,
                                            2023</a>
                                    </li>
                                    <li>
                                    <i class="bx bxs-file-pdf"></i>
                                        <a target="_blank" href="/pdfs/7_2023_Board_Meeting_Minutes.pdf">July 20,
                                            2023</a>
                                    </li>
                                    <li>
                                    <i class="bx bxs-file-pdf"></i>
                                        <a target="_blank" href="/pdfs/Board-Meeting-Minutes-682023.pdf">June 8,
                                            2023</a>
                                    </li>
                                    <li>
                                    <i class="bx bxs-file-pdf"></i>
                                        <a target="_blank" href="/pdfs/Board-Meeting-Minutes-5-4-23.pdf">May 4, 2023</a>
                                    </li>
                                    <li>
                                    <i class="bx bxs-file-pdf"></i>
                                        <a target="_blank" href="/pdfs/Board-Meeting-Minutes-462023.pdf">April 6,
                                            2023</a>
                                    </li>
                                    <li>
                                    <i class="bx bxs-file-pdf"></i>
                                        <a target="_blank" href="/pdfs/Board-Meeting-Minutes-322023.pdf">March 2,
                                            2023</a>
                                    </li>

                                    <li>
                                    <i class="bx bxs-file-pdf"></i>
                                        <a target="_blank" href="/pdfs/Board-Meeting-Mintues-2222023.pdf">February 2,
                                            2023</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <!-- MINUTES 2022 -->
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseBMM2022" aria-expanded="false" aria-controls="collapseBMM2022">
                                2022 Board Meeting Minutes
                            </button>
                        </h2>
                        <div id="collapseBMM2022" class="accordion-collapse collapse" data-bs-parent="#accordionBMM">
                            <div class="accordion-body">
                                <ul class="content-list">
                                    <li>
                                    <i class="bx bxs-file-pdf"></i>
                                        <a target="_blank" href="/pdfs/Board-Meeting-Mintues-1282022.pdf">December 8,
                                            2022</a>
                                    </li>
                                    <li>
                                    <i class="bx bxs-file-pdf"></i>
                                        <a target="_blank" href="/pdfs/Executed-Board-Minutes-11-3-2022.pdf">November 3,
                                            2022</a>
                                    </li>
                                    <li>
                                    <i class="bx bxs-file-pdf"></i>
                                        <a target="_blank"
                                            href="/pdfs/Executed Board Meeting Mintues 10.6.2022.pdf">October 6,
                                            2022</a>
                                    </li>
                                    <li>
                                    <i class="bx bxs-file-pdf"></i>
                                        <a target="_blank"
                                            href="/pdfs/Executed_Board_Meeting_Minutes_982022.pdf">September 8, 2022</a>
                                    </li>
                                    <li>
                                    <i class="bx bxs-file-pdf"></i>
                                        <a target="_blank"
                                            href="/pdfs/August162022_Board_Meeting_Minutes_with_signature.pdf">August
                                            16, 2022</a>
                                    </li>
                                    <li>
                                    <i class="bx bxs-file-pdf"></i>
                                        <a target="_blank"
                                            href="/pdfs/August42022_Special_Board_Meeting_Minutes_with_signature.pdf">August
                                            4,
                                            2022</a>
                                    </li>
                                    <li>
                                    <i class="bx bxs-file-pdf"></i>
                                        <a target="_blank"
                                            href="/pdfs/Board_Meeting_Mintues_07212022_with_signature.pdf">July 21,
                                            2022</a>
                                    </li>
                                    <li>
                                    <i class="bx bxs-file-pdf"></i>
                                        <a target="_blank" href="/pdfs/Approved_June_2022_Board_Minutes_v2.pdf">June 2,
                                            2022</a>
                                    </li>
                                    <li>
                                    <i class="bx bxs-file-pdf"></i>
                                        <a target="_blank" href="/pdfs/May_2022_Board_Minutes_Final_signed.pdf">May 5,
                                            2022</a>
                                    </li>
                                    <li>
                                    <i class="bx bxs-file-pdf"></i>
                                        <a target="_blank" href="/pdfs/April_2022_Board_Minutes_Final_signed.pdf">April
                                            7, 2022</a>
                                    </li>
                                    <li>
                                    <i class="bx bxs-file-pdf"></i>
                                        <a target="_blank"
                                            href="/pdfs/Approved_March_3_2022_NMPSIA_Board_Minutes.pdf">March 3,
                                            2022</a>
                                    </li>
                                    <li>
                                    <i class="bx bxs-file-pdf"></i>
                                        <a target="_blank"
                                            href="/pdfs/Approved_February_2022_NMPSIA_Board_Minutes.pdf">February 3,
                                            2022</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <!-- ARCHIVED MINUTES 2021 -->
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseBMM2021" aria-expanded="false" aria-controls="collapseBMM2021">
                                Archived Minutes 2021
                            </button>
                        </h2>
                        <div id="collapseBMM2021" class="accordion-collapse collapse" data-bs-parent="#accordionBMM">
                            <div class="accordion-body">
                                <ul class="content-list">
                                    <li>
                                    <i class="bx bxs-file-pdf"></i>
                                        <a target="_blank"
                                            href="/pdfs/December_7,_2021_Virtual_Board_Minutes_Final.pdf">December 7, 2021</a>
                                    </li>
                                    <li>
                                    <i class="bx bxs-file-pdf"></i>
                                        <a target="_blank" href="/pdfs/December_2,_2021_Board_Minutes_Final.pdf">December 2, 2021</a>
                                    </li>
                                    <li>
                                    <i class="bx bxs-file-pdf"></i>
                                        <a href="/pdfs/DocuSign_November_2021_Board_Minutes.pdf" target="_blank">November 4, 2021</a>
                                    </li>
                                    <li>
                                    <i class="bx bxs-file-pdf"></i>
                                        <a href="/pdfs/October_2021_Approved_Board_Minutes.pdf" target="_blank">October 7, 2021</a>
                                    </li>
                                    <li>
                                    <i class="bx bxs-file-pdf"></i>
                                        <a href="/pdfs/September_2021_Approved_Minutes.pdf" target="_blank">September
                                            2, 2021</a>
                                    </li>
                                    <li>
                                    <i class="bx bxs-file-pdf"></i>
                                        <a href="/pdfs/August_19,_2021_Board_Minutes_-_Final.pdf" target="_blank">August 19, 2021</a>
                                    </li>
                                    <li>
                                    <i class="bx bxs-file-pdf"></i>
                                        <a href="/pdfs/July_29,_2021_Board_Minutes_-_Final.pdf" target="_blank">July
                                            29, 2021</a>
                                    </li>
                                    <li>
                                    <i class="bx bxs-file-pdf"></i>
                                        <a href="/pdfs/June_3,_2021_Virtual_Board_Minutes_Approved.pdf"
                                            target="_blank">June 3, 2021</a>
                                    </li>
                                    <li>
                                    <i class="bx bxs-file-pdf"></i>
                                        <a href="/pdfs/May_6,%202021_Approved_Virtual_Board_Minutes.pdf"
                                            target="_blank">May 6, 2021</a>
                                    </li>
                                    <li>
                                    <i class="bx bxs-file-pdf"></i>
                                        <a href="/pdfs/April_2021_Approved_Virtual_Board_Minutes.pdf" target="_blank">April 8, 2021</a>
                                    </li>
                                    <li>
                                    <i class="bx bxs-file-pdf"></i>
                                        <a href="/pdfs/Approved_March_4,%202021_Virtual_Board_Minutes.pdf"
                                            target="_blank">March 4, 2021</a>
                                    </li>
                                    <li>
                                    <i class="bx bxs-file-pdf"></i>
                                        <a href="/pdfs/Approved_March_4,%202021_Virtual_Board_Minutes.pdf"
                                            target="_blank">February 4, 2021</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <!-- archived minutes 2020 -->
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseBMM2020" aria-expanded="false" aria-controls="collapseBMM2020">
                                Archived Minutes 2020
                            </button>
                        </h2>
                        <div id="collapseBMM2020" class="accordion-collapse collapse" data-bs-parent="#accordionBMM">
                            <div class="accordion-body">
                                <ul class="content-list">
                                    <li>
                                    <i class="bx bxs-file-pdf"></i>
                                        <a target="_blank"
                                            href="/pdfs/December_2020_Approved_Virtual_Board_Minutes.pdf">December 3, 2020</a>
                                    </li>
                                    <li>
                                    <i class="bx bxs-file-pdf"></i>
                                        <a target="_blank"
                                            href="/pdfs/November_5,_2020_Virtual_Board_Minutes-Approved.pdf">November 5, 2020</a>
                                    </li>
                                    <li>
                                    <i class="bx bxs-file-pdf"></i>
                                        <a href="/pdfs/ApproveMinutes_-_October_2020.pdf" target="_blank">October 8,
                                            2020</a>
                                    </li>
                                    <li>
                                    <i class="bx bxs-file-pdf"></i>
                                        <a href="/pdfs/September_3_2020_Minutes_Final_Signed.pdf" target="_blank">September 3, 2020</a>
                                    </li>
                                    <li>
                                    <i class="bx bxs-file-pdf"></i>
                                        <a href="/pdfs/August_6,_2020_Approved_Board_Minutes.pdf" target="_blank">August 6, 2020</a>
                                    </li>
                                    <li>
                                    <i class="bx bxs-file-pdf"></i>
                                        <a href="/pdfs/June_25,2020_Approved_Board_Minutes_Signed.pdf"
                                            target="_blank">June 25, 2020</a>
                                    </li>
                                    <li>
                                    <i class="bx bxs-file-pdf"></i>
                                        <a href="/pdfs/June_4,2020_Approved_Board_Minutes_Signed.pdf" target="_blank">June 4, 2020</a>
                                    </li>
                                    <li>
                                    <i class="bx bxs-file-pdf"></i>
                                        <a href="/pdfs/May-7,2020_Approved_Board_Minutes.pdf" target="_blank">May 7,
                                            2020</a>
                                    </li>
                                    <li>
                                    <i class="bx bxs-file-pdf"></i>
                                        <a href="/pdfs/April-9,2020_Virtual_Board_Meeting_Minutes_Signed.pdf"
                                            target="_blank">April 9, 2020</a>
                                    </li>
                                    <li>
                                    <i class="bx bxs-file-pdf"></i>
                                        <a href="/pdfs/March-5,2020_Approved_Board_Minutes.pdf" target="_blank">March
                                            5, 2020</a>
                                    </li>
                                    <li>
                                    <i class="bx bxs-file-pdf"></i>
                                        <a href="/pdfs/February,2020_Approved_Board_Minutes.pdf" target="_blank">February 6, 2020</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <!-- archived minutes 2019 -->
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseBMM2019" aria-expanded="false" aria-controls="collapseBMM2019">
                                Archived Minutes 2019
                            </button>
                        </h2>
                        <div id="collapseBMM2019" class="accordion-collapse collapse" data-bs-parent="#accordionBMM">
                            <div class="accordion-body">
                                <ul class="content-list">
                                    <li>
                                    <i class="bx bxs-file-pdf"></i>
                                        <a target="_blank" href="/pdfs/December,2019_Approved_Board_Minutes.pdf">December 5, 2019</a>
                                    </li>
                                    <li>
                                    <i class="bx bxs-file-pdf"></i>
                                        <a target="_blank" href="/pdfs/NMPSIA_Board_Minutes_11.7.19.pdf">November 7,
                                            2019</a>
                                    </li>
                                    <li>
                                    <i class="bx bxs-file-pdf"></i>
                                        <a href="/pdfs/October-3,2019_Board_Meeting_Agenda.pdf" target="_blank">October 3, 2019</a>
                                    </li>
                                    <li>
                                    <i class="bx bxs-file-pdf"></i>
                                        <a href="/pdfs/NMPSIA_Board_Minutes_9.10.19.pdf" target="_blank">September
                                            10, 2019</a>
                                    </li>
                                    <li>
                                    <i class="bx bxs-file-pdf"></i>
                                        <a href="/pdfs/NMPSIA_Board_Minutes_8.8.19.pdf" target="_blank">August 8,
                                            2019</a>
                                    </li>
                                    <li>
                                    <i class="bx bxs-file-pdf"></i>
                                        <a href="/pdfs/NMPSIA_Board_Minutes_6.27.19.pdf" target="_blank">June 27,
                                            2019</a>
                                    </li>
                                    <li>
                                    <i class="bx bxs-file-pdf"></i>
                                        <a href="/pdfs/NMPSIA_Emergency_Board_Minutes_6.13.19.pdf" target="_blank">June 13, 2019</a>
                                    </li>
                                    <li>
                                    <i class="bx bxs-file-pdf"></i>
                                        <a href="/pdfs/NMPSIA_Board_Minutes_5.2.19.pdf" target="_blank">May 2,
                                            2019</a>
                                    </li>
                                    <li>
                                    <i class="bx bxs-file-pdf"></i>
                                        <a href="/pdfs/April-4,2019_Board_Minutes.pdf" target="_blank">April 4,
                                            2019</a>
                                    </li>
                                    <li>
                                    <i class="bx bxs-file-pdf"></i>
                                        <a href="/pdfs/March-2019_NMPSIA_Board_Minutes-Approved.pdf" target="_blank">March 7, 2019</a>
                                    </li>
                                    <li>
                                    <i class="bx bxs-file-pdf"></i>
                                        <a href="/pdfs/March-2019_NMPSIA_Board_Minutes.pdf" target="_blank">March 2,
                                            2019</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
        `;
  }
}

customElements.define("board-meeting-minutes", BoardMeetingMinutes);
