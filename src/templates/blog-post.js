import React from "react"
import { graphql } from "gatsby"
import styles from "./blog-post.module.scss"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"

const BlogPostTemplate = ({ data, location, pageContext }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const findMatch = data.allPagesJson.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title={`Volunteer Playbook | ${post.frontmatter.title}`} />
      {post.frontmatter.coverImage ? (
        <div className={styles.heroImage}>
          <Img fluid={post.frontmatter.coverImage.childImageSharp.fluid} />
        </div>
      ) : (
        <></>
      )}
      <article>
        <header>
          {findMatch.map(({ node }, index) => {
            const children = node.subpages
            const parent = node.Title
            return (
              <>
                {children.map(({ Title }, i) => {
                  return (
                    <>
                      {post.frontmatter.title === Title ? (
                        <>
                          <span className={styles.pageNumber}>{i + 1}.</span>
                          <h2>{parent}</h2>
                        </>
                      ) : (
                        <></>
                      )}
                    </>
                  )
                })}
              </>
            )
          })}
          <h1>{post.frontmatter.title}</h1>
        </header>
        <section
          className={styles.section}
          dangerouslySetInnerHTML={{ __html: post.html }}
        />

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
      {/* {nextArticle} */}
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
    allPagesJson {
      edges {
        node {
          Title
          subpages {
            Title
          }
        }
        next {
          Title
          subpages {
            Title
          }
        }
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        calloutTitle
        calloutText
        coverImage {
          childImageSharp {
            fluid(quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        image {
          childImageSharp {
            fixed(quality: 90) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`
