/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import "./layout.css"
import Sidebar from "./sidebar"

import "bootstrap/dist/css/bootstrap.min.css"
import { Container, Row, Col } from "react-bootstrap"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Container fluid>
      <Row>
        <Col xs={3}>
          <Sidebar />
        </Col>
        <Col>
          <div
            style={{
              margin: `0 auto`,
              maxWidth: `var(--size-content)`,
              padding: `var(--size-gutter)`,
            }}
          >
            <main>{children}</main>
            <footer
              style={{
                marginTop: `var(--space-5)`,
                fontSize: `var(--font-sm)`,
              }}
            >
              {new Date().getFullYear()} &middot;{" "}
              <i>{data.site.siteMetadata.title}</i>
            </footer>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Layout
