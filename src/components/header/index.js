import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import styles from './header.module.sass'

export const PureHeader = ({ data }) => {
  const metadata = data?.site?.siteMetadata

  return (
    <header className={styles.header}>
      <div className={styles.titleArea}>
        <h1 className={styles.siteTitle}>
          <Link to='/' className={styles.titleLink}>
            {metadata?.title}
          </Link>
        </h1>
        <p className={styles.subtitle}>{metadata?.subtitle}</p>
      </div>
      <nav className={styles.nav}>
        <ul className={styles.menu}>
          <li className={styles.navLink}>
            <Link to='/gen' activeClassName='active'>
              Gen
            </Link>
          </li>
          <li className={`${styles.navLink} ${styles.disabled}`}>
            <Link to='/morph' activeClassName='active'>
              Morph
            </Link>
          </li>
          <li className={styles.navLink}>
            <Link to='/deriv' activeClassName='active'>
              Deriv
            </Link>
          </li>
          <li className={styles.navLink}>
            <Link to='/frequen' activeClassName='active'>
              Frequen
            </Link>
          </li>
          <li className={`${styles.navLink} ${styles.disabled}`}>
            <Link to='/tree' activeClassName='active'>
              Tree
            </Link>
          </li>
          <li className={`${styles.navLink} ${styles.disabled}`}>
            <Link to='/lex' activeClassName='active'>
              Lex
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

const Header = props => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          title
          subtitle
        }
      }
    }
  `)

  return <PureHeader {...props} data={data} />
}

export default Header
