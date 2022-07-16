import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import RMainVite from './routes/mainvite'
import RReactHookForm from './routes/reacthookform'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App/>} />
				<Route path="main-vite" element={<RMainVite/>}
				<Route path="react-hook-form" element={<RReactHookForm/>}
			</Routes>
			<App />
		</BrowserRouter>
  </React.StrictMode>
)
