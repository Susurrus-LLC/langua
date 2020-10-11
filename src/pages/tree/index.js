import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Notice from '../../components/notice'
import Tool from '../../components/tool'

import TreeForm from '../../pageComponents/tree/treeForm'
import TreeResults from '../../pageComponents/tree/treeResults'

import styles from './tree.module.sass'

export const PureTree = ({ data }) => {
  const toolInfo = data?.site?.siteMetadata?.toolInfo?.tree

  return (
    <Tool toolInfo={toolInfo}>
      <Notice>This tool is still in planning.</Notice>
      <TreeForm />
      <TreeResults />
    </Tool>
  )
}

const Tree = props => {
  const data = useStaticQuery(graphql`
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
  `)

  return <PureTree {...props} data={data} />
}

export default Tree
