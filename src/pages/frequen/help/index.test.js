import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'

import { PureFrequenHelp as FrequenHelp } from '.'

describe('Frequen', () => {
  const data = {
    site: {
      siteMetadata: {
        title: 'Langua',
        toolInfo: {
          deriv: {
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
    ReactDOM.render(<FrequenHelp data={data} />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('renders accurately', () => {
    let tree = renderer.create(<FrequenHelp data={data} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})