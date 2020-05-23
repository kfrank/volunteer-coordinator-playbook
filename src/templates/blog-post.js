import React from "react"
import { graphql, Link } from "gatsby"
import styles from "./blog-post.module.scss"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"

const BlogPostTemplate = ({ data, location, pageContext }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title

  const { next, previous } = pageContext
  const nextArticle = next && (
    <Link to={next.fields.slug}>
      <strong>Keep reading</strong> <br />
      <span className={styles.page}>{next.frontmatter.page}</span>
      {next.frontmatter.title}
      {next.excerpt}
    </Link>
  )

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title={post.frontmatter.title} />
      <article>
        <header>
          {post.frontmatter.type === "child" ? (
            <>
              <span className={styles.page}>
                {post.frontmatter.sectionPage}
              </span>
              <h2>{post.frontmatter.section}</h2>
            </>
          ) : (
            <></>
          )}
          <h1>{post.frontmatter.title}</h1>
        </header>
        <section dangerouslySetInnerHTML={{ __html: post.html }} />

        {post.frontmatter.calloutText ? (
          <div className={styles.callout}>
            <h3 className={styles.calloutTitle}>
              {post.frontmatter.calloutTitle}
            </h3>
            <div className={styles.calloutCopy}>
              {post.frontmatter.calloutText}
            </div>
          </div>
        ) : (
          <></>
        )}

        {post.frontmatter.image ? (
          <div className={styles.bottomImageContainer}>
            <Img
              fixed={post.frontmatter.image.childImageSharp.fixed}
              className={styles.bottomImage}
            />
          </div>
        ) : (
          <></>
        )}
      </article>
      {nextArticle}
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { order: ASC, fields: frontmatter___page }) {
      edges {
        node {
          id
        }
        next {
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            page
          }
        }
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        section
        sectionPage
        calloutTitle
        calloutText
        type
        image {
          childImageSharp {
            fixed {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`
