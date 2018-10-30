import React from 'react'
import ReactDOM from 'react-dom'

import MorphResults from './MorphResults'

describe('MorphResults', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<MorphResults />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
