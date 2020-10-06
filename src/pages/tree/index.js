import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Layout from '../../components/layout'
import SEO from '../../components/seo'
import Notice from '../../components/notice'
import Tool from '../../components/tool'

import TreeForm from '../../pageComponents/tree/treeForm'
import TreeResults from '../../pageComponents/tree/treeResults'

const TreePage = () => {
  const data = useStaticQuery(graphql`
    query TreeToolQuery {
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
        title={`${metadata.title}${metadata.toolInfo.tree.title}`}
        canonical={metadata.toolInfo.tree.link}
      />
      <Tool toolInfo={metadata.toolInfo.tree}>
        <Notice>This tool is still in planning.</Notice>
        <TreeForm />
        <TreeResults />
      </Tool>
    </Layout>
  )
}

export default TreePage
