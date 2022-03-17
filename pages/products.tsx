import Layout from '../components/Layout'
import ProductList from '../components/products/ProductList'
import { ProductShape } from './make-sale'

export default function Products() {
  return (
    <Layout>
      <ProductList products={products} />
    </Layout>
  )
}
