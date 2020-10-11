import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'

import { PureGen as Gen } from '.'

describe('Gen', () => {
  const data = {
    site: {
      siteMetadata: {
        toolInfo: {
          gen: {
            title: 'Gen',
            link: 'gen',
            description: 'Gen description'
          }
        }
      }
    }
  }

  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Gen data={data} />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('renders accurately', () => {
    let tree = renderer.create(<Gen data={data} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
