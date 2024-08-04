import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown, Container, Button } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import './Navbar.css';
//import { useAuthListener, logout } from '../Login/AuthContext';

const NavigationBar = () => {
  const [menu, setMenu] = useState("Home");
  //const {user , userType} = useAuthListener();
  const navigate = useNavigate();

 {/* const handleLogout = async () => {
    await logout();
    navigate('/');
  };*/}

  return (
    <Navbar bg="white" variant="light" expand="lg" collapseOnSelect>
      <Container>
        <Navbar.Brand className="brand" href="/">
          <img
            src={`${process.env.PUBLIC_URL}/images/LOGO.png`}
            width="80"
            height="30"
            className="d-inline-block align-top"
            alt=""
          />
          {' '}
          Télé expertise 
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <div className="mx-auto">
            <Nav className="me-auto">
              <NavLink exact to="/" className="nav-link" onClick={() => { setMenu("Home") }}>Home{menu === "Home" ? <hr /> : <></>}</NavLink>
              <NavLink to="/products" className="nav-link" onClick={() => { setMenu("Shop") }}>Profile{menu === "Shop" ? <hr /> : <></>}</NavLink>
              <NavLink to="/about" className="nav-link" onClick={() => { setMenu("About") }}>About{menu === "About" ? <hr /> : <></>}</NavLink>
              <NavLink to="contact" className="nav-link" onClick={() => { setMenu("Contact") }}>Contact{menu === "Contact" ? <hr /> : <></>}</NavLink>
              {/*userType === "admin" && (
              <NavLink to="/admin" className="nav-link" onClick={() => { setMenu("Admin") }}>Admin{menu === "Admin" ? <hr /> : <></>}</NavLink>
              )*/}
              <NavDropdown title="Categories" id="basic-nav-dropdown" menuVariant="dark" >
                <NavDropdown.Item href="/category/paintings">Généraliste</NavDropdown.Item>
                <NavDropdown.Item href="/category/sculptures">Dentiste</NavDropdown.Item>
                <NavDropdown.Item href="/category/photography"></NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/category/more">More...</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </div>

          {/*<Nav className="ms-auto d-flex flex-row" style={{ marginTop: '5px' }}>
            <Button variant="warning" href="/cart" className="me-2" style={{ width: '120px' }}>Cart</Button>
            {user ? (
              <Button variant="outline-warning" onClick={handleLogout} style={{ width: '120px' }}>Logout</Button>
            ) : (
              <NavLink variant="outline-warning" to="/login" className="nav-link" onClick={() => { setMenu("Login") }}>Login{menu === "Login" ? <hr /> : <></>}</NavLink>
            )}
         
          </Nav>*/}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
