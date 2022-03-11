import { Fragment } from 'react'
import { Badge, Button } from 'reactstrap'
import useLocalStorage from '../../customHooks/useLocalStorage'
import { ProductShape } from '../../pages/make-sale'

const array: ProductShape[] = []
export default function CartButton() {
  const [cart, setCart] = useLocalStorage('shopCart', array)
  return (
    <Fragment>
      <Button>
        Cart{'  '}
        <Badge pill color="success">
          {cart && cart.length}
        </Badge>
      </Button>
    </Fragment>
  )
}
