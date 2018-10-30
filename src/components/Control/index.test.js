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
    let control = renderer.create(<Control />)
    let tree = control.toJSON()
    expect(tree).toMatchInlineSnapshot(`
<div
  className="Control-control-0-1-1"
/>
`)

    control = renderer.create(<Control addedClasses='test' />)
    tree = control.toJSON()
    expect(tree).toMatchInlineSnapshot(`
<div
  className="Control-control-0-1-1 test"
/>
`)

    control = renderer.create(<Control>Test</Control>)
    tree = control.toJSON()
    expect(tree).toMatchInlineSnapshot(`
<div
  className="Control-control-0-1-1"
>
  Test
</div>
`)
  })
})
