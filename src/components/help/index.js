import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import PropTypes from 'prop-types'

import Button from '../button'

const Help = ({ toolInfo, children }) => {
  const data = useStaticQuery(graphql`
    query HelpTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const siteTitle = data.site.siteMetadata?.title

  return (
    <div className={styles.help}>
      <Button link route={toolInfo.link}>
        Back
      </Button>
      <h2 className={styles.toolTitle}>{`${siteTitle}${toolInfo.title}`}</h2>
      <p id={styles.description}>
        {`${siteTitle}${toolInfo.title} ${toolInfo.description}`}
      </p>
      {children}
    </div>
  )
}

Help.propTypes = {
  toolInfo: PropTypes.objectOf(PropTypes.string).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.element, PropTypes.string])
    )
  ])
}

export default Help
