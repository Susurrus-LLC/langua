import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import HomePanel from '../components/homePanel'

import styles from './home.module.sass'

export const PureHome = ({ data }) => {
  const metadata = data?.site?.siteMetadata
  const siteTitle = metadata?.title
  const genInfo = metadata?.toolInfo?.gen
  const morphInfo = metadata?.toolInfo?.morph
  const derivInfo = metadata?.toolInfo?.deriv
  const frequenInfo = metadata?.toolInfo?.frequen
  const treeInfo = metadata?.toolInfo?.tree
  const lexInfo = metadata?.toolInfo?.lex

  return (
    <Layout>
      <SEO title='Home' />
      <p>
        Langua is a suite of language tools that can be used for testing,
        experimentation, learning, analysis, or creation.
      </p>
      <div className={styles.grid}>
        <HomePanel linkTo={`${genInfo?.link}/`} toolTitle={genInfo?.title}>
          {`${siteTitle}${genInfo?.title} ${genInfo?.description}`}
        </HomePanel>
        <HomePanel
          linkTo={`${morphInfo?.link}/`}
          toolTitle={morphInfo?.title}
          disabled
        >
          {`${siteTitle}${morphInfo?.title} ${morphInfo?.description}`}
        </HomePanel>
        <HomePanel linkTo={`${derivInfo?.link}/`} toolTitle={derivInfo?.title}>
          {`${siteTitle}${derivInfo?.title} ${derivInfo?.description}`}
        </HomePanel>
        <HomePanel
          linkTo={`${frequenInfo?.link}/`}
          toolTitle={frequenInfo?.title}
        >
          {`${siteTitle}${frequenInfo?.title} ${frequenInfo?.description}`}
        </HomePanel>
        <HomePanel
          linkTo={`${treeInfo?.link}/`}
          toolTitle={treeInfo?.title}
          disabled
        >
          {`${siteTitle}${treeInfo?.title} ${treeInfo?.description}`}
        </HomePanel>
        <HomePanel
          linkTo={`${lexInfo?.link}/`}
          toolTitle={lexInfo?.title}
          disabled
        >
          {`${siteTitle}${lexInfo?.title} ${lexInfo?.description}`}
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

const Home = props => {
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

  return <PureHome {...props} data={data} />
}

export default Home
