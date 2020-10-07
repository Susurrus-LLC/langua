import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Notice from '../../components/notice'
import Tool from '../../components/tool'

import LexForm from '../../pageComponents/lex/lexForm'
import LexResults from '../../pageComponents/lex/lexResults'

import styles from './lex.module.sass'

const LexPage = () => {
  const data = useStaticQuery(graphql`
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
  `)

  const metadata = data.site.siteMetadata
  const toolInfo = metadata.toolInfo.lex

  return (
    <Tool toolInfo={toolInfo}>
      <Notice>This tool is still in planning.</Notice>
      <LexForm />
      <LexResults />
    </Tool>
  )
}

export default LexPage
