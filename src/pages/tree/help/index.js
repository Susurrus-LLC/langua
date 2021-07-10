import React from 'react'
import { graphql } from 'gatsby'

import Notice from '../../../components/notice'
import Help from '../../../components/help'

export const pageQuery = graphql`
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
`

const TreeHelp = props => {
  const metadata = props.data?.site?.siteMetadata
  const toolInfo = metadata?.toolInfo?.tree

  return (
    <Help toolInfo={toolInfo}>
      <Notice>This tool is still in planning.</Notice>
      <h3 id='using'>
        Using {metadata?.title}
        {toolInfo?.title}
      </h3>
    </Help>
  )
}

export default TreeHelp
