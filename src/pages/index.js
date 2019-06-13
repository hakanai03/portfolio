import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import 'bootstrap/dist/css/bootstrap.css'

export default ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <h1>ポートフォリオ</h1>
    <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
    {data.allMarkdownRemark.edges.map(({ node }) =>
      <div key={node.id}>
        <span>
          {node.frontmatter.title}{" "}
          — {node.frontmatter.date}
        </span>
        <p>{node.excerpt}</p>
      </div>
    )}
  </Layout>
)

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
        }
      }
    }
  }
`

