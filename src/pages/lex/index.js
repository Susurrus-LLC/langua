import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Layout from '../../components/layout'
import SEO from '../../components/seo'
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

  const metadata = data.site.siteMetadata

  return (
    <Layout>
      <SEO
        title={`${metadata.title}${metadata.toolInfo.lex.title}`}
        canonical={metadata.toolInfo.lex.link}
      />
      <Tool toolInfo={metadata.toolInfo.lex}>
        <Notice>This tool is still in planning.</Notice>
        <LexForm />
        <LexResults />
      </Tool>
    </Layout>
  )
}

export default LexPage
