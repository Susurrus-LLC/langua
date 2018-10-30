import React from 'react'
import ReactDOM from 'react-dom'
import { MemoryRouter } from 'react-router-dom'

import GenHelp from '.'

describe('GenHelp', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <MemoryRouter>
        <GenHelp />
      </MemoryRouter>,
      div
    )
    ReactDOM.unmountComponentAtNode(div)
  })
})
