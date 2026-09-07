import React from "react";

function ProductList() {
  const plants = [
    {
      id: 1,
      name: "Aloe Vera",
      price: 15,
      category: "Indoor Plants",
      image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09",
    },
    {
      id: 2,
      name: "Snake Plant",
      price: 20,
      category: "Indoor Plants",
      image: "https://images.unsplash.com/photo-1593482892290-f54927ae2f6b",
    },
    {
      id: 3,
      name: "Peace Lily",
      price: 25,
      category: "Flowering Plants",
      image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee",
    },
    {
      id: 4,
      name: "Money Plant",
      price: 18,
      category: "Indoor Plants",
      image: "https://images.unsplash.com/photo-1620803366004-119e5e6f5e6c",
    },
    {
      id: 5,
      name: "Spider Plant",
      price: 22,
      category: "Indoor Plants",
      image: "https://images.unsplash.com/photo-1572688484438-313a6e50c333",
    },
    {
      id: 6,
      name: "Fiddle Leaf Fig",
      price: 30,
      category: "Indoor Plants",
      image: "https://images.unsplash.com/photo-1614594576025-9e6a6b5b5b5b",
    },
  ];

  return (
    <div>
      <h1>Paradise Nursery</h1>

      <h2>Our Plants</h2>

      {plants.map((plant) => (
        <div key={plant.id}>
          <img
            src={plant.image}
            alt={plant.name}
            width="200"
          />

          <h3>{plant.name}</h3>
          <p>Category: {plant.category}</p>
          <p>Price: ${plant.price}</p>

          <button>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;