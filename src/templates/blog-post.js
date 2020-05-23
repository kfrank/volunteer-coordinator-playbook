import React from "react"
import { graphql } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import styles from "./blog-post.module.scss"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"

const BlogPostTemplate = ({ data, location, pageContext }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title

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
        {next.frontmatter.type === "child" ? (
          <>
            <span className={styles.nextPageNumber}>
              {next.frontmatter.sectionPage}.
            </span>
            <h3>{next.frontmatter.section}</h3>
            <h4>{next.frontmatter.title}</h4>
          </>
        ) : (
          <h4 className={styles.nextPageSection}>{next.frontmatter.title}</h4>
        )}
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
          {post.frontmatter.type === "child" ? (
            <>
              <span className={styles.pageNumber}>
                {post.frontmatter.sectionPage}.
              </span>
              <h2>{post.frontmatter.section}</h2>
            </>
          ) : (
            <></>
          )}
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
    allMarkdownRemark(sort: { order: ASC, fields: frontmatter___page }) {
      edges {
        node {
          id
        }
        next {
          excerpt(pruneLength: 200)
          fields {
            slug
          }
          frontmatter {
            title
            sectionPage
            type
            section
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
        coverImage {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
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
