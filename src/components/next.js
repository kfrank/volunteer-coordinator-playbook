
import AniLink from "gatsby-plugin-transition-link/AniLink"

allMarkdownRemark(sort: { order: ASC, fields: frontmatter___page }) {
      edges {
        node {
          id
        }
        next {
          excerpt(pruneLength: 200)
          fields {
            slug
          }
          frontmatter {
            title
            sectionPage
            type
            section
          }
        }
      }
    }


      // const { next } = pageContext
  // const nextArticle = next && (
  //   <AniLink
  //     cover
  //     direction="up"
  //     bg="white"
  //     to={next.fields.slug}
  //     className={styles.nextPage}
  //     trigger={async pages => {
  //       const entry = await pages.entry

  //       const scrollingEl = entry.node.querySelector("#mainContent")

  //       scrollingEl.scrollTo(0, 0)
  //     }}
  //   >
  //     <h2>Next Up</h2>
  //     <div className={styles.nextPageContainer}>
  //       {next.frontmatter.type === "child" ? (
  //         <>
  //           <span className={styles.nextPageNumber}>
  //             {next.frontmatter.sectionPage}.
  //           </span>
  //           <h3>{next.frontmatter.section}</h3>
  //           <h4>{next.frontmatter.title}</h4>
  //         </>
  //       ) : (
  //         <h4 className={styles.nextPageSection}>{next.frontmatter.title}</h4>
  //       )}
  //       <div className={styles.nextExcerpt}>{next.excerpt}</div>
  //     </div>
  //     <div className={styles.nextPageButton}>
  //       <span>
  //         Keep Reading{" "}
  //         <svg
  //           width="12"
  //           height="15"
  //           viewBox="0 0 12 15"
  //           fill="none"
  //           xmlns="http://www.w3.org/2000/svg"
  //         >
  //           <line
  //             x1="6"
  //             y1="1"
  //             x2="6"
  //             y2="12"
  //             stroke="white"
  //             strokeWidth="2"
  //             strokeLinecap="round"
  //           />
  //           <path
  //             d="M11 9L6 14L1 9"
  //             stroke="white"
  //             strokeWidth="2"
  //             strokeLinecap="round"
  //             strokeLinejoin="round"
  //           />
  //         </svg>
  //       </span>
  //     </div>
  //   </AniLink>
  // )