import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Layout from '../../components/layout'
import SEO from '../../components/seo'
import Notice from '../../components/notice'
import Tool from '../../components/tool'

import MorphForm from '../../pageComponents/morph/morphForm'
import MorphResults from '../../pageComponents/morph/morphResults'
import MorphService from '../../services/morphService'

import styles from './morph.module.sass'

const MorphPage = () => {
  const data = useStaticQuery(graphql`
    query MorphToolQuery {
      site {
        siteMetadata {
          title
          toolInfo {
            morph {
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
        title={`${metadata.title}${metadata.toolInfo.morph.title}`}
        canonical={metadata.toolInfo.morph.link}
      />
      <Tool toolInfo={metadata.toolInfo.morph}>
        <Notice>This tool is still in development.</Notice>
        <MorphForm />
        <MorphResults />
      </Tool>
    </Layout>
  )
}

export default MorphPage
