import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import injectSheet from 'react-jss'

import styles from './styles'

import App from './App'

const Router = ({classes, children}) => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

export default injectSheet(styles)(Router)
