import Link from 'next/link'
import { useState } from 'react'
import { PlusCircleFill } from 'react-bootstrap-icons'
import { useQuery } from 'react-query'
import { Row } from 'reactstrap'
import Layout from '../../components/Layout'
import ProductList from '../../components/products/ProductList'
import { ProductShape } from '../make-sale'

async function fetchProducts() {}

export default function Index() {
  const [products, setProducts] = useState<ProductShape[]>([])
  const productQuery = useQuery('fetchProducts', fetchProducts)
  return (
    <Layout>
      <Row>
        <div className="mt-5">
          <Link href="products/new">
            <a className="btn btn-secondary btn-lg">
              <PlusCircleFill className="text-center" /> {'      '}
              Add New Product
            </a>
          </Link>
        </div>
      </Row>
      <Row className="mt-5">
        <ProductList products={products} />
      </Row>
    </Layout>
  )
}
