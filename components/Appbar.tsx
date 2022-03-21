import { Button, Nav, Navbar, NavbarBrand, NavItem, NavLink } from 'reactstrap'
import CartButton from './makeasale/CartButton'

export default function Appbar() {
  return (
    <Navbar dark expand="md" color="dark">
      <NavbarBrand href="/" className="fw-bold">
        Shop Manager
      </NavbarBrand>
      <Nav>
        <NavItem className="fw-bold menuItems">
          <NavLink href="/products">Products</NavLink>
        </NavItem>
        <NavItem className="fw-bold menuItems">
          <NavLink href="/products">Summary</NavLink>
        </NavItem>
        <NavItem>
          <NavLink></NavLink>
        </NavItem>
        <NavItem>
          <NavLink></NavLink>
        </NavItem>
        <NavItem>
          <NavLink></NavLink>
        </NavItem>
        <NavItem>
          <CartButton />
        </NavItem>
      </Nav>
    </Navbar>
  )
}
