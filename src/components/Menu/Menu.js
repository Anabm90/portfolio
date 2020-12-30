import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

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
					<Nav.Link href="/projects">Projects</Nav.Link>
					<Nav.Link href="/contact">Contact</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}
