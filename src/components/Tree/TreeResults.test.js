import React from 'react'
import ReactDOM from 'react-dom'

import TreeResults from './TreeResults'

describe('TreeResults', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<TreeResults />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
