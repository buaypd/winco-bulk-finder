export default function ProductCard({product}) {
  return (
    <div className="product">
      <h1 className="product-name">{product.name}</h1>
      <p>{product.pricePerPound}</p>
    </div>
  );
}
