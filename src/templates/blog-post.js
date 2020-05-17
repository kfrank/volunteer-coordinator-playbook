import React from "react"
import { graphql } from "gatsby"
import styles from "./blog-post.module.scss"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title={post.frontmatter.title} />
      <article>
        <header>
          {post.frontmatter.type == "child" ? (
            <>
              <span className={styles.page}>{post.frontmatter.sequence}</span>
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
      </article>
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
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        section
        sequence
        calloutTitle
        calloutText
        type
      }
    }
  }
`
