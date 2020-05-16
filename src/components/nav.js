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
            }
            fields {
              slug
            }
          }
        }
      }
      child: allMarkdownRemark(
        filter: { frontmatter: { type: { eq: "child" } } }
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
        return (
          <li>
            <Link to={node.fields.slug} className={styles.parentLink}>
              {title}
            </Link>
            <div>
              <ul>
                {children.map(({ node }) => {
                  const childTitle = node.frontmatter.title || node.fields.slug
                  return (
                    <li>
                      <Link to={node.fields.slug} className={styles.childLink}>
                        {childTitle}
                      </Link>
                    </li>
                  )
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
