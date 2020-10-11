import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'

import Main from '.'

describe('Main', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Main>Test</Main>, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('renders accurately', () => {
    const tree = renderer.create(<Main>Test</Main>).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
