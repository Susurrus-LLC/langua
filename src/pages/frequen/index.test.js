import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'

import Frequen from '.'

describe('Frequen', () => {
  const data = {
    site: {
      siteMetadata: {
        toolInfo: {
          frequen: {
            title: 'Frequen',
            link: 'frequen',
            description: 'Frequen description'
          }
        }
      }
    }
  }

  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Frequen data={data} />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('renders accurately', () => {
    const tree = renderer.create(<Frequen data={data} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
