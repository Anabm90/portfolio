import React from 'react';
import BasicLayout from '../layouts/BasicLayout';
import { Link } from 'gatsby';
import Proyects from '../components/Projects';
import './index.scss';

export default function Index() {
	return (
		<BasicLayout menuColor="#000">
			<h1 className="title"> My projects</h1>
			<Proyects />
		</BasicLayout>
	);
}
