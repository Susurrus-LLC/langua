import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import PropTypes from 'prop-types'

import Layout from '../layout'
import SEO from '../seo'
import Button from '../button'

import styles from './tool.module.sass'

export const PureTool = ({ data, toolInfo, children }) => {
  const metadata = data?.site?.siteMetadata

  return (
    <Layout>
      <SEO
        title={`${metadata?.title}${toolInfo.title}`}
        canonical={toolInfo.link}
      />
      <Button link route={`${toolInfo.link}/help`}>
        Help
      </Button>
      <h2
        className={styles.toolTitle}
      >{`${metadata?.title}${toolInfo.title}`}</h2>
      {children}
    </Layout>
  )
}

PureTool.propTypes = {
  data: PropTypes.object,
  toolInfo: PropTypes.objectOf(PropTypes.string).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.element, PropTypes.string])
    )
  ])
}

const Tool = props => {
  const data = useStaticQuery(graphql`
    query ToolTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return <PureTool {...props} data={data} />
}

export default Tool
