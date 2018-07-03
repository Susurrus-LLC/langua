// @flow
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import injectSheet from 'react-jss'
import type Classes from 'react-jss'
import classNames from 'classnames'

import styles from './styles'

const siteTitle = 'Langua'
const siteSubtitle = 'A suite of language tools'

type props = {
  classes: Classes
}

const Header = (props: props) => (
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
            <NavLink to='/gen' activeClassName='active'>Gen</NavLink>
          </li>
          <li className={classNames(props.classes.navLink, props.classes.disabled)}>
            <NavLink to='/morph' activeClassName='active'>Morph</NavLink>
          </li>
          <li className={classNames(props.classes.navLink, props.classes.disabled)}>
            <NavLink to='/deriv' activeClassName='active'>Deriv</NavLink>
          </li>
          <li className={classNames(props.classes.navLink, props.classes.disabled)}>
            <NavLink to='/frequen' activeClassName='active'>Frequen</NavLink>
          </li>
          <li className={classNames(props.classes.navLink, props.classes.disabled)}>
            <NavLink to='/tree' activeClassName='active'>Tree</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
)

export default injectSheet(styles)(Header)
