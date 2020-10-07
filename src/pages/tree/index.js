import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Layout from '../../components/layout'
import SEO from '../../components/seo'
import Notice from '../../components/notice'
import Tool from '../../components/tool'

import TreeForm from '../../pageComponents/tree/treeForm'
import TreeResults from '../../pageComponents/tree/treeResults'

import styles from './tree.module.sass'

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
  const toolInfo = metadata.toolInfo.tree

  return (
    <Layout>
      <SEO
        title={`${metadata.title}${toolInfo.title}`}
        canonical={toolInfo.link}
      />
      <Tool toolInfo={toolInfo}>
        <Notice>This tool is still in planning.</Notice>
        <TreeForm />
        <TreeResults />
      </Tool>
    </Layout>
  )
}

export default TreePage
