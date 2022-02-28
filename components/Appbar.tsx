import { Nav, Navbar, NavbarBrand, NavItem, NavLink } from "reactstrap";

export default function Appbar() {
  return (
    <Navbar dark expand="md" color="dark">
      <NavbarBrand href="/">Shop Manager</NavbarBrand>
      <Nav>
        <NavItem>
          <NavLink href="/products">Products</NavLink>
        </NavItem>
        <NavItem color="white">
          <NavLink href="/products">Sales</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/products">Summary</NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
}
