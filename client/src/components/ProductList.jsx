import ProductCard from "./ProductCard";

export default function ProductList({ products, onSelect }) {
  return (
    <ul>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onSelect={onSelect} />
      ))}
    </ul>
  );
}
