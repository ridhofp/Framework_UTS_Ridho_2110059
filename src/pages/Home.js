import React from 'react'
import {Carousel, Button} from 'react-bootstrap';
import slide1 from '../assets/slide1.jpg';
import slide2 from '../assets/slide2.jpg';
import slide3 from '../assets/slide3.jpg';
// import Form from './Form';
import Services from './services';



function Home() {
  return (
    <>
    <Carousel id='home'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide1}
          alt="First slide"
        />
        <Carousel.Caption>
        <h3>MIKROTIK</h3>
          <p>
           Router Dengan Pengguna terbanyak di indonesia
          </p>
          <Button href="Form" variant="primary">Order</Button>{' '}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide2}
          alt="Second slide"
        />

        <Carousel.Caption>
        <h3>UBUNTU SERVER</h3>
          <p>Menggunakan Ubuntu Server Terbaru yaitu Ubuntu</p>
          <Button href="Form" variant="primary">Order</Button>{' '}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Windows Server</h3>
          <p>
          Menggunakan windows server terbaru yaitu Windows server 2022
          </p>
          <Button href="Form" variant="primary">Order</Button>{' '}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
   <Services />
    </>
  )
}

export default Home
