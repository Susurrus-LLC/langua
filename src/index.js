import React from 'react'
import { hydrate, render } from 'react-dom'
import 'normalize.css/normalize.css'

import Site from './Site'
import registerServiceWorker from './registerServiceWorker'

const rootElement = document.getElementById('root')
if (rootElement.hasChildNodes()) {
  hydrate(<Site />, rootElement)
} else {
  render(<Site />, rootElement)
}

registerServiceWorker()
