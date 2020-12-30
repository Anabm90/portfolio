import React from 'react';

import jsgreen from '../../../images/js-green.png';
import node from '../../../images/node.png'
import html from '../../../images/html.png'
import react from '../../../images/react.png'
import mongo from '../../../images/mongo.png'
import jquery from '../../../images/jquery.png'
import bootstrap from '../../../images/bootstrap.png'





import './Ironicons.scss';

export default function Ironicons() {
	return (
		<>
		<div className="ironicons">
				<img className="png-iron" src={html} alt="html" />
				
				<img className="png-iron" src={jquery} alt="jQuery" />
				<img className="png-iron" src={mongo} alt="mongoDB" />
				<img className="png-iron" src={node} alt="nodeJs" />
				<img className="png-iron" src={jsgreen} alt="javaScript" />
				<img className="png-iron" src={react} alt="reactJs" />
				<img className="png-iron" src={bootstrap} alt="bootstrap" />

		</div>
		</>
	);
}
