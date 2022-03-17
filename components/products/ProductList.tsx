import { Table } from 'reactstrap'
import { ProductShape } from '../../pages/make-sale'
import ProductListTableRow from './ProductListTableRow'

interface ProductListProps {
  products: ProductShape[]
}

export default function ProductList({ products }: ProductListProps) {
  return (
    <>
      <Table striped bordered responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>
              <b>Product Name</b>
            </th>
            <th>
              <b>Quantity In Stock</b>
            </th>
            <th>
              <b>Date Supplied</b>
            </th>
            <th>
              <b>Actions</b>
            </th>
          </tr>
        </thead>
        <tbody>
          <ProductListTableRow />
        </tbody>
      </Table>
    </>
  )
}
