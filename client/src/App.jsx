import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
const controller = new AbortController();
async function LoadProducts() {
  try {
    const response = await fetch('/products', {
      signal : controller.signal,
    });
    if (!response.ok) {
      throw new Error(`Failed to load products: ${response.status}`);
    }
    const data = await response.json();
    
  
  }catch (error) {
  if (error.name !== 'AbortError') {
    console.error('Error loading products:', error);
  }
}
finally {
  console.log('Product fetch attempt finished');
}
}
LoadProducts();
})
  return (
<h1>Hi Winco Finder</h1>
  )
}

export default App
