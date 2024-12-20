import PropTypes from "prop-types";
import classNames from "classnames";
import React from "react";

const ProductDetails = ({
  product,
  selectedVariant,
  handleVariantChange,
  setQuantity,
  quantity,
  addToCart,
  buyNow,
  toggleSection,
  activeSection,
}) => {
  return (
    <div className="product-details space-y-6">
      <h1 className="text-4xl font-extrabold">{product.title}</h1>
      <p className="text-2xl font-semibold text-gray-800">
        £ {parseFloat(selectedVariant.priceV2.amount).toFixed(2)}
      </p>
      <div className="variant-selector my-4">
        <label className="block text-lg font-medium text-gray-700">Size</label>
        <div className="flex space-x-2 mt-2">
          {product.variants.map((variant) => (
            <button
              key={variant.id}
              onClick={() => handleVariantChange(variant)}
              className={classNames(
                "py-2 px-4 border rounded-md shadow-sm transition-colors duration-150 focus:outline-none",
                {
                  "bg-olive-600 text-white": variant.id === selectedVariant.id,
                  "bg-white text-gray-700 border-gray-300 hover:bg-gray-100":
                    variant.id !== selectedVariant.id,
                }
              )}
            >
              {variant.title}
            </button>
          ))}
        </div>
      </div>
      <div className="quantity-selector my-4">
        <label
          htmlFor="quantity"
          className="block text-lg font-medium text-gray-700"
        >
          Quantity
        </label>
        <input
          type="number"
          id="quantity"
          name="quantity"
          min="1"
          value={quantity}
          onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring focus:ring-olive-500 focus:border-olive-500 sm:text-lg"
        />
      </div>
      <div className="actions my-4 space-y-2">
        <button
          className="w-full bg-white text-gray-700 border border-gray-300 py-3 px-4 rounded-md transition-colors duration-150 hover:bg-gray-100"
          onClick={() => addToCart(selectedVariant.id, quantity)}
        >
          Add to Cart
        </button>
        <button
          className="w-full bg-olive-600 text-white py-3 px-4 rounded-md transition-colors duration-150 hover:bg-olive-700"
          onClick={() => buyNow(selectedVariant.id, quantity)}
        >
          Buy it Now
        </button>
      </div>
      <div className="shipping-info my-4 space-y-2">
        <p className="text-lg text-gray-600 flex items-center">
          <span className="material-icons text-green-500 mr-2">
            local_shipping
          </span>
          International shipping available
        </p>
        <p className="text-lg text-gray-600 flex items-center">
          <span className="material-icons text-green-500 mr-2">
            check_circle
          </span>
          Ready to ship
        </p>
      </div>
      <div className="product-description my-4">
        <p className="text-lg text-gray-700">{product.description}</p>
      </div>
      <div className="expandable-sections space-y-4">
        <div className="section border-t border-gray-300">
          <button
            className="w-full flex justify-between items-center text-xl font-semibold py-4"
            onClick={() => toggleSection("ingredients")}
          >
            Ingredients
            <span
              className={`material-icons transform transition-transform duration-150 ${
                activeSection === "ingredients" ? "rotate-180" : ""
              }`}
            >
              expand_more
            </span>
          </button>
          <div
            className={classNames(
              "transition-max-height duration-300 ease-in-out",
              {
                "max-h-0": activeSection !== "ingredients",
                "max-h-full": activeSection === "ingredients",
              }
            )}
          >
            {activeSection === "ingredients" && (
              <div className="p-4 text-lg text-gray-700">
                <p>100% made from Koroneiki olives</p>
              </div>
            )}
          </div>
        </div>
        <div className="section border-t border-gray-300">
          <button
            className="w-full flex justify-between items-center text-xl font-semibold py-4"
            onClick={() => toggleSection("storage")}
          >
            Storage
            <span
              className={`material-icons transform transition-transform duration-150 ${
                activeSection === "storage" ? "rotate-180" : ""
              }`}
            >
              expand_more
            </span>
          </button>
          <div
            className={classNames(
              "transition-max-height duration-300 ease-in-out",
              {
                "max-h-0": activeSection !== "storage",
                "max-h-full": activeSection === "storage",
              }
            )}
          >
            {activeSection === "storage" && (
              <div className="p-4 text-lg text-gray-700">
                <p>
                  Use within 6 months after opening. Keep in a cool, dry, dark
                  place away from the heat and light. It is not recommended to
                  store olive oil in the fridge.
                </p>
              </div>
            )}
          </div>
        </div>
        <div className="section border-t border-gray-300">
          <button
            className="w-full flex justify-between items-center text-xl font-semibold py-4"
            onClick={() => toggleSection("shipping")}
          >
            Shipping
            <span
              className={`material-icons transform transition-transform duration-150 ${
                activeSection === "shipping" ? "rotate-180" : ""
              }`}
            >
              expand_more
            </span>
          </button>
          <div
            className={classNames(
              "transition-max-height duration-300 ease-in-out",
              {
                "max-h-0": activeSection !== "shipping",
                "max-h-full": activeSection === "shipping",
              }
            )}
          >
            {activeSection === "shipping" && (
              <div className="p-4 text-lg text-gray-700">
                <p>
                  We will do our best to dispatch your order within 2 days of it
                  being placed.
                </p>
                <p>Free shipping to UK Mainland.</p>
                <p>
                  Regarding international shipment please contact us directly.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

ProductDetails.propTypes = {
  product: PropTypes.object.isRequired,
  selectedVariant: PropTypes.object.isRequired,
  handleVariantChange: PropTypes.func.isRequired,
  setQuantity: PropTypes.func.isRequired,
  quantity: PropTypes.number.isRequired,
  addToCart: PropTypes.func.isRequired,
  buyNow: PropTypes.func.isRequired,
  toggleSection: PropTypes.func.isRequired,
  activeSection: PropTypes.string,
};

export default ProductDetails;
