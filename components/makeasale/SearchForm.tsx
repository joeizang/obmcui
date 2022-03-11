import {
  Dispatch,
  Fragment,
  SetStateAction,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { Button, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import { ProductShape } from '../../pages/make-sale'
import ProductSection from './ProductSection'

interface SearchFormProps {}

let defaultProducts = [
  {
    productName: 'Bicycle',
    productImage: '',
    RetailPrice: 23000,
    QuantityInStock: 10,
    dateSupplied: new Date(),
    productId: 1,
    total: 0,
    Quantity: 0
  },
  {
    productName: 'Pet Sprite',
    productImage: '',
    RetailPrice: 2000,
    QuantityInStock: 10,
    dateSupplied: new Date(),
    productId: 2,
    total: 0,
    Quantity: 0
  },
  {
    productName: 'Plastic Chairs',
    productImage: '',
    RetailPrice: 13000,
    QuantityInStock: 9,
    dateSupplied: new Date(),
    productId: 3,
    total: 0,
    Quantity: 0
  },
  {
    productName: 'Tea Mug',
    productImage: '',
    RetailPrice: 3800,
    QuantityInStock: 8,
    dateSupplied: new Date(),
    productId: 4,
    total: 0,
    Quantity: 0
  },
  {
    productName: 'Non Stick Frying Pan',
    productImage: '',
    RetailPrice: 12000,
    QuantityInStock: 5,
    dateSupplied: new Date(),
    productId: 5,
    total: 0,
    Quantity: 0
  },
]

export default function SearchForm({}: SearchFormProps) {
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [products, setProducts] = useState<Array<ProductShape>>(defaultProducts)
  const [filteredProducts, setFilteredProducts] = useState<ProductShape[]>([])
  const sortObjects = (x: ProductShape, y: ProductShape) => {
    if (x.productName < y.productName) return -1
    if (x.productName > y.productName) return 1
    return 0
  }
  function filterProducts() {
    let result: ProductShape[] = []
    if (searchTerm !== '') {
      result = products.filter((term) =>
        term.productName.toLowerCase().includes(searchTerm)
      )
      return result
    }
    return products
  }
  const filter = useMemo(filterProducts, [products, searchTerm])
  useEffect(() => {
    setFilteredProducts(filter)
  }, [filter])
  return (
    <Fragment>
      <Row tag="section" className="mt-5">
        <div>
          <FormGroup>
            <Label for="searchInput">Filter Product :</Label>
            <Input
              id="searchInput"
              name="search"
              placeholder="Search for a Product..."
              type="text"
              value={searchTerm}
              onChange={(evt: any) => {
                const keyword = evt.target.value
                setSearchTerm(keyword)
              }}
            />
          </FormGroup>
        </div>
      </Row>
      <Row>
        <ProductSection itemsForSale={filteredProducts} />
      </Row>
    </Fragment>
  )
}
