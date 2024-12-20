import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";

const ImageSection = ({ product, selectedImage, handleImageClick }) => {
  const imageSectionRef = useRef(null);
  const [bottomSpacing, setBottomSpacing] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.querySelector(".about-section");
      const imageSection = imageSectionRef.current;
      const aboutSectionTop = aboutSection.getBoundingClientRect().top;
      const viewportHeight = window.innerHeight;

      if (aboutSectionTop <= viewportHeight) {
        setBottomSpacing(viewportHeight - aboutSectionTop);
      } else {
        setBottomSpacing(0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="image-section flex flex-col md:flex-row gap-6 relative"
      ref={imageSectionRef}
    >
      <div
        className="image-gallery flex gap-2 overflow-x-auto md:flex-col md:gap-2 w-full md:w-auto sticky"
        style={{ top: "6px", bottom: `${bottomSpacing}px` }}
      >
        {product.images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={`${product.title} thumbnail ${index + 1}`}
            className={`thumbnail cursor-pointer border ${
              selectedImage === image.src
                ? "border-gray-500"
                : "border-transparent"
            } rounded transition duration-300 ease-in-out transform hover:shadow-lg`}
            onClick={() => handleImageClick(image.src)}
            style={{ width: "80px", height: "80px", objectFit: "cover" }}
          />
        ))}
      </div>
      <div
        className="main-image flex-grow sticky"
        style={{ top: "6px", bottom: `${bottomSpacing}px` }}
      >
        <img
          src={selectedImage}
          alt={product.title}
          className="w-full h-full object-cover rounded drop-shadow"
          style={{ maxHeight: "80vh" }}
        />
      </div>
    </div>
  );
};

ImageSection.propTypes = {
  product: PropTypes.object.isRequired,
  selectedImage: PropTypes.string.isRequired,
  handleImageClick: PropTypes.func.isRequired,
};

export default ImageSection;
