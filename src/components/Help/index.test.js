import React from 'react'
import ReactDOM from 'react-dom'
import { MemoryRouter } from 'react-router-dom'

import Help from '.'

describe('Help', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <MemoryRouter>
        <Help toolTitle='Test' toolDescription='This is a test' link='test' />
      </MemoryRouter>,
      div
    )
    ReactDOM.unmountComponentAtNode(div)
  })
})
