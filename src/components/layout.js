import React from "react"
import { Link } from "gatsby"
import Nav from "./nav.js"
import styles from "./layout.module.scss"

const Layout = ({ title, children }) => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.contain}>
          <h1 className={styles.title}>
            <Link to={`/`}>{title}</Link>
          </h1>
        </div>
      </header>
      <div className={styles.contain}>
        <Nav />
        <main className={styles.content}>{children}</main>
      </div>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </>
  )
}

export default Layout
