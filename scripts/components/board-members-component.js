class BoardMembersTbl extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /*html*/ `
        <div class="heading-and-element-flexbox">
            <h2 class="display-4">NMPSIA Board Members</h2>
            <img src="images/nmpsia_logo_2024.png" alt="nmpsia logo">
        </div>
        <hr>
        <div class="table-responsive">
        <table class="table table-bordered">
            <thead style="box-shadow: none; background-color: #204f9a; color: #fff">
                <tr>
                    <!-- <th scope="col">#</th> -->
                    <th scope="col">Name</th>
                    <th scope="col">Representing</th>
                    <!-- <th scope="col">Handle</th> -->
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><span class="fw-bold">Alfred Park</span>, President</td>
                    <td>Governor Appointee</td>
                </tr>
                <tr>
                    <td><span class="fw-bold">Chris Parrino</span>, Vice President</td>
                    <td>NM Association of School Business Officials</td>
                </tr>
                <tr>
                    <td><span class="fw-bold">Trish Ruiz</span>, Secretary</td>
                    <td>Educational Entities at Large</td>
                </tr>
                <tr>
                    <td>Denise Balderas</td>
                    <td>Governor Appointee</td>
                </tr>
                <tr>
                    <td>Tim Crone</td>
                    <td>American Federation of Teachers NM</td>
                </tr>
                <tr>
                    <td>William Hawkins</td>
                    <td>NM Superintendents Association</td>
                </tr>
                <tr>
                    <td>Pauline Jaramillo</td>
                    <td>NM School Boards Association</td>
                </tr>
                <tr>
                    <td>Bethany Jarrell</td>
                    <td>National Education Association NM</td>
                </tr>
                <tr>
                    <td>K.T. Manis</td>
                    <td>Public Education Commission</td>
                </tr>
                <tr>
                    <td>David Martinez, Jr.</td>
                    <td>National Education Association NM</td>
                </tr>
                <tr>
                    <td>Sammy J. Quintana</td>
                    <td>Governor Appointee</td>
                </tr>
            </tbody>
        </table>
    </div>
        `;
  }
}

customElements.define("board-members-component", BoardMembersTbl);
