import React, { useState } from "react";

function CartItem() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Aloe Vera",
      price: 15,
      quantity: 1,
      image:
        "https://images.unsplash.com/photo-1509423350716-97f9360b4e09",
    },
    {
      id: 2,
      name: "Snake Plant",
      price: 20,
      quantity: 1,
      image:
        "https://images.unsplash.com/photo-1593482892290-f54927ae2f6b",
    },
  ]);

  // Increase quantity
  const increaseQuantity = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  // Decrease quantity
  const decreaseQuantity = (id) => {
    setCartItems(
      cartItems
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // Remove item
  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  // Calculate total
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h1>Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id}>
              <img
                src={item.image}
                alt={item.name}
                width="150"
              />

              <h2>{item.name}</h2>

              <p>Price: ${item.price}</p>

              <button onClick={() => decreaseQuantity(item.id)}>
                -
              </button>

              <span> {item.quantity} </span>

              <button onClick={() => increaseQuantity(item.id)}>
                +
              </button>

              <p>
                Subtotal: ${item.price * item.quantity}
              </p>

              <button onClick={() => removeItem(item.id)}>
                Remove
              </button>
            </div>
          ))}

          <h2>Total: ${total}</h2>

          <button>Checkout</button>
        </div>
      )}
    </div>
  );
}

export default CartItem;