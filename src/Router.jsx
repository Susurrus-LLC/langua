import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import injectSheet from 'react-jss'

import styles from './globalStyles'

import App from './App'

const Router = ({ classes }) => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
) // Add prop basename={'/langua'} before deploying to GitHub

export default injectSheet(styles)(Router)
