class FindAProvider extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /*html*/ `
            <div id="links-container"></div>
            <p>
                If you need assistance, 
                <a href="./benefits.html#assocCarrCons">contact the carrier</a>.
            </p>
        `;
    this.renderLinks();
  }

  renderLinks() {
    const links = [
      {
        url: "https://www.bcbsnm.com/nmpsia/doctors-and-hospitals.html",
        text: "BCBSNM Medical",
      },
      {
        url: "https://www2.phs.org/php_directory",
        text: "Presbyterian Health Plan",
      },
      {
        url: "https://www.caremark.com/wps/portal/.cmd/el?id=s7a4i9un3m_1&cmxtarget=FRAMED_LOCAL_PHARMACY&newLogin=yes&returnURL=http://www.caremark.com/framedLogoff.html",
        text: "CVS Caremark",
      },
      {
        url: "https://www.bcbsnm.com/find-care/providers-in-your-network/find-a-dentist",
        text: "BlueCare - Dental",
      },
      {
        url: "https://www.unitedconcordia.com/find-a-dentist/?network=990",
        text: "United Concordia",
      },
      {
        url: "https://www.deltadentalnm.com/member/nmpsia-members/",
        text: "Delta Dental",
      },
      { url: "https://davisvision.com/members/", text: "Davis Vision" },
    ];

    const ul = document.createElement("ul");
    ul.classList.add("content-list", "grid-layout");
    links.forEach((link) => {
      const li = document.createElement("li");
      const i = document.createElement("i");
      i.className = "bx bx-link-external";
      const a = document.createElement("a");
      a.href = link.url;
      a.target = "_blank";
      a.textContent = link.text;
      li.appendChild(i);
      li.appendChild(a);
      ul.appendChild(li);
    });
    document.getElementById("links-container").appendChild(ul);
  }
}

customElements.define("find-a-provider", FindAProvider);
