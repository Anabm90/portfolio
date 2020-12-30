import React from 'react';
import BasicLayout from '../layouts/BasicLayout';

import cv from '../docs/cv.pdf';
import './index.scss';

export default function Index() {
	return (
		<BasicLayout menuColor="#000">
			<div>
				<h1 className="title"> About me</h1>
				<h2 className="text-info">
					I'm a <em>full Stack Web Developer</em> from Spain, focused on Front end. I love to create and
					design things, so that's why now I'm going to study a Master in Graphic design & UX/UI
				</h2>
			</div>
			<button className="download_cv">
				<a href={cv} download="ana_bermudez_CV">
					Check my full CV!
				</a>
			</button>
		</BasicLayout>
	);
}
