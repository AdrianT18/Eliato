import { useState } from "react";
import PropTypes from "prop-types";
import ImageSection from "./ProductPage/ImageSection";
import ProductDetails from "./ProductPage/ProductDetails";
import AboutSection from "./ProductPage/AboutSection";
import Footer from "./Footer.jsx";

const Product = ({ product, addToCart, buyNow }) => {
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const [selectedImage, setSelectedImage] = useState(selectedVariant.image.src);
  const [quantity, setQuantity] = useState(1);
  const [activeSection, setActiveSection] = useState(null);

  const handleVariantChange = (variant) => {
    setSelectedVariant(variant);
    setSelectedImage(variant.image.src);
  };

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const handleSetQuantity = (value) => {
    setQuantity(value);
  };

  return (
    <div>
      <div className="product-page container mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <ImageSection
          product={product}
          selectedImage={selectedImage}
          handleImageClick={handleImageClick}
        />
        <ProductDetails
          product={product}
          selectedVariant={selectedVariant}
          handleVariantChange={handleVariantChange}
          setQuantity={handleSetQuantity}
          quantity={quantity}
          addToCart={addToCart}
          buyNow={buyNow}
          toggleSection={toggleSection}
          activeSection={activeSection}
        />
      </div>
      <div className="about-section">
        <AboutSection />
      </div>
      <Footer/>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.object.isRequired,
  addToCart: PropTypes.func.isRequired,
  buyNow: PropTypes.func.isRequired,
};

export default Product;
