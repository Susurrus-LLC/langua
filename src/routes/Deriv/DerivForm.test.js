import React from 'react'
import ReactDOM from 'react-dom'

import DerivForm from './DerivForm'

describe('DerivForm', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<DerivForm />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
