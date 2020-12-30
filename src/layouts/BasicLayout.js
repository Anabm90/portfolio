import React from 'react';
import { Helmet } from 'react-helmet';

import Menu from '../components/Menu'

import './BasicLayout.scss'

export default function BasicLayout(props) {
	const { children, menuColor } = props;
	return (
		<>
			<div className="layout parallax">
				<Menu menuColor={menuColor} />
				<Helmet>
          	<meta charSet="utf-8" />
          	<title>ABM</title>
          	<link rel="canonical" href="http://mysite.com/example" />
       	 </Helmet>
			{children}

			</div>
		</>
	);
}
