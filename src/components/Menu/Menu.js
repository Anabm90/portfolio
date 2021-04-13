import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';

import './Menu.scss';

export default function Menu() {
	return (
		<Navbar bg="transparent" expand="lg" className="menu">
			<Nav.Link href="/">ABM</Nav.Link>
			{/* <Navbar.Brand href="/">ABM</Navbar.Brand> */}
			<Navbar.Toggle aria-controls="basic-navbar-nav" />

			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="mr-auto">
					<Nav.Link href="/about">About</Nav.Link>
					<Nav.Link href="/education">Education</Nav.Link>
					{/* <NavDropdown title="Proyects" id="basic-nav-dropdown">
						<NavDropdown.Item href="/projects">Web Dev</NavDropdown.Item>
						<NavDropdown.Item href="#action/3.2">Graphic design</NavDropdown.Item>
						<NavDropdown.Item href="#action/3.3">Illustration</NavDropdown.Item>
					</NavDropdown> */}

					<Nav.Link href="/projects">Projects</Nav.Link>
					<Nav.Link href="/contact">Contact</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}
