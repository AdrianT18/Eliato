import {useState} from "react";
import classNames from "classnames";

const FAQSection = () => {
    const [activeSection, setActiveSection] = useState(null);

    const toggleSection = (section) => {
        setActiveSection(activeSection === section ? null : section);
    };

    return (
        <div className="relative mt-8">
            <h2 className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#708349] px-4 text-white text-2xl font-bold">
                FAQ
            </h2>
            <div className="border-4 border-[#708349] rounded-lg p-6 pt-10 md:pt-12 md:p-8 bg-white shadow-lg">
                <div className="expandable-sections space-y-4">
                    <div className="section">
                        <button
                            className="w-full flex justify-between items-center text-xl font-semibold py-4 text-[#708349]"
                            onClick={() => toggleSection("general")}
                        >
                            Why is my Eliato olive oil cloudy?
                            <span
                                className={`material-icons transform transition-transform duration-150 ${
                                    activeSection === "general" ? "rotate-180" : ""
                                }`}
                            >
                expand_more
              </span>
                        </button>
                        <div
                            className={classNames(
                                "transition-max-height duration-300 ease-in-out overflow-hidden",
                                {
                                    "max-h-0": activeSection !== "general",
                                    "max-h-full": activeSection === "general",
                                }
                            )}
                        >
                            {activeSection === "general" && (
                                <div className="p-4 text-lg text-gray-700">
                                    <p>It is normal, because the olive oil is
                                        unfiltered to preserve the unique taste and aromas. Sometimes it can
                                        be very cloudy and thick if stored at low temperature.</p>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="section">
                        <button
                            className="w-full flex justify-between items-center text-xl font-semibold py-4 text-[#708349]"
                            onClick={() => toggleSection("technical")}
                        >
                            What kind of taste can I expect?
                            <span
                            className={`material-icons transform transition-transform duration-150 ${
                                activeSection === "technical" ? "rotate-180" : ""
                            }`}
                        >
                expand_more
              </span>
                        </button>
                        <div
                            className={classNames(
                                "transition-max-height duration-300 ease-in-out overflow-hidden",
                                {
                                    "max-h-0": activeSection !== "technical",
                                    "max-h-full": activeSection === "technical",
                                }
                            )}
                        >
                            {activeSection === "technical" && (
                                <div className="p-4 text-lg text-gray-700">
                                    <p>Eliato has buttery and persistent
                                        peppery taste. It is one of the strongest olive flavour.</p>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="section">
                        <button
                            className="w-full flex justify-between items-center text-xl font-semibold py-4 text-[#708349]"
                            onClick={() => toggleSection("billing")}
                        >
                            Does Eliato contain of polyphenols?
                            <span
                                className={`material-icons transform transition-transform duration-150 ${
                                    activeSection === "billing" ? "rotate-180" : ""
                                }`}
                            >
                expand_more
              </span>
                        </button>
                        <div
                            className={classNames(
                                "transition-max-height duration-300 ease-in-out overflow-hidden",
                                {
                                    "max-h-0": activeSection !== "billing",
                                    "max-h-full": activeSection === "billing",
                                }
                            )}
                        >
                            {activeSection === "billing" && (
                                <div className="p-4 text-lg text-gray-700">
                                    <p>As we make sure that the olives
                                        are harvested at the beginning of the season and they are cold
                                        pressed within few hours - the level of the polyphenols is high. The
                                        sensation of peppery taste on the back of the throat is the hallmark
                                        sign of Eliato and that is the proof.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQSection;
