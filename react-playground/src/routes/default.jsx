import React from 'react';
import Navigation from '../ui/navigation'
import Footer from '../ui/footer'
import { Container, Row, Col } from 'reactstrap'
import { Outlet } from 'react-router-dom'


const RootApp = () => {

  return (
    <Container fluid>
      <Row>
        <Col>
          <Navigation/>
        </Col>
      </Row>
      <Row className="pt-5">
        <Col className="pt-4">
          <Outlet/>
        </Col>
      </Row>
      <Row>
        <Col>
          <Footer/>
        </Col>
      </Row>
    </Container>
  )
}

export default RootApp
