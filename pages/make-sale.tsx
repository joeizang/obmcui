import { Fragment } from "react";
import ProductSection from "../components/makeasale/ProductSection";
import SearchForm from "../components/makeasale/SearchForm";

export default function MakeSale() {
  return (
    <Fragment>
      <SearchForm />
      <ProductSection />
    </Fragment>
  );
}
