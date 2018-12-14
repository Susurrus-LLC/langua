import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import injectSheet from 'react-jss'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import styles from './styles'

const siteTitle = 'Langua'
const siteSubtitle = 'A suite of language tools'

const Header = props => (
  <header>
    <div className={props.classes.header}>
      <div className={props.classes.titleArea}>
        <h1 className={props.classes.siteTitle}>
          <Link to='/' className={props.classes.titleLink}>
            {siteTitle}
          </Link>
        </h1>
        <p className={props.classes.siteSubtitle}>{siteSubtitle}</p>
      </div>
      <nav className={props.classes.nav}>
        <ul className={props.classes.menu}>
          <li className={props.classes.navLink}>
            <NavLink to='/gen' activeClassName='active'>
              Gen
            </NavLink>
          </li>
          <li
            className={classNames(
              props.classes.navLink,
              props.classes.disabled
            )}
          >
            <NavLink to='/morph' activeClassName='active'>
              Morph
            </NavLink>
          </li>
          <li className={props.classes.navLink}>
            <NavLink to='/deriv' activeClassName='active'>
              Deriv
            </NavLink>
          </li>
          <li className={props.classes.navLink}>
            <NavLink to='/frequen' activeClassName='active'>
              Frequen
            </NavLink>
          </li>
          <li
            className={classNames(
              props.classes.navLink,
              props.classes.disabled
            )}
          >
            <NavLink to='/tree' activeClassName='active'>
              Tree
            </NavLink>
          </li>
          <li
            className={classNames(
              props.classes.navLink,
              props.classes.disabled
            )}
          >
            <NavLink to='/lex' activeClassName='active'>
              Lex
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  classes: PropTypes.object
}

export default injectSheet(styles)(Header)
