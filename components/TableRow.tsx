import { useState } from "react"
import { Input } from "reactstrap"
import { ProductShape } from "../pages/make-sale"

interface TableRowProps {
  product: ProductShape
}

export default function TableRow({ product }: TableRowProps) {
  const [total, setTotal] = useState(product.total)
  const [qty, setQty] = useState<number>(product.Quantity)
  return (
    <>
      {
        <tr key={product.productId}>
          <td>{product.productName}</td>
          <td>
            <Input
              value={qty}
              type="number"
              onChange={(e) => {
                setQty(parseInt(e.target.value))
                setTotal(qty * product.RetailPrice)
              }}
            />
          </td>
          <td>{product.RetailPrice}</td>
          <td>{(product.total = qty * product.RetailPrice)}</td>
        </tr>
      }
    </>
  )
}