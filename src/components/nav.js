import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import styles from "./nav.module.scss"

const Nav = () => {
  const data = useStaticQuery(graphql`
    query ProjectsQuery {
      allMarkdownRemark(sort: { fields: frontmatter___sequence, order: DESC }) {
        edges {
          node {
            excerpt
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
  `)

  const pages = data.allMarkdownRemark.edges

  return (
    <nav className={styles.root}>
      {pages.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <li>
            <Link to={node.fields.slug}>{title}</Link>
          </li>
        )
      })}
    </nav>
  )
}

export default Nav
