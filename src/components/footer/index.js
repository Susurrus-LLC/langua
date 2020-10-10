import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import styles from './footer.module.sass'

export const PureFooter = ({ data }) => {
  const metadata = data?.site?.siteMetadata

  const getCopyrightYear = () => {
    const initYear = 2017
    const d = new Date()
    const y = d.getFullYear()
    return y > initYear
      ? `${initYear}${String.fromCharCode(8211)}${y}`
      : initYear.toString()
  }

  return (
    <footer className={styles.footer}>
      <p className={styles.copyright}>
        <a
          href={`${metadata?.appGhURL}/blob/master/CHANGELOG.md`}
          target='_blank'
          rel='noopener noreferrer'
        >
          Version <i className='fas fa-code' /> {metadata?.version}
        </a>
        . Built by{' '}
        <a href={metadata?.authorURL} target='_blank' rel='noopener noreferrer'>
          {metadata?.author}
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
        <a href={metadata?.appGhURL} target='_blank' rel='noopener noreferrer'>
          View this project on <i className='fab fa-github' /> GitHub.
        </a>
      </p>
    </footer>
  )
}

const Footer = props => {
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

  return <PureFooter {...props} data={data} />
}

export default Footer
