import { useState } from 'react'
import { CheckCircleFill, XOctagonFill } from 'react-bootstrap-icons'
import { Button, Input, Row, Table } from 'reactstrap'
import { ProductShape } from '../pages/make-sale'
import TableRow from './TableRow'
import TotalRow from './TotalRow'

interface FinishSaleProps {
  products: ProductShape[]
}

export default function FinishSale({ products }: FinishSaleProps) {
  const [total, setTotal] = useState(0)
  const calculateTotal = () => {
    return products.length > 0
      ? products.map((p) => p.Quantity + p.RetailPrice).reduce((x, y) => x + y)
      : 0
  }
  return (
    <>
      <Table
        striped
        responsive
        bordered
        hover
        size="lg"
        className="rounded text-center"
      >
        <thead className="checkoutTableHead fw-bold">
          <tr>
            <th>Product Name</th>
            <th>Product Quantity</th>
            <th>Product Price</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <TableRow key={product.productId} product={product} />
          ))}
          <tr>
            <td></td>
            <td></td>
            <td>
              <span>
                <b>Grand Total</b>
              </span>
            </td>
            <td>
              <TotalRow products={products} />
            </td>
          </tr>
        </tbody>
      </Table>
      <div className="d-flex justify-content-evenly">
        <span>
          <Button className="btn-lg" color="success">
            <CheckCircleFill /> {'    '}
            Finish Sale
          </Button>
        </span>
        <span>
          <Button className="btn-lg" color="danger">
            <XOctagonFill /> {'    '}
            Cancel Sale
          </Button>
        </span>
      </div>
    </>
  )
}
