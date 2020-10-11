import React from 'react'
import PropTypes from 'prop-types'
import 'normalize.css/normalize.css'
import '@fortawesome/fontawesome-free/css/all.css'

import '../../styles/global.sass'

import Header from '../header'
import Main from '../main'
import Footer from '../footer'

import styles from './layout.module.sass'

const Layout = ({ children }) => {
  return (
    <div className={styles.app}>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
