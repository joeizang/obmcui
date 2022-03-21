import Link from 'next/link'
import { useState } from 'react'
import {
  ArrowLeftCircleFill,
  ClipboardPlus,
  PlusCircleFill,
} from 'react-bootstrap-icons'
import { useMutation } from 'react-query'
import { Col, FormGroup, Input, Label, Row, Spinner } from 'reactstrap'
import Layout from '../../components/Layout'
import { ProductShape } from '../make-sale'

async function createProduct(payload: ProductShape) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  }
  await fetch('', options)
}

export default function New() {
  const [showSpinner, toggleShowSpinner] = useState(false)
  const mutation = useMutation(createProduct)

  function submitForm() {
    if (mutation.isLoading) {
      toggleShowSpinner(!showSpinner)
    }
    setTimeout(() => {
      toggleShowSpinner(false)
    }, 3000)
  }
  return (
    <>
      <Layout>
        <Row className="mt-5 mb-4">
          <div className="d-flex justify-context-center justify-content-between">
            <span>
              <Link href="/products">
                <a className="btn infoButton btn-lg">
                  <ArrowLeftCircleFill color="white" className="text-white" />{' '}
                  {'    '} Back
                </a>
              </Link>
            </span>
            <span className="text-center">
              <h3 className="h3">New Product</h3>
            </span>
            <span></span>
          </div>
        </Row>
        <Row>
          <form>
            <FormGroup floating>
              <Input
                id="productName"
                name="productName"
                type="text"
                placeholder="Name of product..."
                bsSize="lg"
              />
              <Label for="productName">Product Name</Label>
            </FormGroup>
            <Row>
              <Col xs="6">
                <FormGroup floating>
                  <Input
                    id="costPrice"
                    name="costPrice"
                    type="text"
                    placeholder="Cost Price..."
                    bsSize="lg"
                  />
                  <Label for="costPrice">Cost Price</Label>
                </FormGroup>
              </Col>

              <Col xs="6">
                <FormGroup floating>
                  <Input
                    id="quantityInStock"
                    name="quantityInStock"
                    type="text"
                    placeholder="Quantity in Stock..."
                    bsSize="lg"
                  />
                  <Label for="quantityInStock">Quanity in Stock</Label>
                </FormGroup>
              </Col>
            </Row>

            <Row>
              <Col xs="6">
                <FormGroup floating>
                  <Input
                    id="retailPrice"
                    name="retailPrice"
                    type="text"
                    placeholder="Retail Price..."
                    bsSize="lg"
                  />
                  <Label for="retailPrice">Retail Price</Label>
                </FormGroup>
              </Col>
              <Col xs="6">
                <FormGroup floating>
                  <Input
                    id="supplyDate"
                    name="supplyDate"
                    type="date"
                    placeholder="Date supplied..."
                    bsSize="lg"
                  />
                  <Label for="supplyDate">Date Supplied</Label>
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col xs="6">
                <FormGroup floating>
                  <Input
                    type="text"
                    bsSize="lg"
                    name="brand"
                    id="brand"
                    placeholder="Product brand..."
                  ></Input>
                  <Label htmlFor="brand">Product brand</Label>
                </FormGroup>
              </Col>
              <Col xs="6">
                <FormGroup floating>
                  <Input
                    type="select"
                    bsSize="lg"
                    name="shelfNumber"
                    id="shelfNumber"
                    placeholder="Pick a shelf number..."
                  />
                  <Label htmlFor="shelfNumber">Pick a shelf number</Label>
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <FormGroup floating>
                <Input
                  type="textarea"
                  bsSize="lg"
                  name="comments"
                  id="comments"
                  cols="12"
                  rows="10"
                  placeholder="Comments"
                />
                <Label htmlFor="comments">Comments</Label>
              </FormGroup>
            </Row>
            <Row>
              <button
                className="btn btn-secondary btn-lg btn-block cardButton"
                type="button"
                onClick={submitForm}
              >
                <PlusCircleFill /> {'     '}
                Add Product
              </button>
            </Row>
          </form>
        </Row>
        {showSpinner && (
          <Row className="mt-5 d-flex justify-content-center">
            <Spinner size="lg" type="border" color="text-danger" />
          </Row>
        )}
      </Layout>
    </>
  )
}
