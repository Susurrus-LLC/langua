import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import PropTypes from 'prop-types'

import Button from '../button'

import styles from './help.module.sass'

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
    <Layout>
      <SEO
        title={`${metadata.title}${toolInfo.title} Help`}
        canonical={`${toolInfo.link}/help`}
      />
      <Button link route={toolInfo.link}>
        Back
      </Button>
      <h2
        className={styles.toolTitle}
      >{`${siteTitle}${toolInfo.title} Help`}</h2>
      <p id={styles.description}>
        {`${siteTitle}${toolInfo.title} ${toolInfo.description}`}
      </p>
      {children}
    </Layout>
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
