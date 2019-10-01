import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "@emotion/styled"

const Content = styled.div`
  margin: 0 auto;
  max-width: 860px;
  padding-top: 89px;
  font-size: 20px;
`

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Content className='post-list' style={{textAlign: 'center'}}>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Content>
  </Layout>
)

export default NotFoundPage
