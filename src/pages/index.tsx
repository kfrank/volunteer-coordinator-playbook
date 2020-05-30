// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, Link, graphql } from "gatsby"
import styles from "./index.module.scss"

import LogoImg from "../../content/assets/playbook-logo.png"
import principle1 from "../../content/assets/index/principles-1.jpg"
import principle2 from "../../content/assets/index/principles-2.jpg"
import principle3 from "../../content/assets/index/principles-3.jpg"
import principle4 from "../../content/assets/index/principles-4.jpg"
import principle5 from "../../content/assets/index/principles-5.jpg"
import principle6 from "../../content/assets/index/principles-6.jpg"
import principle7 from "../../content/assets/index/principles-7.jpg"
import principle8 from "../../content/assets/index/principles-8.jpg"
import principle9 from "../../content/assets/index/principles-9.jpg"
import features1 from "../../content/assets/index/features-2.jpg"
import features3 from "../../content/assets/index/features-3.jpg"
import features2 from "../../content/assets/index/features-4.jpg"
import features4 from "../../content/assets/index/features-5.jpg"

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
    <div location={location} title={siteTitle} className={styles.root}>
      <SEO title="Playbook" />
      <div className={styles.container}>
        <header className={`flex justify-between ${styles.nav}`}>
          <h1 className={`text-base flex items-center m-0 ${styles.logo} `}>
            <img src={LogoImg} />
            <span className="block">Volunteer Coordinator Playbook</span>
          </h1>
          <a
            href="https://github.com/kfrank/volunteer-coordinator-playbook"
            className={styles.button}
          >
            Start your own Playbook{" "}
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
          </a>
        </header>
        <section className={`text-center ${styles.hero}`}>
          <h1 className="leading-tight text-5xl">
            Everything you need to make volunteering a success!
          </h1>
          <p>
            It’s hard for volunteer-led organizations to do everything to keep
            their organizations running successfully and their volunteers happy.
            We’ve put together a research-backed guide for volunteer leaders and
            coordinators to make the process easy.
          </p>
          <Link to="/playbook" className={`${styles.button}`}>
            Read the base Playbook{" "}
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
          </Link>
        </section>
        <section className={styles.research}>
          <header>
            <h1 className="leading-tight">
              Research-backed guidelines and principles
            </h1>
            <p>
              We’ve spent hours collecting and synthesizing information through
              studying volunteering at the Granite Curling Club so you can have
              the most relevant information.
            </p>
          </header>
          <div className={styles.principle}>
            <div className={styles.principleCard}>
              <div className={styles.principleFront}>
                <p>
                  Volunteering should be rooted in a{" "}
                  <strong>welcoming community.</strong>
                </p>
              </div>
              <div className={styles.principleBack}>
                <img src={principle1} />
              </div>
            </div>
          </div>
          <div className={`${styles.principle} ${styles.howto}`}>
            <div className={styles.principleCard}>
              <div className={styles.principleFront}>
                <img src={principle4} />
              </div>
              <div className={styles.principleBack}>
                <p>
                  How to keep volunteers happy during events and activities.
                </p>
              </div>
            </div>
          </div>
          <div className={`${styles.principle} ${styles.howto}`}>
            <div className={styles.principleCard}>
              <div className={styles.principleFront}>
                <img src={principle5} />
              </div>
              <div className={styles.principleBack}>
                <p>How to establish event leadership teams.</p>
              </div>
            </div>
          </div>
          <div className={styles.principle}>
            <div className={styles.principleCard}>
              <div className={styles.principleFront}>
                <p>
                  Volunteering should encourage a{" "}
                  <strong>learn as you go.</strong>
                </p>
              </div>
              <div className={styles.principleBack}>
                <img src={principle6} />
              </div>
            </div>
          </div>
          <div className={styles.principle}>
            <div className={styles.principleCard}>
              <div className={styles.principleFront}>
                <p>
                  Volunteering should engage in shared documentation to{" "}
                  <strong>build upon previous work.</strong>
                </p>
              </div>
              <div className={styles.principleBack}>
                <img src={principle9} />
              </div>
            </div>
          </div>
          <div className={`${styles.principle} ${styles.howto}`}>
            <div className={styles.principleCard}>
              <div className={styles.principleFront}>
                <img src={principle2} />
              </div>
              <div className={styles.principleBack}>
                <p>How to plan recruitment for volunteer roles.</p>
              </div>
            </div>
          </div>
          <div className={styles.principle}>
            <div className={styles.principleCard}>
              <div className={styles.principleFront}>
                <p>
                  Volunteering should <strong>feel like fun</strong> not work.
                </p>
              </div>
              <div className={styles.principleBack}>
                <img src={principle8} />
              </div>
            </div>
          </div>
          <div className={`${styles.principle} ${styles.howto}`}>
            <div className={styles.principleCard}>
              <div className={styles.principleFront}>
                <img src={principle7} />
              </div>
              <div className={styles.principleBack}>
                <p>How to learn and improve through post-mortem meetings.</p>
              </div>
            </div>
          </div>
          <div className={styles.principle}>
            <div className={styles.principleCard}>
              <div className={styles.principleFront}>
                <p>
                  Volunteering should have a{" "}
                  <strong>low barrier to participation.</strong>
                </p>
              </div>
              <div className={styles.principleBack}>
                <img src={principle3} />
              </div>
            </div>
          </div>
        </section>
        <section className={styles.quote}>
          <blockquote>
            <span>
              I can't tell you how much I love this work! I am going to use many
              of these suggestions.
            </span>
            <cite>Scott, Granite Curling Club Bar Manager</cite>
          </blockquote>
          <blockquote>
            <span>
              I can't tell you how much I love this work! I am going to use many
              of these suggestions.
            </span>
            <cite>Scott, Granite Curling Club Bar Manager</cite>
          </blockquote>
        </section>
        <section className={styles.features}>
          <header className="text-center">
            <h1 className="leading-tight">
              Create your own Volunteer Coordinator Playbook
            </h1>
            <p>
              Our work doesn’t just stop with the base guide, it’s meant to
              continue on and adapt to your own volunteer-led organization.
            </p>
            <div className="text-center">
              <a
                href="https://github.com/kfrank/volunteer-coordinator-playbook"
                className={` ${styles.button}`}
              >
                Read documentation to get started{" "}
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
              </a>
            </div>
          </header>
          <ul className={styles.featureList}>
            <li className={styles.featureBlock}>
              <div className={styles.featureBlockContent}>
                <h2>Customize for your brand</h2>
                <p>
                  Add your organization’s logo and customize the fonts and
                  colors.
                </p>
              </div>
              <div className={styles.featureBlockImage}>
                <img src={features1} className={styles.img} />
              </div>
            </li>
            <li className={styles.featureBlock}>
              <div className={styles.featureBlockContent}>
                <h2>Personalize content</h2>
                <p>
                  Using markdown, an easy text editing language, you can
                  personalize each page to your organization’s needs.
                </p>
              </div>
              <div className={styles.featureBlockImage}>
                <img src={features2} className={styles.img} />
              </div>
            </li>
            <li className={styles.featureBlock}>
              <div className={styles.featureBlockContent}>
                <h2>Add your story</h2>
                <p>
                  Add or edit examples of noteworthy real-world volunteering you
                  see at your organization to connect with your volunteer
                  leaders and recognize amazing volunteers.
                </p>
              </div>
              <div className={styles.featureBlockImage}>
                <img src={features3} className={styles.img} />
              </div>
            </li>
            <li className={styles.featureBlock}>
              <div className={styles.featureBlockContent}>
                <h2>Keep up-to-date documentation</h2>
                <p>
                  Add in new sections and pages by creating new markdown files
                  and folders to easily add on to the existing Playbook as your
                  organization grows.
                </p>
              </div>
              <div className={styles.featureBlockImage}>
                <img src={features4} className={styles.img} />
              </div>
            </li>
          </ul>
        </section>
        <section className={styles.faqs}>
          <header>
            <h1>FAQs</h1>
          </header>
          <details>
            <summary>Who created this?</summary>
            <span>
              Aenean lacinia bibendum nulla sed consectetur. Maecenas sed diam
              eget risus varius blandit sit amet non magna. Cras mattis
              consectetur purus sit amet fermentum. Cum sociis natoque penatibus
              et magnis dis parturient montes, nascetur ridiculus mus. Fusce
              dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh,
              ut fermentum massa justo sit amet risus. Integer posuere erat a
              ante venenatis dapibus posuere velit aliquet. Donec sed odio dui.
            </span>
          </details>
          <details>
            <summary>Why was this created?</summary>
          </details>
          <details>
            <summary>Who is the Volunteer Coordinator Playbook for?</summary>
          </details>
          <details>
            <summary>What can I expect from the customizable Playbook?</summary>
          </details>
          <details>
            <summary>What is the status of this project?</summary>
          </details>
          <details>
            <summary>What is a working prototype?</summary>
          </details>
          <details>
            <summary>Can I use this now?</summary>
          </details>
          <details>
            <summary>How do I use this?</summary>
          </details>
          <details>
            <summary>How much flexibility can I expect?</summary>
          </details>
          <details>
            <summary>Who made the cool illustrations?</summary>
          </details>
          <details>
            <summary>Where can I find the code for this project?</summary>
          </details>
        </section>
      </div>
    </div>
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
    file(relativePath: { eq: "coverImage.png" }) {
      childImageSharp {
        fluid(maxHeight: 450, quality: 90) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
