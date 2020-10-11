import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'

import GenForm from './genForm'
import { defData } from '../../data/gen'

describe('GenForm', () => {
  const styles = {
    subpsRow: 'subpsRow',
    select: 'select',
    subpatternInput: 'subpatternInput',
    clearButton: 'clearButton',
    addingRow: 'addingRow',
    subpatterns: 'subpatterns',
    pattern: 'pattern',
    patternInput: 'patternInput',
    wordsInput: 'wordsInput'
  }

  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <GenForm styles={styles} data={defData} change={jest.fn()} />,
      div
    )
    ReactDOM.unmountComponentAtNode(div)
  })

  it('renders accurately', () => {
    let tree = renderer
      .create(<GenForm styles={styles} data={defData} change={jest.fn()} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
