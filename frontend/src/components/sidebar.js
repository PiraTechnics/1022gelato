import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../images/1022-logo.png";
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
			allStrapiSocialMedia {
				edges {
					node {
						id
						link
						name
						icon {
							localFile {
								childImageSharp {
									gatsbyImageData
								}
							}
						}
					}
				}
			}
		}
	`);
	const menuItems = data.allStrapiPage.edges;
	const socialItems = data.allStrapiSocialMedia.edges;

	return (
		<Container
			fluid
			className="py-2 justify-content-center"
			/* style={{ maxWidth: "200px", minWidth: "150px" }} */
		>
			<Navbar expand="md" className="flex-md-column ">
				<Navbar.Brand className="mx-md-auto">
					<Image src={Logo} className="mb-1" />
				</Navbar.Brand>
				<Navbar.Toggle />
				<Navbar.Collapse>
					<Nav
						id="sidebar-pages"
						defaultActiveKey="#home"
						className="flex-md-column align-items-center text-center"
					>
						<Container fluid>
							{React.Children.toArray(
								menuItems.map((item) => {
									return (
										<Row>
											<Nav.Link
												className="link-dark link-opacity-50-hover"
												href={item.node.path}
											>
												<div className="menu-item">{item.node.name}</div>
											</Nav.Link>
										</Row>
									);
								})
							)}
						</Container>
						<Row id="sidebar-social" className="justify-content-center">
							<hr className="opacity-75" />
							{React.Children.toArray(
								socialItems.map((item) => {
									return (
										<Col xs={2} md={4} lg={3} xl={2}>
											<a href={item.node.link} target="_blank" rel="noreferrer">
												<GatsbyImage
													image={getImage(
														item.node.icon.localFile.childImageSharp
													)}
													alt={item.node.name}
												/>
											</a>
										</Col>
									);
								})
							)}
						</Row>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</Container>
	);
};

export default Sidebar;
