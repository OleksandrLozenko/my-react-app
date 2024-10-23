import React, { Component } from "react";
import { Navbar, Nav, Container, NavbarCollapse, NavbarToggle } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import logo from '../assets/logo192.png';
import Home from '../Pages/Home';

export default class Header extends Component {
    render() {
        return (
            <Router>
                <>
                    <Navbar 
                        sticky='top' 
                        collapseOnSelect 
                        expand='lg' 
                        style={{ 
                            background: 'linear-gradient(90deg, #42280f, #6a11cb)',
                            width: '100%',
                            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
                        }} 
                        variant='dark'
                    >
                        <Container>
                            <Navbar.Brand href='/'>
                                <img 
                                    src={logo} 
                                    height='40' 
                                    width='40' 
                                    className='d-inline-block align-top' 
                                    alt='logo'
                                />
                                Africa Days
                            </Navbar.Brand>
                            <NavbarToggle aria-controls='responsive-navbar-nav' />
                            <NavbarCollapse id='responsive-navbar-nav'>
                                <Nav className='me-auto'>
                                    <Nav.Link href='#about' className="nav-link">Umbes</Nav.Link>
                                    <Nav.Link href='#benefits' className="nav-link">Benefits</Nav.Link>
                                    <Nav.Link href='#achievements' className="nav-link">Saavutused</Nav.Link>
                                    <Nav.Link href='#services' className="nav-link">Teenused</Nav.Link>
                                    <Nav.Link href='#gallery' className="nav-link">Galerii</Nav.Link>
                                    <Nav.Link href="#articles" className="nav-link">Artiklid</Nav.Link>
                                    <Nav.Link href='#order' className="nav-link">Tellimisteenus</Nav.Link>
                                </Nav>
                                <Nav>
                                    <Nav.Link 
                                        href='#contacts' 
                                        className="nav-link cta-button" 
                                        style={{
                                            backgroundColor: '#6a11cb',
                                            color: 'white',
                                            borderRadius: '5px',
                                            padding: '10px 20px',
                                            transition: 'background-color 0.3s',
                                        }}
                                    >
                                        Võtke ühendust
                                    </Nav.Link>
                                </Nav>
                            </NavbarCollapse>
                        </Container>
                    </Navbar>

                    <Routes>
                        <Route exact path="/" element={<Home />} />
                    </Routes>
                </>
            </Router>
        );
    }
}
