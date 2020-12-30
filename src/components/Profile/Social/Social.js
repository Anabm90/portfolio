import React from 'react';
import IcLinkdn from '../../../images/icons/linkedin.svg';
import IcEmail from '../../../images/icons/email3.svg';
import icGit from '../../../images/git.png';
import icBehance from '../../../images/behance.png';

import './Social.scss';

export default function Social() {
	return (
		<div className="social">
			<a href="https://www.linkedin.com/in/ana-bermudez-monteagudo/" target="_blank" rel="noreferrer noopener">
				<IcLinkdn />
			</a>
			<a href="https://github.com/Anabm90" target="_blank" rel="noreferrer noopener">
				<img className="png" src={icGit} alt="github logo" />
			</a>
			<a href="mailto:anabermudezmonteagudo@gmail.com" target="_blank" rel="noreferrer noopener">
				<IcEmail />
			</a>
			<a href="https://www.behance.net/anabm1/projects" target="_blank" rel="noreferrer noopener">
				<img className="png" src={icBehance} alt="behance logo" />
			</a>
		</div>
	);
}
