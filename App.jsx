import React, { useState } from "react";

function App() {
const [showProductList, setShowProductList] = useState(false);

return ( <div>
{!showProductList ? ( <div className="landing-page"> <h1>Paradise Nursery</h1>

```
      <p>
        Welcome to Paradise Nursery, your online destination for
        beautiful plants.
      </p>

      <button onClick={() => setShowProductList(true)}>
        Get Started
      </button>
    </div>
  ) : (
    <div className="product-list">
      <h2>Our Plants</h2>
      <p>Explore our collection of plants.</p>
    </div>
  )}
</div>
```

);
}

export default App;
