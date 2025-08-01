// src/components/Navbar.jsx
import { Link } from "react-router";

const Navbar = ({ cartCount }) => {
  return (
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
              {cartCount > 0 && (
                <span className="badge badge-sm ml-1">{cartCount}</span>
              )}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
