import './App.css'

import React from 'react'
import RootApp from './routes/default'
import RMainVite from './routes/mainvite'
import RReactHookForm from './routes/reacthookform'
import RNoMatch from './routes/nomatch'
import {BrowserRouter, Routes, Route} from 'react-router-dom'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootApp/>} >
          <Route path="main-vite" element={<RMainVite/>} />
          <Route path="react-hook-form" element={<RReactHookForm/>} />
          <Route path="*" element={<RNoMatch/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
