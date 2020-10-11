import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'

import ControlPiece from './piece'

describe('ControlPiece', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<ControlPiece />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('renders accurately with and without props and children', () => {
    let tree = renderer.create(<ControlPiece />).toJSON()
    expect(tree).toMatchSnapshot()

    tree = renderer.create(<ControlPiece addedClasses='test' />).toJSON()
    expect(tree).toMatchSnapshot()

    tree = renderer.create(<ControlPiece>Test</ControlPiece>).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
