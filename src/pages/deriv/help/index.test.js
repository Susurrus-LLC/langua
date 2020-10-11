import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'

import { PureDerivHelp as DerivHelp } from '.'

describe('Deriv', () => {
  const data = {
    site: {
      siteMetadata: {
        title: 'Langua',
        toolInfo: {
          deriv: {
            title: 'Deriv',
            link: 'deriv',
            description: 'Deriv description'
          }
        }
      }
    }
  }

  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<DerivHelp data={data} />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('renders accurately', () => {
    let tree = renderer.create(<DerivHelp data={data} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
