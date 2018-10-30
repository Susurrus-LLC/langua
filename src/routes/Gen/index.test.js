import React from 'react'
import ReactDOM from 'react-dom'
import { MemoryRouter } from 'react-router-dom'

import Gen from '.'

describe('Gen', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <MemoryRouter>
        <Gen />
      </MemoryRouter>,
      div
    )
    ReactDOM.unmountComponentAtNode(div)
  })
})
