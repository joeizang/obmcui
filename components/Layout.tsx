import { Fragment, ReactNode } from 'react'
import { Container, Row } from 'reactstrap'
import Appbar from './Appbar'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <Fragment>
      <Appbar />
      <Container>{children}</Container>
    </Fragment>
  )
}
