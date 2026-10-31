
export default function ProductCard({product, onSelect}) {
  return (
    <div className="product">
      <h1 className="product-name">{product.name}</h1>
      <p>{product.pricePerPound}</p>
      <button onClick={() => onSelect(product.id)}></button>

    </div>
  );
}
