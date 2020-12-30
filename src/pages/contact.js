import React from 'react';
import BasicLayout from '../layouts/BasicLayout';
import Social from '../components/Profile/Social';
import { Container } from 'react-bootstrap';
import { Link } from 'gatsby';
import './index.scss';

export default function Index() {
	return (
		<BasicLayout menuColor="#000">
			<h1 className="title"> Do you want to work together?</h1>
			<Container className="contact">
				<h2>
					<Link to="https://www.linkedin.com/in/ana-bermudez-monteagudo/">Linkedin</Link>
				</h2>
				<h2>
					<a href="mailto:anabermudezmonteagudo@gmail.com" target="_blank" rel="noreferrer noopener">
						EMAIL
					</a>
				</h2>
				<h2>
					<Link to="https://github.com/Anabm90">Github</Link>
				</h2>
			</Container>
		</BasicLayout>
	);
}
