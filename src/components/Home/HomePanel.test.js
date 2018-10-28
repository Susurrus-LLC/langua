import React from 'react'
import ReactDOM from 'react-dom'
import { MemoryRouter } from 'react-router-dom'

import HomePanel from './HomePanel'

describe('HomePanel', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <MemoryRouter>
        <HomePanel classes={{ panel: 'panel' }} linkTo='test' toolTitle='test'>
          Test
        </HomePanel>
      </MemoryRouter>,
      div
    )
    ReactDOM.unmountComponentAtNode(div)
  })
})
