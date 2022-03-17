import { useEffect, useState } from 'react'
import { ProductShape } from '../pages/make-sale'
import CurrencyFormat from 'react-currency-format'

interface TotalRowProps {
  products: ProductShape[]
}
export default function TotalRow({ products }: TotalRowProps) {
  const [total, setTotal] = useState(0)

  useEffect(() => {
    setTotal(
      products.map((p) => p.Quantity * p.RetailPrice).reduce((x, y) => x + y)
    )
  }, [products])
  return (
    <>
      <td>
        {' '}
        <b>
          <span>&#8358;</span>
        </b>{' '}
        <CurrencyFormat
          value={total}
          displayType={'text'}
          thousandSeparator={true}
        />
      </td>
    </>
  )
}
