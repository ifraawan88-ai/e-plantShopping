

import React, { useState } from "react";
import ProductList from "./ProductList.jsx";
import CartItem from "./CartItem.jsx";

function App() {
  const [showProductList, setShowProductList] = useState(false);
  const [showCart, setShowCart] = useState(false);

  if (showCart) {
    return <CartItem />;
  }

  return (
    <div>
      {!showProductList ? (
        <div className="landing-page">
          <div className="content">
            <h1>Paradise Nursery</h1>

            <p>
              Welcome to Paradise Nursery, your online destination
              for beautiful plants.
            </p>

            <button
              onClick={() => setShowProductList(true)}
              className="add-button"
            >
              Get Started
            </button>
          </div>
        </div>
      ) : (
        <ProductList />
      )}
    </div>
  );
}

export default App;
