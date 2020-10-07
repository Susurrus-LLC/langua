import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Layout from '../../components/layout'
import SEO from '../../components/seo'
import Notice from '../../components/notice'
import Tool from '../../components/tool'

import GenForm from '../../pageComponents/gen/genForm'
import GenResults from '../../pageComponents/gen/genResults'
import GenService from '../../services/genService'

import styles from './gen.module.sass'

const GenPage = () => {
  const data = useStaticQuery(graphql`
    query GenToolQuery {
      site {
        siteMetadata {
          title
          toolInfo {
            gen {
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
  const toolInfo = metadata.toolInfo.gen

  return (
    <Layout>
      <SEO
        title={`${metadata.title}${toolInfo.title}`}
        canonical={toolInfo.link}
      />
      <Tool toolInfo={toolInfo}>
        <Notice>This tool is still in development.</Notice>
        <GenForm />
        <GenResults />
      </Tool>
    </Layout>
  )
}

export default GenPage
