import React from 'react'
import ReactDOM from 'react-dom'

import FrequenResults from './FrequenResults'
import { defData } from './defaultData'

describe('FrequenResults', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <FrequenResults
        results={defData.results}
        hovered={defData.hovered}
        filter={defData.filter}
        analyzed={defData.analyzed}
        onChangeInput={jest.fn()}
        onMouseOver={jest.fn()}
        onMouseOut={jest.fn()}
      />,
      div
    )
    ReactDOM.unmountComponentAtNode(div)
  })
})
