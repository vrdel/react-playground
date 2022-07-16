import { Container, Row, Col, Collapse, Navbar, NavbarBrand, Nav, NavLink, NavItem } from 'reactstrap'
import { Link } from 'react-router-dom'

const Navigation = (props) =>
{
	return (
		<Navbar color="light" expand="md" light>
			<NavbarBrand tag={Link} to="/">
				vrdel's play
			</NavbarBrand>
			<Collapse navbar>
				<Nav className="me-auto" navbar>
					<NavItem>
						<NavLink tag={Link} to="/main-vite">
							Vite
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
	)
}

export default Navigation
