import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
const products = [
  {
    mainProductFoto: "images/AF.jpg",
    nameProduct: "AF",
    nameProduct2: "Anti-Fog",
    companyLogo: "images/MainLogo-Fibope-Cropped-removebg-preview.png",
    description:
      "Folia o wysokim połysku i skutecznej ochronie przeciwmgielnej, wydajna już przy 11 mikronach, łatwa w użyciu na liniach flow-pack i L-Sealer, z doskonałymi właściwościami obkurczania. Idealne rozwiązanie dla branży spożywczej i sektorów wymagających niezawodnej ochrony produktów.",
    link: "https://www.fibope.pt/wp-content/uploads/sites/11/2023/09/FIBOPE_AF.pdf",
  },
  {
    mainProductFoto: "images/bio.jpg",
    nameProduct: "MP",
    nameProduct2: "Mono Polyethylene",
    companyLogo: "images/MainLogo-Fibope-Cropped-removebg-preview.png",
    description:
      "Folia termokurczliwa Exlfilm eco®MP zapewnia krótkie czasy obkurczania, maksymalizując wydajność produkcji, a dzięki mocnym zgrzewom i wysokiej wytrzymałości skutecznie chroni produkty podczas szybkiego pakowania i transportu.",
    link: "",
  },

  {
    mainProductFoto: "images/BC_Donut.jpg",
    nameProduct: "BC",
    nameProduct2: "Hot Needle CF",
    companyLogo: "images/MainLogo-Fibope-Cropped-removebg-preview.png",
    description:
      "Exlfilm fresh®BC to mikroperforowana folia termokurczliwa o wysokim stopniu obkurczania, idealna do automatycznych linii pakujących, zapewniająca optymalną wymianę gazową i doskonałą jakość produktu, szczególnie w branży piekarniczej.",
    link: "https://www.fibope.pt/wp-content/uploads/sites/11/2023/09/FIBOPE_BC.pdf",
  },
  {
    mainProductFoto: "images/bread.jpg",
    nameProduct: "BF",
    nameProduct2: "Hot Needle SW",
    companyLogo: "images/MainLogo-Fibope-Cropped-removebg-preview.png",
    description:
      "Folia termokurczliwa do szybkich maszyn pakujących, idealna dla branży piekarniczej.Dzięki mikroperforacji zapewnia optymalną wymianę gazową, co pozwala zachować wysoką jakość produktów, a różne wzory perforacji dostosowują się do potrzeb produktu.",
    link: "https://www.fibope.pt/wp-content/uploads/sites/11/2023/09/FIBOPE_BF.pdf",
  },
  {
    mainProductFoto: "images/bio.jpg",
    nameProduct: "BioB",
    nameProduct2: "Bio Based",
    companyLogo: "images/MainLogo-Fibope-Cropped-removebg-preview.png",
    description:
      "Folia termokurczliwa Exlfilm eco®BioB pozwala przyspieszyć proces pakowania, zwiększając wydajność produkcji. Zapewnia też solidną ochronę produktów dzięki swojej wytrzymałości i mocnym zgrzewom.",
    link: "",
  },
  {
    mainProductFoto: "images/BP_Pizza.jpg",
    nameProduct: "BP",
    nameProduct2: "High Speed",
    companyLogo: "images/MainLogo-Fibope-Cropped-removebg-preview.png",
    description:
      "Folia termokurczliwa zaprojektowana z myślą o szybkich maszynach pakujących, idealna do mrożonej żywności. Gwarantuje nie tylko doskonałą ochronę produktów, ale także zapewnia atrakcyjny wygląd opakowania, podkreślając walory wizualne.",
    link: "https://www.fibope.pt/wp-content/uploads/sites/11/2023/09/FIBOPE_BP.pdf",
  },

  {
    mainProductFoto: "images/FP26-Main_High.jpg",
    nameProduct: "FP26",
    nameProduct2: "Performance Shrink Film",
    companyLogo: "images/MainLogo-Fibope-Cropped-removebg-preview.png",
    description:
      "Folia o wysokiej prędkości z krótkimi czasami obkurczania, co zwiększa wydajność produkcji. Oferuje doskonałą wytrzymałość, odporność na rozerwania i wysoką jakość zgrzewów. Idealna do branż takich jak farmaceutyki, przemysł papierniczy i mrożone produkty.",
    link: "https://www.fibope.pt/wp-content/uploads/sites/11/2023/09/FIBOPE_FP26.pdf",
  },
  {
    mainProductFoto: "images/QSL-Main_High.jpg",
    nameProduct: "QSL",
    nameProduct2: "Quick Shrink Film",
    companyLogo: "images/MainLogo-Fibope-Cropped-removebg-preview.png",
    description:
      "Szybkoschnąca folia termokurczliwa o wyjątkowo wysokim współczynniku kurczenia, zapewniająca doskonały efekt 'bez zmarszczeń'. Doskonale sprawdza się w przypadku najbardziej wymagających produktów, od kalendarzy po pudełka czekoladek.",
    link: "https://www.fibope.pt/wp-content/uploads/sites/11/2023/09/FIBOPE_QSL.pdf",
  },
  {
    mainProductFoto: "images/HG-Main_High.jpg",
    nameProduct: "HG",
    nameProduct2: "High Gauge",
    companyLogo: "images/MainLogo-Fibope-Cropped-removebg-preview.png",
    description:
      "Folia termokurczliwa, zapewniająca wysoką wydajność produkcji dzięki krótkim czasom uszczelniania. Charakteryzuje się dużą wytrzymałością, odpornością na rozdarcia oraz doskonałymi właściwościami optycznymi.",
    link: "https://www.fibope.pt/wp-content/uploads/sites/11/2023/09/FIBOPE_HG.pdf",
  },
  {
    mainProductFoto: "images/LTG-Main_High.jpg",
    nameProduct: "LSF",
    nameProduct2: "Low Shrink Force",
    companyLogo: "images/MainLogo-Fibope-Cropped-removebg-preview.png",
    description:
      "Folia posiada niską siłę kurczenia, co sprawia, że delikatne produkty zachowują swój kształt. Dzięki niższej temperaturze kurczenia, jest idealnym rozwiązaniem dla produktów wymagających łagodnego procesu pakowania i folii z bardzo wysoką odpornością na uszkodzenia.",

    link: "https://www.fibope.pt/wp-content/uploads/sites/11/2023/09/FIBOPE_LSF.pdf",
  },
  {
    mainProductFoto: "images/LTG-Main_High.jpg",
    nameProduct: "LTG",
    nameProduct2: "Light Gauge",
    companyLogo: "images/MainLogo-Fibope-Cropped-removebg-preview.png",
    description:
      "Główne cechy to niska grubość, wyższa wytrzymałość na rozciąganie oraz dłuższa długość rolki, co zmniejsza przestoje maszyn. Dzięki temu poprawia się wydajność i oszczędność kosztów, a także wymaga mniej miejsca do przechowywania.",
    link: "https://www.fibope.pt/wp-content/uploads/sites/11/2023/09/FIBOPE_LTG.pdf",
  },
  {
    mainProductFoto: "images/PL.png",
    nameProduct: "PL",
    nameProduct2: "Crosslinking Shrink Film",
    companyLogo: "images/MainLogo-Fibope-Cropped-removebg-preview.png",
    description:
      "Wysoka wytrzymałość na rozciąganie, doskonała odporność na przebicia, zapewnia bardzo mocne uszczelnienie, jest wszechstronna i może być używana w różnych zastosowaniach, a także charakteryzuje się odpornością na poślizg w wysokich temperaturach.",
    link: "https://www.fibope.pt/wp-content/uploads/sites/11/2023/09/FIBOPE_LSF.pdf",
  },
  {
    mainProductFoto: "images/1B.png",
    nameProduct: "B-Nat® O",
    companyLogo: "images/Logo-Bollore-Films-COULEUR.png",
    description:
      "B-Nat® O to ultracienka folia opakowaniowa z zielonego polietylenu, w którym ponad 40% pochodzi z etanolu z trzciny cukrowej, co zmniejsza ślad węglowy. Jest recyklingowalna, zapewnia doskonałą prezentację półkową oraz wysoką spójność, idealna do multipakowania i maszyn wysokiej prędkości.",
    link: "https://www.bollorefilms.com/wp-content/uploads/2020/09/UK_Bolphane-R3_BNAT-O_2020-09.pdf",
  },
  {
    mainProductFoto: "images/bri.png",
    nameProduct: "BRi",
    companyLogo: "images/Logo-Bollore-Films-COULEUR.png",
    description:
      "Folia charakteryzuje się wysoką siłą spójności, jest bardzo cienka, co sprzyja oszczędnościom zasobów. Ponadto jest recyklingowalna i doskonale nadaje się do pakowania zarówno produktów przemysłowych, jak i konsumpcyjnych.",
    link: "https://www.bollorefilms.com/wp-content/uploads/2022/09/Bolphane-R3-BRi_V2021-07_uk.pdf",
  },
  {
    mainProductFoto: "images/BTT.png",
    nameProduct: "BTT +90 - 125",
    companyLogo: "images/Logo-Bollore-Films-COULEUR.png",
    description:
      "Folia charakteryzuje się doskonałą kurczliwością oraz szybkim uszczelnianiem przy niskiej temperaturze. Posiada właściwości zmniejszające tarcie (hot slip). Zwiększona sztywność optymalizuje jej przejście przez maszyny o wysokiej prędkości, a poprawiona jakość optyczna zapewnia doskonałą prezentację na półce.",
    link: "https://www.bollorefilms.com/wp-content/uploads/2020/09/UK_Bolphane-R3_BTT_2020-09.pdf",
  },
  {
    mainProductFoto: "images/110.png",
    nameProduct: "BTTX 110",
    companyLogo: "images/Logo-Bollore-Films-COULEUR.png",
    description:
      "Folia oferuje szerokie okno robocze, umożliwiając jej użycie na szerokiej gamie urządzeń. Posiada te same właściwości mechaniczne co tradycyjna folia 15µm, a jej wyjątkowa odporność na uderzenia, wysoka siła uszczelniania i doskonała siła spójności zapewniają jej niezawodność w różnych zastosowaniach.",
    link: "https://www.bollorefilms.com/wp-content/uploads/2020/09/UK_Bolphane-R3_BTTX110_2020-09.pdf",
  },
  {
    mainProductFoto: "images/130.png",
    nameProduct: "BTTXF 130",
    companyLogo: "images/Logo-Bollore-Films-COULEUR.png",
    description:
      "Folia charakteryzuje się niską siłą kurczenia, co zapobiega zniekształceniu elastycznych produktów oraz wysokim procentem wolnego kurczenia przy niskiej temperaturze. Jest także odporna na rozdarcia i rozciąganie, a jej szerokie okno robocze sprawia, że może być stosowana w różnych urządzeniach.",
    link: "https://www.bollorefilms.com/wp-content/uploads/2020/09/UK_Bolphane-R3_BTTXF130_2020-09.pdf",
  },
  {
    mainProductFoto: "images/BZN.png",
    nameProduct: "BZN",
    companyLogo: "images/Logo-Bollore-Films-COULEUR.png",
    description:
      "Folia cechuje się wyjątkową wytrzymałością i odpornością na przebicia, a jej szerokie okno robocze umożliwia stosowanie na różnych urządzeniach. Zapewnia również mocne uszczelnienia w różnych warunkach przetwarzania.",
    link: "https://www.bollorefilms.com/wp-content/uploads/2020/09/UK_Bolphane-R3_BZN_2020-09.pdf",
  },
  {
    mainProductFoto: "images/BRX.png",
    nameProduct: "BRX",
    companyLogo: "images/Logo-Bollore-Films-COULEUR.png",
    description:
      "Niska siła kurczenia eliminuje odkształcenia cienkich produktów, a folia jest usieciowana dla zwiększenia wytrzymałości i twardości. Charakteryzuje się szerokim zakresem roboczym na większości urządzeń uszczelniających, idealnie nadaje się do produktów o nieregularnym kształcie lub ostrych krawędziach.",
    link: "https://www.bollorefilms.com/wp-content/uploads/2020/09/UK_Bolphane-R3_BRX_2020-09.pdf",
  },
  {
    mainProductFoto: "images/BY.png",
    nameProduct: "BY",
    companyLogo: "images/Logo-Bollore-Films-COULEUR.png",
    description:
      "Szybkie uszczelnianie i efektywność w trakcie podgrzewania, właściwości 'hot slip' po kurczeniu. Optymalna wydajność i produktywność przy wyjątkowym uzysku, niskie temperatury oraz mniejsze zużycie energii przy wysokim stopniu kurczenia.",
    link: "https://www.bollorefilms.com/wp-content/uploads/2020/09/UK_Bolphane-R3_BY_2020-09.pdf",
  },
  {
    mainProductFoto: "images/BRN.png",
    nameProduct: "BRN",
    companyLogo: "images/Logo-Bollore-Films-COULEUR.png",
    description:
      "Ultracienka folia BO-PE na bazie bi-orientowanego polietylenu (BO-PE) przeznaczona do pakowania delikatnych produktów, takich jak artykuły papiernicze i tekstylia. Przy wysokiej prędkości przetwarzania zapewnia wydajność i kontrolę skurczu w szerszym zakresie temperatur niż tradycyjne folie termokurczliwe.",
    link: "https://www.bollorefilms.com/wp-content/uploads/2020/09/UK_Bolphane-R3_BRN_2020-09.pdf",
  },
  {
    mainProductFoto: "images/BX.png",
    nameProduct: "BXS",
    companyLogo: "images/Logo-Bollore-Films-COULEUR.png",
    description:
      "Folia oferuje wysoką wytrzymałość spójności, co czyni ją idealną do zastosowań multipack, oraz dużą sztywność dla optymalnej wydajności maszyn. Została zaprojektowana do współpracy z maszynami do uszczelniania z jonizacją, zapewniając wyjątkową jakość optyczną.",
    link: "https://www.bollorefilms.com/wp-content/uploads/2020/09/UK_Bolphane-R3_BX_2020-09.pdf",
  },
  {
    mainProductFoto: "images/BXX.png",
    nameProduct: "BXX",
    companyLogo: "images/Logo-Bollore-Films-COULEUR.png",
    description:
      "Folia specjalnie dedykowana do uszczelniania elektrostatycznego, charakteryzująca się wyjątkową płaskością, sztywnością i właściwościami antypoślizgowymi, co zapewnia wysoką wydajność maszyn. Oferuje także doskonałe właściwości optyczne.",
    link: "https://www.bollorefilms.com/wp-content/uploads/2020/09/UK_Bolphane-R3_BXX_2020-09.pdf",
  },
  {
    mainProductFoto: "images/BEC.png",
    nameProduct: "BE-C",
    companyLogo: "images/Logo-Bollore-Films-COULEUR.png",
    description:
      "Folia charakteryzuje się wszechstronnością, zoptymalizowaną wstępną perforacją, która umożliwia kontrolowane kurczenie się i łatwiejszą konfigurację. Posiada wysoką wytrzymałość spoiny oraz dobre właściwości optyczne.",
    link: "https://www.bollorefilms.com/wp-content/uploads/2020/09/UK_Bolphane-R3_BE_2020-09.pdf",
  },
  {
    mainProductFoto: "images/Rolki_PC.png",
    nameProduct: "PC Standard",
    companyLogo: "images/PCSTANDARD.png",
    description:
      "Mocna, pięciowarstwowa folia o wysokiej kurczliwości, doskonałej optyce i dużej wytrzymałości na rozciąganie. Nadaje się do zgrzewarek kątowych, maszyn automatycznych i typu flow-pack, zapewniając świetną zgrzewalność i trwałość zgrzewu.",
    link: "/docs/PC Standard_folia.pdf",
  },
  {
    mainProductFoto: "images/Rolki_PC.png",
    nameProduct: "PC EcoStandard",
    companyLogo: "images/PCSTANDARD.png",
    description:
      "PC EcoStandard to mocna, pięciowarstwowa folia POF o bardzo dobrej kurczliwości, właściwościach optycznych i wysokiej wytrzymałości na rozciąganie. Może być stosowana na ręcznych zgrzewarkach kątowych oraz szybkich maszynach automatycznych, a także na maszynach HFFS. ",
    link: "/docs/PC EcoStandard_folia.pdf",
  },
];

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainPage />
      <Cards />

      <AboutUs1 />
      <Line />

      <Form />
      <ProductCarousel />
      <Footer />
    </div>
  );
}

