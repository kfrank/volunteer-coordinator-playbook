import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import styles from "./nav.module.scss"

const Nav = () => {
  const data = useStaticQuery(graphql`
    query SectionsQuery {
      parent: allMarkdownRemark(
        filter: { frontmatter: { type: { eq: "parent" } } }
        sort: { fields: frontmatter___sectionPage }
      ) {
        edges {
          node {
            frontmatter {
              sectionPage
              title
              section
            }
            fields {
              slug
            }
          }
        }
      }
      child: allMarkdownRemark(
        filter: { frontmatter: { type: { eq: "child" } } }
        sort: { fields: frontmatter___sectionPage }
      ) {
        edges {
          node {
            frontmatter {
              sectionPage
              title
              type
              section
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  const sections = data.parent.edges
  const children = data.child.edges

  return (
    <nav className={styles.root}>
      {sections.map(({ node }, index) => {
        const title = node.frontmatter.title || node.fields.slug
        const section = node.frontmatter.section
        return (
          <li key={index}>
            <Link
              to={node.fields.slug}
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
            </Link>
            <div>
              <ol className={styles.childList}>
                {children.map(({ node }, i) => {
                  if (node.frontmatter.section === section) {
                    const childTitle =
                      node.frontmatter.title || node.fields.slug
                    return (
                      <li key={i}>
                        <Link
                          to={node.fields.slug}
                          className={styles.childLink}
                          activeClassName="active"
                        >
                          {childTitle}
                        </Link>
                      </li>
                    )
                  }
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
