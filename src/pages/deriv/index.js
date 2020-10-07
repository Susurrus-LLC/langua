import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Layout from '../../components/layout'
import SEO from '../../components/seo'
import Notice from '../../components/notice'
import Tool from '../../components/tool'

import DerivForm from '../../pageComponents/deriv/derivForm'
import DerivResults from '../../pageComponents/deriv/derivResults'
import DerivService from '../../services/derivService'

import styles from './deriv.module.sass'

const DerivPage = () => {
  const data = useStaticQuery(graphql`
    query DerivToolQuery {
      site {
        siteMetadata {
          title
          toolInfo {
            deriv {
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
  const toolInfo = metadata.toolInfo.deriv

  return (
    <Layout>
      <SEO
        title={`${metadata.title}${toolInfo.title}`}
        canonical={toolInfo.link}
      />
      <Tool toolInfo={toolInfo}>
        <Notice>This tool is still in development.</Notice>
        <DerivForm />
        <DerivResults />
      </Tool>
    </Layout>
  )
}

export default DerivPage
