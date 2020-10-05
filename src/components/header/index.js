import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

import styles from './header.module.sass'

const Header = ({ siteTitle, siteSubTitle }) => (
  <header className={styles.header}>
    <div className={styles.titleArea}>
      <h1 className={styles.siteTitle}>
        <Link to='/' className={styles.titleLink}>
          {siteTitle}
        </Link>
      </h1>
      <p className={styles.subtitle}>{siteSubTitle}</p>
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

Header.propTypes = {
  siteTitle: PropTypes.string,
  siteSubTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: `Langua`,
  siteSubTitle: `A suite of language tools`
}

export default Header
