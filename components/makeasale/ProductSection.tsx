import { CardGroup, Row } from "reactstrap";
import { ProductShape } from "../../pages/make-sale";
import Product from "./Product";

interface ProductSectionProps {
  itemsForSale: ProductShape[];
}
export default function ProductSection({ itemsForSale }: ProductSectionProps) {
  return (
    <Row tag="section">
      <CardGroup>
        {itemsForSale.length > 0
          ? itemsForSale.map((item) => (
              <Product key={item.productId} product={item} />
            ))
          : null}
      </CardGroup>
    </Row>
  );
}
