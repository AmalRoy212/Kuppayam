import { Col, Container, Row } from 'react-bootstrap'

function Login() {
  return (
    <>
      <Container className='p-0' fluid>
  <div style={{
    background: 'linear-gradient(180deg, #000000  0%, #808080 100%)',
    height: "100vh",
    width: "50%",
    clipPath: 'polygon(0 0, 100% 0, 80% 100%, 0 100%)',
    zIndex: 17
  }} />
  <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100vh" }}>
    <Row>
      <Col md={6} xs={12} style={{ borderRadius: "10px", height: "98vh", margin: ".5rem", marginTop: 0, padding: "5px", minWidth: "215px" }}>
        <div style={{width:"100%",height:"50px", display:"flex", alignItems:"center"}}>
          <img style={{width:"33px"}} src="/logo/logo1.png" alt="" />
          <img style={{width:"100px"}} src="/logo/logo5.png" alt="" />
        </div>
        <div style={{width:"80%",height:"70vh", display:"flex", alignItems:"center", justifyContent:"center"}}>
          <img style={{width:"300px", borderRadius:"15px"}} src="/logo/logo2.png" alt="" />
        </div>
        
      </Col>
      <Col md={5} xs={12} style={{ borderRadius: "10px", height: "98vh", margin: ".5rem", marginTop: 0, padding: "5px", minWidth: "250px" }}>
        
      </Col>
    </Row>
  </div>
</Container>


    </>
  )
}

export default Login
