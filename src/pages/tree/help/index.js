import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Layout from '../../../components/layout'
import SEO from '../../../components/seo'
import Notice from '../../../components/notice'
import Help from '../../../components/help'

const TreeHelpPage = () => {
  const data = useStaticQuery(graphql`
    query TreeHelpQuery {
      site {
        siteMetadata {
          title
          toolInfo {
            tree {
              title
              link
              description
            }
          }
        }
      }
    }
  `)

  const metadata = data.site.siteMetadata

  return (
    <Layout>
      <SEO
        title={`${metadata.title}${metadata.toolInfo.tree.title} Help`}
        canonical={`${metadata.toolInfo.tree.link}/help`}
      />
      <Help toolInfo={metadata.toolInfo.tree}>
        <Notice>This tool is still in planning.</Notice>
        <h3 id='using'>
          Using {metadata.title}
          {metadata.toolInfo.tree.title}
        </h3>
      </Help>
    </Layout>
  )
}

export default TreeHelpPage
