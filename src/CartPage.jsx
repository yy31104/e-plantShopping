import { useNavigate } from "react-router-dom";
import Header from "./components/Header";
import CartItem from "./CartItem";

function CartPage() {
  const navigate = useNavigate();

  return (
    <div>
      <Header />
      <main className="cart-page-content">
        <CartItem onContinueShopping={() => navigate("/products")} />
      </main>
    </div>
  );
}

export default CartPage;
