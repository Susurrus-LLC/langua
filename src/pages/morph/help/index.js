import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Layout from '../../../components/layout'
import SEO from '../../../components/seo'
import Notice from '../../../components/notice'
import Help from '../../../components/help'

const MorphHelpPage = () => {
  const data = useStaticQuery(graphql`
    query MorphHelpQuery {
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
  const toolInfo = metadata.toolInfo.morph

  return (
    <Layout>
      <SEO
        title={`${metadata.title}${toolInfo.title} Help`}
        canonical={`${toolInfo.link}/help`}
      />
      <Help toolInfo={toolInfo}>
        <Notice>This tool is still in development.</Notice>
        <h3 id='using'>
          Using {metadata.title}
          {toolInfo.title}
        </h3>
        <h3 id='acknowledgments'>Acknowledgments</h3>
        <p>
          Much thanks should be given to Mark Rosenfelder and{' '}
          <a
            href='http://www.zompist.com/sca2.html'
            target='_blank'
            rel='noopener noreferrer'
          >
            the Sound Change Applier 2
          </a>{' '}
          (SCA<sup>2</sup>). {metadata.title}
          {toolInfo.title} was mainly built as a modernized and updated version
          of SCA<sup>2</sup>.
        </p>
      </Help>
    </Layout>
  )
}

export default MorphHelpPage
