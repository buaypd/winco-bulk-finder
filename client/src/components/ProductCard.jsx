import { useNavigate } from "react-router";
export default function ProductCard({product}) {
  const navigate = useNavigate();
  return (
    <div className="product">
      <h1 className="product-name">{product.name}</h1>
      <p>{product.pricePerPound}</p>
      <button 
      onClick={() => 
        navigate(`/product/${product.id}`)
      }
        >
          Product
        </button>
    </div>
  );
}
