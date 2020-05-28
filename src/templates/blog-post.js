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
  const matches = data.allPagesJson.edges
  const postTitle = post.frontmatter.title

  const sections = data.allPagesJson.edges
  const findMatch = data.allMarkdownRemark.edges

  // Next Variables

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
          {matches.map(({ node }, index) => {
            const children = node.subpages
            const parent = node.title
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
          <h1>{postTitle}</h1>
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
      </article>

      {sections.map(({ node, next }, index) => {
        const parent = node.title
        const children = node.subpages
        const nextParent = next && sections[index].next.title
        const nextParentSlug = next && sections[index].next.slug

        return (
          <>
            {node.subpages.length > 0 ? (
              <>
                {postTitle === parent ? (
                  <>
                    {/* Parent to first child */}
                    <AniLink
                      cover
                      direction="up"
                      bg="white"
                      to={children[0].slug}
                      className={styles.nextPage}
                      trigger={async pages => {
                        const entry = await pages.entry
                        const scrollingEl = entry.node.querySelector(
                          "#mainContent"
                        )
                        scrollingEl.scrollTo(0, 0)
                      }}
                    >
                      <h2>Next Up</h2>
                      <div className={styles.nextPageContainer}>
                        <span className={styles.nextPageNumber}>1.</span>
                        <h3>{parent}</h3>
                        <h4>{children[0].title}</h4>
                        <div className={styles.nextExcerpt}>
                          {findMatch.map(({ node, next }, ind) => {
                            const nextExcerpt =
                              next && findMatch[ind].next.excerpt

                            return (
                              <>
                                {postTitle === node.frontmatter.title && (
                                  <>{nextExcerpt}</>
                                )}
                              </>
                            )
                          })}
                        </div>
                      </div>{" "}
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
                  </>
                ) : (
                  <>
                    {children.map(({ title }, i) => {
                      return (
                        <>
                          {/* Child */}
                          {postTitle === title ? (
                            <>
                              {i < children.length - 1 ? (
                                <>
                                  <AniLink
                                    cover
                                    direction="up"
                                    bg="white"
                                    to={children[i + 1].slug}
                                    className={styles.nextPage}
                                    trigger={async pages => {
                                      const entry = await pages.entry
                                      const scrollingEl = entry.node.querySelector(
                                        "#mainContent"
                                      )
                                      scrollingEl.scrollTo(0, 0)
                                    }}
                                  >
                                    <h2>Next Up</h2>
                                    <div className={styles.nextPageContainer}>
                                      <span className={styles.nextPageNumber}>
                                        {i + 2}.
                                      </span>
                                      <h3>{parent}</h3>
                                      <h4>{children[i + 1].title}</h4>
                                      <div className={styles.nextExcerpt}>
                                        {findMatch.map(
                                          ({ node, next }, ind) => {
                                            const nextExcerpt =
                                              next &&
                                              findMatch[ind].next.excerpt

                                            return (
                                              <>
                                                {postTitle ===
                                                  node.frontmatter.title && (
                                                  <>{nextExcerpt}</>
                                                )}
                                              </>
                                            )
                                          }
                                        )}
                                      </div>
                                    </div>{" "}
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
                                </>
                              ) : (
                                <>
                                  {/* Last child to Parent */}
                                  <AniLink
                                    cover
                                    direction="up"
                                    bg="white"
                                    to={nextParentSlug}
                                    className={styles.nextPage}
                                    trigger={async pages => {
                                      const entry = await pages.entry
                                      const scrollingEl = entry.node.querySelector(
                                        "#mainContent"
                                      )
                                      scrollingEl.scrollTo(0, 0)
                                    }}
                                  >
                                    <h2>Next Up</h2>
                                    <div className={styles.nextPageContainer}>
                                      <h4 className={styles.nextPageSection}>
                                        {nextParent}
                                      </h4>
                                      <div className={styles.nextExcerpt}>
                                        {findMatch.map(
                                          ({ node, next }, ind) => {
                                            const nextExcerpt =
                                              next &&
                                              findMatch[ind].next.excerpt

                                            return (
                                              <>
                                                {postTitle ===
                                                  node.frontmatter.title && (
                                                  <>{nextExcerpt}</>
                                                )}
                                              </>
                                            )
                                          }
                                        )}
                                      </div>
                                    </div>{" "}
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
                                </>
                              )}
                            </>
                          ) : (
                            <></>
                          )}
                        </>
                      )
                    })}
                  </>
                )}
              </>
            ) : (
              <></>
            )}
          </>
        )
      })}
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
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
        next {
          excerpt(pruneLength: 200)
          fields {
            slug
          }
        }
      }
    }
    allPagesJson {
      edges {
        node {
          title
          slug
          excerpt
          subpages {
            title
            slug
            excerpt
          }
        }
        next {
          title
          slug
          excerpt
          subpages {
            title
            slug
            excerpt
          }
        }
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields {
        slug
      }
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
      }
    }
  }
`
