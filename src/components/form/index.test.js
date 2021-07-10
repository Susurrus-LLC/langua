/**
 * @jest-environment jsdom
 */

import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'

import Form from '.'

describe('Form', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Form />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('renders accurately with and without props and children', () => {
    let tree = renderer.create(<Form />).toJSON()
    expect(tree).toMatchSnapshot()

    tree = renderer.create(<Form name='test'>Test</Form>).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
