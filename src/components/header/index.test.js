/**
 * @jest-environment jsdom
 */

import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'

import { PureHeader as Header } from '.'

describe('Header', () => {
  const siteData = {
    site: {
      siteMetadata: {
        title: 'Langua',
        subtitle: 'A suite of language tools'
      }
    }
  }

  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Header siteData={siteData} />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('renders accurately', () => {
    const tree = renderer.create(<Header siteData={siteData} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
