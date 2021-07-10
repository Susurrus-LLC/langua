import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'

import GenHelp from '.'

describe('GenHelp', () => {
  const data = {
    site: {
      siteMetadata: {
        title: 'Langua',
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
    ReactDOM.render(<GenHelp data={data} />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('renders accurately', () => {
    const tree = renderer.create(<GenHelp data={data} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
