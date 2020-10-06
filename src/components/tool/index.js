import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import PropTypes from 'prop-types'

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

  const siteTitle = data.site.siteMetadata?.title

  return (
    <>
      <Button link ver='danger' route={`${toolInfo.link}/help`}>
        Help
      </Button>
      <h2 className={styles.toolTitle}>{`${siteTitle}${toolInfo.title}`}</h2>
      {children}
    </>
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
