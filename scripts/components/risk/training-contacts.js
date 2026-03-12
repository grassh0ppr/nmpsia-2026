class TrainingContacts extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /*html*/ `
    <div class="header-flex">
    <h2 class="display-4">Loss Prevention Contact List</h2>
    <img
      src="images/Logo_POMS.png"
      alt="poms logo"
      class="carrier-logo"
    />
  </div>

  <p class="">
    <a
      href="/pdfs/poms-risk-docs/NMPSIA-Website-Contact-List-New-8-23-23.pdf"
      target="_blank"
      >Click here</a
    >
    to view or download PDF version
  </p>

  <!-- contacts with their headshots -->
  <div id="lossPrevContacts" class="loss-prev-contact-cards my-2">
    <div class="contact-card">
      <div
        class="contact-image"
        style="
          background-image: url('images/poms-risk-contacts/Julia_Garcia.jpg');
        "
      ></div>
      <div class="contact-card-body">
        <span class="contact-card-name">Julie Garcia, Regional Director</span>
        <span class="contact-card-phone"><a href="tel:15052496824">505-249-6824</a></span>
        <span class="contact-card-email"><a href="mailto:jgarcia@pomsassoc.com">jgarcia@pomsassoc.com</a></span>
        <span class="contact-card-dept">HR/Civil Rights</span>
      </div>
    </div>
    <div class="contact-card">
      <div
        class="contact-image"
        style="
          background-image: url('images/poms-risk-contacts/TamiePargas.jpg');
        "
      ></div>
      <div class="contact-card-body">
        <span class="contact-card-name">Tamie Pargas, Consultant</span>
        <span class="contact-card-phone"><a href="tel:5052497973">505-249-7973</a></span>
        <span class="contact-card-email"><a href="mailto:tpargas@pomsassoc.com">tpargas@pomsassoc.com</a></span>
        <span class="contact-card-dept">HR/Civil Rights</span>
      </div>
    </div>
    <div class="contact-card">
      <div
        class="contact-image"
        style="
          background-image: url('images/poms-risk-contacts/Steve-Meilleur-REV.jpg');
        "
      ></div>
      <div class="contact-card-body">
        <span class="contact-card-name">Steve Meilleur, Sr. VP</span>
        <span class="contact-card-phone"><a href="tel:5054010942">505-401-0942</a></span>
        <span class="contact-card-email"><a href="mailto:smeilleur@pomsassoc.com">smeilleur@pomsassoc.com</a></span>
        <span class="contact-card-dept">HR/Employment Practices</span>
      </div>
    </div>
    <div class="contact-card">
      <div
        class="contact-image"
        style="
          background-image: url('images/poms-risk-contacts/JamesVautier.jpg');
        "
      ></div>
      <div class="contact-card-body">
        <span class="contact-card-name">James Vautier, Sr. Manager</span>
        <span class="contact-card-phone"><a href="tel:5054801175">505-480-1175</a></span>
        <span class="contact-card-email"><a href="mailto:jvautier@pomsassoc.com">jvautier@pomsassoc.com</a></span>
        <span class="contact-card-dept">Safety & Security</span>
      </div>
    </div>
    <div class="contact-card">
      <div
        class="contact-image"
        style="
          background-image: url('images/poms-risk-contacts/DarronWalter.jpg');
        "
      ></div>
      <div class="contact-card-body">
        <span class="contact-card-name">Darron Walter, Consultant</span>
        <span class="contact-card-phone"><a href="tel:7207750031">720-775-0031</a></span>
        <span class="contact-card-email"><a href="mailto:dwalter@pomsassoc.com">dwalter@pomsassoc.com</a></span>
        <span class="contact-card-dept">Safety & Security</span>
      </div>
    </div>
    <div class="contact-card">
      <div
        class="contact-image"
        style="
          background-image: url('images/poms-risk-contacts/Grant-Banash-150x150.png');
        "
      ></div>
      <div class="contact-card-body">
        <span class="contact-card-name">Grant Banash, Sr. Mgr.</span>
        <span class="contact-card-phone"><a href="tel:5059336187">505-933-6187</a></span>
        <span class="contact-card-email"><a href="mailto:gbanash@pomsassoc.com">gbanash@pomsassoc.com</a></span>
        <span class="contact-card-dept">Cybersecurity/Technology</span>
      </div>
    </div>
    <div class="contact-card">
      <div
        class="contact-image"
        style="
          background-image: url('images/poms-risk-contacts/KarenMestasHarris.png');
        "
      ></div>
      <div class="contact-card-body">
        <span class="contact-card-name">Karen Mestas-Harris, Sr. Mgr.</span>
        <span class="contact-card-phone"><a href="tel:5756933655">575-693-3655</a></span>
        <span class="contact-card-email"><a href="mailto:kmestas@pomsassoc.com">kmestas@pomsassoc.com</a></span>
        <span class="contact-card-dept">Ergonomics</span>
      </div>
    </div>
    <div class="contact-card">
      <div
        class="contact-image"
        style="
          background-image: url('images/poms-risk-contacts/ErinBrannan.jpg');
        "
      ></div>
      <div class="contact-card-body">
        <span class="contact-card-name">Erin Brannan, Consultant</span>
        <span class="contact-card-phone"><a href="tel:6122271898">612-227-1898</a></span>
        <span class="contact-card-email"><a href="mailto:abrannan@pomsassoc.com">abrannan@pomsassoc.com</a></span>
        <span class="contact-card-dept">Ergonomics</span>
      </div>
    </div>
    <div class="contact-card">
      <div
        class="contact-image"
        style="
          background-image: url('images/poms-risk-contacts/LarryVigil.jpg');
        "
      ></div>
      <div class="contact-card-body">
        <span class="contact-card-name">Larry Vigil, Sr. Mgr.</span>
        <span class="contact-card-phone"><a href="tel:5052055620">505-205-5620</a></span>
        <span class="contact-card-email"><a href="mailto:lvigil@pomsassoc.com">lvigil@pomsassoc.com</a></span>
        <span class="contact-card-dept">Loss Prevention</span>
      </div>
    </div>
    <div class="contact-card">
      <div
        class="contact-image"
        style="
          background-image: url('images/poms-risk-contacts/avatar-placeholder.svg');
        "
      ></div>
      <div class="contact-card-body">
        <span class="contact-card-name">Andrew Trujillo, Consultant</span>
        <span class="contact-card-phone"><a href="tel:5053060981">505-306-0981</a></span>
        <span class="contact-card-email"><a href="mailto:atrujillo@pomsassoc.com">atrujillo@pomsassoc.com</a></span>
        <span class="contact-card-dept">Loss Prevention</span>
      </div>
    </div>
    <div class="contact-card">
      <div
        class="contact-image"
        style="
          background-image: url('images/poms-risk-contacts/RafaelVelasquez.jpg');
        "
      ></div>
      <div class="contact-card-body">
        <span class="contact-card-name">Rafael Velasquez, Consultant</span>
        <span class="contact-card-phone"><a href="tel:5054018976">505-401-8976</a></span>
        <span class="contact-card-email"><a href="mailto:atrujillo@pomsassoc.com">atrujillo@pomsassoc.com</a></span>
        <span class="contact-card-dept">Loss Prevention</span>
      </div>
    </div>
    <div class="contact-card">
      <div
        class="contact-image"
        style="
          background-image: url('images/poms-risk-contacts/BrendaBarela.jpg');
        "
      ></div>
      <div class="contact-card-body">
        <span class="contact-card-name">Brenda Barela, Consultant</span>
        <span class="contact-card-phone"><a href="tel:5052280533">505-228-0533</a></span>
        <span class="contact-card-email"><a href="mailto:bbarela@pomsassoc.com">bbarela@pomsassoc.com</a></span>
        <span class="contact-card-dept">Loss Prevention</span>
      </div>
    </div>
    <div class="contact-card">
      <div
        class="contact-image"
        style="
          background-image: url('images/poms-risk-contacts/AlbertMuniz.jpg');
        "
      ></div>
      <div class="contact-card-body">
        <span class="contact-card-name">Albert Muniz, Consultant</span>
        <span class="contact-card-phone"><a href="tel:5053394248">505-339-4248</a></span>
        <span class="contact-card-email"><a href="mailto:amuniz@pomsassoc.com">amuniz@pomsassoc.com</a></span>
        <span class="contact-card-dept">Loss Prevention</span>
      </div>
    </div>
    <div class="contact-card">
      <div
        class="contact-image"
        style="
          background-image: url('images/poms-risk-contacts/JohnBauler.jpeg');
        "
      ></div>
      <div class="contact-card-body">
        <span class="contact-card-name">John Bauler, Consultant</span>
        <span class="contact-card-phone"><a href="tel:5055042968">505-504-2968</a></span>
        <span class="contact-card-email"><a href="mailto:jbauler@pomsassoc.com">jbauler@pomsassoc.com</a></span>
        <span class="contact-card-dept">Loss Prevention</span>
      </div>
    </div>
    <div class="contact-card">
      <div
        class="contact-image"
        style="
          background-image: url('images/poms-risk-contacts/avatar-placeholder.svg');
        "
      ></div>
      <div class="contact-card-body">
        <span class="contact-card-name">Raymond Ross, Consultant</span>
        <span class="contact-card-email"><a href="mailto:rross@pomsassoc.com">rross@pomsassoc.com</a></span>
        <span class="contact-card-dept">Loss Prevention</span>
      </div>
    </div>
    <div class="contact-card">
      <div
        class="contact-image"
        style="
          background-image: url('images/poms-risk-contacts/avatar-placeholder.svg');
        "
      ></div>
      <div class="contact-card-body">
        <span class="contact-card-name">Susan Baca-Garcia, Office Mgr.</span>
        <span class="contact-card-phone"><a href="tel:5055733950">505-573-3950</a></span>
        <span class="contact-card-email"><a href="mailto:sbaca-garcia@pomsassoc.com">sbaca-garcia@pomsassoc.com</a></span>
        <span class="contact-card-dept">Loss Prevention Assistant</span>
      </div>
    </div>
    <div class="contact-card">
      <div
        class="contact-image"
        style="
          background-image: url('images/poms-risk-contacts/KevinMcDonald.jpg');
        "
      ></div>
      <div class="contact-card-body">
        <span class="contact-card-name">Kevin McDonald</span>
        <span class="contact-card-phone"><a href="tel:5056046153">505-604-6153</a></span>
        <span class="contact-card-email"><a href="mailto:kmcdonald@pomsassoc.com">kmcdonald@pomsassoc.com</a></span>
        <span class="contact-card-dept">Media Manager</span>
      </div>
    </div>
  </div>

  <!-- Loss prevention contact list table -->
  <div class="table-responsive-wrapper">
  <table class="table table-bordered">
    <caption class="visually-hidden">Loss prevention consultant contact information by school district</caption>
    <thead>
      <tr>
        <th scope="col">Schools</th>
        <th scope="col">Consultant</th>
        <th scope="col">Email</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Albuquerque Charter Schools</td>
        <td>Andrew Trujillo</td>
        <td>
          <a href="mailto:atrujillo@pomsassoc.com"
            >atrujillo@pomsassoc.com</a
          >
        </td>
      </tr>
      <tr>
        <td>Alamogordo</td>
        <td>Albert Muniz</td>
        <td>
          <a href="mailto:amuniz@pomsassoc.com">amuniz@pomsassoc.com</a>
        </td>
      </tr>
      <tr>
        <td>Animas</td>
        <td>Rafael Velasquez</td>
        <td>
          <a href="mailto:rvelasquez@pomsassoc.com"
            >rvelasquez@pomsassoc.com</a
          >
        </td>
      </tr>
      <tr>
        <td>Artesia</td>
        <td>Rafael Velasquez</td>
        <td>
          <a href="mailto:rvelasquez@pomsassoc.com"
            >rvelasquez@pomsassoc.com</a
          >
        </td>
      </tr>
      <tr>
        <td>Aztec</td>
        <td>Albert Muniz</td>
        <td>
          <a href="mailto:amuniz@pomsassoc.com">amuniz@pomsassoc.com</a>
        </td>
      </tr>
      <tr>
        <td>Belen</td>
        <td>Brenda Barela</td>
        <td>
          <a href="mailto:bbarela@pomsassoc.com"
            >bbarela@pomsassoc.com</a
          >
        </td>
      </tr>
      <tr>
        <td>Bernalillo</td>
        <td>Rafael Velasquez</td>
        <td>
          <a href="mailto:rvelasquez@pomsassoc.com"
            >rvelasquez@pomsassoc.com</a
          >
        </td>
      </tr>
      <tr>
        <td>Bloomfield</td>
        <td>Albert Muniz</td>
        <td>
          <a href="mailto:amuniz@pomsassoc.com">amuniz@pomsassoc.com</a>
        </td>
      </tr>
      <tr>
        <td>Capitan</td>
        <td>Larry Vigil</td>
        <td>
          <a href="mailto:lvigil@pomsassoc.com">lvigil@pomsassoc.com</a>
        </td>
      </tr>
      <tr>
        <td>Carlsbad</td>
        <td>Rafael Velasquez</td>
        <td>
          <a href="mailto:rvelasquez@pomsassoc.com"
            >rvelasquez@pomsassoc.com</a
          >
        </td>
      </tr>
      <tr>
        <td>Carrizozo</td>
        <td>Rafael Velasquez</td>
        <td>
          <a href="mailto:rvelasquez@pomsassoc.com"
            >rvelasquez@pomsassoc.com</a
          >
        </td>
      </tr>
      <tr>
        <td>Chama Valley</td>
        <td>Rafael Velasquez</td>
        <td>
          <a href="mailto:rvelasquez@pomsassoc.com"
            >rvelasquez@pomsassoc.com</a
          >
        </td>
      </tr>
      <tr>
        <td>Cimarron</td>
        <td>Larry Vigil</td>
        <td>
          <a href="mailto:lvigil@pomsassoc.com">lvigil@pomsassoc.com</a>
        </td>
      </tr>
      <tr>
        <td>Clayton</td>
        <td>Larry Vigil</td>
        <td>
          <a href="mailto:lvigil@pomsassoc.com">lvigil@pomsassoc.com</a>
        </td>
      </tr>
      <tr>
        <td>Cloudcroft</td>
        <td>Larry Vigil</td>
        <td>
          <a href="mailto:lvigil@pomsassoc.com">lvigil@pomsassoc.com</a>
        </td>
      </tr>
      <tr>
        <td>Clovis</td>
        <td>Brenda Barela</td>
        <td>
          <a href="mailto:bbarela@pomsassoc.com"
            >bbarela@pomsassoc.com</a
          >
        </td>
      </tr>
      <tr>
        <td>Cobre</td>
        <td>Larry Vigil</td>
        <td>
          <a href="mailto:lvigil@pomsassoc.com">lvigil@pomsassoc.com</a>
        </td>
      </tr>
      <tr>
        <td>Corona</td>
        <td>Brenda Barela</td>
        <td>
          <a href="mailto:bbarela@pomsassoc.com"
            >bbarela@pomsassoc.com</a
          >
        </td>
      </tr>
      <tr>
        <td>Cuba</td>
        <td>Andrew Trujillo</td>
        <td>
          <a href="mailto:atrujillo@pomsassoc.com"
            >atrujillo@pomsassoc.com</a
          >
        </td>
      </tr>
      <tr>
        <td>Deming</td>
        <td>Andrew Trujillo</td>
        <td>
          <a href="mailto:atrujillo@pomsassoc.com"
            >atrujillo@pomsassoc.com</a
          >
        </td>
      </tr>
      <tr>
        <td>Des Moines</td>
        <td>Larry Vigil</td>
        <td>
          <a href="mailto:lvigil@pomsassoc.com">lvigil@pomsassoc.com</a>
        </td>
      </tr>
      <tr>
        <td>Dexter</td>
        <td>Albert Muniz</td>
        <td>
          <a href="mailto:amuniz@pomsassoc.com">amuniz@pomsassoc.com</a>
        </td>
      </tr>
      <tr>
        <td>Dora</td>
        <td>John Bauler</td>
        <td>
          <a href="mailto:jbauler@pomsassoc.com"
            >jbauler@pomsassoc.com</a
          >
        </td>
      </tr>
      <tr>
        <td>Dulce</td>
        <td>Rafael Velasquez</td>
        <td>
          <a href="mailto:rvelasquez@pomsassoc.com"
            >rvelasquez@pomsassoc.com</a
          >
        </td>
      </tr>
      <tr>
        <td>Eastern NM Univ.</td>
        <td>John Bauler</td>
        <td>
          <a href="mailto:jbauler@pomsassoc.com"
            >jbauler@pomsassoc.com</a
          >
        </td>
      </tr>
      <tr>
        <td>Elida</td>
        <td>John Bauler</td>
        <td>
          <a href="mailto:jbauler@pomsassoc.com"
            >jbauler@pomsassoc.com</a
          >
        </td>
      </tr>
      <tr>
        <td>Espa&ntilde;ola</td>
        <td>Larry Vigil</td>
        <td>
          <a href="mailto:lvigil@pomsassoc.com">lvigil@pomsassoc.com</a>
        </td>
      </tr>
      <tr>
        <td>Estancia</td>
        <td>Larry Vigil</td>
        <td>
          <a href="mailto:lvigil@pomsassoc.com">lvigil@pomsassoc.com</a>
        </td>
      </tr>
      <tr>
        <td>Eunice</td>
        <td>Brenda Barela</td>
        <td>
          <a href="mailto:bbarela@pomsassoc.com"
            >bbarela@pomsassoc.com</a
          >
        </td>
      </tr>
      <tr>
        <td>Farmington</td>
        <td>Albert Muniz</td>
        <td>
          <a href="mailto:amuniz@pomsassoc.com">amuniz@pomsassoc.com</a>
        </td>
      </tr>
      <tr>
        <td>Floyd</td>
        <td>John Bauler</td>
        <td>
          <a href="mailto:jbauler@pomsassoc.com"
            >jbauler@pomsassoc.com</a
          >
        </td>
      </tr>
      <tr>
        <td>Fort Sumner</td>
        <td>Brenda Barela</td>
        <td>
          <a href="mailto:bbarela@pomsassoc.com"
            >bbarela@pomsassoc.com</a
          >
        </td>
      </tr>
      <tr>
        <td>Gadsen</td>

        <td>Andrew Trujillo</td>
        <td>
          <a href="mailto:atrujillo@pomsassoc.com"
            >atrujillo@pomsassoc.com</a
          >
        </td>
      </tr>
      <tr>
        <td>Gallup</td>
        <td>Rafael Velasquez</td>
        <td>
          <a href="mailto:rvelasquez@pomsassoc.com"
            >rvelasquez@pomsassoc.com</a
          >
        </td>
      </tr>
      <tr>
        <td>Grady</td>
        <td>Rafael Velasquez</td>
        <td>
          <a href="mailto:rvelasquez@pomsassoc.com"
            >rvelasquez@pomsassoc.com</a
          >
        </td>
      </tr>
      <tr>
        <td>Grants-Cibola</td>
        <td>Larry Vigil</td>
        <td>
          <a href="mailto:lvigil@pomsassoc.com">lvigil@pomsassoc.com</a>
        </td>
      </tr>
      <tr>
        <td>Hagerman</td>
        <td>Albert Muniz</td>
        <td>
          <a href="mailto:amuniz@pomsassoc.com">amuniz@pomsassoc.com</a>
        </td>
      </tr>
      <tr>
        <td>Hatch Valley</td>
        <td>Rafael Velasquez</td>
        <td>
          <a href="mailto:rvelasquez@pomsassoc.com"
            >rvelasquez@pomsassoc.com</a
          >
        </td>
      </tr>
      <tr>
        <td>Hobbs</td>
        <td>Brenda Barela</td>
        <td>
          <a href="mailto:bbarela@pomsassoc.com"
            >bbarela@pomsassoc.com</a
          >
        </td>
      </tr>
      <tr>
        <td>Hondo Valley</td>
        <td>Rafael Velasquez</td>
        <td>
          <a href="mailto:rvelasquez@pomsassoc.com"
            >rvelasquez@pomsassoc.com</a
          >
        </td>
      </tr>
      <tr>
        <td>House</td>
        <td>Brenda Barela</td>
        <td>
          <a href="mailto:bbarela@pomsassoc.com"
            >bbarela@pomsassoc.com</a
          >
        </td>
      </tr>
      <tr>
        <td>Jal</td>
        <td>Brenda Barela</td>
        <td>
          <a href="mailto:bbarela@pomsassoc.com"
            >bbarela@pomsassoc.com</a
          >
        </td>
      </tr>
      <tr>
        <td>Jemez Mountains</td>

        <td>Andrew Trujillo</td>
        <td>
          <a href="mailto:atrujillo@pomsassoc.com"
            >atrujillo@pomsassoc.com</a
          >
        </td>
      </tr>
      <tr>
        <td>Jemez Valley</td>

        <td>Andrew Trujillo</td>
        <td>
          <a href="mailto:atrujillo@pomsassoc.com"
            >atrujillo@pomsassoc.com</a
          >
        </td>
      </tr>
      <tr>
        <td>Kirtland Central</td>
        <td>Rafael Velasquez</td>
        <td>
          <a href="mailto:rvelasquez@pomsassoc.com"
            >rvelasquez@pomsassoc.com</a
          >
        </td>
      </tr>
      <tr>
        <td>Lake Arthur</td>
        <td>Albert Muniz</td>
        <td>
          <a href="mailto:amuniz@pomsassoc.com">amuniz@pomsassoc.com</a>
        </td>
      </tr>
      <tr>
        <td>Las Cruces</td>
        <td>Brenda Barela</td>
        <td>
          <a href="mailto:bbarela@pomsassoc.com"
            >bbarela@pomsassoc.com</a
          >
        </td>
      </tr>
      <tr>
        <td>Las Vegas City</td>
        <td>John Bauler</td>
        <td>
          <a href="mailto:jbauler@pomsassoc.com"
            >jbauler@pomsassoc.com</a
          >
        </td>
      </tr>
      <tr>
        <td>Logan</td>
        <td>Rafael Velasquez</td>
        <td>
          <a href="mailto:rvelasquez@pomsassoc.com"
            >rvelasquez@pomsassoc.com</a
          >
        </td>
      </tr>
      <tr>
        <td>Lordsburg</td>
        <td>Rafael Velasquez</td>
        <td>
          <a href="mailto:rvelasquez@pomsassoc.com"
            >rvelasquez@pomsassoc.com</a
          >
        </td>
      </tr>
      <tr>
        <td>Los Alamos</td>
        <td>Brenda Barela</td>
        <td>
          <a href="mailto:bbarela@pomsassoc.com"
            >bbarela@pomsassoc.com</a
          >
        </td>
      </tr>
      <tr>
        <td>Los Lunas</td>
        <td>Brenda Barela</td>
        <td>
          <a href="mailto:bbarela@pomsassoc.com"
            >bbarela@pomsassoc.com</a
          >
        </td>
      </tr>
      <tr>
        <td>Lovington</td>
        <td>Albert Muniz</td>
        <td>
          <a href="mailto:amuniz@pomsassoc.com">amuniz@pomsassoc.com</a>
        </td>
      </tr>
      <tr>
        <td>Loving</td>
        <td>Rafael Velasquez</td>
        <td>
          <a href="mailto:rvelasquez@pomsassoc.com"
            >rvelasquez@pomsassoc.com</a
          >
        </td>
      </tr>
      <tr>
        <td>Luna Comm. College</td>
        <td>John Bauler</td>
        <td>
          <a href="mailto:jbauler@pomsassoc.com"
            >jbauler@pomsassoc.com</a
          >
        </td>
      </tr>
      <tr>
        <td>Magdalena</td>
        <td>Larry Vigil</td>
        <td>
          <a href="mailto:lvigil@pomsassoc.com">lvigil@pomsassoc.com</a>
        </td>
      </tr>
      <tr>
        <td>Maxwell</td>
        <td>Albert Muniz</td>
        <td>
          <a href="mailto:amuniz@pomsassoc.com">amuniz@pomsassoc.com</a>
        </td>
      </tr>
      <tr>
        <td>Melrose</td>
        <td>Brenda Barela</td>
        <td>
          <a href="mailto:bbarela@pomsassoc.com"
            >bbarela@pomsassoc.com</a
          >
        </td>
      </tr>
      <tr>
        <td>Mesa Vista</td>
        <td>Andrew Trujillo</td>
        <td>
          <a href="mailto:atrujillo@pomsassoc.com"
            >atrujillo@pomsassoc.com</a
          >
        </td>
      </tr>
      <tr>
        <td>Mora</td>
        <td>Larry Vigil</td>
        <td>
          <a href="mailto:lvigil@pomsassoc.com">lvigil@pomsassoc.com</a>
        </td>
      </tr>
      <tr>
        <td>Moriarity</td>
        <td>Larry Vigil</td>
        <td>
          <a href="mailto:lvigil@pomsassoc.com">lvigil@pomsassoc.com</a>
        </td>
      </tr>
      <tr>
        <td>Mosquero</td>
        <td>Larry Vigil</td>
        <td>
          <a href="mailto:lvigil@pomsassoc.com">lvigil@pomsassoc.com</a>
        </td>
      </tr>
      <tr>
        <td>Mountainair</td>
        <td>Brenda Barela</td>
        <td>
          <a href="mailto:bbarela@pomsassoc.com"
            >bbarela@pomsassoc.com</a
          >
        </td>
      </tr>
      <tr>
        <td>NM Highlands Univ.</td>
        <td>John Bauler</td>
        <td>
          <a href="mailto:jbauler@pomsassoc.com"
            >jbauler@pomsassoc.com</a
          >
        </td>
      </tr>
      <tr>
        <td>Pecos</td>
        <td>Albert Muniz</td>
        <td>
          <a href="mailto:amuniz@pomsassoc.com">amuniz@pomsassoc.com</a>
        </td>
      </tr>
      <tr>
        <td>Penasco</td>
        <td>Albert Muniz</td>
        <td>
          <a href="mailto:amuniz@pomsassoc.com">amuniz@pomsassoc.com</a>
        </td>
      </tr>
      <tr>
        <td>Pojoaque</td>
        <td>Brenda Barela</td>
        <td>
          <a href="mailto:bbarela@pomsassoc.com"
            >bbarela@pomsassoc.com</a
          >
        </td>
      </tr>
      <tr>
        <td>Portales</td>
        <td>John Bauler</td>
        <td>
          <a href="mailto:jbauler@pomsassoc.com"
            >jbauler@pomsassoc.com</a
          >
        </td>
      </tr>
      <tr>
        <td>Quemado</td>
        <td>Larry Vigil</td>
        <td>
          <a href="mailto:lvigil@pomsassoc.com">lvigil@pomsassoc.com</a>
        </td>
      </tr>
      <tr>
        <td>Questa</td>
        <td>Albert Muniz</td>
        <td>
          <a href="mailto:amuniz@pomsassoc.com">amuniz@pomsassoc.com</a>
        </td>
      </tr>
      <tr>
        <td>Raton</td>
        <td>Larry Vigil</td>
        <td>
          <a href="mailto:lvigil@pomsassoc.com">lvigil@pomsassoc.com</a>
        </td>
      </tr>
      <tr>
        <td>Reserve</td>
        <td>Larry Vigil</td>
        <td>
          <a href="mailto:lvigil@pomsassoc.com">lvigil@pomsassoc.com</a>
        </td>
      </tr>
      <tr>
        <td>Rio Rancho</td>
        <td>Larry Vigil</td>
        <td>
          <a href="mailto:lvigil@pomsassoc.com">lvigil@pomsassoc.com</a>
        </td>
      </tr>
      <tr>
        <td>Roswell</td>
        <td>Albert Muniz</td>
        <td>
          <a href="mailto:amuniz@pomsassoc.com">amuniz@pomsassoc.com</a>
        </td>
      </tr>
      <tr>
        <td>Roy</td>
        <td>Larry Vigil</td>
        <td>
          <a href="mailto:lvigil@pomsassoc.com">lvigil@pomsassoc.com</a>
        </td>
      </tr>
      <tr>
        <td>Ruidoso</td>
        <td>Brenda Barela</td>
        <td>
          <a href="mailto:bbarela@pomsassoc.com"
            >bbarela@pomsassoc.com</a
          >
        </td>
      </tr>
      <tr>
        <td>San Jon</td>
        <td>Rafael Velasquez</td>
        <td>
          <a href="mailto:rvelasquez@pomsassoc.com"
            >rvelasquez@pomsassoc.com</a
          >
        </td>
      </tr>
      <tr>
        <td>Santa Fe</td>
        <td>Larry Vigil</td>
        <td>
          <a href="mailto:lvigil@pomsassoc.com">lvigil@pomsassoc.com</a>
        </td>
      </tr>
      <tr>
        <td>Santa Fe Charter Schools</td>
        <td>Larry Vigil</td>
        <td>
          <a href="mailto:lvigil@pomsassoc.com">lvigil@pomsassoc.com</a>
        </td>
      </tr>
      <tr>
        <td>Santa Fe Community College</td>
        <td>John Bauler</td>
        <td>
          <a href="mailto:jbauler@pomsassoc.com"
            >jbauler@pomsassoc.com</a
          >
        </td>
      </tr>
      <tr>
        <td>Santa Rosa</td>
        <td>Rafael Velasquez</td>
        <td>
          <a href="mailto:rvelasquez@pomsassoc.com"
            >rvelasquez@pomsassoc.com</a
          >
        </td>
      </tr>
      <tr>
        <td>Silver City</td>
        <td>John Bauler</td>
        <td>
          <a href="mailto:jbauler@pomsassoc.com"
            >jbauler@pomsassoc.com</a
          >
        </td>
      </tr>
      <tr>
        <td>Socorro</td>
        <td>Brenda Barela</td>
        <td>
          <a href="mailto:bbarela@pomsassoc.com"
            >bbarela@pomsassoc.com</a
          >
        </td>
      </tr>
      <tr>
        <td>Springer</td>
        <td>Albert Muniz</td>
        <td>
          <a href="mailto:amuniz@pomsassoc.com">amuniz@pomsassoc.com</a>
        </td>
      </tr>
      <tr>
        <td>Taos</td>
        <td>Albert Muniz</td>
        <td>
          <a href="mailto:amuniz@pomsassoc.com">amuniz@pomsassoc.com</a>
        </td>
      </tr>
      <tr>
        <td>Tatum</td>
        <td>Albert Muniz</td>
        <td>
          <a href="mailto:amuniz@pomsassoc.com">amuniz@pomsassoc.com</a>
        </td>
      </tr>
      <tr>
        <td>Texico</td>
        <td>Brenda Barela</td>
        <td>
          <a href="mailto:bbarela@pomsassoc.com"
            >bbarela@pomsassoc.com</a
          >
        </td>
      </tr>
      <tr>
        <td>Truth or Consequences</td>
        <td>Rafael Velasquez</td>
        <td>
          <a href="mailto:rvelasquez@pomsassoc.com"
            >rvelasquez@pomsassoc.com</a
          >
        </td>
      </tr>
      <tr>
        <td>Tucumcari</td>
        <td>Brenda Barela</td>
        <td>
          <a href="mailto:bbarela@pomsassoc.com"
            >bbarela@pomsassoc.com</a
          >
        </td>
      </tr>
      <tr>
        <td>Tularosa</td>
        <td>Larry Vigil</td>
        <td>
          <a href="mailto:lvigil@pomsassoc.com">lvigil@pomsassoc.com</a>
        </td>
      </tr>
      <tr>
        <td>Vaughn</td>
        <td>Brenda Barela</td>
        <td>
          <a href="mailto:bbarela@pomsassoc.com"
            >bbarela@pomsassoc.com</a
          >
        </td>
      </tr>
      <tr>
        <td>Wagon Mound</td>
        <td>Larry Vigil</td>
        <td>
          <a href="mailto:lvigil@pomsassoc.com">lvigil@pomsassoc.com</a>
        </td>
      </tr>
      <tr>
        <td>Western NM Univ.</td>
        <td>John Bauler</td>
        <td>
          <a href="mailto:jbauler@pomsassoc.com"
            >jbauler@pomsassoc.com</a
          >
        </td>
      </tr>
      <tr>
        <td>West Las Vegas</td>
        <td>John Bauler</td>
        <td>
          <a href="mailto:jbauler@pomsassoc.com"
            >jbauler@pomsassoc.com</a
          >
        </td>
      </tr>
      <tr>
        <td>Zuni</td>
        <td>Rafael Velasquez</td>
        <td>
          <a href="mailto:rvelasquez@pomsassoc.com"
            >rvelasquez@pomsassoc.com</a
          >
        </td>
      </tr>
    </tbody>
  </table>
  </div>    `;
  }
}

customElements.define("training-contacts", TrainingContacts);
