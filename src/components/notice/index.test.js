/**
 * @jest-environment jsdom
 */

import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'

import Notice from '.'

describe('Notice', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Notice>Test</Notice>, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('renders accurately', () => {
    let tree = renderer.create(<Notice />).toJSON()
    expect(tree).toMatchSnapshot()

    tree = renderer.create(<Notice>Test</Notice>).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
