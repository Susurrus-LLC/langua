import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

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
  const toolInfo = metadata.toolInfo.frequen

  return (
    <Tool toolInfo={toolInfo}>
      <Notice>This tool is still in development.</Notice>
      <FrequenForm />
      <FrequenResults />
    </Tool>
  )
}

export default FrequenPage
