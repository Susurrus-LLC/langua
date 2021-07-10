import React from 'react'
import { graphql } from 'gatsby'

import Notice from '../../components/notice'
import Tool from '../../components/tool'

import TreeForm from '../../pageComponents/tree/treeForm'
import TreeResults from '../../pageComponents/tree/treeResults'

// import styles from './tree.module.sass'

export const pageQuery = graphql`
query TreeToolQuery {
  site {
    siteMetadata {
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
`

const Tree = props => {
  const toolInfo = props.data?.site?.siteMetadata?.toolInfo?.tree

  return (
    <Tool toolInfo={toolInfo}>
      <Notice>This tool is still in planning.</Notice>
      <TreeForm />
      <TreeResults />
    </Tool>
  )
}

export default Tree
