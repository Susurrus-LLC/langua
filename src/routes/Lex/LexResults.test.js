import React from 'react'
import ReactDOM from 'react-dom'

import LexResults from './LexResults'

describe('LexResults', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<LexResults />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
