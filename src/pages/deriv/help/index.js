import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Layout from '../../../components/layout'
import SEO from '../../../components/seo'
import Notice from '../../../components/notice'
import Help from '../../../components/help'

const DerivHelpPage = () => {
  const data = useStaticQuery(graphql`
    query DerivHelpQuery {
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

  return (
    <Layout>
      <SEO
        title={`${metadata.title}${metadata.toolInfo.deriv.title} Help`}
        canonical={`${metadata.toolInfo.deriv.link}/help`}
      />
      <Help toolInfo={metadata.toolInfo.deriv}>
        <Notice>This tool is still in development.</Notice>
        <h3 id='using'>
          Using {metadata.title}
          {metadata.toolInfo.deriv.title}
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
          {metadata.toolInfo.deriv.title} was mainly built as a modernized and
          updated version of SCA<sup>2</sup>.
        </p>
      </Help>
    </Layout>
  )
}

export default DerivHelpPage
