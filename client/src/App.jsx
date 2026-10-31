import { useState, useEffect } from "react";
import ProductCard from "./components/ProductCard";
import "./App.css";
import ProductList from "./components/ProductList";
import Search from "./components/Search";

function App() {
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState("")

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

  // console.log(query);

  // filtering products
  // derived value
  const filteredProducts = query ?
   products.filter(el => el.name.toLowerCase().includes(query.toLowerCase())) : products;

     function renderResults(){
    if(loading){
  return <div>Loading</div>;
    }
  if (error) {
    return <div>Failed to Load data</div>;
    }
  if (filteredProducts.length === 0) {
    return <div>No Products Match</div>
  }
    return <ProductList products={filteredProducts} />
  }

  return (
    <div>
      <h1>Hi Winco Finder</h1>

      <Search value={query} onQueryChange={setQuery} />
      {renderResults()}

    </div>
  );
}

export default App;
