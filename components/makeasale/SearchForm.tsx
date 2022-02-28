import { Fragment } from "react";
import { Button, Form, FormGroup, Input, Label, Row } from "reactstrap";

export default function SearchForm() {
  const handleSubmit = (evt: any) => {
    evt.preventDefault();
    console.log("clicked the button!");
  };
  return (
    <Fragment>
      <Row tag="section" className="mt-5">
        <Form>
          <FormGroup>
            <Label for="searchInput">Filter Product :</Label>
            <Input
              id="searchInput"
              name="search"
              placeholder="Search for a Product..."
              type="text"
            ></Input>
          </FormGroup>
          <FormGroup>
            <Button outline block onClick={handleSubmit}>
              <span>Search</span>
            </Button>
          </FormGroup>
        </Form>
      </Row>
    </Fragment>
  );
}
