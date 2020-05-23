import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Img from "gatsby-image"
import Nav from "./nav.js"
import Download from "./download.js"
import styles from "./layout.module.scss"
import { TransitionPortal } from "gatsby-plugin-transition-link"

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
        <div>
          <TransitionPortal level="top">
            <header className={styles.header}>
              <input
                type="checkbox"
                className={styles.navToggleInput}
                id="navToggle"
              />
              <label htmlFor="navToggle" className={styles.navToggle}>
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
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
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
                  <AniLink cover direction="up" bg="white" to={`/`}>
                    {title}
                  </AniLink>
                </h1>
                <Nav />
              </div>
            </header>
            <Download />
          </TransitionPortal>
        </div>
        <main className={styles.content} id="mainContent">
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
