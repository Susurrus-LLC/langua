import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import injectSheet from 'react-jss'

import styles from './styles/global'
import registerServiceWorker from './registerServiceWorker'
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

const Site = injectSheet(styles)(Router)

const rootElement = document.getElementById('root')

if (rootElement.hasChildNodes()) {
  ReactDOM.hydrate(<Site />, rootElement)
} else {
  ReactDOM.render(<Site />, rootElement)
}

registerServiceWorker()
