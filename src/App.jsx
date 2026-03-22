import { Link, Navigate, Route, Routes } from "react-router-dom";
import ProductList from "./ProductList";
import AboutUs from "./AboutUs";
import CartPage from "./CartPage";
import "./App.css";

function LandingPage() {
  return (
    <div className="landing-page">
      <div className="background-image" />
      <div className="content">
        <section className="landing-content">
          <h1>Welcome To Paradise Nursery</h1>
          <div className="divider" />
          <p>Where Green Meets Serenity</p>
          <Link className="get-started-button" to="/products">
            Get Started
          </Link>
        </section>
        <section className="aboutus-container">
          <AboutUs />
        </section>
      </div>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/products" element={<ProductList />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
