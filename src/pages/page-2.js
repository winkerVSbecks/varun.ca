import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
    <script
      className="speakerdeck-embed"
      data-slide="53"
      data-id="492fb00803b144aba89a2d9dfeeca2fc"
      data-ratio="1.77777777777778"
      src="//speakerdeck.com/assets/embed.js"
    ></script>
  </Layout>
)

export default SecondPage
