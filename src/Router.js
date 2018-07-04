// @flow
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import injectSheet from 'react-jss'

import styles from './styles/global'
import App from './App'

const Router = () => (
  <BrowserRouter
    // If deploying to the subfolder '/langua', leave as-is.
    // If deploying to a different subfolder, change the basename below accordingly.
    // If deploying to the root of a site, remove the basename prop completely.
    basename={'/langua'}
  >
    <App />
  </BrowserRouter>
)

export default injectSheet(styles)(Router)
