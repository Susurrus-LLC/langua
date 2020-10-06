import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import styles from './footer.module.sass'

const Footer = () => {
  const getCopyrightYear = () => {
    const initYear = 2017
    const d = new Date()
    const y = d.getFullYear()
    return y > initYear
      ? `${initYear}${String.fromCharCode(8211)}${y}`
      : initYear.toString()
  }

  const data = useStaticQuery(graphql`
    query SiteFooterQuery {
      site {
        siteMetadata {
          author
          authorURL
          appGhURL
          version
        }
      }
    }
  `)

  return (
    <footer className={styles.footer}>
      <p className={styles.copyright}>
        <a
          href={`${data.site.siteMetadata?.appGhURL}/blob/master/CHANGELOG.md`}
          target='_blank'
          rel='noopener noreferrer'
        >
          Version <i className='fas fa-code' />{' '}
          {data.site.siteMetadata?.version}
        </a>
        . Built by{' '}
        <a
          href={data.site.siteMetadata?.authorURL}
          target='_blank'
          rel='noopener noreferrer'
        >
          {data.site.siteMetadata?.author}
        </a>
        , copyright &copy; {getCopyrightYear()} under the{' '}
        <a
          href='https://choosealicense.com/licenses/agpl-3.0/'
          target='_blank'
          rel='noopener noreferrer'
        >
          AGPL-3.0 <i className='fas fa-gavel' /> license
        </a>
        .{' '}
        <a
          href={data.site.siteMetadata?.appGhURL}
          target='_blank'
          rel='noopener noreferrer'
        >
          View this project on <i className='fab fa-github' /> GitHub.
        </a>
      </p>
    </footer>
  )
}

export default Footer
