import React from 'react'
import ReactDOM from 'react-dom'
import { MemoryRouter } from 'react-router-dom'

import Frequen from '.'

describe('Frequen', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <MemoryRouter>
        <Frequen />
      </MemoryRouter>,
      div
    )
    ReactDOM.unmountComponentAtNode(div)
  })
})
