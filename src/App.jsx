import React from 'react'
import injectSheet from 'react-jss'

import styles from './appStyles'

import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'

const App = ({classes}) => (
  <div className={classes.app}>
    <Header />
    <Main />
    <Footer />
  </div>
)

export default injectSheet(styles)(App)
