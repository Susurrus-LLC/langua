import React from 'react'
import ReactDOM from 'react-dom'

import FrequenResults from './FrequenResults'

describe('FrequenResults', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <FrequenResults
        classes={{ classes: 'classes' }}
        filterSeg='all'
        analyzed={false}
        onChangeInput={jest.fn()}
        onMouseOver={jest.fn()}
        onMouseOut={jest.fn()}
      />,
      div
    )
    ReactDOM.unmountComponentAtNode(div)
  })
})
