import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'

import { PureFrequen as Frequen } from '.'

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
    let tree = renderer.create(<Frequen data={data} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
