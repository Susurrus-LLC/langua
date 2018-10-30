import React from 'react'
import ReactDOM from 'react-dom'
import { MemoryRouter } from 'react-router-dom'

import Morph from '.'

describe('Morph', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <MemoryRouter>
        <Morph />
      </MemoryRouter>,
      div
    )
    ReactDOM.unmountComponentAtNode(div)
  })
})
