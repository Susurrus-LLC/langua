/**
 * @jest-environment jsdom
 */

import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'

import { PureFooter as Footer } from '.'

describe('Footer', () => {
  const data = {
    site: {
      siteMetadata: {
        author: 'Ian A. Cook',
        authorURL: 'http://localhost/author',
        appGhURL: 'http://localhost/ghURL',
        version: '1.0.0'
      }
    }
  }

  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Footer data={data} />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('renders accurately', () => {
    const tree = renderer.create(<Footer data={data} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
