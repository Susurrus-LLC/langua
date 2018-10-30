import React from 'react'
import ReactDOM from 'react-dom'

import DerivResults from './DerivResults'

describe('DerivResults', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<DerivResults />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
