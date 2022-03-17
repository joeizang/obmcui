import { useState } from 'react'
import Layout from '../components/Layout'
import ProductList from '../components/products/ProductList'
import { ProductShape } from './make-sale'

export default function Products() {
  const [products, setProducts] = useState<ProductShape[]>([])
  const productQuery = useQuery('fetchProducts', () => {})
  return (
    <Layout>
      <ProductList products={products} />
    </Layout>
  )
}
function useQuery(arg0: string, arg1: () => void) {
  throw new Error('Function not implemented.')
}
