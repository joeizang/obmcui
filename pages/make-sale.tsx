import { Fragment, useState } from 'react'
import ProductSection from '../components/makeasale/ProductSection'
import SearchForm from '../components/makeasale/SearchForm'

export interface ProductShape {
  productName: string
  productImage?: string
  RetailPrice: number
  QuantityInStock: number
  dateSupplied: Date
  productId: number
}

let defaultProducts = [
  {
    productName: 'Bicycle',
    productImage: '',
    RetailPrice: 23000,
    QuantityInStock: 10,
    dateSupplied: new Date(),
    productId: 1,
  },
  {
    productName: 'Pet Sprite',
    productImage: '',
    RetailPrice: 2000,
    QuantityInStock: 10,
    dateSupplied: new Date(),
    productId: 2,
  },
  {
    productName: 'Plastic Chairs',
    productImage: '',
    RetailPrice: 13000,
    QuantityInStock: 9,
    dateSupplied: new Date(),
    productId: 3,
  },
  {
    productName: 'Tea Mug',
    productImage: '',
    RetailPrice: 3800,
    QuantityInStock: 8,
    dateSupplied: new Date(),
    productId: 4,
  },
  {
    productName: 'Non Stick Frying Pan',
    productImage: '',
    RetailPrice: 12000,
    QuantityInStock: 5,
    dateSupplied: new Date(),
    productId: 5,
  },
]

export default function MakeSale() {
  const [products, setProducts] = useState<Array<ProductShape>>(defaultProducts)
  const sortObjects = (x: ProductShape, y: ProductShape) => {
    if (x.productName < y.productName) return -1
    if (x.productName > y.productName) return 1
    return 0
  }
  function filterProducts(searchTerm: string) {
    let result = []
    if (searchTerm.length < 1) {
      result = defaultProducts
      setProducts(result.sort(sortObjects))
    }
    result = products.filter((term) => term.productName.startsWith(searchTerm))
    setProducts(result)
  }
  return (
    <Fragment>
      <SearchForm filterAction={filterProducts} />
      <ProductSection itemsForSale={products} />
    </Fragment>
  )
}
