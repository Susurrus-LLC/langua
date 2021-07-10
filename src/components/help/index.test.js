/**
 * @jest-environment jsdom
 */

import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'

import { PureHelp as Help } from '.'

describe('Help', () => {
  const data = {
    site: {
      siteMetadata: {
        title: 'Langua'
      }
    }
  }

  const testInfo = {
    title: 'Test',
    link: 'test',
    description: 'is a test.'
  }

  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Help data={data} toolInfo={testInfo} />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('renders accurately with and without children', () => {
    let tree = renderer
      .create(<Help data={data} toolInfo={testInfo} />)
      .toJSON()
    expect(tree).toMatchSnapshot()

    tree = renderer
      .create(
        <Help data={data} toolInfo={testInfo}>
          Test
        </Help>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
