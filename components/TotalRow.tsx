import { useEffect, useState } from "react"
import { ProductShape } from "../pages/make-sale"


interface TotalRowProps {
  products: ProductShape[]
}
export default function TotalRow({ products }: TotalRowProps) {
  const [total, setTotal] = useState(products.length > 0 ? products.map(p => p.total).reduce((x,y) => x + y) : 0)

  useEffect(() => {
    setTotal(products.map(p => p.total).reduce((x,y) => x + y))
  }, [products])
  return (
    <>
      <td> =N= {total}</td>
    </>
  )
}