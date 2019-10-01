import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Monolith from "../components/monolith"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Monolith />
  </Layout>
)

export default IndexPage
