import { React, useState } from 'react'
import "./Form.css";
import { Col, Container, Form, Row } from 'react-bootstrap'
import { useNavigate } from "react-router-dom";
export default function Contact() {
  const [name, setName] = useState("");
  const [alamat, setAlamat] = useState("");
  const [email, setEmail] = useState("");
  const [pesanan, setPesanan] = useState("");
  const [jumlah, setjumlah] = useState("");
  const [Total, setTotal] = useState("");
  const [bayar, setBayar] = useState("");

  const [sisabayar, setSisaBayar] = useState("");
  const [inputs, setInputs] = useState("");
  let navigate = useNavigate();
  async function handleClick(event) {
    event.preventDefault();
    navigate("/Home", { replace: true });
  }
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    let Total = 300000 * parseInt(inputs.jumlah);
    setTotal(Total);
    setName(inputs.nama);
    setAlamat(inputs.alamat);
    setEmail(inputs.email);
    setPesanan(inputs.pesanan);
    setBayar(inputs.bayar);
    setSisaBayar(sisabayar);
    setjumlah(inputs.jumlah);
  }
  return (
    <>
    <div className='text-center'><h1><b>Page Order VPS</b></h1>
    <p>VPS Mikrotik <br></br>VPS Windows Server<br></br>VPS Linux Server</p>
    </div>
      <Container>
        <Row>
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col>
                <Form.Label ><b>Nama</b></Form.Label>
                <Form.Control
                  type="text"
                  name="nama"
                  onChange={handleChange}
                />
              </Col>
              <Col>
                <Form.Label ><b>Alamat</b></Form.Label>
                <Form.Control
                  type="text"
                  name="alamat"
                  onChange={handleChange}
                />
              </Col>
              <Col>
                <Form.Label ><b>Email</b></Form.Label>
                <Form.Control
                  type="text"
                  name="email"
                  onChange={handleChange}
                />
              </Col>
              <Col>
                <Form.Label ><b>Pesanan</b></Form.Label>
                <Form.Control
                  type="text"
                  name="pesanan"
                  onChange={handleChange}
                />
              </Col>
              <Col>
                <Form.Label ><b>Jumlah</b></Form.Label>
                <Form.Control
                  type="number"
                  name="jumlah"
                  onChange={handleChange}
                />
              </Col>
              <Col>
                <Form.Label ><b>Bayar</b></Form.Label>
                <Form.Control
                  type="number"
                  name="bayar"
                  onChange={handleChange}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <input className='mt-2 mb-2' type="submit" />
              </Col>
            </Row>
          </Form>
        </Row>
        <Container className="bg-light">
          <Row>
            <Col md={5} sm={5}><b>Nama</b></Col>
            <Col md={5} sm={5}>{name}</Col>
          </Row>
          <Row>
            <Col md={5} sm={5}><b>Alamat</b></Col>
            <Col md={5} sm={5}>{alamat}</Col>
          </Row>
          <Row>
            <Col md={5} sm={5}><b>Email</b></Col>
            <Col md={5} sm={5}>{email}</Col>
          </Row>
          <Row>
            <Col md={5} sm={5}><b>Pesanan</b></Col>
            <Col md={5} sm={5}>{pesanan} <b></b></Col>
          </Row>
          <Row>
          <Col md={5} sm={5}><b>Harga</b></Col>
          <Col md={5} sm={5}><b>300000</b></Col>
          </Row>
          <Row>
            <Col md={5} sm={5}><b>Jumlah</b></Col>
            <Col md={5} sm={5}>{jumlah}</Col>
          </Row>
          <Row>
            <Col md={5} sm={5}><b>Total</b></Col>
            <Col md={5} sm={5}>{Total}</Col>
          </Row>
          <Row>
            <Col md={5} sm={5}><b>Bayar</b></Col>
            <Col md={5} sm={5}>{bayar}</Col>
          </Row>
          <Row>
            <Col md={5} sm={5}><b>Sisa Pembayaran</b></Col>
            <Col md={5} sm={5}>{sisabayar}</Col>
          </Row>
        </Container>
      </Container>
    </>
  )
}

