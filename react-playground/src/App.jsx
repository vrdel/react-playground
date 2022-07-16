import { useState } from 'react'
import { Container, Row, Col, Collapse, Navbar, NavbarBrand, Nav, NavLink, NavItem } from 'reactstrap'
import { Link } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import './App.css'

const Main = (props) => {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

function App() {
	return (
		<Container fluid>
			<Row>
				<Col>
					<Navbar color="light" expand="md" light>
						<NavbarBrand href="/">
							vrdel's play
						</NavbarBrand>
						<Collapse navbar>
							<Nav className="me-auto" navbar>
								<NavItem>
									<NavLink tag={Link} to="/main-vite">
										Main VITE
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink tag={Link} to="/react-hook-form">
										react-hook-form
									</NavLink>
								</NavItem>
							</Nav>
						</Collapse>
					</Navbar>
				</Col>
			</Row>
			<Row>
				<Col>
					<h1>
						Foobar
					</h1>
				</Col>
			</Row>
		</Container>
	)
}

export default App
