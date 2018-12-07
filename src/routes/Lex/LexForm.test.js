import React from 'react'
import ReactDOM from 'react-dom'

import LexForm from './LexForm'

describe('LexForm', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<LexForm />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
