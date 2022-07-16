import './App.css'

import React from 'react'
import Home from './routes/default'
import RMainVite from './routes/mainvite'
import RReactHookForm from './routes/reacthookform'
import RNoMatch from './routes/nomatch'
import Navigation from './ui/navigation'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Container, Row, Col} from 'reactstrap'


const App = () => {
  return (
    <BrowserRouter>
      <Container>
        <Row>
          <Col>
            <Navigation/>
          </Col>
        </Row>
        <Row className="no-gutters">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="main-vite" element={<RMainVite/>} />
            <Route path="react-hook-form" element={<RReactHookForm/>} />
            <Route path="*" element={<RNoMatch/>} />
          </Routes>
        </Row>
      </Container>
    </BrowserRouter>
  )
}

export default App
