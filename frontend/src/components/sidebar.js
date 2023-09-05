import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../images/1022-logo.png";
import Facebook from "../images/facebook.svg";
import Instagram from "../images/instagram.svg";
import Tiktok from "../images/tiktok.svg";
import { Container, Image, Nav, Navbar, Row, Col } from "react-bootstrap";

const Sidebar = () => {
	return (
		<Container
			fluid
			className="py-4 justify-content-center"
			/* style={{ maxWidth: "200px", minWidth: "150px" }} */
		>
			<Navbar expand="md" className="flex-md-column ">
				<Navbar.Brand>
					<Image src={Logo} className="mb-1" />
				</Navbar.Brand>
				<Navbar.Toggle />
				<Navbar.Collapse>
					<Nav
						id="sidebar-pages"
						defaultActiveKey="#home"
						className="flex-md-column align-items-center text-center"
					>
						<Nav.Link href="/" className="link-dark">
							Home
						</Nav.Link>
						<Nav.Link href="/menu" className="link-dark">
							Menu
						</Nav.Link>
						<Nav.Link href="/about" className="link-dark">
							About Us
						</Nav.Link>
						<Nav.Link href="#catering" className="link-dark">
							Catering
						</Nav.Link>
						<Nav.Link href="#apparel" className="link-dark">
							Apparel
						</Nav.Link>
						<Nav.Link href="/hours-location" className="link-dark">
							Hours & Location
						</Nav.Link>

						<Row id="sidebar-social" className="justify-content-center">
							<hr className="opacity-75" />
							<Col>
								<a href="#home">
									<Image src={Facebook} width="25px" />
								</a>
							</Col>
							<Col>
								<a href="#home">
									<Image src={Instagram} width="25px" />
								</a>
							</Col>
							<Col>
								<a href="#home">
									<Image src={Tiktok} width="25px" />
								</a>
							</Col>
						</Row>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</Container>
	);
};

export default Sidebar;
