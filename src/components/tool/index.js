import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import PropTypes from 'prop-types'

import Layout from '../layout'
import SEO from '../seo'
import Button from '../button'

import styles from './tool.module.sass'

const Tool = ({ toolInfo, children }) => {
  const data = useStaticQuery(graphql`
    query ToolTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const metadata = data.site.siteMetadata

  return (
    <Layout>
      <SEO
        title={`${metadata.title}${toolInfo.title}`}
        canonical={toolInfo.link}
      />
      <Button link route={`${toolInfo.link}/help`}>
        Help
      </Button>
      <h2
        className={styles.toolTitle}
      >{`${metadata.title}${toolInfo.title}`}</h2>
      {children}
    </Layout>
  )
}

Tool.propTypes = {
  toolInfo: PropTypes.objectOf(PropTypes.string).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.element, PropTypes.string])
    )
  ])
}

export default Tool
