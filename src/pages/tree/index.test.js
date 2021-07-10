/**
 * @jest-environment jsdom
 */

import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'

import Tree from '.'

describe('Tree', () => {
  const data = {
    site: {
      siteMetadata: {
        toolInfo: {
          tree: {
            title: 'Tree',
            link: 'tree',
            description: 'Tree description'
          }
        }
      }
    }
  }

  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Tree data={data} />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('renders accurately', () => {
    const tree = renderer.create(<Tree data={data} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
