import React from 'react';
import {motion} from 'framer-motion';
import {useNavigate} from "react-router-dom";

const slides = [
    "100% Organic Product           ",
    "99.5% Positive Review from Ebay",
    "Free Impost Locker Drop-off    ",
    "Cold Pressed                  ",
    "From Krista, Crete            "
];

const Footer = () => {
    // Duplicate the slides array to ensure seamless looping
    const duplicatedSlides = [...slides, ...slides];

    const navigate = useNavigate();

    const navigateToFAQ = () => {
        navigate("/Contact");
    };
    return (
        <footer className="bg-footer-background text-white">
            {/* Sliding Bar */}
            <div className="relative w-full overflow-hidden py-5 mx-auto">
                <motion.div
                    className="flex"
                    animate={{
                        x: ['0%', '-100%'],
                        transition: {
                            ease: 'linear',
                            duration: 20,
                            repeat: Infinity,
                        }
                    }}
                >
                    {duplicatedSlides.map((slide, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 custom-width"
                            style={{width: `${100 / slides.length}%`, position: 'relative'}}
                        >
                            <div
                                className="flex items-center justify-center h-full text-sm md:text-lg lg:text-lg overflow-x-auto w-full">
                                <div className="flex flex-row space-x-4 px-4 md:px-2 lg:px-2">
                                    <span>{slide}</span>
                                </div>
                            </div>
                            {index < duplicatedSlides.length - 1 && (
                                <div
                                    className="separator"
                                    style={{
                                        position: 'absolute',
                                        top: '0',
                                        right: '0',
                                        height: '100%',
                                        width: '2px',
                                        backgroundColor: 'white'
                                    }}
                                ></div>
                            )}
                        </div>
                    ))}
                </motion.div>
            </div>


            {/* Main Footer Content */}
            <div className="py-8 px-4 md:px-10 lg:px-20">
                <div className="flex justify-between">
                    <div>
                        <h2 className="font-bold mb-2">Quick Links</h2>
                        <ul>
                            <li><a href="https://www.ebay.co.uk/usr/tomekmysko" className="hover:underline">Ebay Store</a></li>
                            <li><a onClick={navigateToFAQ} className="hover:underline">Refund Policy</a></li>
                            <li><a onClick={navigateToFAQ}className="hover:underline">Shipping Policy</a></li>
                            <li><a onClick={navigateToFAQ} className="hover:underline">FAQs</a></li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="font-bold mb-2">Address</h2>
                        {/* Address details can be added here */}
                    </div>
                    <div>
                        <h2 className="font-bold mb-2">Payments we accept</h2>
                        {/* Payment details can be added here */}
                    </div>
                </div>
                <div className="text-center mt-8">
                    <p>&copy; 2024, ELIATO | Designed and developed by Neptech</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
