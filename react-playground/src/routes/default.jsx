import React from 'react';
import Navigation from '../ui/navigation'
import { Container, Row, Col, Navbar } from 'reactstrap'
import { Outlet } from 'react-router-dom'

const RootApp = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Navigation/>
        </Col>
      </Row>
      <Row className="no-gutters">
        <Col>
          <Outlet />
        </Col>
      </Row>
      <Row>
        <Col>
          <Navbar color="secondary" dark expand="md" fixed="bottom">
            <p className="fs-5 text-white position-relative start-50">
              Footer
            </p>
          </Navbar>
        </Col>
      </Row>
    </Container>
  )
}

export default RootApp
