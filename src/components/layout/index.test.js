/**
 * @jest-environment jsdom
 */

import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'

import Layout from '.'

describe('Layout', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Layout>Test</Layout>, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('renders accurately', () => {
    const tree = renderer.create(<Layout>Test</Layout>).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
