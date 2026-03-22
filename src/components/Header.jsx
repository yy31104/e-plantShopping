import { NavLink, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Header.css";

function Header() {
  const cartItems = useSelector((state) => state.cart.items);
  const cartQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="app-header">
      <Link className="brand-link" to="/">
        <img
          src="https://cdn.pixabay.com/photo/2020/08/05/13/12/eco-5465432_1280.png"
          alt="Paradise Nursery logo"
        />
        <div>
          <h1>Paradise Nursery</h1>
          <p>Where Green Meets Serenity</p>
        </div>
      </Link>

      <nav className="header-nav" aria-label="Main navigation">
        <NavLink to="/products" className={({ isActive }) => (isActive ? "active" : "")}>
          Plants
        </NavLink>
        <NavLink to="/cart" className={({ isActive }) => (isActive ? "active cart-link" : "cart-link")}>
          <span>Cart</span>
          <span className="cart-badge" aria-label={`Cart has ${cartQuantity} items`}>
            {cartQuantity}
          </span>
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
