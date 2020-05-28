import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styles from "./nav.module.scss"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Nav = () => {
  const data = useStaticQuery(graphql`
    query SectionsQuery {
      json: allPagesJson {
        edges {
          node {
            title
            subpages {
              title
            }
          }
        }
      }
      content: allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  const sections = data.json.edges
  const findMatch = data.content.edges

  return (
    <nav className={styles.root}>
      {sections.map(({ node }, index) => {
        const title = node.title
        const children = node.subpages

        return (
          <li key={index}>
            {findMatch.map(({ node }, index) => {
              const pageTitle = node.frontmatter.title
              const pageSlug = node.fields.slug
              return (
                <>
                  {pageTitle === title ? (
                    <AniLink
                      cover
                      direction="up"
                      bg="white"
                      to={pageSlug}
                      className={styles.parentLink}
                      activeClassName="active"
                      partiallyActive={true}
                    >
                      <svg width="5" height="8" className={styles.svg}>
                        <path
                          d="M.5.598L3.902 4 .5 7.402"
                          stroke="currentColor"
                          strokeWidth="1.2"
                          fill="none"
                          fillRule="evenodd"
                        ></path>
                      </svg>
                      {title}
                    </AniLink>
                  ) : (
                    <></>
                  )}
                </>
              )
            })}

            <div>
              <ol className={styles.childList}>
                {children.map(({ title }, i) => {
                  return (
                    <li key={i}>
                      {findMatch.map(({ node }, index) => {
                        const pageTitle = node.frontmatter.title
                        const pageSlug = node.fields.slug
                        return (
                          <>
                            {pageTitle === title ? (
                              <AniLink
                                cover
                                direction="up"
                                bg="white"
                                to={pageSlug}
                                className={styles.childLink}
                                activeClassName="active"
                              >
                                {title}
                              </AniLink>
                            ) : (
                              <></>
                            )}
                          </>
                        )
                      })}
                    </li>
                  )
                })}
              </ol>
            </div>
          </li>
        )
      })}
    </nav>
  )
}

export default Nav
