import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const products = [
  {
    mainProductFoto: "https://via.placeholder.com/150",
    nameProduct: "BioB",
    nameProduct2: "Bio Based",
    companyLogo: "images/MainLogo-Fibope-Cropped-removebg-preview.png",
    description:
      "Folia termokurczliwa Exlfilm eco®BioB pozwala przyspieszyć proces pakowania, zwiększając wydajność produkcji. Zapewnia też solidną ochronę produktów dzięki swojej wytrzymałości i mocnym zgrzewom.",
  },
  {
    mainProductFoto: "https://via.placeholder.com/150",
    nameProduct: "MP (Mono Polyethylene)",
    companyLogo: "images/MainLogo-Fibope-Cropped-removebg-preview.png",
  },
  {
    mainProductFoto: "https://via.placeholder.com/150",
    nameProduct: "AF (Anti-Fog)",
    companyLogo: "images/MainLogo-Fibope-Cropped-removebg-preview.png",
  },
  {
    mainProductFoto: "https://via.placeholder.com/150",
    nameProduct: "BC (Hot Needle - CF)",
    companyLogo: "images/MainLogo-Fibope-Cropped-removebg-preview.png",
  },
  {
    mainProductFoto: "https://via.placeholder.com/150",
    nameProduct: "COŚ",
    companyLogo: "images/MainLogo-Fibope-Cropped-removebg-preview.png",
  },
  {
    mainProductFoto: "https://via.placeholder.com/150",
    nameProduct: "BF (Hot Needle - SW)",
    companyLogo: "images/MainLogo-Fibope-Cropped-removebg-preview.png",
  },
  {
    mainProductFoto: "https://via.placeholder.com/150",
    nameProduct: "BP (High Speed)",
    companyLogo: "images/MainLogo-Fibope-Cropped-removebg-preview.png",
  },
  {
    mainProductFoto: "https://via.placeholder.com/150",
    nameProduct: "FP26 (Performance Shrink Film)",
    companyLogo: "images/MainLogo-Fibope-Cropped-removebg-preview.png",
  },
  {
    mainProductFoto: "https://via.placeholder.com/150",
    nameProduct: "QSL (Quick Shrink Film)",
    companyLogo: "images/MainLogo-Fibope-Cropped-removebg-preview.png",
  },
  {
    mainProductFoto: "",
    nameProduct: "HG (High Gauge)",
    companyLogo: "images/MainLogo-Fibope-Cropped-removebg-preview.png",
  },
  {
    mainProductFoto: "https://via.placeholder.com/150",
    nameProduct: "LSF (Low Shrink Force)",
    companyLogo: "images/MainLogo-Fibope-Cropped-removebg-preview.png",
  },
  {
    mainProductFoto: "https://via.placeholder.com/150",
    nameProduct: "LTG (Light Gauge)",
    companyLogo: "images/MainLogo-Fibope-Cropped-removebg-preview.png",
  },
  {
    mainProductFoto: "https://via.placeholder.com/150",
    nameProduct: "PL (Crosslinking Shrink Film)",
    companyLogo: "images/MainLogo-Fibope-Cropped-removebg-preview.png",
  },
  {
    mainProductFoto: "https://via.placeholder.com/150",
    nameProduct: "B-Nat® O",
    companyLogo: "images/Logo-Bollore-Films-COULEUR.png",
  },
  {
    mainProductFoto: "https://via.placeholder.com/150",
    nameProduct: "BRi",
    companyLogo: "images/images/Logo-Bollore-Films-COULEUR.png",
  },
  {
    mainProductFoto: "https://via.placeholder.com/150",
    nameProduct: "BTT +90 - 125",
    companyLogo: "images/Logo-Bollore-Films-COULEUR.png",
  },
  {
    mainProductFoto: "https://via.placeholder.com/150",
    nameProduct: "BTTX 110",
    companyLogo: "Logo-Bollore-Films-COULEUR.png",
  },
  {
    mainProductFoto: "https://via.placeholder.com/150",
    nameProduct: "BTTXF 130",
    companyLogo: "images/Logo-Bollore-Films-COULEUR.png",
  },
  {
    mainProductFoto: "https://via.placeholder.com/150",
    nameProduct: "BZN",
    companyLogo: "images/Logo-Bollore-Films-COULEUR.png",
  },
  {
    mainProductFoto: "https://via.placeholder.com/150",
    nameProduct: "BRX",
    companyLogo: "images/Logo-Bollore-Films-COULEUR.png",
  },
  {
    mainProductFoto: "https://via.placeholder.com/150",
    nameProduct: "BY",
    companyLogo: "images/Logo-Bollore-Films-COULEUR.png",
  },
  {
    mainProductFoto: "https://via.placeholder.com/150",
    nameProduct: "BRN",
    companyLogo: "images/Logo-Bollore-Films-COULEUR.png",
  },
  {
    mainProductFoto: "https://via.placeholder.com/150",
    nameProduct: "BXS",
    companyLogo: "images/Logo-Bollore-Films-COULEUR.png",
  },
  {
    mainProductFoto: "https://via.placeholder.com/150",
    nameProduct: "BXX",
    companyLogo: "images/Logo-Bollore-Films-COULEUR.png",
  },
  {
    mainProductFoto: "https://via.placeholder.com/150",
    nameProduct: "BE-C",
    companyLogo: "images/Logo-Bollore-Films-COULEUR.png",
  },
  {
    mainProductFoto: "https://via.placeholder.com/150",
    nameProduct: "PC-Standard",
    companyLogo: "images/PCSTANDARD.png",
  },
];

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainPage />
      <Cards />

      <AboutUs1 />
      <ProductCarousel />
    </div>
  );
}

