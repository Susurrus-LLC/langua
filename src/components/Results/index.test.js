import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'

import Results from '.'

describe('Results', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Results />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('renders accurately with and without children', () => {
    let results = renderer.create(<Results />)
    let tree = results.toJSON()
    expect(tree).toMatchInlineSnapshot(`
      <div
        className="Results-results-0-2-1"
      />
    `)

    results = renderer.create(<Results>Test</Results>)
    tree = results.toJSON()
    expect(tree).toMatchInlineSnapshot(`
      <div
        className="Results-results-0-2-1"
      >
        Test
      </div>
    `)
  })
})
