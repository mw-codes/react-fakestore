// src/components/CartTable.jsx
import { formatCurrency } from "../utils/cartUtils";

const CartTable = ({ cart, setCart }) => {
  const handleChange = (id, delta) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + delta } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Qty</th>
            <th>Price</th>
            <th>Sum</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td>{item.quantity}</td>
              <td>{formatCurrency(item.price)}</td>
              <td>{formatCurrency(item.price * item.quantity)}</td>
              <td>
                <button
                  className="btn btn-sm"
                  onClick={() => handleChange(item.id, 1)}
                >
                  +
                </button>
                <button
                  className="btn btn-sm btn-error"
                  onClick={() => handleChange(item.id, -1)}
                >
                  −
                </button>
              </td>
            </tr>
          ))}
          <tr>
            <td colSpan="3" className="text-right font-bold">
              Total:
            </td>
            <td className="font-bold">{formatCurrency(total)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CartTable;
