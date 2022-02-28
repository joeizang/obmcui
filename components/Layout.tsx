import { Fragment, ReactNode } from "react";
import { Container, Row } from "reactstrap";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <Fragment>
      <Container>{children}</Container>
    </Fragment>
  );
}
