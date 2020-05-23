import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import Nav from "./nav.js"
import Download from "./download.js"
import styles from "./layout.module.scss"

const Layout = ({ title, children }) => {
  const data = useStaticQuery(graphql`
    query LayoutQuery {
      file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid(maxHeight: 22) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <>
      <div className={styles.root}>
        <header className={styles.header}>
          <input
            type="checkbox"
            className={styles.navToggleInput}
            id="navToggle"
          />
          <label for="navToggle" className={styles.navToggle}>
            <Img
              fluid={data.file.childImageSharp.fluid}
              className={styles.navToggle}
              imgStyle={{
                objectFit: "contain",
                objectPosition: "left center",
              }}
            />
          </label>
          <div className={styles.navContainer}>
            <Img
              fluid={data.file.childImageSharp.fluid}
              className={styles.logo}
              imgStyle={{
                objectFit: "contain",
                objectPosition: "left center",
              }}
            />
            <h1 className={styles.title}>
              <Link to={`/`}>{title}</Link>
            </h1>
            <Nav />
          </div>
        </header>
        <Download />
        <main className={styles.content}>
          <div className={styles.contain}>{children}</div>
        </main>
      </div>
      {/* <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer> */}
    </>
  )
}

export default Layout
