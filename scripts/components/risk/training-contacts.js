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
  <div id="lossPrevContacts" class="my-2">
    <div class="contact-card">
      <!-- <img src="images/poms-training-contacts/Julia_Garcia.jpg" alt="headshot" width="200px"> -->
      <div
        class="contact-image"
        style="
          background-image: url('images/poms-training-contacts/Julia_Garcia.jpg');
        "
      ></div>
      <span>Julie Garcia, Regional Director</span>
      <span><a href="tel:15052496824">505-249-6824</a></span>
      <span
        ><a href="mailto:jgarcia@pomsassoc.com"
          >jgarcia@pomsassoc.com</a
        ></span
      >
      <span>HR/Civil Rights</span>
    </div>
    <div class="contact-card">
      <!-- <img src="images/poms-training-contacts/TamiePargas.jpg" alt="headshot" width="200px"> -->
      <div
        class="contact-image"
        style="
          background-image: url('images/poms-training-contacts/TamiePargas.jpg');
        "
      ></div>
      <span>Tamie Pargas, Consultant</span>
      <span><a href="tel:5052497973">505-249-7973</a></span>
      <span
        ><a href="mailto:tpargas@pomsassoc.com"
          >tpargas@pomsassoc.com</a
        ></span
      >
      <span>HR/Civil Rights</span>
    </div>
    <div class="contact-card">
      <!-- <img src="images/poms-training-contacts/Steve-Meilleur-REV.jpg" alt="headshot" width="200px"> -->
      <div
        class="contact-image"
        style="
          background-image: url('images/poms-training-contacts/Steve-Meilleur-REV.jpg');
        "
      ></div>
      <span>Steve Meilleur, Sr. VP</span>
      <span><a href="tel:5054010942">505-401-0942</a></span>
      <span
        ><a href="mailto:smeilleur@pomsassoc.com"
          >smeilleur@pomsassoc.com</a
        ></span
      >
      <span>HR/Employment Practices</span>
    </div>
    <div class="contact-card">
      <!-- <img src="/images/poms-training-contacts/JamesVautier.jpg" alt="headshot" width="200px"> -->
      <div
        class="contact-image"
        style="
          background-image: url('/images/poms-training-contacts/JamesVautier.jpg');
        "
      ></div>
      <span>James Vautier, Sr. Manager</span>
      <span><a href="tel:5054801175">505-480-1175</a></span>
      <span
        ><a href="mailto:jvautier@pomsassoc.com"
          >jvautier@pomsassoc.com</a
        ></span
      >
      <span>Safety & Security</span>
    </div>
    <div class="contact-card">
      <!-- <img src="images/poms-training-contacts/DarronWalter.jpg" alt="headshot" width="200px"> -->
      <div
        class="contact-image"
        style="
          background-image: url('images/poms-training-contacts/DarronWalter.jpg');
        "
      ></div>
      <span>Darron Walter, Consultant</span>
      <span
        ><a href="mailto:dwalter@pomsassoc.com"
          >dwalter@pomsassoc.com</a
        ></span
      >
      <span><a href="tel:7207750031">720-775-0031</a></span>
      <span>Safety & Security</span>
    </div>
    <div class="contact-card">
      <!-- <img src="images/poms-training-contacts/Grant-Banash-150x150.png" alt="headshot" width="200px"> -->
      <div
        class="contact-image"
        style="
          background-image: url('images/poms-training-contacts/Grant-Banash-150x150.png');
        "
      ></div>
      <span>Grant Banash, Sr. Mgr.</span>
      <span
        ><a href="mailto:gbanash@pomsassoc.com"
          >gbanash@pomsassoc.com</a
        ></span
      >
      <span><a href="tel:5059336187">505-933-6187</a></span>
      <span>Cybersecurity/Technology</span>
    </div>
    <div class="contact-card">
      <!-- <img src="images/poms-training-contacts/Karen Mestas Harris.png" alt="headshot" width="200px"> -->
      <div
        class="contact-image"
        style="
          background-image: url('images/poms-training-contacts/KarenMestasHarris.png');
        "
      ></div>
      <span>Karen Mestas-Harris, Sr. Mgr.</span>
      <span
        ><a href="mailto:kmestas@pomsassoc.com"
          >kmestas@pomsassoc.com</a
        ></span
      >
      <span><a href="tel:5756933655">575-693-3655</a></span>
      <span>Ergonomics</span>
    </div>
    <div class="contact-card">
      <!-- <img src="images/poms-training-contacts/Erin Brannan.jpg" alt="headshot" width="200px"> -->
      <div
        class="contact-image"
        style="
          background-image: url('images/poms-training-contacts/ErinBrannan.jpg');
        "
      ></div>
      <span>Erin Brannan, Consultant</span>
      <span
        ><a href="mailto:abrannan@pomsassoc.com"
          >abrannan@pomsassoc.com</a
        ></span
      >
      <span><a href="tel:6122271898">612-227-1898</a></span>
      <span>Ergonomics</span>
    </div>
    <div class="contact-card">
      <!-- <img src="images/poms-training-contacts/LarryVigil.jpg" alt="headshot" width="200px"> -->
      <div
        class="contact-image"
        style="
          background-image: url('images/poms-training-contacts/LarryVigil.jpg');
        "
      ></div>
      <span>Larry Vigil, Sr. Mgr.</span>
      <span><a href="tel:5052055620">505-205-5620</a></span>
      <span
        ><a href="mailto:lvigil@pomsassoc.com"
          >lvigil@pomsassoc.com</a
        ></span
      >
      <span>Loss Prevention</span>
    </div>
    <div class="contact-card">
      <!-- <img src="https://images.hellomagazine.com/horizon/landscape/8ba659046a86-myspace-tom-now-t.jpg?tx=c_fill,w_1280" alt="headshot" width="200px"> -->
      <div
        class="contact-image"
        style="
          background-image: url('https://media1.popsugar-assets.com/files/thumbor/47QvOgrcJal4MD9a2xOWS-DdlNM/fit-in/500x500/filters:format_auto-!!-:strip_icc-!!-/users/0/88/11_2007/72659691/i/Antonio-Banderas.jpg');
        "
      ></div>
      <span>Andrew Trujillo, Consultant</span>
      <span><a href="tel:5053060981">505-306-0981</a></span>
      <span
        ><a href="mailto:atrujillo@pomsassoc.com"
          >atrujillo@pomsassoc.com</a
        ></span
      >
      <span>Loss Prevention</span>
    </div>
    <div class="contact-card">
      <!-- <img src="/images/poms-training-contacts/RafaelVelasquez.jpg" alt="headshot" width="200px"> -->
      <div
        class="contact-image"
        style="
          background-image: url('images/poms-training-contacts/RafaelVelasquez.jpg');
        "
      ></div>
      <span>Rafael Velasquez, Consultant</span>
      <span><a href="tel:5054018976">505-401-8976</a></span>
      <span
        ><a href="mailto:atrujillo@pomsassoc.com"
          >atrujillo@pomsassoc.com</a
        ></span
      >
      <span>Loss Prevention</span>
    </div>
    <div class="contact-card">
      <!-- <img src="/images/poms-training-contacts/BrendaBarela.jpg" alt="headshot" width="200px"> -->
      <div
        class="contact-image"
        style="
          background-image: url('images/poms-training-contacts/BrendaBarela.jpg');
        "
      ></div>
      <span>Brenda Barela, Consultant</span>
      <span><a href="tel:5052280533">505-228-0533</a></span>
      <span
        ><a href="mailto:bbarela@pomsassoc.com"
          >bbarela@pomsassoc.com</a
        ></span
      >
      <span>Loss Prevention</span>
    </div>
    <div class="contact-card">
      <!-- <img src="/images/poms-training-contacts/AlbertMuniz.jpg" alt="headshot" width="200px"> -->
      <div
        class="contact-image"
        style="
          background-image: url('images/poms-training-contacts/AlbertMuniz.jpg');
        "
      ></div>
      <span>Albert Muniz, Consultant</span>
      <span><a href="tel:5053394248">505-339-4248</a></span>
      <span
        ><a href="mailto:amuniz@pomsassoc.com"
          >amuniz@pomsassoc.com</a
        ></span
      >
      <span>Loss Prevention</span>
    </div>
    <div class="contact-card">
      <!-- <img src="/images/poms-training-contacts/John Bauler.jpeg" alt="headshot" width="200px"> -->
      <div
        class="contact-image"
        style="
          background-image: url('images/poms-training-contacts/JohnBauler.jpeg');
        "
      ></div>
      <span>John Bauler, Consultant</span>
      <span><a href="tel:5055042968">505-504-2968</a></span>
      <span
        ><a href="mailto:jbauler@pomsassoc.com"
          >jbauler@pomsassoc.com</a
        ></span
      >
      <span>Loss Prevention</span>
    </div>
    <div class="contact-card">
      <!-- <img src="https://images.hellomagazine.com/horizon/landscape/8ba659046a86-myspace-tom-now-t.jpg?tx=c_fill,w_1280" alt="headshot" width="200px"> -->
      <div
        class="contact-image"
        style="
          background-image: url('https://parade.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTk3MjUxOTE4Njc2ODk0OTk3/ray-romano-somewhere-in-queens.jpg');
        "
      ></div>
      <span>Raymond Ross, Consultant</span>
      <!-- <span><a href="tel:5055042968">505-504-2968</a></span> -->
      <span
        ><a href="mailto:rross@pomsassoc.com"
          >rross@pomsassoc.com</a
        ></span
      >
      <span>Loss Prevention</span>
    </div>
    <div class="contact-card">
      <!-- <img src="https://m.media-amazon.com/images/M/MV5BMTY0OTY3ODA3OV5BMl5BanBnXkFtZTcwMzMyMzQ1NQ@@._V1_FMjpg_UX1000_.jpg" alt="headshot" width="200px"> -->
      <div
        class="contact-image"
        style="
          background-image: url('images/user-rectangle-solid-24.png');
        "
      ></div>
      <span>Susan Baca-Garcia, Office Mgr.</span>
      <span><a href="tel:5055733950">505-573-3950</a></span>
      <span
        ><a href="mailto:sbaca-garcia@pomsassoc.com"
          >sbaca-garcia@pomsassoc.com</a
        ></span
      >
      <span>Loss Prevention Assistant</span>
    </div>
    <div class="contact-card">
      <!-- <img src="/images/poms-training-contacts/KevinMcDonald.jpg" alt="headshot" width="200px"> -->
      <div
        class="contact-image"
        style="
          background-image: url('images/poms-training-contacts/KevinMcDonald.jpg');
        "
      ></div>
      <span>Kevin McDonald</span>
      <span><a href="tel:5056046153">505-604-6153</a></span>
      <span
        ><a href="mailto:kmcdonald@pomsassoc.com"
          >kmcdonald@pomsassoc.com</a
        ></span
      >
      <span>Media Manager</span>
    </div>
  </div>

  <!-- Loss prevention contact list table -->
  <table class="table table-bordered table-responsive">
    <thead>
      <tr>
        <th>Schools</th>
        <th>Consultant</th>
        <th>Email</th>
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
  </table>    `;
  }
}

customElements.define("training-contacts", TrainingContacts);
