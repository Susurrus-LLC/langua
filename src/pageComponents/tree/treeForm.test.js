import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'

import TreeForm from './treeForm'

describe('TreeForm', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<TreeForm />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('renders accurately', () => {
    let tree = renderer.create(<TreeForm />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
