import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import styles from "./nav.module.scss"

const Nav = () => {
  const data = useStaticQuery(graphql`
    query SectionsQuery {
      parent: allMarkdownRemark(
        filter: { frontmatter: { type: { eq: "parent" } } }
        sort: { fields: frontmatter___sequence }
      ) {
        edges {
          node {
            frontmatter {
              sequence
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
        sort: { fields: frontmatter___sequence }
      ) {
        edges {
          node {
            frontmatter {
              sequence
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
      {sections.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        const section = node.frontmatter.section
        return (
          <li>
            <Link
              to={node.fields.slug}
              className={styles.parentLink}
              activeClassName="active"
            >
              <svg width="5" height="8" className={styles.svg}>
                <path
                  d="M.5.598L3.902 4 .5 7.402"
                  stroke="currentColor"
                  stroke-width="1.2"
                  fill="none"
                  fill-rule="evenodd"
                ></path>
              </svg>
              {title}
            </Link>
            <div>
              <ul>
                {children.map(({ node }) => {
                  if (node.frontmatter.section === section) {
                    const childTitle =
                      node.frontmatter.title || node.fields.slug
                    const childSequence = node.frontmatter.sequence
                    return (
                      <li>
                        <Link
                          to={node.fields.slug}
                          className={styles.childLink}
                          activeClassName="active"
                        >
                          {childSequence}.&nbsp;{childTitle}
                        </Link>
                      </li>
                    )
                  }
                })}
                {/* <Link to={node.fields.slug} className={styles.childLink}>
                    {title}
                  </Link> */}
              </ul>
            </div>
          </li>
        )
      })}

      {/* 
      {pages.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        const sequence = node.frontmatter.sequence
        return (
          <li>
            <Link to={node.fields.slug} className={styles.link}>
              {sequence}&nbsp;
              {title}
            </Link>
          </li>
        )
      })} */}
    </nav>
  )
}

export default Nav
