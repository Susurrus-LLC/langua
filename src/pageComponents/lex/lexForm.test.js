import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'

import LexForm from './lexForm'

describe('LexForm', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<LexForm />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('renders accurately', () => {
    let tree = renderer.create(<LexForm />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
