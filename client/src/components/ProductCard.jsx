import { useNavigate } from "react-router";
export default function ProductCard({product, onSelect}) {
  const navigate = useNavigate();
  return (
    <div className="product">
      <h1 className="product-name">{product.name}</h1>
      <p>{product.pricePerPound}</p>
      <button 
      onClick={() => {onSelect(product.id);
        navigate(`/products/${product.id}`);
      }}
        >
          Product
        </button>
    </div>
  );
}
