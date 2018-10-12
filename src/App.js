import React from 'react'
import { Helmet } from 'react-helmet'
import injectSheet from 'react-jss'
import 'normalize.css/normalize.css'
import PropTypes from 'prop-types'

import * as v from './styles/variables'
import styles from './styles/app'

import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'

export const canonical = 'https://nai888.github.io/langua/'
export const siteTitle = 'Langua |'

const App = (props) => (
  <div className={props.classes.app}>
    <Helmet>
      <title>{siteTitle} Language Tools</title>
      <meta charset='utf-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' />
      <meta name='author' content='Ian A. Cook' />
      <meta name='description' content='Langua is a suite of language tools that can be used for testing, experimentation, learning, analysis, or creation.' />
      <meta name='theme-color' content={v.blu.string()} />
      <link rel='canonical' href={canonical} />
      <link href='https://fonts.googleapis.com/css?family=Noto+Sans:400,400i,700,700i|Noto+Serif:400,400i,700,700i&amp;subset=greek,greek-ext,latin-ext' rel='stylesheet' />
      <script defer src='https://use.fontawesome.com/releases/v5.0.10/js/all.js' integrity='sha384-slN8GvtUJGnv6ca26v8EzVaR9DC58QEwsIk9q1QXdCU8Yu8ck/tL/5szYlBbqmS+' crossOrigin='anonymous' />
    </Helmet>
    <Header />
    <Main />
    <Footer />
  </div>
)

App.propTypes = {
  classes: PropTypes.object
}

export default injectSheet(styles)(App)
