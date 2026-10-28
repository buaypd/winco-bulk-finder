import { useState, useEffect } from "react";
import ProductCard from "./components/ProductCard";
import "./App.css";
import ProductList from "./components/ProductList";

function App() {
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await fetch("/products");
        if (!response.ok) {
          throw new Error("Failed to fetch productts");
        }
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (error) {
    return <div>Failed to Load data</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }
  
  return (
    <div>
      <h1>Hi Winco Finder</h1>
      <ProductList products={products} />
    </div>
  );
}

export default App;
