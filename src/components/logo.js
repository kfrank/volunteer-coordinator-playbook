import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styles from "./logo.module.scss"

const Logo = () => {
  const data = useStaticQuery(graphql`
    query LogoQuery {
      file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <>
      <Img
        fluid={data.file.childImageSharp.fluid}
        className={styles.logo}
        imgStyle={{
          objectFit: "contain",
          objectPosition: "left center",
        }}
      />
    </>
  )
}

export default Logo
