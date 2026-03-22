import { useDispatch, useSelector } from "react-redux";
import "./ProductList.css";
import { addItem } from "./CartSlice";
import plantsData from "./data/plants";
import Header from "./components/Header";
import CategorySection from "./components/CategorySection";

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const activeCartIds = new Set(
    cartItems.filter((item) => item.quantity > 0).map((item) => item.id),
  );

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
  };

  return (
    <div className="products-page">
      <Header />
      <main className="products-content">
        <div className="products-intro">
          <h2>Our Plant Collection</h2>
          <p>Browse by category and add your favorites to the cart.</p>
        </div>
        <div className="product-grid">
          {plantsData.map((category) => (
            <CategorySection
              key={category.category}
              category={category.category}
              plants={category.plants}
              activeCartIds={activeCartIds}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default ProductList;
