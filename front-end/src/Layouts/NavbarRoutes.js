import {React,Fragment} from 'react'
import {Navbar,Container,Nav} from 'react-bootstrap'
import {Link,Outlet} from 'react-router-dom'

const NavbarRoutes = () => {
  return (
    <>    
   <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand as={Link} to={"/"}>MercadoLibre</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link as={Link} to={"/home"}>Home</Nav.Link>
      <Nav.Link as={Link} to={"/about"}>About</Nav.Link> 
      <Nav.Link as={Link} to={"/contact"}>Contact</Nav.Link> 
      <Nav.Link as={Link} to={"/productos"}>Productos</Nav.Link>
     {/*  <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown> */}
    </Nav>
    <Nav>
      <Nav.Link as={Link} to={"/login"}>Login</Nav.Link>
      <Nav.Link as={Link} to={"/registro"}>Registro</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>  

        <section>
            <Outlet></Outlet>
        </section> 
       </> 
  )
}

export default NavbarRoutes
