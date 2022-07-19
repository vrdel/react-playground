import React from 'react';
import DocumentTitle from '../ui/headtitle'
import { Row, Col } from 'reactstrap'


const ReactHookForm = () => {
  return (
    <>
      <DocumentTitle/>
      <Row>
        <Col>
          <h1 className="bg-light p-1 rounded">
            React Hook Form testing
          </h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <h5>
            foobar
          </h5>
        </Col>
      </Row>
    </>
  )
}

export default ReactHookForm
