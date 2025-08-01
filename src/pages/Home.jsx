import { useEffect, useState } from "react";
import { useOutletContext } from "react-router";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const { cart, setCart } = useOutletContext();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then(setProducts);
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then(setCategories);
  }, []);

  return (
    <div className="space-y-6">
      <section>
        <h2 className="text-xl font-bold mb-2">Categories</h2>
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <span key={cat} className="badge badge-outline capitalize">
              {cat}
            </span>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-2">Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              cart={cart}
              setCart={setCart}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
