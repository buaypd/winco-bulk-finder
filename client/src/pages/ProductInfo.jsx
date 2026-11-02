import { Link, useParams } from "react-router"
import BulkMap from "./BulkMap";
export default function ProductInfo({ products, loading, error }){
  const { id } = useParams();
  const product = products.find(product => product.id === Number(id));

if (loading) return <p>Loading product...</p>;
if (error) return <p>Failed to load product data.</p>;
if (!product) return <p>Product not found.</p>;
  console.log("URL product ID:", id);
  return (
    <div className="mx-auto max-w-4xl px-4 py-6 text-center">
    <Link
  to="/"
  className="mb-4 inline-block text-sm font-medium text-[#DA291C] hover:underline"
>
  ← Back to products
</Link>
    <h2 className="mb-2 text-2xl font-semibold text-gray-900">{product.name}</h2>
    <p>Category: {product.category}</p>
    <p>Section {product.section}</p>
    <p className="mt-2 mb-6 text-lg font-semibold text-gray-900">
  (${product.pricePerPound} / lb)
</p>
    {product.position === null && (
    <p>Location not yet mapped.</p>
    )}
    <BulkMap section={product.section} position={product.position}/>
    
    </div>
  )
}