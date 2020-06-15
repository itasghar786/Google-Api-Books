import React from './node_modules/react';
import './style.css';
import Jumbotron from './node_modules/react-bootstrap/Jumbotron';
import Container from './node_modules/react-bootstrap/Container';

const Jumbo = () => {
	return (
		<Jumbotron className="jumboBg" fluid>
			<Container />
		</Jumbotron>
	);
};

export default Jumbo;