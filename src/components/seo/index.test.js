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
    ReactDOM.render(<SEO data={data} />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('renders accurately', () => {
    let tree = renderer.create(<SEO data={data} />)
    expect(tree).toMatchSnapshot()
  })
})