function Navbar() {
  function moveToProducts() {
    const productsSection = document.getElementById("products-section");
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: "smooth" });
    }
  }

  function moveToAboutUs() {
    const aboutUsSection = document.getElementById("container-about-us");
    if (aboutUsSection) {
      aboutUsSection.scrollIntoView({ behavior: "smooth" });
    }
  }
  function moveToContactUs() {
    const moveToContactUs = document.getElementById("form-main");
    if (moveToContactUs) {
      moveToContactUs.scrollIntoView({ behavior: "smooth" });
    }
  }
  return (
    <>
      <div className="container-navbar">
        <div>
          <img src="images/logo.png" alt="logo_firmy" />
        </div>
        <div className="menu">
          <a href="#">Strona główna </a>
          <div class="dropdown">
            <a href="#" onClick={moveToProducts}>
              Produkty
            </a>

            <div class="dropdown-menu">
              <div className="container-dropdown">
                <a
                  href="https://www.fibope.pt/wp-content/uploads/sites/11/2023/09/FIBOPE_AF.pdf"
                  target="blank"
                  rel="noopener noreferrer"
                >
                  AF Anti-Fog
                </a>
                <img
                  src="images/MainLogo-Fibope-Cropped-removebg-preview.png"
                  alt="logof"
                />
              </div>
              <div className="container-dropdown">
                <a
                  href="https://www.fibope.pt/wp-content/uploads/sites/11/2023/09/FIBOPE_BC.pdf"
                  target="blank"
                  rel="noopener noreferrer"
                >
                  BC Hot Needle-CF
                </a>
                <img
                  src="images/MainLogo-Fibope-Cropped-removebg-preview.png"
                  alt="logof"
                />
              </div>
              <div className="container-dropdown">
                <a
                  href="https://www.fibope.pt/wp-content/uploads/sites/11/2023/09/FIBOPE_BF.pdf"
                  target="blank"
                  rel="noopener noreferrer"
                >
                  BF Hot Needle-SW
                </a>
                <img
                  src="images/MainLogo-Fibope-Cropped-removebg-preview.png"
                  alt="logof"
                />
              </div>
              <div className="container-dropdown">
                <a href="#" target="blank" rel="noopener noreferrer">
                  BioB Bio Based
                </a>
                <img
                  src="images/MainLogo-Fibope-Cropped-removebg-preview.png"
                  alt="logof"
                />
              </div>
              <div className="container-dropdown">
                <a
                  href="https://www.fibope.pt/wp-content/uploads/sites/11/2023/09/FIBOPE_BP.pdf"
                  target="blank"
                  rel="noopener noreferrer"
                >
                  BP High Speed
                </a>
                <img
                  src="images/MainLogo-Fibope-Cropped-removebg-preview.png"
                  alt="logof"
                />
              </div>
              <div className="container-dropdown">
                <a
                  href="https://www.fibope.pt/wp-content/uploads/sites/11/2023/09/FIBOPE_FP26.pdf"
                  target="blank"
                  rel="noopener noreferrer"
                >
                  FP 26 Performance Shrink Film
                </a>
                <img
                  src="images/MainLogo-Fibope-Cropped-removebg-preview.png"
                  alt="logof"
                />
              </div>
              <div className="container-dropdown">
                <a
                  href="https://www.fibope.pt/wp-content/uploads/sites/11/2023/09/FIBOPE_HG.pdf"
                  target="blank"
                  rel="noopener noreferrer"
                >
                  HG High Gauge
                </a>
                <img
                  src="images/MainLogo-Fibope-Cropped-removebg-preview.png"
                  alt="logof"
                />
              </div>
              <div className="container-dropdown">
                <a
                  href="https://www.fibope.pt/wp-content/uploads/sites/11/2023/09/FIBOPE_LSF.pdf"
                  target="blank"
                  rel="noopener noreferrer"
                >
                  LSF Low Shrink Force
                </a>
                <img
                  src="images/MainLogo-Fibope-Cropped-removebg-preview.png"
                  alt="logof"
                />
              </div>
              <div className="container-dropdown">
                <a
                  href="https://www.fibope.pt/wp-content/uploads/sites/11/2023/09/FIBOPE_LTG.pdf"
                  target="blank"
                  rel="noopener noreferrer"
                >
                  LTG Light Gauge
                </a>
                <img
                  src="images/MainLogo-Fibope-Cropped-removebg-preview.png"
                  alt="logof"
                />
              </div>

              <div className="container-dropdown">
                <a href="#" target="blank" rel="noopener noreferrer">
                  MP Mono Polyethylene
                </a>
                <img
                  src="images/MainLogo-Fibope-Cropped-removebg-preview.png"
                  alt="logof"
                />
              </div>
              <div className="container-dropdown">
                <a
                  href="https://www.fibope.pt/wp-content/uploads/sites/11/2023/09/FIBOPE_LSF.pdf"
                  target="blank"
                  rel="noopener noreferrer"
                >
                  PL Crosslinking Shrink Film
                </a>
                <img
                  src="images/MainLogo-Fibope-Cropped-removebg-preview.png"
                  alt="logof"
                />
              </div>
              <div className="container-dropdown">
                <a
                  href="https://www.fibope.pt/wp-content/uploads/sites/11/2023/09/FIBOPE_QSL.pdf"
                  target="blank"
                  rel="noopener noreferrer"
                >
                  QSL Quick Shrink Film
                </a>
                <img
                  src="images/MainLogo-Fibope-Cropped-removebg-preview.png"
                  alt="logof"
                />
              </div>
              <div className="container-dropdown">
                <a
                  href="https://www.bollorefilms.com/wp-content/uploads/2020/09/UK_Bolphane-R3_BNAT-O_2020-09.pdf"
                  target="blank"
                  rel="noopener noreferrer"
                >
                  B-Nat® O
                </a>
                <img src="images/Logo-Bollore-Films-COULEUR.png" alt="logob" />
              </div>
              <div className="container-dropdown">
                <a
                  href="https://www.bollorefilms.com/wp-content/uploads/2022/09/Bolphane-R3-BRi_V2021-07_uk.pdf"
                  target="blank"
                  rel="noopener noreferrer"
                >
                  BRi
                </a>
                <img src="images/Logo-Bollore-Films-COULEUR.png" alt="logob" />
              </div>
              <div className="container-dropdown">
                <a
                  href="https://www.bollorefilms.com/wp-content/uploads/2020/09/UK_Bolphane-R3_BTT_2020-09.pdf"
                  target="blank"
                  rel="noopener noreferrer"
                >
                  BTT +90-125
                </a>
                <img src="images/Logo-Bollore-Films-COULEUR.png" alt="logob" />
              </div>
              <div className="container-dropdown">
                <a
                  href="https://www.bollorefilms.com/wp-content/uploads/2020/09/UK_Bolphane-R3_BTTX110_2020-09.pdf"
                  target="blank"
                  rel="noopener noreferrer"
                >
                  BTTX 110
                </a>
                <img src="images/Logo-Bollore-Films-COULEUR.png" alt="logob" />
              </div>
              <div className="container-dropdown">
                <a
                  href="https://www.bollorefilms.com/wp-content/uploads/2020/09/UK_Bolphane-R3_BTTXF130_2020-09.pdf"
                  target="blank"
                  rel="noopener noreferrer"
                >
                  BTTXF 130
                </a>
                <img src="images/Logo-Bollore-Films-COULEUR.png" alt="logob" />
              </div>
              <div className="container-dropdown">
                <a
                  href="https://www.bollorefilms.com/wp-content/uploads/2020/09/UK_Bolphane-R3_BZN_2020-09.pdf"
                  target="blank"
                  rel="noopener noreferrer"
                >
                  BZN
                </a>
                <img src="images/Logo-Bollore-Films-COULEUR.png" alt="logob" />
              </div>
              <div className="container-dropdown">
                <a
                  href="https://www.bollorefilms.com/wp-content/uploads/2020/09/UK_Bolphane-R3_BRX_2020-09.pdf"
                  target="blank"
                  rel="noopener noreferrer"
                >
                  BRX
                </a>
                <img src="images/Logo-Bollore-Films-COULEUR.png" alt="logob" />
              </div>
              <div className="container-dropdown">
                <a
                  href="https://www.bollorefilms.com/wp-content/uploads/2020/09/UK_Bolphane-R3_BY_2020-09.pdf"
                  target="blank"
                  rel="noopener noreferrer"
                >
                  BY
                </a>
                <img src="images/Logo-Bollore-Films-COULEUR.png" alt="logob" />
              </div>
              <div className="container-dropdown">
                <a
                  href="https://www.bollorefilms.com/wp-content/uploads/2020/09/UK_Bolphane-R3_BRN_2020-09.pdf"
                  target="blank"
                  rel="noopener noreferrer"
                >
                  BRN
                </a>
                <img src="images/Logo-Bollore-Films-COULEUR.png" alt="logob" />
              </div>
              <div className="container-dropdown">
                <a
                  href="https://www.bollorefilms.com/wp-content/uploads/2020/09/UK_Bolphane-R3_BX_2020-09.pdf"
                  target="blank"
                  rel="noopener noreferrer"
                >
                  BXS
                </a>
                <img src="images/Logo-Bollore-Films-COULEUR.png" alt="logob" />
              </div>
              <div className="container-dropdown">
                <a
                  href="https://www.bollorefilms.com/wp-content/uploads/2020/09/UK_Bolphane-R3_BXX_2020-09.pdf"
                  target="blank"
                  rel="noopener noreferrer"
                >
                  BXX
                </a>
                <img src="images/Logo-Bollore-Films-COULEUR.png" alt="logob" />
              </div>
              <div className="container-dropdown">
                <a
                  href="https://www.bollorefilms.com/wp-content/uploads/2020/09/UK_Bolphane-R3_BE_2020-09.pdf"
                  target="blank"
                  rel="noopener noreferrer"
                >
                  BE-C
                </a>
                <img src="images/Logo-Bollore-Films-COULEUR.png" alt="logob" />
              </div>
              <div className="container-dropdown">
                <a href="#" target="blank" rel="noopener noreferrer">
                  PC-Standard
                </a>
                <img src="images/logo.png" alt="logopc" id="logopc" />
              </div>
            </div>
          </div>
          <a href="#" onClick={moveToAboutUs}>
            O Nas
          </a>
          <a href="#" onClick={moveToContactUs}>
            Kontakt
          </a>
        </div>
      </div>
    </>
  );
}

