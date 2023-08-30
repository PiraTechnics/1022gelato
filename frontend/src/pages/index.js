import * as React from "react"
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import Seo from "../components/seo";

const IndexPage = ({ data }) => {
	const homeImg = getImage(data.strapiPage.hero.localFile.childImageSharp);

	return (
		<Layout>
			<GatsbyImage image={homeImg} />
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
		strapiPage(title: { eq: "Home" }) {
			title
			hero {
				name
				localFile {
					childImageSharp {
						gatsbyImageData
					}
				}
			}
		}
	}
`;
