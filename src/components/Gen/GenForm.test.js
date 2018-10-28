import React from 'react'
import ReactDOM from 'react-dom'

import GenForm from './GenForm'
import { defData } from './defaultData'

describe('GenForm', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <GenForm
        styles={{
          subpsRow: 'subpsRow',
          subpatternInput: 'subpatternInput',
          clearButton: 'clearButton',
          addingRow: 'addingRow',
          subpatterns: 'subpatterns',
          pattern: 'pattern',
          patternInput: 'patternInput',
          wordsInput: 'wordsInput'
        }}
        data={defData}
        change={jest.fn()}
      />,
      div
    )
    ReactDOM.unmountComponentAtNode(div)
  })
})
