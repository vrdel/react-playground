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
            <h3 className="bg-light p-1 rounded border-bottom">
              { title }
            </h3>
          </Col>
        </Row>
      }
      <Row className="pt-3">
        <Col>
          { children }
        </Col>
      </Row>
    </>
  )
}

export default DefaultPage
