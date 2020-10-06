import React from 'react'
import { useStaticQuery } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import HomePanel from '../components/homePanel'

import styles from './home.module.sass'

const IndexPage = props => {
  const data = useStaticQuery(graphql`
    query HomeToolQuery {
      site {
        siteMetadata {
          title
          toolInfo {
            gen {
              title
              link
              description
            }
            frequen {
              title
              link
              description
            }
            deriv {
              title
              link
              description
            }
            lex {
              title
              link
              description
            }
            morph {
              title
              link
              description
            }
            tree {
              title
              link
              description
            }
          }
        }
      }
    }
  `)

  const siteTitle = data.site.siteMetadata?.title
  const genInfo = data.site.siteMetadata?.toolInfo?.gen
  const morphInfo = data.site.siteMetadata?.toolInfo?.morph
  const derivInfo = data.site.siteMetadata?.toolInfo?.deriv
  const frequenInfo = data.site.siteMetadata?.toolInfo?.frequen
  const treeInfo = data.site.siteMetadata?.toolInfo?.tree
  const lexInfo = data.site.siteMetadata?.toolInfo?.lex

  return (
    <Layout>
      <SEO title='Home' />
      <p className={styles.siteDescription}>
        Langua is a suite of language tools that can be used for testing,
        experimentation, learning, analysis, or creation.
      </p>
      <div className={styles.grid}>
        <HomePanel
          classes={props.classes}
          linkTo={`${genInfo.link}/`}
          toolTitle={genInfo.title}
        >
          {`${siteTitle}${genInfo.title} ${genInfo.description}`}
        </HomePanel>
        <HomePanel
          classes={props.classes}
          linkTo={`${morphInfo.link}/`}
          toolTitle={morphInfo.title}
          disabled
        >
          {`${siteTitle}${morphInfo.title} ${morphInfo.description}`}
        </HomePanel>
        <HomePanel
          classes={props.classes}
          linkTo={`${derivInfo.link}/`}
          toolTitle={derivInfo.title}
        >
          {`${siteTitle}${derivInfo.title} ${derivInfo.description}`}
        </HomePanel>
        <HomePanel
          classes={props.classes}
          linkTo={`${frequenInfo.link}/`}
          toolTitle={frequenInfo.title}
        >
          {`${siteTitle}${frequenInfo.title} ${frequenInfo.description}`}
        </HomePanel>
        <HomePanel
          classes={props.classes}
          linkTo={`${treeInfo.link}/`}
          toolTitle={treeInfo.title}
          disabled
        >
          {`${siteTitle}${treeInfo.title} ${treeInfo.description}`}
        </HomePanel>
        <HomePanel
          classes={props.classes}
          linkTo={`${lexInfo.link}/`}
          toolTitle={lexInfo.title}
          disabled
        >
          {`${siteTitle}${lexInfo.title} ${lexInfo.description}`}
        </HomePanel>
      </div>
      <p className={styles.siteDescription}>
        {siteTitle} is a full Progressive Web App; once the site has been
        loaded, its full functionality is available even offline. {siteTitle}{' '}
        can also be added to the homescreen of your tablet or mobile device for
        easy access.
      </p>
    </Layout>
  )
}

export default IndexPage
