import { useOutletContext } from "react-router";

const Cart = () => {
  const { cart, setCart } = useOutletContext();

  const handleChange = (id, delta) => {
    setCart((prev) => {
      return prev
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + delta } : item
        )
        .filter((item) => item.quantity > 0);
    });
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
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
                  <td>{item.price.toFixed(2)} €</td>
                  <td>{(item.price * item.quantity).toFixed(2)} €</td>
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
                <td className="font-bold">{total.toFixed(2)} €</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Cart;
