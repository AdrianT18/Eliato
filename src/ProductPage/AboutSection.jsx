import React from "react";

const AboutSection = () => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto px-6">
        {/* Introduction Section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-4">
            Discover the Essence of ELIATO
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-700">
            Experience the purity and tradition of Crete with our unfiltered,
            cold-pressed, premium extra virgin olive oil from the renowned
            Kritsa Valley.
          </p>
        </div>

        {/* Quality, Health, Sustainability, Versatile Section */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16">
          <div className="text-center bg-white p-8 rounded-lg shadow-md transition-transform duration-300 transform hover:-translate-y-2">
            <div className="mb-4">
              <span className="material-icons text-gray-800 text-6xl">
                verified
              </span>
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Superior Quality
            </h3>
            <p className="text-gray-700">
              Our olive oil boasts an exceptionally low acidity of 0.3%,
              guaranteeing a rich, smooth flavor with a robust aroma.
            </p>
          </div>
          <div className="text-center bg-white p-8 rounded-lg shadow-md transition-transform duration-300 transform hover:-translate-y-2">
            <div className="mb-4">
              <span className="material-icons text-gray-800 text-6xl">
                favorite
              </span>
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Health Benefits
            </h3>
            <p className="text-gray-700">
              Packed with antioxidants and vitamins A, D, E, and K, ELIATO
              promotes heart health, enhances the immune system, and supports
              overall well-being.
            </p>
          </div>
          <div className="text-center bg-white p-8 rounded-lg shadow-md transition-transform duration-300 transform hover:-translate-y-2">
            <div className="mb-4">
              <span className="material-icons text-gray-800 text-6xl">eco</span>
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Sustainable Practices
            </h3>
            <p className="text-gray-700">
              We adhere to traditional methods combined with modern sustainable
              practices, ensuring both quality and environmental stewardship.
            </p>
          </div>
          <div className="text-center bg-white p-8 rounded-lg shadow-md transition-transform duration-300 transform hover:-translate-y-2">
            <div className="mb-4">
              <span className="material-icons text-gray-800 text-6xl">
                restaurant
              </span>
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Versatile & Delicious
            </h3>
            <p className="text-gray-700">
              Ideal for salads, marinades, cooking, or simply dipping with
              bread. ELIATO enhances every dish with its authentic Cretan
              flavor.
            </p>
            <p className="text-gray-700">
              Not just an olive oil, but a culinary experience cherished by
              chefs and home cooks alike.
            </p>
          </div>
        </div>

        {/* Awards Section */}
        <div className="bg-white py-12 rounded-lg shadow-md mb-16 text-center">
          <div className="mb-8">
            <h3 className="text-4xl font-extrabold text-gray-900 mb-4">
              Certifications & Awards
            </h3>
            <p className="max-w-xl mx-auto text-lg text-gray-700">
              Recognized globally for its exquisite taste and quality, with
              accolades from Olive Japan and Prod Expo.
            </p>
          </div>
          <div className="flex flex-wrap justify-center items-center space-x-4">
            <img
              src="/awards/award1.png"
              alt="Award 1"
              className="w-24 h-24 object-contain m-2"
            />
            <img
              src="/awards/award2.png"
              alt="Award 2"
              className="w-24 h-24 object-contain m-2"
            />
            <img
              src="/awards/award3.png"
              alt="Award 3"
              className="w-24 h-24 object-contain m-2"
            />
            <img
              src="/awards/award4.png"
              alt="Award 4"
              className="w-24 h-24 object-contain m-2"
            />
            <img
              src="/awards/award5.png"
              alt="Award 5"
              className="w-24 h-24 object-contain m-2"
            />
            <img
              src="/awards/award6.png"
              alt="Award 6"
              className="w-24 h-24 object-contain m-2"
            />
            <img
              src="/awards/award7.png"
              alt="Award 7"
              className="w-24 h-24 object-contain m-2"
            />
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="text-center">
          <h3 className="text-4xl font-extrabold text-gray-900 mb-4">
            Join the Tradition
          </h3>
          <p className="max-w-2xl mx-auto text-lg text-gray-700">
            Experience the tradition of excellence with ELIATO, where every drop
            tells the story of our rich heritage and dedication to quality.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
