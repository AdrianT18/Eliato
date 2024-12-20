import React from 'react';
import '../MainPageComponent/Review.css'; // Make sure to import the CSS file if needed

const Reviews = () => {
    return (

        <div className="relative p-2 sm:p-8  overflow-hidden mb-10 mt-10">
            {/* Reviews Section */}
            <div className="max-w-full mx-auto py-4 px-2 sm:px-4 lg:px-8">
                <div className="max-w-full mx-auto sm:max-w-3xl lg:max-w-4xl p-4 sm:p-4 rounded-lg text-white">
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center">See why customers love Eliato</h3>
                </div>
                <div>
                    <p className="text-white text-center text-lg sm:text-xl font-bold">Latest reviews from our customers</p>
                    <a href="https://www.ebay.co.uk/fdbk/feedback_profile/tomekmysko?filter=feedback_page%3ARECEIVED_AS_SELLER&sort=RELEVANCE"
                       className="text-lg sm:text-xl text-white hover:text-yellow-400 transition-colors duration-300 text-center block"
                       aria-label="Check more reviews on our eBay listing">
                        <span className="text-yellow-400 text-base sm:text-lg">&#9733;&#9733;&#9733;&#9733;&#9733;</span> 99.5% rating out of 185 reviews
                    </a>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 mt-8 sm:mt-10">
                {/* Review 1 */}
                <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg">
                    <div className="flex items-center space-x-2 mb-4">
                        <div className="rounded-full bg-gray-300 p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor" className="w-6 h-6 text-gray-600">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M5.121 17.804A1 1 0 017 17h10a1 1 0 01.879 1.478l-5 7a1 1 0 01-1.758 0l-5-7a1 1 0 01.121-1.674z"/>
                            </svg>
                        </div>
                        <h4 className="font-bold text-lg">4***c</h4>
                    </div>
                    <p className="text-gray-600">
                        "Excellent quality and fast delivery. Highly recommended EBay member."
                    </p>
                    <div className="flex mt-4">
                        <div className="flex items-center">
                            {/* Stars */}
                            <span className="text-yellow-400 text-lg">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                        </div>
                    </div>
                    <p className="text-xs text-gray-500 mt-2">15/10/2020</p>
                </div>
                {/* Review 2 */}
                <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg">
                    <div className="flex items-center space-x-2 mb-4">
                        <div className="rounded-full bg-gray-300 p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor" className="w-6 h-6 text-gray-600">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M5.121 17.804A1 1 0 017 17h10a1 1 0 01.879 1.478l-5 7a1 1 0 01-1.758 0l-5-7a1 1 0 01.121-1.674z"/>
                            </svg>
                        </div>
                        <h4 className="font-bold text-lg">r***a</h4>
                    </div>
                    <p className="text-gray-600">
                        "I get my Oil from them it’s Organic, Pure at a good price I can depend on them for quality 👌👍🤩"
                    </p>
                    <div className="flex mt-4">
                        <div className="flex items-center">
                            {/* Stars */}
                            <span className="text-yellow-400 text-lg">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                        </div>
                    </div>
                    <p className="text-xs text-gray-500 mt-2">15/10/2020</p>
                </div>
                {/* Review 3 */}
                <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg">
                    <div className="flex items-center space-x-2 mb-4">
                        <div className="rounded-full bg-gray-300 p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor" className="w-6 h-6 text-gray-600">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M5.121 17.804A1 1 0 017 17h10a1 1 0 01.879 1.478l-5 7a1 1 0 01-1.758 0l-5-7a1 1 0 01.121-1.674z"/>
                            </svg>
                        </div>
                        <h4 className="font-bold text-lg">a***a</h4>
                    </div>
                    <p className="text-gray-600">
                        "A great buying experience from this reliable and highly recommended seller. 10/10 rating. Many thanks."
                    </p>
                    <div className="flex mt-4">
                        <div className="flex items-center">
                            {/* Stars */}
                            <span className="text-yellow-400 text-lg">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                        </div>
                    </div>
                    <p className="text-xs text-gray-500 mt-2">20/11/2020</p>
                </div>
            </div>
        </div>
    );
}

export default Reviews;
