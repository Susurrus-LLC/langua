import React from 'react'
import ReactDOM from 'react-dom'

import TreeForm from './TreeForm'

describe('TreeForm', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<TreeForm />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
