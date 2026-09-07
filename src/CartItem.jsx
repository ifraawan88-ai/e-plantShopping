import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, updateQuantity } from "./redux/CartSlice";

function CartItem() {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  // Calculate total cost for one item
  const calculateItemTotal = (item) => {
    return item.price * item.quantity;
  };

  // Calculate total cart amount
  const calculateCartTotal = () => {
    return cartItems.reduce(
      (total, item) => total + calculateItemTotal(item),
      0
    );
  };

  // Increase quantity
  const handleIncrement = (item) => {
    dispatch(
      updateQuantity({
        id: item.id,
        quantity: item.quantity + 1,
      })
    );
  };

  // Decrease quantity
  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(
        updateQuantity({
          id: item.id,
          quantity: item.quantity - 1,
        })
      );
    }
  };

  // Remove item
  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };

  return (
    <div className="cart-page">
      {/* Navbar */}
      <nav className="navbar">
        <h1 className="navbar-logo">Paradise Nursery</h1>

        <div className="navbar-links">
          <a href="/">Home</a>
          <a href="/about">About Us</a>
          <a href="/cart">Cart</a>
        </div>
      </nav>

      {/* Shopping Cart */}
      <div className="cart-container">
        <h2>Shopping Cart</h2>

        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <h3>Your cart is empty</h3>
            <p>Add some beautiful plants to your cart.</p>

            <a href="/" className="continue-shopping">
              Continue Shopping
            </a>
          </div>
        ) : (
          <>
            {/* Cart Items */}
            <div className="cart-items">
              {cartItems.map((item) => (
                <div className="cart-item" key={item.id}>
                  {/* Image */}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="cart-item-image"
                  />

                  {/* Details */}
                  <div className="cart-item-details">
                    <h3>{item.name}</h3>

                    <p className="cart-category">
                      {item.category}
                    </p>

                    <p className="cart-price">
                      ${item.price.toFixed(2)}
                    </p>

                    {/* Quantity Controls */}
                    <div className="quantity-controls">
                      <button
                        onClick={() => handleDecrement(item)}
                        disabled={item.quantity === 1}
                      >
                        -
                      </button>

                      <span>{item.quantity}</span>

                      <button
                        onClick={() => handleIncrement(item)}
                      >
                        +
                      </button>
                    </div>

                    {/* Item Total */}
                    <p className="item-total">
                      Item Total: $
                      {calculateItemTotal(item).toFixed(2)}
                    </p>

                    {/* Remove */}
                    <button
                      className="remove-button"
                      onClick={() => handleRemove(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Cart Summary */}
            <div className="cart-summary">
              <h3>Cart Summary</h3>

              <p>
                Total Items:{" "}
                {cartItems.reduce(
                  (total, item) => total + item.quantity,
                  0
                )}
              </p>

              <p className="cart-total">
                Total Amount: $
                {calculateCartTotal().toFixed(2)}
              </p>

              <button className="checkout-button">
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default CartItem;