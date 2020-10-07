import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Layout from '../../../components/layout'
import SEO from '../../../components/seo'
import Notice from '../../../components/notice'
import Help from '../../../components/help'

const LexHelpPage = () => {
  const data = useStaticQuery(graphql`
    query LexHelpQuery {
      site {
        siteMetadata {
          title
          toolInfo {
            lex {
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
  const toolInfo = metadata.toolInfo.lex

  return (
    <Layout>
      <SEO
        title={`${metadata.title}${toolInfo.title} Help`}
        canonical={`${toolInfo.link}/help`}
      />
      <Help toolInfo={toolInfo}>
        <Notice>This tool is still in planning.</Notice>
        <h3 id='using'>
          Using {metadata.title}
          {toolInfo.title}
        </h3>
      </Help>
    </Layout>
  )
}

export default LexHelpPage
