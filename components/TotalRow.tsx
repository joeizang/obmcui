import { useEffect, useState } from "react"
import { ProductShape } from "../pages/make-sale"


interface TotalRowProps {
  products: ProductShape[]
}
export default function TotalRow({ products }: TotalRowProps) {
  const [total, setTotal] = useState(0)

  useEffect(() => {
    setTotal(products.map(p => p.Quantity * p.RetailPrice).reduce((x,y) => x + y))
  }, [products])
  return (
    <>
      <td> =N= {total}</td>
    </>
  )
}