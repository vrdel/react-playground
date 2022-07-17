import React from 'react';
import Navigation from '../ui/navigation'
import { Container, Row, Col, Navbar } from 'reactstrap'
import { Outlet } from 'react-router-dom'

const RootApp = () => {
  let dateObj = new Date()
  let year = new Intl.DateTimeFormat('hr-HR', {year: 'numeric'}).format(dateObj)
  let month = new Intl.DateTimeFormat('hr-HR', {month: 'numeric'}).format(dateObj)
  let day = new Intl.DateTimeFormat('hr-HR', {day: 'numeric'}).format(dateObj)

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
            <p className="fs-5 text-white fst-italic position-relative start-50">
              {day}{month}{year}
            </p>
            <p className="fs-6 text-white fst-italic position-relative end-0">
              dvrcic
            </p>
          </Navbar>
        </Col>
      </Row>
    </Container>
  )
}

export default RootApp
