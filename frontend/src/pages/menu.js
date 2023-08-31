import * as React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Row, Col } from "react-bootstrap";
import Layout from "../components/layout";
import Seo from "../components/seo";

const MenuPage = ({ data }) => {
	const heroImg = getImage(data.strapiMenu.hero.localFile.childImageSharp);
	const menuItems = data.allStrapiMenuItem.edges;
	console.log(menuItems);

	return (
		<Layout>
			<GatsbyImage image={heroImg} alt="a bunch of ice cream, side by side" />
			<Row>
				<h3 className="text-center">Menu</h3>
				<Col>
					<hr className="border-2 mx-5" />
				</Col>
			</Row>
			<Row>
				{menuItems.map((item) => {
					return (
						<Col xs={6} className="text-center menu-item">
							<div>{item.node.name}</div>
							<div>${item.node.price}</div>
						</Col>
					);
				})}
			</Row>
		</Layout>
	);
};

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Menu" />;

export default MenuPage;

export const pageQuery = graphql`
	query {
		strapiMenu {
			hero {
				localFile {
					childImageSharp {
						gatsbyImageData
					}
				}
			}
		}
		allStrapiMenuItem {
			edges {
				node {
					type
					name
					price
					image {
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
`;
