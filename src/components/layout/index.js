/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import 'normalize.css/normalize.css'

import '../../styles/global.sass'

import Header from '../header'
import Footer from '../footer'

import styles from './layout.module.sass'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className={styles.app}>
      <Header
        siteTitle={data.site.siteMetadata?.title}
        siteSubTitle={data.site.siteMetadata?.subtitle}
      />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout