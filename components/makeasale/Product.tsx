import { Fragment } from 'react'
import { Button, Card, CardBody, CardFooter, CardHeader } from 'reactstrap'
import { ProductShape } from '../../pages/make-sale'

interface ProductProps {
  product: ProductShape
}
export default function Product({ product }: ProductProps) {
  return (
    <Fragment>
      <Card className="shadow rounded mb-3">
        <CardHeader className="text-center" tag="h3">
          {product.productName}
        </CardHeader>
        <CardBody>
          <span>
            <b>Product Price: =N= {product.RetailPrice}</b>
          </span>
        </CardBody>
        <CardFooter>
          <Button block>Buy</Button>
        </CardFooter>
      </Card>
    </Fragment>
  )
}
