import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Layout from '../../components/layout'
import SEO from '../../components/seo'
import Notice from '../../components/notice'
import Tool from '../../components/tool'

import FrequenForm from '../../pageComponents/frequen/frequenForm'
import FrequenResults from '../../pageComponents/frequen/frequenResults'
import FrequenService from '../../services/frequenService'

import styles from './frequen.module.sass'

const FrequenPage = () => {
  const data = useStaticQuery(graphql`
    query FrequenToolQuery {
      site {
        siteMetadata {
          title
          toolInfo {
            frequen {
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
        title={`${metadata.title}${metadata.toolInfo.frequen.title}`}
        canonical={metadata.toolInfo.frequen.link}
      />
      <Tool toolInfo={metadata.toolInfo.frequen}>
        <Notice>This tool is still in development.</Notice>
        <FrequenForm />
        <FrequenResults />
      </Tool>
    </Layout>
  )
}

export default FrequenPage