function Navbar() {
  return (
    <>
      <div className="container-navbar">
        <div>
          <img src="images/logo.png" alt="logo_firmy" />
        </div>
        <div className="menu">
          <a href="#">Strona główna </a>
          <div class="dropdown">
            <a href="#">Produkty</a>

            <div class="dropdown-menu">
              <div className="container-dropdown">
                <a href="#">AF Anti-Fog</a>
                <img
                  src="images/MainLogo-Fibope-Cropped-removebg-preview.png"
                  alt="logof"
                />
              </div>
              <div className="container-dropdown">
                <a href="#">BC Hot Needle-CF</a>
                <img
                  src="images/MainLogo-Fibope-Cropped-removebg-preview.png"
                  alt="logof"
                />
              </div>
              <div className="container-dropdown">
                <a href="#">BF Hot Needle-SW</a>
                <img
                  src="images/MainLogo-Fibope-Cropped-removebg-preview.png"
                  alt="logof"
                />
              </div>
              <div className="container-dropdown">
                <a href="#">BioB Bio Based</a>
                <img
                  src="images/MainLogo-Fibope-Cropped-removebg-preview.png"
                  alt="logof"
                />
              </div>
              <div className="container-dropdown">
                <a href="#">BP High Speed</a>
                <img
                  src="images/MainLogo-Fibope-Cropped-removebg-preview.png"
                  alt="logof"
                />
              </div>
              <div className="container-dropdown">
                <a href="#">FP 26 Performance Shrink Film</a>
                <img
                  src="images/MainLogo-Fibope-Cropped-removebg-preview.png"
                  alt="logof"
                />
              </div>
              <div className="container-dropdown">
                <a href="#">HG High Gauge</a>
                <img
                  src="images/MainLogo-Fibope-Cropped-removebg-preview.png"
                  alt="logof"
                />
              </div>
              <div className="container-dropdown">
                <a href="#">LSF Low Shrink Force</a>
                <img
                  src="images/MainLogo-Fibope-Cropped-removebg-preview.png"
                  alt="logof"
                />
              </div>
              <div className="container-dropdown">
                <a href="#">LTG Light Gauge</a>
                <img
                  src="images/MainLogo-Fibope-Cropped-removebg-preview.png"
                  alt="logof"
                />
              </div>
              <div className="container-dropdown">
                <a href="#">LSF Low Shrink Force</a>
                <img
                  src="images/MainLogo-Fibope-Cropped-removebg-preview.png"
                  alt="logof"
                />
              </div>
              <div className="container-dropdown">
                <a href="#">MP Mono Polyethylene</a>
                <img
                  src="images/MainLogo-Fibope-Cropped-removebg-preview.png"
                  alt="logof"
                />
              </div>
              <div className="container-dropdown">
                <a href="#">PL Crosslinking Shrink Film</a>
                <img
                  src="images/MainLogo-Fibope-Cropped-removebg-preview.png"
                  alt="logof"
                />
              </div>
              <div className="container-dropdown">
                <a href="#">QSL Quick Shrink Film</a>
                <img
                  src="images/MainLogo-Fibope-Cropped-removebg-preview.png"
                  alt="logof"
                />
              </div>
            </div>
          </div>
          <a href="#">O Nas</a>
          <a href="#">Kontakt</a>
        </div>
      </div>
    </>
  );
}

