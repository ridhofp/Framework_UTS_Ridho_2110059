import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {
  Routes,
  Route,
} from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/contactform';
// import Listproduk from '../pages/listproduk';
import Services from '../pages/services';
import Form from '../pages/Form';

function Navigation() {
  return (

    <div>
       <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">PALASAAA.MY.ID</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="Services">Produk</Nav.Link>
              <Nav.Link href="About">Tentang Kami</Nav.Link>
              {/* <Nav.Link href="Form">Form</Nav.Link> */}
              <Nav.Link href="Contact">Kontak</Nav.Link>
              {/* <Nav.Link href="Listproduk">Contact</Nav.Link> */}

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Form" element={<Form />} />
        <Route path="/Services/Form" element={<Form />} />
      </Routes>
    </div>

  );
}

export default Navigation;