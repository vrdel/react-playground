import './App.css'

import React from 'react'
import RootApp from './routes/root'
import Home from './routes/home'
import ReactHookForm from './routes/reacthookform'
import NoMatch from './routes/nomatch'
import {BrowserRouter, Routes, Route} from 'react-router-dom'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootApp/>} >
          <Route path="home" element={<Home/>} />
          <Route path="react-hook-form" element={<ReactHookForm/>} />
          <Route path="*" element={<NoMatch/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
