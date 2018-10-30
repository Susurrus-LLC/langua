import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import Deriv from '.'

describe('Deriv', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <BrowserRouter>
        <Deriv />
      </BrowserRouter>,
      div
    )
    ReactDOM.unmountComponentAtNode(div)
  })
})
