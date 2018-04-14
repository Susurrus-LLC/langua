import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import injectSheet from 'react-jss'

import styles from './siteStyles'
import App from './App'

const Site = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

export default injectSheet(styles)(Site)
