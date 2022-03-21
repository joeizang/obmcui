import { CardGroup, Row } from 'reactstrap'
import { ProductShape } from '../../pages/make-sale'
import Product from './Product'

interface ProductSectionProps {
  itemsForSale: ProductShape[]
}
export default function ProductSection({ itemsForSale }: ProductSectionProps) {
  return (
    <Row tag="section">
      <div className="d-flex flex-wrap justify-content-start productSection">
        {itemsForSale.length > 0 ? (
          itemsForSale.map((item) => (
            <Product key={item.productId} product={item} />
          ))
        ) : (
          <h4 className="h4">No results found!</h4>
        )}
      </div>
    </Row>
  )
}