function MainPage() {
  function moveToProducts() {
    const productsSection = document.getElementById("products-section");
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: "smooth" });
    }
  }
  return (
    <>
      <div className="container-main-page">
        <div className="main-page">
          <div
            className="main-card"
            style={{
              backgroundImage: "url(images/bglight.png)",
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
                  <button id="button" onClick={moveToProducts}>
                    Poznaj naszą ofertę
                  </button>
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
          <a
            href="https://www.google.pl/maps/place/Pack+Complex+Sp%C3%B3%C5%82ka+Jawna/@51.368085,21.1919035,17z/data=!3m1!4b1!4m6!3m5!1s0x47185e7eb71fb711:0xf9e67fee98374455!8m2!3d51.3680817!4d21.1944784!16s%2Fg%2F1w97t3_v?entry=ttu&g_ep=EgoyMDI1MDEyOS4xIKXMDSoASAFQAw%3D%3D"
            target="blank"
            rel="noopener noreferrer"
          >
            <img src="images/map.png"></img>
          </a>
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
    slidesToShow: 4,
    slidesToScroll: 4,
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

  const productsDetail = products;
  return (
    <div className="carousel-container" id="products-section">
      <div className="carousel">
        <h2>Nasze Produkty</h2>
        <Slider {...settings}>
          {products.map((product, index) => (
            <div className="box" key={index}>
              <div className="carousel-card">
                <div className="carousel-card-image">
                  <img
                    src={product.mainProductFoto}
                    alt={product.nameProduct}
                  />
                  <div class="logo-container">
                    <img src={product.companyLogo} alt="Logo firmy" />
                  </div>
                </div>
                <div className="carousel-main-name">
                  {product.nameProduct}{" "}
                  <span id="text-italic"> {product.nameProduct2}</span>
                </div>
                <div className="carousel-card-heading">
                  {product.description}
                </div>
                <button
                  id="carousel-card-button"
                  onClick={() => window.open(product.link, "_blank")}
                >
                  Więcej informacji
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

function Line() {
  return <div id="line"></div>;
}

function AboutUs1() {
  return (
    <>
      <div>
        <div>
          <div className="container-about-us" id="container-about-us">
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
              <div className="column-one" id="column-one">
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
                <img src="images/Rectangle1.png" alt="img1"></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function Form() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      email: email,
      message: message,
    };

    try {
      const response = await fetch("http://localhost:5000/send-mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.status === 200) {
        setStatus("Wiadomość została wysłana!");
        setEmail("");
        setMessage("");
      } else {
        const errorMessage = await response.text();
        setStatus(`Wystąpił błąd: ${errorMessage}`);
      }
    } catch (error) {
      setStatus("Wystąpił błąd sieciowy. Spróbuj ponownie.");
    }
  };

  return (
    <div className="form-main" id="form-main">
      <div className="left-section">
        <h2 className="left-section-title">Skontaktuj się z nami!</h2>
        <p className="left-section-description">
          Masz pytania lub potrzebujesz pomocy? Wypełnij formularz, a nasz
          zespół skontaktuje się z Tobą tak szybko, jak to możliwe.
        </p>
        <div className="left-section-content">
          <form onSubmit={handleSubmit}>
            <input
              className="small-box"
              placeholder="E-Mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <input
              className="large-box"
              placeholder="Wiadomość..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></input>

            <button
              className="form-button"
              type="submit"
              onClick={handleSubmit}
            >
              Wyślij
            </button>
          </form>
        </div>
      </div>

      <div className="separator-line"></div>

      <div className="right-section">
        <div className="image-box">
          <img src="images/PC_Foto.jpg" alt="PC1"></img>
        </div>
        <div className="text-content">
          <h1>Dane kontaktowe firmy</h1>
          <h5>Pack Complex Lachowski, Różański Spółka Komandytowa</h5>
          <p>Ul. Słowackiego 296 26-600 Radom </p>
          <p>NIP 9482610433 REGON 367309782</p>
          <p>tel/fax 048 363 00 43 </p>
          <p>e-mail: biuro@packcomplex.pl</p>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p>© 2025 PackComplex | Wszystkie prawa zastrzeżone</p>
    </footer>
  );
}

export default App;
