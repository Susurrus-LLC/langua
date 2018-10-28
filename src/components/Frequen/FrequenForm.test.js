import React from 'react'
import ReactDOM from 'react-dom'

import FrequenForm from './FrequenForm'
import { defData } from './defaultData'

describe('FrequenForm', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <FrequenForm
        styles={{
          corpus: 'corpus',
          input: 'input'
        }}
        state={defData}
        onChangeInput={jest.fn()}
        onAnalyze={jest.fn()}
      />,
      div
    )
    ReactDOM.unmountComponentAtNode(div)
  })
})
