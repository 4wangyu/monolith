import React from "react"
import { graphql } from "gatsby"
import styled from "@emotion/styled"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PostLink from "../components/post-link"

const Content = styled.div`
  margin: 0 auto;
  padding-top: 89px;
`

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Blog" />
      <Content className='post-list'>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <PostLink 
            key={node.id} 
            path={node.frontmatter.path}
            title={node.frontmatter.title}
            date={node.frontmatter.date}
          >
          </PostLink>
        ))}
      </Content>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            path
          }
          fields {
            slug
            readingTime {
              text
            }
          }
          excerpt
        }
      }
    }
  }
`
