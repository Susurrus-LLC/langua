import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'

import { PureHome as Home } from '.'

describe('Frequen', () => {
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
        },
        toolInfo: {
          frequen: {
            title: 'Frequen',
            link: 'frequen',
            description: 'Frequen description'
          }
        },
        toolInfo: {
          deriv: {
            title: 'Deriv',
            link: 'deriv',
            description: 'deriv description'
          }
        },
        toolInfo: {
          lex: {
            title: 'Lex',
            link: 'lex',
            description: 'Lex description'
          }
        },
        toolInfo: {
          morph: {
            title: 'Morph',
            link: 'morph',
            description: 'Morph description'
          }
        },
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
    ReactDOM.render(<Home data={data} />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('renders accurately', () => {
    let tree = renderer.create(<Home data={data} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
