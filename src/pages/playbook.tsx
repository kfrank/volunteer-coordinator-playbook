// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, graphql } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import styles from "./playbook.module.scss"
import Img from "gatsby-image"
import LogoImg from "../../content/assets/playbook-logo.png"

import Logo from "../components/logo"
import Layout from "../components/layout"
import SEO from "../components/seo"

type Data = {
  site: {
    siteMetadata: {
      title: string
    }
  }
}

const Playbook = ({ data, location }: PageProps<Data>) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Playbook" />
      <div className={styles.root}>
        <div className={styles.heroImg}>
          <Img fluid={data.file.childImageSharp.fluid} />
        </div>
        <div className={styles.content}>
          <div className={styles.logo}>
            <img src={LogoImg} />
          </div>
          <h1>Volunteer Coordinator Playbook</h1>
          <h2>How to make it a success!</h2>
          <AniLink
            cover
            direction="up"
            to="/intro"
            bg="white"
            className={styles.button}
          >
            Get started{" "}
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
          </AniLink>
        </div>
      </div>
    </Layout>
  )
}

export default Playbook

export const titleQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    file(relativePath: { eq: "coverImage.png" }) {
      childImageSharp {
        fluid(maxHeight: 450, quality: 90) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
