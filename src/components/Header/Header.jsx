import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import injectSheet from 'react-jss'
import styles from './styles'

const siteTitle = 'Langua'
const siteSubtitle = 'A suite of language tools'

const Header = () => (
  <header>
    <div className='header'>
      <div className='title-area'>
        <h1 className='site-title'><Link to='/'>{siteTitle}</Link></h1>
        <p className='site-subtitle'>{siteSubtitle}</p>
      </div>
      <nav>
        <ul className='menu'>
          <li><NavLink to='/gen' activeClassName='active'>Gen</NavLink></li>
          <li><NavLink to='/morph' activeClassName='active'>Morph</NavLink></li>
          <li><NavLink to='/deriv' activeClassName='active'>Deriv</NavLink></li>
          <li><NavLink to='/frequen' activeClassName='active'>Frequen</NavLink></li>
          <li><NavLink to='/tree' activeClassName='active'>Tree</NavLink></li>
        </ul>
      </nav>
    </div>
  </header>
)

export default injectSheet(styles)(Header)
