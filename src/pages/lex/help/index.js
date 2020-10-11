import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Notice from '../../../components/notice'
import Help from '../../../components/help'

export const PureLexHelp = ({ data }) => {
  const metadata = data?.site?.siteMetadata
  const toolInfo = metadata?.toolInfo?.lex

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

const LexHelp = props => {
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

  return <PureLexHelp {...props} data={data} />
}

export default LexHelp
