import { useState } from "react";
import "./App.css";
import ProductList from "./components/ProductList";
import Search from "./components/Search";
import ProductInfo from "./pages/ProductInfo";
import { Routes, Route } from "react-router";
import { useFetch } from "./hooks/hooks";

function App() {
const { data: products, loading, error } = useFetch("/products", []);
  const [query, setQuery] = useState("")


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
      <h1>Winco Foods</h1>
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
