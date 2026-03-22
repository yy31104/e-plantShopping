import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeItem, updateQuantity } from "./CartSlice";
import "./CartItem.css";

const CartItem = ({ onContinueShopping }) => {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const calculateTotalAmount = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const calculateTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };
  const handleContinueShopping = () => onContinueShopping();

  const handleCheckoutShopping = (e) => {
    e.preventDefault();
    if (cart.length === 0) {
      alert("Your cart is empty.");
      return;
    }

    const shouldCheckout = window.confirm(
      "Proceed to checkout and place your order?",
    );
    if (!shouldCheckout) {
      return;
    }

    const totalItems = calculateTotalItems();
    const totalAmount = calculateTotalAmount().toFixed(2);
    dispatch(clearCart());
    alert(
      `Order placed successfully!\nItems: ${totalItems}\nTotal: $${totalAmount}\nReturning to product listing.`,
    );
    onContinueShopping();
  };

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item.id));
    }
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item.id));
  };

  const calculateTotalCost = (item) => {
    return (item.price * item.quantity).toFixed(2);
  };

  return (
    <div className="cart-container">
      <h2 className="cart-title">
        Total Cart Amount: ${calculateTotalAmount().toFixed(2)}
      </h2>
      {cart.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty. Explore plants and add your favorites.</p>
        </div>
      ) : (
        <div>
          {cart.map((item) => (
            <div className="cart-item" key={item.id}>
              <img className="cart-item-image" src={item.image} alt={item.name} />
              <div className="cart-item-details">
                <div className="cart-item-name">{item.name}</div>
                <div className="cart-item-cost">${item.price.toFixed(2)}</div>
                <div className="cart-item-quantity">
                  <button
                    className="cart-item-button cart-item-button-dec"
                    onClick={() => handleDecrement(item)}
                  >
                    -
                  </button>
                  <span className="cart-item-quantity-value">
                    {item.quantity}
                  </span>
                  <button
                    className="cart-item-button cart-item-button-inc"
                    onClick={() => handleIncrement(item)}
                  >
                    +
                  </button>
                </div>
                <div className="cart-item-total">
                  Total: ${calculateTotalCost(item)}
                </div>
                <button
                  className="cart-item-delete"
                  onClick={() => handleRemove(item)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="total_cart_amount">
        Total Cart Amount: ${calculateTotalAmount().toFixed(2)}
      </div>
      <div className="continue_shopping_btn">
        <button className="get-started-button" onClick={handleContinueShopping}>
          Continue Shopping
        </button>
        <button
          className="get-started-button1"
          onClick={(e) => handleCheckoutShopping(e)}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

CartItem.propTypes = {
  onContinueShopping: PropTypes.func.isRequired,
};

export default CartItem;
