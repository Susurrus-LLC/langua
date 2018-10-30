import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'

import ControlPiece from './Piece'

describe('ControlPiece', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<ControlPiece />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('renders accurately with and without props and children', () => {
    let controlPiece = renderer.create(<ControlPiece />)
    let tree = controlPiece.toJSON()
    expect(tree).toMatchInlineSnapshot(`
<div
  className="ControlPiece-controlPiece-0-1-4"
/>
`)

    controlPiece = renderer.create(<ControlPiece addedClasses='test' />)
    tree = controlPiece.toJSON()
    expect(tree).toMatchInlineSnapshot(`
<div
  className="ControlPiece-controlPiece-0-1-4 test"
/>
`)

    controlPiece = renderer.create(<ControlPiece>Test</ControlPiece>)
    tree = controlPiece.toJSON()
    expect(tree).toMatchInlineSnapshot(`
<div
  className="ControlPiece-controlPiece-0-1-4"
>
  Test
</div>
`)
  })
})
