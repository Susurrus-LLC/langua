import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'

import ControlSide from './ControlSide'

describe('ControlSide', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<ControlSide />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('renders accurately with and without props and children', () => {
    let controlSide = renderer.create(<ControlSide />)
    let tree = controlSide.toJSON()
    expect(tree).toMatchInlineSnapshot(`
<div
  className="ControlSide-controlRight-0-1-3"
/>
`)

    controlSide = renderer.create(<ControlSide addedClasses='test' />)
    tree = controlSide.toJSON()
    expect(tree).toMatchInlineSnapshot(`
<div
  className="ControlSide-controlRight-0-1-3 test"
/>
`)

    controlSide = renderer.create(<ControlSide>Test</ControlSide>)
    tree = controlSide.toJSON()
    expect(tree).toMatchInlineSnapshot(`
<div
  className="ControlSide-controlRight-0-1-3"
>
  Test
</div>
`)
  })
})
