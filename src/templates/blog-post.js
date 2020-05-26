import React from "react"
import { graphql } from "gatsby"
import styles from "./blog-post.module.scss"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"

const BlogPostTemplate = ({ data, location, pageContext }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const findMatch = data.allPagesJson.edges

  const { next } = pageContext
  const nextArticle = next && (
    <AniLink
      cover
      direction="up"
      bg="white"
      to={next.fields.slug}
      className={styles.nextPage}
      trigger={async pages => {
        const entry = await pages.entry

        const scrollingEl = entry.node.querySelector("#mainContent")

        scrollingEl.scrollTo(0, 0)
      }}
    >
      <h2>Next Up</h2>
      <div className={styles.nextPageContainer}>
        {findMatch.map(({ node }, index) => {
          const children = node.subpages
          const parent = node.Title
          return (
            <>
              {children.map(({ Title }, i) => {
                return (
                  <>
                    {next.frontmatter.title === Title ? (
                      <>
                        <span className={styles.nextPageNumber}>{i + 1}.</span>
                        <h3>{parent}</h3>
                        <h4>{next.frontmatter.title}</h4>
                      </>
                    ) : (
                      <></>
                    )}
                  </>
                )
              })}
              {next.frontmatter.title === parent ? (
                <>
                  <h4 className={styles.nextPageSection}>
                    {next.frontmatter.title}
                  </h4>
                </>
              ) : (
                <></>
              )}
            </>
          )
        })}
        <div className={styles.nextExcerpt}>{next.excerpt}</div>
      </div>
      <div className={styles.nextPageButton}>
        <span>
          Keep Reading{" "}
          <svg
            width="12"
            height="15"
            viewBox="0 0 12 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="6"
              y1="1"
              x2="6"
              y2="12"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M11 9L6 14L1 9"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
    </AniLink>
  )

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
    allPagesJson {
      edges {
        node {
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
