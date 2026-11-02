import { useNavigate } from "react-router";
export default function ProductCard({ product }) {
  const navigate = useNavigate();
  return (
    <div className="bg-white text-gray-900 border border-gray-200 rounded-xl p-5 flex flex-col h-full">
      <h2 className="text-lg font-semibold leading-snug">{product.name}</h2>
      <p className="mt-2 mb-4 text-sm text-gray-600">
        (${product.pricePerPound} / lb)
      </p>
      <button
        className="bg-[#DA291C] text-white px-8 py-2 rounded-lg mt-auto hover:bg-[#B82217] transition-colors"
        onClick={() => navigate(`/product/${product.id}`)}
      >
        Product
      </button>
    </div>
  );
}
