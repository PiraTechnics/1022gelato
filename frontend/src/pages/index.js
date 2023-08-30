import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Image } from "react-bootstrap"
import Home from "../images/home.jpg"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    {/*     <StaticImage
      src="../images/home.jpg"
      loading="eager"
      formats={["auto", "webp", "avif"]}
      alt=""
      width={500}
    /> */}
    <Image src={Home} />
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
