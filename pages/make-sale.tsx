import { Fragment, useState } from 'react'
import SearchForm from '../components/makeasale/SearchForm'

export interface ProductShape {
  productName: string
  productImage?: string
  RetailPrice: number
  QuantityInStock: number
  dateSupplied: Date
  productId: number
  total: number
  Quantity: number
}

export default function MakeSale() {
  return (
    <Fragment>
      <SearchForm />
    </Fragment>
  )
}
