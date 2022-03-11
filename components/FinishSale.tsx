import { useState } from 'react'
import { Input, Table } from 'reactstrap'
import { ProductShape } from '../pages/make-sale'
import TableRow from './TableRow'
import TotalRow from './TotalRow'

interface FinishSaleProps {
  products: ProductShape[]
}

export default function FinishSale({ products }: FinishSaleProps) {
  
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
            <td>Grand Total</td>
            <TotalRow products={products}/>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </Table>
    </>
  )
}
