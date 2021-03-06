/**
 * @jest-environment jsdom
 */

import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'

import { PureSEO as SEO } from '.'

describe('SEO', () => {
  const data = {
    site: {
      siteMetadata: {
        title: 'Langua',
        description: 'Description',
        author: 'Ian A. Cook',
        canonical: 'http://localhost/test'
      }
    }
  }

  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<SEO data={data} title='Test' />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('renders accurately', () => {
    const tree = renderer.create(<SEO data={data} title='Test' />)
    expect(tree).toMatchSnapshot()
  })
})
