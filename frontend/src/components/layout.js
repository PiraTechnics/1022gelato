/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

import "./layout.css";
import Sidebar from "./sidebar";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

const Layout = ({ children }) => {
	const data = useStaticQuery(graphql`
		query SiteTitleQuery {
			site {
				siteMetadata {
					title
				}
			}
		}
	`);

	return (
		<Container fluid className="layout-container" style={{ width: "100vw" }}>
			<Row>
				<Col md={3}>
					<Sidebar />
				</Col>
				<Col md={9} className="p-0">
					<main>{children}</main>
					<footer
						style={{
							marginTop: `var(--space-5)`,
							fontSize: `var(--font-sm)`,
						}}
						className="text-center"
					>
						&copy; {new Date().getFullYear()} -{" "}
						<i>{data.site.siteMetadata.title}</i>
					</footer>
				</Col>
			</Row>
		</Container>
	);
};

export default Layout;
