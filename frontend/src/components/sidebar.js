import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../images/1022-logo.png";
import Facebook from "../images/facebook.svg";
import Instagram from "../images/instagram.svg";
import Tiktok from "../images/tiktok.svg";
import { Container, Image, Nav, Navbar, Row, Col } from "react-bootstrap";

const Sidebar = () => {
	const data = useStaticQuery(graphql`
		query menuItemsQuery {
			allStrapiPage {
				edges {
					node {
						id
						name
						path
					}
				}
			}
		}
	`);
	const menuItems = data.allStrapiPage.edges;

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
						{React.Children.toArray(
							menuItems.map((item) => {
								return (
									<Nav.Link className="link-dark" href={item.node.path}>
										{item.node.name}
									</Nav.Link>
								);
							})
						)}
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
