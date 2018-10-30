import React from 'react'
import ReactDOM from 'react-dom'
import { MemoryRouter } from 'react-router-dom'
import renderer from 'react-test-renderer'

import HomePanel from './HomePanel'

describe('HomePanel', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <MemoryRouter>
        <HomePanel classes={{ panel: 'panel' }} linkTo='/test' toolTitle='Test'>
          This is a test.
        </HomePanel>
      </MemoryRouter>,
      div
    )
    ReactDOM.unmountComponentAtNode(div)
  })

  it('renders accurately', () => {
    const homePanel = renderer.create(
      <MemoryRouter>
        <HomePanel classes={{ panel: 'panel' }} linkTo='/test' toolTitle='Test'>
          This is a test.
        </HomePanel>
      </MemoryRouter>
    )
    let tree = homePanel.toJSON()
    expect(tree).toMatchInlineSnapshot(`
<a
  className="panel"
  href="/test"
  onClick={[Function]}
>
  <h2>
    Test
  </h2>
  <p>
    This is a test.
  </p>
</a>
`)
  })
})
