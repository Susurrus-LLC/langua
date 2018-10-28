import React from 'react'
import ReactDOM from 'react-dom'

import MorphForm from './MorphForm'

describe('MorphForm', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<MorphForm />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
