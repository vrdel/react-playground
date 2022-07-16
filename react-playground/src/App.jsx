import { Container, Row, Col, Collapse, Navbar, NavbarBrand, Nav, NavLink, NavItem } from 'reactstrap'
import { Link } from 'react-router-dom'
import './App.css'

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
