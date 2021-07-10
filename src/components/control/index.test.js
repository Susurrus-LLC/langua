/**
 * @jest-environment jsdom
 */

import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'

import Control from '.'

describe('Control', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Control />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('renders accurately with and without props and children', () => {
    let tree = renderer.create(<Control />).toJSON()
    expect(tree).toMatchSnapshot()

    tree = renderer.create(<Control addedClasses='test' />).toJSON()
    expect(tree).toMatchSnapshot()

    tree = renderer.create(<Control>Test</Control>).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