function MainPage() {
  return (
    <>
      <div className="container-main-page">
        <div className="main-page">
          <div
            className="main-card"
            style={{
              backgroundImage: "url(images/bgl.png)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "100%", // Upewnij się, że szerokość jest 100%
              height: "100%",
            }}
          >
            <div className="first">
              <div className="main-text">
                <h1>Od 20 lat owijamy sukces.</h1>
                <h2>
                  <span id="bold-text">Twoje opakowania</span>, nasza pasja.
                </h2>
                <div className="container-button">
                  <button id="button">Poznaj naszą ofertę</button>
                  <button id="button-text"> Dowiedz się więcej</button>
                </div>
                <div class="statistics-container">
                  <div class="stat-item">
                    <h3>30+</h3>
                    <p>Rodzajów produktów</p>
                  </div>
                  <div class="stat-item">
                    <h3>20+</h3>
                    <p>Doświadczenia w branży</p>
                  </div>
                  <div class="stat-item">
                    <h3>3</h3>
                    <p>Marki folii</p>
                  </div>
                  <div class="stat-item">
                    <h3>100%</h3>
                    <p>Precyzji i dbałości o szczegóły</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="second"></div>
          </div>
        </div>
        <div className="map">
          <img src="images/map.png"></img>
        </div>
      </div>
    </>
  );
}

function Cards() {
  return (
    <div class="cards">
      <div class="card red">
        <img src="images/odznaka.svg" alt="odznaka" className="logo-ikona" />
        <p class="tip">Najwyższa jakość</p>
        <p class="second-text">
          Dostarczamy sprawdzone produkty i usługi, które spełniają najwyższe
          standardy branżowe.
        </p>
      </div>
      <div class="card blue">
        <img src="images/zarowka.svg" alt="zarowka" className="logo-ikona" />
        <p class="tip">Innowacyjne rozwiązania</p>
        <p class="second-text">
          Stale rozwijamy naszą ofertę, wdrażając nowoczesne technologie, które
          odpowiadają na zmieniające się potrzeby rynku.
        </p>
      </div>
      <div class="card green">
        <img src="images/person.svg" alt="person" className="logo-ikona" />
        <p class="tip">Fachowa obsługa</p>
        <p class="second-text">
          Nasz zespół ekspertów zapewnia indywidualne podejście i kompleksowe
          wsparcie na każdym etapie współpracy.
        </p>
      </div>
    </div>
  );
}

function ProductCarousel() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="carousel-container">
      <div className="carousel">
        <h2>Nasze Produkty</h2>
        <Slider {...settings}>
          <div className="box">
            <div className="carousel-card">
              <div className="carousel-card-image">
                <img src="images/AFk.jpg" alt="AF" />
                <div class="logo-container">
                  <img
                    src="images/MainLogo-Fibope-Cropped-removebg-preview.png"
                    alt="Logo firmy"
                  />
                </div>
              </div>
              <div className="carousel-main-name">
                AF <span id="text-italic">Anti-Fog</span>
              </div>
              <div className="carousel-card-heading">
                Folia termokurczliwa o wysokim połysku i bardzo skutecznej
                ochronie przeciwmgielnej. Wydajna przy grubości 11 mikronów.
                Łatwa w użyciu na liniach pakujących typu flow-pack i L-sealer.
                Charakteryzuje się dobrym skurczem.
              </div>
              <button id="carousel-card-button">Dowiedz się więcej</button>
            </div>
          </div>

          <div className="box">
            <div className="carousel-card">
              <div className="carousel-card-image">
                <img src="images/AFk.jpg" alt="AF" />
                <div class="logo-container">
                  <img
                    src="images/MainLogo-Fibope-Cropped-removebg-preview.png"
                    alt="Logo firmy"
                  />
                </div>
              </div>
              <div className="carousel-main-name">
                AF <span id="text-italic">Anti-Fog</span>
              </div>
              <div className="carousel-card-heading">
                Folia termokurczliwa o wysokim połysku i bardzo skutecznej
                ochronie przeciwmgielnej. Wydajna przy grubości 11 mikronów.
                Łatwa w użyciu na liniach pakujących typu flow-pack i L-sealer.
                Charakteryzuje się dobrym skurczem.
              </div>
              <button id="carousel-card-button">Dowiedz się więcej</button>
            </div>
          </div>
          <div className="box">
            <div className="carousel-card">
              <div className="carousel-card-image">
                <img src="images/AFk.jpg" alt="AF" />
                <div class="logo-container">
                  <img
                    src="images/MainLogo-Fibope-Cropped-removebg-preview.png"
                    alt="Logo firmy"
                  />
                </div>
              </div>
              <div className="carousel-main-name">
                AF <span id="text-italic">Anti-Fog</span>
              </div>
              <div className="carousel-card-heading">
                Folia termokurczliwa o wysokim połysku i bardzo skutecznej
                ochronie przeciwmgielnej. Wydajna przy grubości 11 mikronów.
                Łatwa w użyciu na liniach pakujących typu flow-pack i L-sealer.
                Charakteryzuje się dobrym skurczem.
              </div>
              <button id="carousel-card-button">Dowiedz się więcej</button>
            </div>
          </div>
          <div className="box">
            <div className="carousel-card">
              <div className="carousel-card-image">
                <img src="images/AFk.jpg" alt="AF" />
                <div class="logo-container">
                  <img
                    src="images/MainLogo-Fibope-Cropped-removebg-preview.png"
                    alt="Logo firmy"
                  />
                </div>
              </div>
              <div className="carousel-main-name">
                AF <span id="text-italic">Anti-Fog</span>
              </div>
              <div className="carousel-card-heading">
                Folia termokurczliwa o wysokim połysku i bardzo skutecznej
                ochronie przeciwmgielnej. Wydajna przy grubości 11 mikronów.
                Łatwa w użyciu na liniach pakujących typu flow-pack i L-sealer.
                Charakteryzuje się dobrym skurczem.
              </div>
              <button id="carousel-card-button">Dowiedz się więcej</button>
            </div>
          </div>
          <div className="box">
            <div className="carousel-card">
              <div className="carousel-card-image">
                <img src="images/AFk.jpg" alt="AF" />
                <div class="logo-container">
                  <img
                    src="images/MainLogo-Fibope-Cropped-removebg-preview.png"
                    alt="Logo firmy"
                  />
                </div>
              </div>
              <div className="carousel-main-name">
                AF <span id="text-italic">Anti-Fog</span>
              </div>
              <div className="carousel-card-heading">
                Folia termokurczliwa o wysokim połysku i bardzo skutecznej
                ochronie przeciwmgielnej. Wydajna przy grubości 11 mikronów.
                Łatwa w użyciu na liniach pakujących typu flow-pack i L-sealer.
                Charakteryzuje się dobrym skurczem.
              </div>
              <button id="carousel-card-button">Dowiedz się więcej</button>
            </div>
          </div>
          <div className="box">
            <h3>1</h3>
          </div>
          <div className="box">
            <h3>2</h3>
          </div>
          <div className="box">
            <h3>3</h3>
          </div>
          <div className="box">
            <h3>4</h3>
          </div>
          <div className="box">
            <h3>5</h3>
          </div>
        </Slider>
      </div>
    </div>
  );
}

