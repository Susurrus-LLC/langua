import React from 'react'
import ReactDOM from 'react-dom'
import 'normalize.css/normalize.css'

import Router from './Router'
import registerServiceWorker from './registerServiceWorker'

const rootElement = document.getElementById('root')

if (rootElement.hasChildNodes()) {
  ReactDOM.hydrate(<Router />, rootElement)
} else {
  ReactDOM.render(<Router />, rootElement)
}

registerServiceWorker()
