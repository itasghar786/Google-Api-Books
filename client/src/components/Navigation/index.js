import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import './style.css';

const Navigation = () => {
	return (
		<Container style={{ padding: 0 }} fluid>
			<Navbar bg="dark" variant="dark">
				<Navbar.Brand className="navlogo" style={{ fontSize: 30 }} to="/">
					Google Books
				</Navbar.Brand>
				<Nav className="mr-auto">
					<Link className="navLinks" to="/search">
						Search
					</Link>
					<Link className="navLinks" to="/saved">
						Saved
					</Link>
				</Nav>
			</Navbar>
		</Container>
	);
};

export default Navigation;