import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import PropTypes from 'prop-types'

import Layout from '../layout'
import SEO from '../seo'
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

  const metadata = data.site.siteMetadata

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
      >{`${metadata.title}${toolInfo.title} Help`}</h2>
      <p id={styles.description}>
        {`${metadata.title}${toolInfo.title} ${toolInfo.description}`}
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
