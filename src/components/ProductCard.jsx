import PropTypes from "prop-types";

function ProductCard({ plant, inCart, onAddToCart }) {
  return (
    <article className="product-card">
      <img className="product-image" src={plant.image} alt={plant.name} />
      <h3 className="product-title">{plant.name}</h3>
      <p className="product-description">{plant.description}</p>
      <p className="product-cost">${plant.price.toFixed(2)}</p>
      <button
        className={`product-button ${inCart ? "added-to-cart" : ""}`}
        onClick={() => onAddToCart(plant)}
        disabled={inCart}
      >
        {inCart ? "Added to Cart" : "Add to Cart"}
      </button>
    </article>
  );
}

ProductCard.propTypes = {
  plant: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  inCart: PropTypes.bool.isRequired,
  onAddToCart: PropTypes.func.isRequired,
};

export default ProductCard;
