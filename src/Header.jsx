import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = ({ cartItemCount, openCart }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleCartClick = () => {
    openCart();
  };

  return (
      <header className="sticky top-0 p-4 bg-[#708349] text-white flex justify-between items-center font-thin font-['Radio_Canada']  z-50">
        <Link to="/" className="text-4xl font-bold font-new-york-regular">
          eliato
        </Link>
        <div className="hidden md:flex space-x-8 text-lg">
          <Link to="/" className="hover:text-gray-400">
            Home
          </Link>
          <Link to="/product" className="hover:text-gray-400">
            Olive Oil
          </Link>
          <Link to="/contact" className="hover:text-gray-400">
            Contact Us
          </Link>
          <button
              onClick={handleCartClick}
              className="flex items-center hover:text-gray-400"
          >
          <span className="material-symbols-outlined text-2xl">
            shopping_cart
          </span>
            <span className="ml-2">{cartItemCount}</span>
          </button>
        </div>
        <div className="md:hidden">
          <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="focus:outline-none"
          >
            <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
              <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
        <div
            className={`mobile-menu fixed top-0 left-0 w-full h-full bg-[#708349] text-white flex flex-col items-center justify-center space-y-4 py-4 md:hidden z-50 transition-transform transform duration-300 ease-in-out ${
                isMenuOpen ? "translate-x-0" : "-translate-x-full"
            }`}
        >
          <button
              onClick={() => setIsMenuOpen(false)}
              className="mobile-menu-close-button focus:outline-none absolute top-4 right-4"
          >
            <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
              <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
          <Link
              to="/"
              className="hover:text-gray-400 text-lg"
              onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
              to="/product"
              className="hover:text-gray-400 text-lg"
              onClick={() => setIsMenuOpen(false)}
          >
            Olive Oil
          </Link>
          <Link
              to="/contact"
              className="hover:text-gray-400 text-lg"
              onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
          <button
              onClick={handleCartClick}
              className="flex items-center hover:text-gray-400 text-lg"
          >
          <span className="material-symbols-outlined text-2xl mr-2">
            shopping_cart
          </span>
            <span>{cartItemCount}</span>
          </button>
        </div>
      </header>
  );
};

export default Header;
