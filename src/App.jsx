import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import client from "./shopify";
import Product from "./Product";
import MainPage from "./MainPage";
import CartDrawer from "./CartDrawer";
import Header from "./Header";
import Contact from "./Contact";

function App() {
  const [products, setProducts] = useState([]);
  const [checkout, setCheckout] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    client.product
      .fetchAll()
      .then((products) => {
        setProducts(products);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });

    client.checkout
      .create()
      .then((checkout) => {
        setCheckout(checkout);
      })
      .catch((error) => {
        console.error("Error creating checkout:", error);
      });
  }, []);

  const addToCart = (variantId, quantity) => {
    const lineItemsToAdd = [
      {
        variantId,
        quantity: parseInt(quantity, 10),
      },
    ];

    client.checkout
      .addLineItems(checkout.id, lineItemsToAdd)
      .then((checkout) => {
        setCheckout(checkout);
      })
      .catch((error) => {
        console.error("Error adding to cart:", error);
      });
  };

  const buyNow = (variantId, quantity) => {
    const lineItemsToAdd = [
      {
        variantId,
        quantity: parseInt(quantity, 10),
      },
    ];

    client.checkout
      .addLineItems(checkout.id, lineItemsToAdd)
      .then((checkout) => {
        window.location.href = checkout.webUrl;
      })
      .catch((error) => {
        console.error("Error proceeding to checkout:", error);
      });
  };

  const updateQuantity = (lineItemId, quantity) => {
    const lineItemsToUpdate = [
      {
        id: lineItemId,
        quantity: parseInt(quantity, 10),
      },
    ];

    client.checkout
      .updateLineItems(checkout.id, lineItemsToUpdate)
      .then((checkout) => {
        setCheckout(checkout);
      })
      .catch((error) => {
        console.error("Error updating cart item:", error);
      });
  };

  const removeLineItem = (lineItemId) => {
    client.checkout
      .removeLineItems(checkout.id, [lineItemId])
      .then((checkout) => {
        setCheckout(checkout);
      })
      .catch((error) => {
        console.error("Error removing cart item:", error);
      });
  };

  const handleOpenCart = () => setIsCartOpen(true);
  const handleCloseCart = () => setIsCartOpen(false);

  return (
    <Router>
      <div className="App">
        <Header
          cartItemCount={checkout ? checkout.lineItems.length : 0}
          openCart={handleOpenCart}
        />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route
            path="/product"
            element={
              products.length > 0 && checkout ? (
                <Product
                  product={products[0]}
                  addToCart={addToCart}
                  buyNow={buyNow}
                />
              ) : (
                <p>Loading...</p>
              )
            }
          />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        {checkout && (
          <CartDrawer
            isOpen={isCartOpen}
            checkout={checkout}
            updateQuantity={updateQuantity}
            removeLineItem={removeLineItem}
            closeCart={handleCloseCart}
          />
        )}
      </div>
    </Router>
  );
}

export default App;
