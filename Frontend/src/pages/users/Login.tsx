import { Col, Container, Row } from 'react-bootstrap'

function Login() {
  return (
    <>
      <Container className='p-0' fluid>
  <div style={{
    background: 'linear-gradient(180deg,  #808080 0%, #000000 100%)',
    height: "100vh",
    width: "50%",
    clipPath: 'polygon(0 0, 100% 0, 80% 100%, 0 100%)',
    zIndex: 17
  }} />
  <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100vh" }}>
    <Row>
      <Col md={5} sm={4} xs={11} style={{ borderRadius: "10px", height: "100px", backgroundColor: "white", margin: ".5rem", marginTop: 0, boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)", padding: "5px", minWidth: "215px" }}>
        <img src={""} style={{ width: "45px" }} alt="" />
        <p style={{ fontSize: "12px", margin: 0, marginLeft: "7px" }}>{""}</p>
        <h5 style={{ marginLeft: "7px", marginBottom: "1rem", display: "flex", justifyContent: "space-between", }}></h5>
      </Col>
      <Col md={5} sm={4} xs={11} style={{ borderRadius: "10px", height: "100px", backgroundColor: "white", margin: ".5rem", marginTop: 0, boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)", padding: "5px", minWidth: "215px" }}>
        <img src={""} style={{ width: "45px" }} alt="" />
        <p style={{ fontSize: "12px", margin: 0, marginLeft: "7px" }}>{""}</p>
        <h5 style={{ marginLeft: "7px", marginBottom: "1rem", display: "flex", justifyContent: "space-between", }}></h5>
      </Col>
    </Row>
  </div>
</Container>


    </>
  )
}

export default Login
