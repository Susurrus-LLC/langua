/**
 * @jest-environment jsdom
 */

import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'

import TreeResults from './treeResults'

describe('TreeResults', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<TreeResults />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('renders accurately', () => {
    const tree = renderer.create(<TreeResults />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
