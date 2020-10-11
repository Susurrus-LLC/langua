import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'

import { PureLex as Lex } from '.'

describe('Lex', () => {
  const data = {
    site: {
      siteMetadata: {
        toolInfo: {
          lex: {
            title: 'Lex',
            link: 'lex',
            description: 'Lex description'
          }
        }
      }
    }
  }

  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Lex data={data} />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('renders accurately', () => {
    const tree = renderer.create(<Lex data={data} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
