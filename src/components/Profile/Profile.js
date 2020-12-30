import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

import Social from './Social';
import Typewriter from './Typewriter';
import profileImage from '../../images/anfoto1.png';
import './Profile.scss';

export default function Profile() {
	return (
		<div className="profile">
			<Container className="box">
				<Row className="info">
					<Col xs={12} lg={6} className="info__image">
						<Image src={profileImage} fluid alt="ana" className="ana" />
					</Col>
					<Col xs={12} md={12} lg={6} className="info__text">
						<h1>Hi there! </h1>
						<h1>It's Ana</h1>

						<Typewriter />
					</Col>
					<Col xs={12}>
						<div>
							<Social />
						</div>
					</Col>
				</Row>
			</Container>
		</div>

		// ______El original por si acaso ______
		// <div className="profile">
		// 	<div className="wallpaper" />

		// 	<Container className="box">
		// 		<Row className="info parallax" data-axis="vertical" data-speed="-.2">
		// 			<Col xs={12} md={12} lg={6}>
		// 				<Image src={profileImage} fluid alt="ana" />
		// 			</Col>
		// 			<Col xs={12} md={12} lg={6} className="info__data">
		// 				<h1>Hi!</h1>
		// 				<h1> I´m Ana.</h1>
		// 				<Typewriter />
		// 			</Col>
		// 			<Col xs={12}>
		// 				<div>
		// 					<Social />
		// 				</div>
		// 			</Col>
		// 		</Row>
		// 	</Container>
		// </div>
	);
}
