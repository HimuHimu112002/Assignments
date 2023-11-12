import React from 'react'
import '../pages/Home/style.css'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const NavMenu = () => {
  return (
    <>
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#"> 
                    <img className='img-fluid w-100' src='image/logo.png'/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="ms-auto my-2 my-lg-0 py-3"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <Link to="/"><Nav>Home</Nav></Link>
                    <Link to="/team"><Nav >Team</Nav></Link>
                    <Link to="/servic"><Nav>Service</Nav></Link>
                    <Link to="/project"><Nav>Projects</Nav></Link>
                    <Link to="/testimonial"><Nav>Testimonials</Nav></Link>
                    
                    
                    
                <div className='menu__button__section'>
                    <Button className='menuButton__1'>Login</Button>
                    <Button className='menuButton__2'>Register</Button>
                </div>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
  )
}

export default NavMenu