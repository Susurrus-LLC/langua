import React from 'react'
import { graphql } from 'gatsby'

import Notice from '../../components/notice'
import Tool from '../../components/tool'

import LexForm from '../../pageComponents/lex/lexForm'
import LexResults from '../../pageComponents/lex/lexResults'

// import styles from './lex.module.sass'

export const pageQuery = graphql`
query LexToolQuery {
  site {
    siteMetadata {
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
`

const Lex = props => {
  const toolInfo = props.data?.site?.siteMetadata?.toolInfo?.lex

  return (
    <Tool toolInfo={toolInfo}>
      <Notice>This tool is still in planning.</Notice>
      <LexForm />
      <LexResults />
    </Tool>
  )
}

export default Lex
