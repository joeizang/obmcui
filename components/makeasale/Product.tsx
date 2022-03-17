import { Fragment, useState } from 'react'
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Input,
  Label,
} from 'reactstrap'
import useLocalStorage from '../../customHooks/useLocalStorage'
import { ProductShape } from '../../pages/make-sale'

interface ProductProps {
  product: ProductShape
}
export default function Product({ product }: ProductProps) {
  const [value, setValue] = useLocalStorage<ProductShape[]>('shopCart', [])
  const [buttonText, setButtonText] = useState('Buy')
  const [buttonColor, setButtonColor] = useState('secondary')
  const [disableButton, setDisableButton] = useState(false)
  const [qty, setQty] = useState(product.Quantity)

  const changeQuantity = (e: any) => {
    product.Quantity = parseInt(e.target.value)
    setQty(parseInt(e.target.value))
  }
  return (
    <Fragment>
      <Card className="shadow rounded mb-3">
        <CardHeader className="text-center" tag="h3">
          {product.productName}
        </CardHeader>
        <CardBody>
          <Col>
            <Label size="lg">
              <b>Price: {product.RetailPrice}</b>
            </Label>
          </Col>

          <Col sm={10} md={10} lg={10} xl={10}>
            <Label size="lg">
              <b>Quantity :</b>
            </Label>
            <Input
              bsSize="lg"
              size={3}
              type="number"
              value={qty}
              onChange={changeQuantity}
              className="text-center w-50"
            />
          </Col>
        </CardBody>
        <CardFooter>
          <Button
            color={buttonColor}
            block
            disabled={disableButton}
            onClick={(e) => {
              setButtonText('Bought')
              setButtonColor('warning')
              const currentCart = value as ProductShape[]
              currentCart.push(product)
              console.log('currentCart looks like this ', currentCart)
              setValue(currentCart)
              setDisableButton(true)
            }}
          >
            {buttonText}
          </Button>
        </CardFooter>
      </Card>
    </Fragment>
  )
}
