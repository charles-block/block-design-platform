import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Link } from 'react-router-dom';

function TopNavBar() {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Link className='navbar-brand' to='/'>Block Design Platform</Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Link className='nav-link' to='/'>Home</Link>
                            <Link className='nav-link' to='/docs'>Docs</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    )
}

export default TopNavBar;