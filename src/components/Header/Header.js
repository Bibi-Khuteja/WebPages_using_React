
import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';
import './Header.scss'
import logo from "../../images/gym-logo.jpeg"
import {Outlet,Link } from 'react-router-dom'


function Header() {
    return (
      <div>
      <div className='header'>
            <Navbar className='bg-header bg-dark' expand="lg">
            <div className='container'>
            <Navbar.Brand href="#home">
                <img src={logo} className='logo-img'/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                <Link className="nav-items" to="/">Home</Link>
                <Link className="nav-items"  to="/about">About</Link>
                <Link className="nav-items" to="/plans">Plans</Link>
                <Link className="nav-items"  to="/trainer">Trainer</Link>
                <NavDropdown title="Contact" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
                </Nav>
                <Form className='d-flex'>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-info">Search</Button>
                </Form>
            </Navbar.Collapse>
            </div>
            </Navbar> 
       
            </div>
      </div>
    );
  }
  export default Header;