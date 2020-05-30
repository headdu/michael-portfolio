import React from "react"
import Image from "gatsby-image"
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const AboutPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  const aboutMe = data.allMarkdownRemark.edges[0].node
  return (
    <Layout title={siteTitle} location={location}>
      <SEO
        title="About"
        keywords={[
          `Michael`,
          `Matsoukas`,
          `fashion`,
          `photographer`,
          `photography`,
        ]}
      />
      <section>
        <img
          src={aboutMe.frontmatter.avatar}
          alt={"Michael Matsoukas"}
          style={{
            borderRadius: `50%`,
            margin: "2vw auto",
            display: "block",
          }}
        />
        <p style={{ whiteSpace: "pre" }}>{aboutMe.frontmatter.about}</p>
      </section>
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(filter: { frontmatter: { title: { eq: "About Me" } } }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            about
            avatar
          }
        }
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <AboutPage location={props.location} data={data} {...props} />
    )}
  />
)
