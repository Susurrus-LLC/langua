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

  return (
    <Layout>
      <SEO
        title={`${metadata.title}${metadata.toolInfo.gen.title}`}
        canonical={metadata.toolInfo.gen.link}
      />
      <Tool toolInfo={metadata.toolInfo.gen}>
        <Notice>This tool is still in development.</Notice>
        <GenForm />
        <GenResults />
      </Tool>
    </Layout>
  )
}

export default GenPage
