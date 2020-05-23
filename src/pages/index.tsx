// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

type Data = {
  site: {
    siteMetadata: {
      title: string
    }
  }
}

const Index = ({ data, location }: PageProps<Data>) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Playbook" />
      <h1>Volunteer Coordinator Playbook</h1>
      <h2>How to make it a success!</h2>
      <Link to="/intro">Get started</Link>
    </Layout>
  )
}

export default Index

export const titleQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
