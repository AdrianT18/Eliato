import { useNavigate } from "react-router-dom";
import Eliato from "./assets/bottl.png";
import leaves from "./assets/leaves.png";
import leaves2 from "./assets/img.png";
import basket from "./assets/basket.png";
import Reviews from "./MainPageComponent/reviews.jsx";
import Footer from "./Footer.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLandmark, faTree, faCrown } from "@fortawesome/free-solid-svg-icons";

const MainPage = () => {
  const navigate = useNavigate();

  const navigateToProduct = () => {
    navigate("/product");
  };

  return (
    <div>
      <div className="relative mx-auto bg-primary font-taviraj overflow-hidden">
        <style>
          {`
        @media (max-width: 768px) {
            .responsive-background {
                background-position: center !important;
            }
        }
        `}
        </style>

        <div
          className="relative h-screen flex items-center justify-center responsive-background overflow-hidden"
          style={{
            backgroundImage: `url(${leaves2})`,
            backgroundSize: "auto 100%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "left",
          }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between w-4/5">
            <div className="p-5 sm:p-10 text-white text-center sm:text-left">
              <h1 className="text-4xl sm:text-5xl md:text-8xl font-bold">
                eliato
              </h1>
              <h2 className="text-2xl sm:text-3xl md:text-5xl mt-1 font-semibold">
                Extra Virgin Olive Oil
              </h2>
              <h3 className="text-xl sm:text-2xl md:text-5xl mt-1 font-semibold">
                From Kritsa, Crete, Greece
              </h3>
              <p className="text-sm sm:text-lg md:text-2xl mt-2">
                Cold pressed, purest, monocultivar olive oil; manufactured from
                one type of Koroneiki olives.
              </p>
              <button
                onClick={navigateToProduct}
                className="mt-4 sm:mt-2 bg-custom-cream text-custom-btn-green font-bold py-2 px-4 rounded"
              >
                Buy Now
              </button>
            </div>
            <div className="mt-8 md:mt-0">
              <img
                src={Eliato}
                alt="Eliato Extra Virgin Organic Olive Oil"
                className="hidden md:block w-full max-h-80 sm:max-h-80 lg:max-h-650"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-16 overflow-hidden">
          <div className="flex flex-col md:flex-row items-center w-full sm:w-full md:w-3/4 lg:w-2/3 xl:w-9/12">
            <div className="p-6 text-white mx-auto w-full sm:w-full">
              <div className="flex flex-col md:flex-row items-center w-full sm:w-full">
                <div className="flex justify-center order-2 md:order-1 mt-4 md:mt-0 md:mr-4 w-full sm:w-full md:w-2/5 lg:w-1/3">
                  <img
                    src={Eliato}
                    alt="Eliato Extra Virgin Organic Olive Oil"
                    className="block w-auto max-h-72 sm:max-h-60 lg:max-h-400"
                  />
                </div>
                <div className="order-1 md:order-2 p-3 sm:p-6 text-white text-center sm:text-left w-full sm:w-full md:w-3/5 lg:w-2/3">
                  <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-3xl font-bold max-w-xl">
                    Eliato - Greek 0.3% Extra Virgin Organic Olive Oil
                  </h1>
                  <p className="text-lg sm:text-md md:text-xl mt-2 sm:mt-2">
                    Crafted from the finest olives from historic Kritsa Valley
                  </p>
                  <ul className="list-none mt-2 space-y-2 text-lg sm:text-xl md:text-xl font-normal">
                    <li>
                      <i className="fas fa-leaf"></i> Cold extracted at
                      exceptionally low temperatures within few hours after
                      harvest at the local cooperative olive oil mill situated
                      on top of the valley in Kritsa
                    </li>
                    <li>
                      <i className="fas fa-landmark"></i> Extremely low acidity
                      for top-tier quality
                    </li>
                    <li>
                      <i className="fas fa-trophy"></i> Battery and Persistent
                      Peppery Taste
                    </li>
                    <li>
                      <i className="fas fa-apple-alt"></i> Packed with Vitamins,
                      Antioxidants, and Omega Fatty Acids
                    </li>
                  </ul>
                  <div className="flex flex-row justify-between items-center sm:flex-row sm:justify-between sm:items-center mt-4">
                    <p className="text-xl md:text-xl">From £12.80</p>
                    <button
                      onClick={navigateToProduct}
                      className="bg-white text-green-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors duration-300 sm:mt-0"
                    >
                      VIEW OPTIONS
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Reviews />
        <div className="bg-gray-50 text-gray-800 py-16 px-8 sm:px-12 md:px-20 lg:px-32">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-14">
            Our Heritage and Craft
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-10 bg-white rounded-lg shadow-lg transform transition-transform duration-300 ease-out delay-100 hover:-translate-y-2">
              <div className="flex justify-center w-full mb-4">
                <FontAwesomeIcon
                  icon={faLandmark}
                  className="text-5xl text-green-600"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-2">Ancient Origins</h3>
              <p className="text-lg leading-relaxed">
                Olive oil has been introduced to the world by the ancient Minoan
                civilization, which ruled Crete over 5,000 years ago. They
                believed that olive oil brings longevity and strength, calling
                it the "fountain of youth”. Later on, Homer named olive oil as
                “liquid gold”.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-10 bg-white rounded-lg shadow-lg transform transition-transform duration-300 ease-out delay-200 hover:-translate-y-2 mt-12 md:mt-0">
              <div className="flex justify-center w-full mb-4">
                <FontAwesomeIcon
                  icon={faTree}
                  className="text-5xl text-green-600"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-2">
                Sustainable Cultivation
              </h3>
              <p className="text-lg leading-relaxed">
                ELIATO comes from a 300-year-old olive grove, "Tom's Olive
                Garden," situated in the beautiful surroundings of Mirabello Bay
                in Crete. We follow the traditional way of sustainable
                cultivation; we do not use any chemical fertilizers or
                pesticides at any stage of production.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-10 bg-white rounded-lg shadow-lg transform transition-transform duration-300 ease-out delay-300 hover:-translate-y-2 mt-12 md:mt-0">
              <div className="flex justify-center w-full mb-4">
                <FontAwesomeIcon
                  icon={faCrown}
                  className="text-5xl text-green-600"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-2">Exquisite Quality</h3>
              <p className="text-lg leading-relaxed">
                We grow the Koroneiki olive, the ‘royal’ type, which is highly
                praised for its exquisite taste and texture. The trees are
                treated like family members, ensuring they are well cared for
                throughout the year. The olives are picked when fully matured
                and then cold extracted at exceptionally low temperatures within
                a few hours.
              </p>
            </div>
          </div>
          <div className="text-center mt-12">
            <p className="text-lg leading-relaxed">
              We make sure that the olive oil is extracted from OUR olives; that
              its purity and quality are preserved. Our local cooperative olive
              oil mill is situated on top of the valley in the oldest Cretan
              village - KRITSA.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MainPage;
