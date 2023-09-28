import React from 'react';
import '../App.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

const NavBar = () => {
    return (

        <Navbar variant="light" bg="white" fixed="top" expand="md" style={{ borderBottom: '1px solid gray' }}>
            <Container >
                <Navbar.Brand href="#" style={{ color: 'black', fontWeight: 'bold', fontSize: '30px' }}>
                    <i style={{ fontSize: '2rem', color: '#f48e24' }} className="bi bi-currency-bitcoin"></i>
                    TokenTalk.
                </Navbar.Brand>

                <Nav className="me-auto">
                    <Nav.Link href="#" style={{marginLeft:'50px'} }>Configure Watchlist</Nav.Link>
                    <Nav.Link href="#" style={{ marginLeft: '25px' }}>View Chats</Nav.Link>
                </Nav>
                <Form>
                    <Form.Check style={{marginRight: '50px', marginTop:'3px'}}type="switch" label=<i class="bi bi-sun"></i> />
                </Form>
                <Nav style={{marginRight:'30px'} }>
                    <i style={{ marginTop: '8px' }} class="bi bi-person-circle"></i>
                    <NavDropdown title="Account" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#"> Sign In</NavDropdown.Item>
                        <NavDropdown.Item href="#"> Create Account</NavDropdown.Item>
                    </NavDropdown>

                </Nav>
            </Container>
        </Navbar>


    );

};


export default NavBar;
