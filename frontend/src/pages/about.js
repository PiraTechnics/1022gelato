import * as React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Row, Col } from "react-bootstrap";
import ReactMarkdown from "react-markdown";
import Layout from "../components/layout";
import Seo from "../components/seo";

const AboutPage = ({ data }) => {
	const aboutImg = getImage(data.strapiPage.image.localFile.childImageSharp);
	const altText = data.strapiPage.image.alternativeText;
	const aboutContent = data.strapiPage.content.data.content;

	return (
		<Layout>
			<GatsbyImage image={aboutImg} alt={altText} />
			{aboutContent && (
				<Row className="mt-5 px-3">
					<ReactMarkdown>{aboutContent}</ReactMarkdown>
				</Row>
			)}
		</Layout>
	);
};

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="About" />;

export default AboutPage;

export const pageQuery = graphql`
	query {
		strapiPage(name: { eq: "About Us" }) {
			name
			header
			id
			image {
				alternativeText
				localFile {
					childImageSharp {
						gatsbyImageData
					}
				}
			}
			content {
				data {
					content
				}
			}
		}
	}
`;
