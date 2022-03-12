import { useState } from 'react'
import { Button, Input, Table } from 'reactstrap'
import { ProductShape } from '../pages/make-sale'
import TableRow from './TableRow'
import TotalRow from './TotalRow'

interface FinishSaleProps {
  products: ProductShape[]
}

export default function FinishSale({ products }: FinishSaleProps) {
  const [total, setTotal] = useState(0)
  const calculateTotal = () => {
    return products.length > 0 ? products.map(p => p.Quantity + p.RetailPrice).reduce((x,y) => x + y) : 0
  }
  return (
    <>
      <Table striped>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Product Quantity</th>
            <th>Product Price</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <TableRow key={product.productId} product={product}/>
          ))}
          <tr>
            <td></td>
            <td></td>
            <td>
              <Button onClick={calculateTotal}>
              Grand Total
              </Button>
            </td>
            <td>
              <TotalRow
                products={products}
              />
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  )
}
