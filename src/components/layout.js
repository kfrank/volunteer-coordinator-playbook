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
            <svg
              width="11"
              height="18"
              viewBox="0 0 11 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L10 9L1 17"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
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
