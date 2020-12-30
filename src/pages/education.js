import React from 'react';
import BasicLayout from '../layouts/BasicLayout';
import { Link } from 'gatsby';
import Education from '../components/Education';
import './index.scss';

export default function Index() {
	return (
		<BasicLayout menuColor="#000">
			<h1 className="title">Education</h1>
			<Education />
		</BasicLayout>
	);
}

// import React from 'react';
// import BasicLayout from '../layouts/BasicLayout';
// import { Container, Col, Row, Image, Button } from 'react-bootstrap';
// import { Link } from 'gatsby';
// import ironhack from '../images/ironhack.png';
// import './index.scss';

// export default function Index() {
// 	return (
// 		<BasicLayout menuColor="#000">
// 			<h1 className="title"> Education</h1>
// 			{/*
// 			<Container className="education">
// 				<Row>
// 					<Col className="dark-bg" xs={12} md={4}>
// 						<Row>
// 							<Col lg={12}>
// 								<h2>Full Stack Web Developer</h2>
// 								<Image className="ironhack" src={ironhack} alt="Ironhack logo" />
// 							</Col>
// 							<Col lg={12}>
// 								<p>Full-time bootcamp, 38438492393 hours</p>
// 								<p>Iconitos de las mierdas que aprendí?</p>
// 								<button className="download_cv">
// 									<Link to="https://www.credential.net/ae4cd85f-055e-439d-b8d8-7868ceb8d00d?_ga=2.24123897.2110056594.1607710701-1757776139.1603180652#gs.nucfhq">
// 										View credential
// 									</Link>
// 								</button>
// 							</Col>
// 						</Row>
// 					</Col>
// 					<Col className="dark-bg" xs={12} md={4}>
// 						<Row>
// 							<Col lg={12}>
// 								<h2>Other knowledges</h2>
// 							</Col>
// 							<Col lg={12}>
// 								<ul>
// 									<li>React Hooks</li>
// 									<li>NodeJs</li>
// 								</ul>
// 							</Col>
// 						</Row>
// 					</Col>
// 					<Col className="dark-bg" xs={12} md={4}>
// 						<Row>
// 							<Col lg={12}>
// 								<h2>Other knowledges</h2>
// 							</Col>
// 							<Col lg={12}>
// 								<ul>
// 									<li>React Hooks</li>
// 									<li>NodeJs</li>
// 								</ul>
// 							</Col>
// 						</Row>
// 					</Col>
// 				</Row>
// 			</Container> */}
// 			{/* <Container className="education">
// 				<h1 className="title"> Education</h1>
// 				<Row>
// 					<Col xs={12} md={6}>
// 						<Image className="ironhack" src={ironhack} alt="Ironhack logo" />
// 					</Col>
// 					<Col xs={12} md={6} className="hr">
// 						<h2>Full Stack Web Developer</h2>
// 						<p>Full-time bootcamp, 38438492393 hours</p>
// 						<p>Iconitos de las mierdas que aprendí?</p>
// 						<Button variant="dark">
// 							<Link to="https://www.credential.net/ae4cd85f-055e-439d-b8d8-7868ceb8d00d?_ga=2.24123897.2110056594.1607710701-1757776139.1603180652#gs.nucfhq">
// 								View credential
// 							</Link>
// 						</Button>
// 					</Col>
// 				</Row>
// 			</Container> */}
// 		</BasicLayout>
// 	);
// }
