import { useState, useEffect } from "react";
import "./App.css";
import ProductList from "./components/ProductList";
import Search from "./components/Search";
import ProductInfo from "./pages/ProductInfo";
import { Routes, Route } from "react-router";

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
  // console.log(selectedId);
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
      <Routes>
      <Route path="/" element={
        <>
        <Search value={query} onQueryChange={setQuery} />
       {renderResults()}
        </>
        }/>
        <Route
      path="/product/:id"
      element={<ProductInfo products={products} loading={loading} error={error} />}
      />
        
      </Routes>
       

    </div>
  );
}

export default App;
