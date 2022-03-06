import { Fragment, useState } from 'react'
import { Button, Form, FormGroup, Input, Label, Row } from 'reactstrap'

interface SearchFormProps {
  filterAction: (term: string) => void
}

export default function SearchForm({ filterAction }: SearchFormProps) {
  const [searchTerm, setSearchTerm] = useState<string>('')
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
              value={searchTerm}
              onChange={(evt: any) => {
                setSearchTerm(evt.target.value)
              }}
            />
          </FormGroup>
          <FormGroup>
            <Button
              outline
              block
              onClick={() => {
                console.log(searchTerm)
                filterAction(searchTerm)
              }}
            >
              <span>Search</span>
            </Button>
          </FormGroup>
        </Form>
      </Row>
    </Fragment>
  )
}
