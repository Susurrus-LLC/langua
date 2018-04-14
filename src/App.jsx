import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import injectSheet from 'react-jss'

import styles from './styles'

import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'

const App = () => (
  <BrowserRouter>
    <Header />
    <Main />
    <Footer />
  </BrowserRouter>
)

export default injectSheet(styles)(App)
