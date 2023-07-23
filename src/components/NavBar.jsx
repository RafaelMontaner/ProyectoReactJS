import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget/CartWidget';

const NavBar = () => {
    return (
        
        <Navbar  style={{ background:`linear-gradient(#B58DB6, #1CCDEF)` }} expand="lg">
        <Container >
        <Navbar.Brand  href="#home">PC WORLD</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse  id="basic-navbar-nav">
            <Nav  className="me-auto">
            <Nav.Link href="#home"><Link to="/" >Home</Link></Nav.Link>
            <Nav.Link href="#link">Arma tu PC</Nav.Link>
            
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
                <NavDropdown.Item > <Link to="/category/Amd"> AMD </Link> </NavDropdown.Item>
                <NavDropdown.Item ><Link to="/category/Intel">INTEL</Link>
                </NavDropdown.Item>
                <NavDropdown.Item  > <Link to="/category/Notebooks"> NOTEBOOKS
                    </Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                    <Link to="/category/Ram">RAM</Link>
                </NavDropdown.Item>
                </NavDropdown>
                
            </Nav>
            
            <CartWidget  />
            
            
            </Navbar.Collapse>
        </Container>
        </Navbar>
    )
}

export default NavBar