function AboutUs1() {
  return (
    <>
      <div>
        <div>
          <div className="container-about-us">
            <div className="about-us">
              <h4>PackComplex</h4>
              <h1>Dlaczego warto nam zaufać?</h1>
              <p id="description-big">
                Jako firma z 20-letnim doświadczeniem na rynku, specjalizujemy
                się w dostarczaniu kompleksowych rozwiązań opakowaniowych.
                Zajmujemy się dystrybucją folii termokurczliwej, która odpowiada
                na potrzeby różnych branż. Nasza wiedza, zaangażowanie i
                indywidualne podejście do klienta sprawiają, że jesteśmy
                wiarygodnym partnerem w każdym projekcie. Wierzymy, że
                solidność, innowacyjność i wysoka jakość to fundamenty naszego
                sukcesu.
              </p>
            </div>
          </div>
          <div className="container-about-us-description">
            <div className="parent">
              <div className="column-one">
                <div className="section">
                  <div className="section-header">
                    <img
                      src="images/kadra2.svg"
                      alt="Opis obrazka 1"
                      className="section-img"
                    />
                    <h3 className="section-title">
                      Wysoko wykwalifikowana kadra
                    </h3>
                  </div>
                  <p className="section-description">
                    Profesjonalna kadra zapewnia klientom kompleksowe wsparcie,
                    oferując fachowe doradztwo oraz najwyższą jakość
                    świadczonych usług na każdym etapie współpracy.
                  </p>
                </div>
                <div className="section">
                  <div className="section-header">
                    <img
                      src="images/cart2.svg"
                      alt="Opis obrazka 2"
                      className="section-img"
                    />
                    <h3 className="section-title">Szeroka oferta produktów</h3>
                  </div>
                  <p className="section-description">
                    Nasza szeroka oferta produktów obejmuje różnorodne
                    rozwiązania, które spełniają potrzeby różnych branż,
                    zapewniając kompleksowe wsparcie w zakresie folii
                    termokurczliwej.
                  </p>
                </div>
                <div className="section">
                  <div className="section-header">
                    <img
                      src="images/knowledge.svg"
                      alt="Opis obrazka 3"
                      className="section-img"
                    />
                    <h3 className="section-title">
                      Wieloletnie doświadczenie w branży opakowań
                    </h3>
                  </div>
                  <p className="section-description">
                    Dzięki 20-letniemu doświadczeniu , nasza firma oferuje
                    niezrównaną wiedzę i profesjonalizm, zapewniając rozwiązania
                    dopasowane do potrzeb każdego klienta. .
                  </p>
                </div>
              </div>

              <div className="column-two">
                <img src="images/Rectangle1.png"></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
