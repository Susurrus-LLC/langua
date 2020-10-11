import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'

import { PureTreeHelp as TreeHelp } from '.'

describe('TreeHelp', () => {
  const data = {
    site: {
      siteMetadata: {
        title: 'Langua',
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
    ReactDOM.render(<TreeHelp data={data} />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('renders accurately', () => {
    const tree = renderer.create(<TreeHelp data={data} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
