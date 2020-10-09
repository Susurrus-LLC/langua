import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Tool from '../../components/tool'

import GenForm from '../../pageComponents/gen/genForm'
import GenResults from '../../pageComponents/gen/genResults'
import genService from '../../services/genService'

import styles from './gen.module.sass'

const GenPage = () => {
  const data = useStaticQuery(graphql`
    query GenToolQuery {
      site {
        siteMetadata {
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
    <Tool toolInfo={toolInfo}>
      <GenForm styles={styles} />
      <GenResults styles={styles} />
    </Tool>
  )
}

export default GenPage
