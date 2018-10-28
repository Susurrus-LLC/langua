import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import HomePanel from './HomePanel'

describe('HomePanel', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <BrowserRouter>
        <HomePanel classes={{ panel: 'panel' }} linkTo='test' toolTitle='test'>
          Test
        </HomePanel>
      </BrowserRouter>,
      div
    )
    ReactDOM.unmountComponentAtNode(div)
  })
})
