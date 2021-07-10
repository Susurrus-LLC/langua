/**
 * @jest-environment jsdom
 */

import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'

import HomePanel from '.'

describe('HomePanel', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <HomePanel linkTo='test' toolTitle='Test'>
        Test
      </HomePanel>,
      div
    )
    ReactDOM.unmountComponentAtNode(div)
  })

  it('renders accurately with various props', () => {
    let tree = renderer
      .create(
        <HomePanel linkTo='test' toolTitle='Test'>
          Test
        </HomePanel>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()

    tree = renderer
      .create(
        <HomePanel linkTo='different/test' toolTitle='Different Test' disabled>
          Different Test
        </HomePanel>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
