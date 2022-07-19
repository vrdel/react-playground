import React from 'react'
import HeadTitle from './headtitle'
import { Row, Col } from 'reactstrap'


const DefaultPage = ({title, children}) => {
  return (
    <>
      <HeadTitle/>
      { title &&
        <Row>
          <Col>
            <h1 className="bg-light p-1 rounded">
              { title }
            </h1>
          </Col>
        </Row>
      }
      <Row>
        <Col>
          { children }
        </Col>
      </Row>
    </>
  )
}

export default DefaultPage
