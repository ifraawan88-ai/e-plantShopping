import React, { useState } from "react";
import ProductList from "./ProductList.jsx";

function App() {
const [showProductList, setShowProductList] = useState(false);

return ( <div>
{!showProductList ? ( <div className="landing-page"> <h1>Paradise Nursery</h1>


      <p>
        Welcome to Paradise Nursery, your online destination for
        beautiful plants.
      </p>

      <button onClick={() => setShowProductList(true)}>
        Get Started
      </button>
    </div>
  ) : (
    <ProductList />
  )}
</div>


);
}

export default App;
