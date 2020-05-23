import React from "react"
import { Link } from "gatsby"
import styles from "./Download.module.scss"

const Download = () => {
  return (
    <>
      <Link to="" className={styles.root}>
        <svg
          width="22"
          height="23"
          viewBox="0 0 22 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11 0.5C11.5523 0.5 12 0.947715 12 1.5L12 11.5858L15.2929 8.29289C15.6834 7.90237 16.3166 7.90237 16.7071 8.29289C17.0976 8.68342 17.0976 9.31658 16.7071 9.70711L11.7071 14.7071C11.3166 15.0976 10.6834 15.0976 10.2929 14.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L10 11.5858L10 1.5C10 0.947715 10.4477 0.5 11 0.5ZM1 14.5C1.55228 14.5 2 14.9477 2 15.5V19.5C2 20.0523 2.44772 20.5 3 20.5H19C19.5523 20.5 20 20.0523 20 19.5V15.5C20 14.9477 20.4477 14.5 21 14.5C21.5523 14.5 22 14.9477 22 15.5V19.5C22 21.1569 20.6569 22.5 19 22.5H3C1.34315 22.5 0 21.1569 0 19.5V15.5C0 14.9477 0.447715 14.5 1 14.5Z"
            fill="black"
          />
        </svg>
        <span className={styles.label}>Download .pdf</span>
      </Link>
    </>
  )
}

export default Download
