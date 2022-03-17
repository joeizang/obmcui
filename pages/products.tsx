import { useState } from 'react'
import { useQuery } from 'react-query'
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
