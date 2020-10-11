import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'

import GenResults from './genResults'
import { defData } from '../../data/gen'

describe('GenResults', () => {
  const styles = {
    outText: 'outText',
    output: 'output'
  }

  const stats = {
    words: 0,
    maxWords: 0,
    filtered: 0,
    remaining: 0
  }

  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <GenResults
        styles={styles}
        newline={defData.newline}
        filterDupes={defData.filterdupes}
        status={['ok']}
        results={['']}
        stats={stats}
      />,
      div
    )
    ReactDOM.unmountComponentAtNode(div)
  })

  it('renders accurately with various props', () => {
    let tree = renderer
      .create(
        <GenResults
          styles={styles}
          newline={defData.newline}
          filterDupes={defData.filterdupes}
          status={['ok']}
          results={['']}
          stats={stats}
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()

    tree = renderer
      .create(
        <GenResults
          styles={styles}
          newline={defData.newline}
          filterDupes={defData.filterdupes}
          status={['ok']}
          results={['a', 'sa', 'na', 'asa', 'ana']}
          stats={stats}
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()

    tree = renderer
      .create(
        <GenResults
          styles={styles}
          newline={defData.newline}
          filterDupes={defData.filterdupes}
          status={['The Subpatterns contain a circular reference.']}
          results={['']}
          stats={stats}
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
