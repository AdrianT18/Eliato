import FAQSection from "./FAQSection";
import Footer from "./Footer.jsx";

const Contact = () => {
  return (
      <div className="flex flex-col min-h-screen bg-gray-100">
        {/* Container for Contact Form and Image */}
        <div className="flex flex-col md:flex-row w-full min-h-screen">
          {/* Left Section with Image */}
          <div className="bg-primary relative w-full md:w-1/2 flex items-center justify-center z-50 p-2 md:p-4 ">
            <img
                src="/contact_img.jpg"
                alt="Contact"
                className="object-cover h-full w-full rounded-tr-2xl rounded-2xl" // Adjusted to make the image smaller and rounded
            />
          </div>
          {/* Right Section with Form */}
          <div className="w-full md:w-1/2 bg-[#708349] flex items-center justify-center p-4 md:p-8">
            <div className="bg-white p-12 md:p-16 rounded-lg shadow-lg w-full max-w-lg">
              <h2 className="text-4xl font-bold text-[#708349] mb-8">
                Contact us, any time
              </h2>
              <form className="space-y-6 w-full">
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                      type="text"
                      placeholder="Your name"
                      required
                      className="w-full px-4 py-3 text-gray-900 border rounded-lg focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                      type="email"
                      placeholder="you@company.com"
                      required
                      className="w-full px-4 py-3 text-gray-900 border rounded-lg focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Phone number (UK only) <span className="text-red-500">*</span>
                  </label>
                  <input
                      type="tel"
                      placeholder="+44 7000 000000"
                      pattern="\+44\s?\d{4}\s?\d{6}"
                      required
                      className="w-full px-4 py-3 text-gray-900 border rounded-lg focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    How can we help? <span className="text-red-500">*</span>
                  </label>
                  <textarea
                      placeholder="Tell us a little about the project..."
                      required
                      className="w-full px-4 py-3 text-gray-900 border rounded-lg focus:outline-none focus:shadow-outline"
                      rows="5"
                  ></textarea>
                </div>
                <div>
                  <button
                      type="submit"
                      className="w-full bg-[#708349] text-white font-bold py-3 px-4 rounded-lg hover:bg-[#567237] transition-colors duration-300"
                  >
                    Send message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* FAQ Section */}
        <div className="bg-white p-4 md:p-8 w-full">
          <FAQSection />
        </div>
        <Footer />
      </div>
  );
};

export default Contact;
