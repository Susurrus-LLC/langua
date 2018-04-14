import React from 'react'
import { hydrate, render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import 'normalize.css/normalize.css'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

const Site = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

const rootElement = document.getElementById('root')
if (rootElement.hasChildNodes()) {
  hydrate(<Site />, rootElement)
} else {
  render(<Site />, rootElement)
}

registerServiceWorker()
