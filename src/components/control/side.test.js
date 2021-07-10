/**
 * @jest-environment jsdom
 */

import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'

import ControlSide from './side'

describe('ControlSide', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<ControlSide />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('renders accurately with and without props and children', () => {
    let tree = renderer.create(<ControlSide />).toJSON()
    expect(tree).toMatchSnapshot()

    tree = renderer.create(<ControlSide addedClasses='test' />).toJSON()
    expect(tree).toMatchSnapshot()

    tree = renderer.create(<ControlSide>Test</ControlSide>).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
