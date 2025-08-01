import { useState, useEffect } from "react";
import { Outlet, Link } from "react-router";

const MainLayout = () => {
  const [cart, setCart] = useState(() => {
    // Initialer Zustand aus localStorage laden
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  // Bei jeder Änderung: cart im localStorage speichern
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Gesamtmenge berechnen
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col">
      <nav className="navbar bg-base-200 shadow mb-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            🛒 MyStore
          </Link>
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/cart">
                Cart
                {totalItems > 0 && (
                  <span className="badge badge-sm ml-1">{totalItems}</span>
                )}
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <main className="flex-grow container mx-auto px-4">
        <Outlet context={{ cart, setCart }} />
      </main>
    </div>
  );
};

export default MainLayout;
