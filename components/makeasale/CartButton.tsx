import { Fragment, useEffect, useRef, useState } from 'react'
import { CartFill } from 'react-bootstrap-icons'
import {
  Badge,
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from 'reactstrap'
import useLocalStorage from '../../customHooks/useLocalStorage'
import { ProductShape } from '../../pages/make-sale'
import FinishSale from '../FinishSale'

const array: ProductShape[] = []
export default function CartButton() {
  const [cart, setCart] = useLocalStorage('shopCart', array)
  const [cartLength, setCartLength] = useState(0)
  const [modalVisibility, setModalVisibility] = useState(false)
  const toggleModal = () => setModalVisibility(!modalVisibility)
  const modalRef = useRef<any>()

  useEffect(() => {
    setCartLength(cart.length)
  }, [cart.length])
  return (
    <Fragment>
      <Button
        onClick={toggleModal}
        color="success"
        size="lg"
        className="rounded"
      >
        <CartFill /> {'     '}
        Cart{'  '}
        <Badge pill color="white" className="text-success">
          {cartLength}
        </Badge>
      </Button>
      <Modal
        toggle={toggleModal}
        isOpen={modalVisibility}
        ref={modalRef}
        size="xl"
      >
        <ModalHeader
          close={
            <button
              className="close"
              color="warning"
              style={{
                borderRadius: '50%',
                backgroundColor: 'red',
                color: 'white',
                border: 'red 0px',
              }}
              onClick={toggleModal}
            >
              X
            </button>
          }
        ></ModalHeader>
        <ModalBody>
          <FinishSale products={cart} />
        </ModalBody>
        <ModalFooter></ModalFooter>
      </Modal>
    </Fragment>
  )
}
