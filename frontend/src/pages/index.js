import * as React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Row } from "react-bootstrap";
import Layout from "../components/layout";
import Seo from "../components/seo";

const IndexPage = ({ data }) => {
	const homeImg = getImage(data.strapiPage.image.localFile.childImageSharp);
	const altText = data.strapiPage.image.alternativeText;
	const homeHeader = data.strapiPage.header;

	return (
		<Layout>
			<Row className="position-relative">
				<GatsbyImage image={homeImg} alt={altText} />
				<h1 className="position-absolute top-50 start-50 translate-middle text-center">
					{homeHeader}
				</h1>
			</Row>
		</Layout>
	);
};

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />;

export default IndexPage;

export const pageQuery = graphql`
	query {
		strapiPage(name: { eq: "Home" }) {
			name
			header
			image {
				alternativeText
				localFile {
					childImageSharp {
						gatsbyImageData
					}
				}
			}
		}
	}
`;
