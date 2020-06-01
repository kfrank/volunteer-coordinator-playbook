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
              I can see this playbook being used to elevate who we are. We want
              to be the best curling club in the country and our volunteers are
              such an important part of that.
            </span>
            <cite>Phil Shyrock, Granite Curling Club President</cite>
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
              This Playbook was created by a team of graduate studies in the
              Human Centered Design and Engineering department at the University
              of Washington for our final capstone project. We are Klare Frank,
              Alison Buchanan, Jami Odell, and Jessica Schultz.
            </span>
          </details>
          <details>
            <summary>Why was this created?</summary>
            <span>
              We decided to create this Playbook after conducting extensive
              research on volunteering practices at the Granite Curling Club in
              Seattle, WA. This solution emerged as the best idea for gathering
              and distributing all our findings into a digestible format aimed
              to influence volunteer leaders and improve volunteering practices
              at volunteer-led organizations.
            </span>
          </details>
          <details>
            <summary>Who is the Volunteer Coordinator Playbook for?</summary>
            <span>
              The Volunteer Coordinator Playbook is intended to be used by
              volunteer-led organizations, or organizations that rely heavily on
              volunteers to operate. Leadership within those organizations can
              use this Playbook to keep a record of best practices and
              documentation on volunteer practices. The Playbook is primarily
              written for volunteer coordinators or leaders who manage many
              volunteers or events.
            </span>
          </details>
          <details>
            <summary>What can I expect from the customizable Playbook?</summary>
            <span>
              Organization leaders can expect a basic Playbook fit for any
              organization that includes guidelines and best practices for
              running volunteering, organized through a timeline for running a
              volunteering event. Content managers can expect to update
              callouts, or case studies, with examples from their own
              organizations, update content and add sections and pages, change
              and add images, and replace the logo and brand colors to suit
              their organization's brand image.
            </span>
          </details>
          <details>
            <summary>What is the status of this project?</summary>
            <span>
              This Playbook, in its current form, exists as a working prototype.
            </span>
          </details>
          <details>
            <summary>What is a working prototype?</summary>
            <span>
              We consider a working prototype to mean that the Playbook is
              usable for any organization right now, but has not gone through
              usability testing for the web app. The content itself has It may
              require extra assistance or technical knowledge to use. This means
              this Playbook is the first draft for building a web app but
              requires research for what organizations need to build and
              maintain their own Playbooks.
            </span>
          </details>
          <details>
            <summary>Can I use this now?</summary>
            <span>
              Yes! You can edit the content and add your own right now by
              forking the GitHub repository and following the readme
              instructions:{" "}
              <a href="https://github.com/kfrank/volunteer-coordinator-playbook#about-the-volunteer-coordinator-playbook">
                https://github.com/kfrank/volunteer-coordinator-playbook#about-the-volunteer-coordinator-playbook
              </a>
            </span>
          </details>
          <details>
            <summary>Who made the cool illustrations?</summary>
            <span>
              All of the base illustrations were created using the Open Peeps
              Illustration Library by Pablo Stanley.{" "}
              <a href="https://www.openpeeps.com/">
                https://www.openpeeps.com/
              </a>
            </span>
          </details>
          <details>
            <summary>Where can I find the code for this project?</summary>
            <span>
              The code for this project can be accessed in a repository on
              GitHub:{" "}
              <a href="https://github.com/kfrank/volunteer-coordinator-playbook">
                https://github.com/kfrank/volunteer-coordinator-playbook
              </a>
            </span>
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
