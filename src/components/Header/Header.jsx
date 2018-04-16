import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import injectSheet from 'react-jss'

import styles from './styles'

const siteTitle = 'Langua'
const siteSubtitle = 'A suite of language tools'

const Header = ({classes}) => (
  <header>
    <div className={classes.header}>
      <div className={classes.titleArea}>
        <h1 className={classes.siteTitle}>
          <Link to='/' className={classes.titleLink}>
            {siteTitle}
          </Link>
        </h1>
        <p className={classes.siteSubtitle}>{siteSubtitle}</p>
      </div>
      <nav className={classes.nav}>
        <ul className={classes.menu}>
          <li className={classes.navLink}>
            <NavLink to='/gen' activeClassName='active'>Gen</NavLink>
          </li>
          <li className={classes.navLink}>
            <NavLink to='/morph' activeClassName='active'>Morph</NavLink>
          </li>
          <li className={classes.navLink}>
            <NavLink to='/deriv' activeClassName='active'>Deriv</NavLink>
          </li>
          <li className={classes.navLink}>
            <NavLink to='/frequen' activeClassName='active'>Frequen</NavLink>
          </li>
          <li className={classes.navLink}>
            <NavLink to='/tree' activeClassName='active'>Tree</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
)

export default injectSheet(styles)(Header)
