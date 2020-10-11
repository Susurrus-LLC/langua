import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Notice from '../../components/notice'
import Tool from '../../components/tool'

import LexForm from '../../pageComponents/lex/lexForm'
import LexResults from '../../pageComponents/lex/lexResults'

import styles from './lex.module.sass'

export const PureLex = ({ data }) => {
  const toolInfo = data?.site?.siteMetadata?.toolInfo?.lex

  return (
    <Tool toolInfo={toolInfo}>
      <Notice>This tool is still in planning.</Notice>
      <LexForm />
      <LexResults />
    </Tool>
  )
}

const Lex = props => {
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

  return <PureLex {...props} data={data} />
}

export default Lex
