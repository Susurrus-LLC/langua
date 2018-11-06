import React from 'react'
import ReactDOM from 'react-dom'

import GenResults from './GenResults'
import { defData } from './defaultData'

describe('GenResults', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <GenResults
        styles={{
          output: 'output'
        }}
        newLine={defData.newline}
        filterDupes={defData.filterdupes}
        status={['ok']}
        results={['']}
        stats={{
          words: 0,
          maxWords: 0,
          filtered: 0,
          remaining: 0
        }}
      />,
      div
    )
    ReactDOM.unmountComponentAtNode(div)

    ReactDOM.render(
      <GenResults
        styles={{
          output: 'output'
        }}
        newLine={defData.newline}
        filterDupes={defData.filterdupes}
        status={['ok']}
        results={['nam', 'tam', 'san']}
        stats={{
          words: 3,
          maxWords: 10,
          filtered: 0,
          remaining: 0
        }}
      />,
      div
    )
    ReactDOM.unmountComponentAtNode(div)

    ReactDOM.render(
      <GenResults
        styles={{
          output: 'output'
        }}
        newLine={defData.newline}
        filterDupes={defData.filterdupes}
        status={['there was an error']}
        results={['nam', 'tam', 'san']}
        stats={{
          words: 3,
          maxWords: 10,
          filtered: 0,
          remaining: 0
        }}
      />,
      div
    )
    ReactDOM.unmountComponentAtNode(div)
  })
})
