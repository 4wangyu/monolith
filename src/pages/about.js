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

const txtStyle = {
  position: 'absolute',
  top: '37%',
  margin: '0'
}
export default () => (
  <Layout>
      <SEO title="About" />
      <Content className='post-list' style={{height: '100vh'}}>
        <div style={txtStyle}>
          <p>Now he was master of the world, and he was not quite sure what to do next.</p>
          <br/>
          <p>But he would think of something.</p>
        </div>
      </Content>
  </Layout>
)
