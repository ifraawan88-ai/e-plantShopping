import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "./redux/CartSlice";

function ProductList() {
  const dispatch = useDispatch();
  const [addedItems, setAddedItems] = useState([]);

  const plants = [
    // =========================
    // Indoor Plants
    // =========================
    {
      id: 1,
      name: "Aloe Vera",
      price: 15,
      category: "Indoor Plants",
      image:
        "https://images.unsplash.com/photo-1509423350716-97f9360b4e09",
    },
    {
      id: 2,
      name: "Snake Plant",
      price: 20,
      category: "Indoor Plants",
      image:
        "https://images.unsplash.com/photo-1593482892290-f54927ae2f6b",
    },
    {
      id: 3,
      name: "Money Plant",
      price: 18,
      category: "Indoor Plants",
      image:
        "https://images.unsplash.com/photo-1620803366004-119e5e6f5e6c",
    },
    {
      id: 4,
      name: "Spider Plant",
      price: 22,
      category: "Indoor Plants",
      image:
        "https://images.unsplash.com/photo-1572688484438-313a6e50c333",
    },
    {
      id: 5,
      name: "Rubber Plant",
      price: 28,
      category: "Indoor Plants",
      image:
        "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
    },
    {
      id: 6,
      name: "Boston Fern",
      price: 24,
      category: "Indoor Plants",
      image:
        "https://images.unsplash.com/photo-1598880940080-ff9a29891b85",
    },

    // =========================
    // Flowering Plants
    // =========================
    {
      id: 7,
      name: "Peace Lily",
      price: 25,
      category: "Flowering Plants",
      image:
        "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee",
    },
    {
      id: 8,
      name: "Rose Plant",
      price: 30,
      category: "Flowering Plants",
      image:
        "https://images.unsplash.com/photo-1490750967868-88aa4486c946",
    },
    {
      id: 9,
      name: "Orchid",
      price: 35,
      category: "Flowering Plants",
      image:
        "https://images.unsplash.com/photo-1566954979172-eaba308acdf0",
    },
    {
      id: 10,
      name: "Jasmine",
      price: 26,
      category: "Flowering Plants",
      image:
        "https://images.unsplash.com/photo-1497250681960-ef046c08a56e",
    },
    {
      id: 11,
      name: "Lavender",
      price: 23,
      category: "Flowering Plants",
      image:
        "https://images.unsplash.com/photo-1499002238440-d264edd596ec",
    },
    {
      id: 12,
      name: "Hibiscus",
      price: 27,
      category: "Flowering Plants",
      image:
        "https://images.unsplash.com/photo-1520763185298-1b434c919102",
    },

    // =========================
    // Succulents
    // =========================
    {
      id: 13,
      name: "Echeveria",
      price: 14,
      category: "Succulents",
      image:
        "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc",
    },
    {
      id: 14,
      name: "Jade Plant",
      price: 19,
      category: "Succulents",
      image:
        "https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb",
    },
    {
      id: 15,
      name: "Haworthia",
      price: 16,
      category: "Succulents",
      image:
        "https://images.unsplash.com/photo-1509423350716-97f9360b4e09",
    },
    {
      id: 16,
      name: "Zebra Haworthia",
      price: 18,
      category: "Succulents",
      image:
        "https://images.unsplash.com/photo-1485955900006-10f4d324d411",
    },
    {
      id: 17,
      name: "Burro's Tail",
      price: 21,
      category: "Succulents",
      image:
        "https://images.unsplash.com/photo-1485955900006-10f4d324d411",
    },
    {
      id: 18,
      name: "String of Pearls",
      price: 20,
      category: "Succulents",
      image:
        "https://images.unsplash.com/photo-1497250681960-ef046c08a56e",
    },
  ];

  const categories = [
    "Indoor Plants",
    "Flowering Plants",
    "Succulents",
  ];

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));

    setAddedItems((prev) => [...prev, plant.id]);
  };

  return (
    <div className="product-page">
      {/* =========================
          Navbar
      ========================= */}
      <nav className="navbar">
        <h1 className="navbar-logo">Paradise Nursery</h1>

        <div className="navbar-links">
          <a href="/">Home</a>
          <a href="/about">About Us</a>
          <a href="/cart">Cart</a>
        </div>
      </nav>

      {/* =========================
          Page Header
      ========================= */}
      <div className="page-header">
        <h2>Our Plants</h2>

        <p>
          Explore our beautiful collection of plants and bring nature
          into your home.
        </p>
      </div>

      {/* =========================
          Categories
      ========================= */}
      {categories.map((category) => (
        <section className="category-section" key={category}>
          <h2 className="category-title">{category}</h2>

          <div className="plant-grid">
            {plants
              .filter((plant) => plant.category === category)
              .map((plant) => (
                <div className="plant-card" key={plant.id}>
                  {/* Plant Image */}
                  <div className="plant-image-container">
                    <img
                      src={plant.image}
                      alt={plant.name}
                      className="plant-image"
                    />
                  </div>

                  {/* Plant Details */}
                  <div className="plant-details">
                    <h3>{plant.name}</h3>

                    <p className="plant-category">
                      {plant.category}
                    </p>

                    <p className="plant-price">
                      ${plant.price}
                    </p>

                    {/* Add To Cart */}
                    <button
                      onClick={() => handleAddToCart(plant)}
                      disabled={addedItems.includes(plant.id)}
                      className={
                        addedItems.includes(plant.id)
                          ? "add-button added"
                          : "add-button"
                      }
                    >
                      {addedItems.includes(plant.id)
                        ? "Added to Cart"
                        : "Add to Cart"}
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export default ProductList;