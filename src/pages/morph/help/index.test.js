import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'

import { PureMorphHelp as MorphHelp } from '.'

describe('MorphHelp', () => {
  const data = {
    site: {
      siteMetadata: {
        title: 'Langua',
        toolInfo: {
          morph: {
            title: 'Morph',
            link: 'morph',
            description: 'Morph description'
          }
        }
      }
    }
  }

  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<MorphHelp data={data} />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('renders accurately', () => {
    let tree = renderer.create(<MorphHelp data={data} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
