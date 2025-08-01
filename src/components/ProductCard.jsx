import { Link } from "react-router";
import { formatCurrency } from "../utils/cartUtils";

const ProductCard = ({ product, cart, setCart }) => {
  const inCart = cart.find((item) => item.id === product.id);
  const quantity = inCart ? inCart.quantity : 0;

  const handleAdd = () => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const handleRemove = () => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  return (
    <div className="card bg-base-100 shadow-md">
      <figure className="p-4">
        <img
          src={product.image}
          alt={product.title}
          className="h-32 object-contain"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-sm">{product.title}</h2>
        <p className="text-lg font-bold">{formatCurrency(product.price)}</p>
        <p className="text-xs text-gray-500 capitalize">{product.category}</p>
        <div className="card-actions justify-end mt-2">
          {quantity > 0 ? (
            <div className="flex items-center gap-2">
              <button className="btn btn-sm btn-error" onClick={handleRemove}>
                −
              </button>
              <span className="text-sm">{quantity}</span>
              <button className="btn btn-sm btn-success" onClick={handleAdd}>
                +
              </button>
            </div>
          ) : (
            <button className="btn btn-sm btn-primary" onClick={handleAdd}>
              Add to cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
