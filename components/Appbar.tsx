import { Button, Nav, Navbar, NavbarBrand, NavItem, NavLink } from 'reactstrap'
import CartButton from './makeasale/CartButton'

export default function Appbar() {
  return (
    <Navbar dark expand="md" color="dark">
      <NavbarBrand href="/">Shop Manager</NavbarBrand>
      <Nav>
        <NavItem>
          <NavLink href="/products">Products</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/products">Summary</NavLink>
        </NavItem>
        <NavItem>
          <CartButton />
        </NavItem>
      </Nav>
    </Navbar>
  )
}
