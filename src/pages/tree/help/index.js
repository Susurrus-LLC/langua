import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Notice from '../../../components/notice'
import Help from '../../../components/help'

export const PureTreeHelp = ({ data }) => {
  const metadata = data?.site?.siteMetadata
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

const TreeHelp = props => {
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

  return <PureTreeHelp {...props} data={data} />
}

export default TreeHelp
