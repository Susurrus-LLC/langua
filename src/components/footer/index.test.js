import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'

import Footer from '.'

describe('Footer', () => {
  it('renders without crashing', () => {
    const data = {
      site: {
        siteMetadata: {
          author: `Ian A. Cook`,
          authorURL: 'http://localhost/author',
          appGhURL: 'http://localhost/ghURL',
          version: '1.0.0'
        }
      }
    }
    const div = document.createElement('div')
    ReactDOM.render(<Footer data={data} />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('renders accurately', () => {
    const data = {
      site: {
        siteMetadata: {
          author: `Ian A. Cook`,
          authorURL: 'http://localhost/author',
          appGhURL: 'http://localhost/ghURL',
          version: '1.0.0'
        }
      }
    }
    let tree = renderer.create(<Footer data={data} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
