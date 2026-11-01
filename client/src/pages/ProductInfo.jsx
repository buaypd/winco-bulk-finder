import { Link, useParams } from "react-router"
export default function ProductInfo({ products, loading, error }){
  const { id } = useParams();
  const product = products.find(product => product.id === Number(id));

if (loading) return <p>Loading product...</p>;
if (error) return <p>Failed to load product data.</p>;
if (!product) return <p>Product not found.</p>;
  console.log("URL product ID:", id);
  return (
    <>
    <Link to="/"> Back to Product</Link>
    <h2>{product.name}</h2>
    <p>{product.category}</p>
    <p>{product.section}</p>
    <p>{product.pricePerPound}</p>
    
    </>
  )
}