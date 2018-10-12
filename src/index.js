import 'react-app-polyfill/ie9'
import React from 'react'
import ReactDOM from 'react-dom'

import registerServiceWorker from './registerServiceWorker'
import Router from './Router'

const rootElement = document.getElementById('root')

if (rootElement.hasChildNodes()) {
  ReactDOM.hydrate(<Router />, rootElement)
} else {
  ReactDOM.render(<Router />, rootElement)
}

registerServiceWorker()
