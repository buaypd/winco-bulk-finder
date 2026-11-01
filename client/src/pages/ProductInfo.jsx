import { useParams } from "react-router"
export default function ProductInfo({ product }){
  const { id } = useParams();
  console.log("URL product ID:", id);
  return (
    <>
    <h2>{product.name}</h2>
    <p>{product.category}</p>
    <p>{product.section}</p>
    <p>{product.pricePerPound}</p>
    </>
  )
}