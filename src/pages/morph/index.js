import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

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
  const toolInfo = metadata.toolInfo.morph

  return (
    <Tool toolInfo={toolInfo}>
      <Notice>This tool is still in development.</Notice>
      <MorphForm />
      <MorphResults />
    </Tool>
  )
}

export default MorphPage
