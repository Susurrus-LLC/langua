import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'

import Results from '.'

describe('Results', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Results>Test</Results>, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('renders accurately with and without children', () => {
    let tree = renderer.create(<Results />).toJSON()
    expect(tree).toMatchSnapshot()

    tree = renderer.create(<Results>Test</Results>).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
