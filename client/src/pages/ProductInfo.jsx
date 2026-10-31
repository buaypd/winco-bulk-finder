export default function ProductInfo({ product }){
  return (
    <>
    <h2>{product.name}</h2>
    <p>{product.category}</p>
    <p>{product.section}</p>
    <p>{product.pricePerPound}</p>
    </>
  )
}