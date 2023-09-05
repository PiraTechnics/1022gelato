import * as React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Row, Col } from "react-bootstrap";
import ReactMarkdown from "react-markdown";
import Layout from "../components/layout";
import Seo from "../components/seo";

const AboutPage = ({ data }) => {
	const hoursImg = getImage(data.strapiPage.image.localFile.childImageSharp);
	const altText = data.strapiPage.image.alternativeText;
	const hoursContent = data.strapiPage.content.data.content;
	const hoursHeader = data.strapiPage.header;

	const address = data.strapiHoursLocation.address;
	const phone = data.strapiHoursLocation.phone;
	const dayHours = data.strapiHoursLocation.day_hours;
	//NOTE: iframe map embed is hardcoded -- address will not update with this technique

	return (
		<Layout>
			<Row className="position-relative">
				<GatsbyImage image={hoursImg} alt={altText} />
				<h1 className="position-absolute top-50 start-50 translate-middle text-center">
					{hoursHeader}
				</h1>
			</Row>
			<Row className="mt-3">
				<iframe
					title="map"
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3338.665974050682!2d-117.38128058736497!3d33.19663276231085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dc6f73ee3dc409%3A0xb30b7306d3402ba7!2s1022%20Cafe%20%26%20Gelateria!5e0!3m2!1sen!2sus!4v1693946660722!5m2!1sen!2sus"
					width="600"
					height="450"
					style={{ border: "0" }}
					allowfullscreen=""
					loading="lazy"
					referrerpolicy="no-referrer-when-downgrade"
				></iframe>
			</Row>
			{hoursContent && (
				<Row className="mt-5 px-3">
					<ReactMarkdown>{hoursContent}</ReactMarkdown>
				</Row>
			)}
			<Row className="mt-3 text-center">
				<h4 className="text-decoration-underline">Address</h4>
				<Col className="mb-3">{address}</Col>
				<h4 className="text-decoration-underline">Phone</h4>
				<Col>{phone}</Col>
				<h4 className="text-decoration-underline">Hours</h4>
				<Col>
					{dayHours.map((day) => {
						return (
							<Row>
								<Col className="fw-bold text-end">{day.weekday}:</Col>
								<Col className="text-start">
									<div>
										{day.closed ? (
											"Closed"
										) : (
											<div>
												{formatTime(day.from)} - {formatTime(day.to)}
											</div>
										)}
									</div>
								</Col>
							</Row>
						);
					})}
				</Col>
			</Row>
		</Layout>
	);
};

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Hours & Location" />;

export default AboutPage;

const formatTime = (hourString) => {
	let hour = hourString.slice(0, 2);
	if (hour > 12) {
		return hour - 12 + " PM";
	}
	return hour + " AM";
};

export const pageQuery = graphql`
	query {
		strapiPage(name: { eq: "Hours and Location" }) {
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
		strapiHoursLocation {
			id
			address
			email
			phone
			day_hours {
				weekday
				from
				to
				closed
			}
		}
	}
`;
