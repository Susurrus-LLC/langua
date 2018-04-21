import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import injectSheet from 'react-jss'

import styles from './styles/global'
import registerServiceWorker from './registerServiceWorker'
import App from './App'

const Router = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
) // Add prop basename={'/langua'} to BrowserRouter before building and deploying to GitHub

const Site = injectSheet(styles)(Router)

const rootElement = document.getElementById('root')

if (rootElement.hasChildNodes()) {
  ReactDOM.hydrate(<Site />, rootElement)
} else {
  ReactDOM.render(<Site />, rootElement)
}

registerServiceWorker()
