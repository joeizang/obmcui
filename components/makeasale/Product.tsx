import { Fragment, useState } from 'react'
import { Button, Card, CardBody, CardFooter, CardHeader } from 'reactstrap'
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
