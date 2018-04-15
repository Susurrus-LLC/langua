import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import injectSheet from 'react-jss'

import styles from './globalStyles'

import App from './App'

const Router = ({classes, children}) => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

export default injectSheet(styles)(Router)
