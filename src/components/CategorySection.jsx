import PropTypes from "prop-types";
import ProductCard from "./ProductCard";

function CategorySection({ category, plants, activeCartIds, onAddToCart }) {
  return (
    <section className="category-section">
      <h2 className="plant-heading">{category}</h2>
      <div className="product-list">
        {plants.map((plant) => (
          <ProductCard
            key={plant.id}
            plant={plant}
            inCart={activeCartIds.has(plant.id)}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </section>
  );
}

CategorySection.propTypes = {
  category: PropTypes.string.isRequired,
  plants: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    }),
  ).isRequired,
  activeCartIds: PropTypes.instanceOf(Set).isRequired,
  onAddToCart: PropTypes.func.isRequired,
};

export default CategorySection;
