import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'

import Deriv from '.'

describe('Deriv', () => {
  const data = {
    site: {
      siteMetadata: {
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
    ReactDOM.render(<Deriv data={data} />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('renders accurately', () => {
    const tree = renderer.create(<Deriv data={data} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
