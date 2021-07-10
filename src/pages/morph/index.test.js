/**
 * @jest-environment jsdom
 */

import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'

import Morph from '.'

describe('Morph', () => {
  const data = {
    site: {
      siteMetadata: {
        toolInfo: {
          morph: {
            title: 'Morph',
            link: 'morph',
            description: 'Morph description'
          }
        }
      }
    }
  }

  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Morph data={data} />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('renders accurately', () => {
    const tree = renderer.create(<Morph data={data} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
