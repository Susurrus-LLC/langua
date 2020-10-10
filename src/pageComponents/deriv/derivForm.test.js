import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'

import DerivForm from './derivForm'
import { defData } from '../../data/deriv'

describe('DerivForm', () => {
  const styles = {
    derivRow: 'derivRow',
    lexemeInput: 'lexemeInput',
    lexemeDefInput: 'lexemeDefInput',
    clearButton: 'clearButton',
    derivRow: 'derivRow',
    derivationInput: 'derivationInput',
    derivationGlossInput: 'derivationGlossInput',
    derivationDefInput: 'derivationDefInput',
    addingRow: 'addingRow',
    lexemes: 'lexemes',
    columnLabel: 'columnLabel',
    wordLabel: 'wordLabel',
    definitionLabel: 'definitionLabel',
    derivations: 'derivations',
    affixLabel: 'affixLabel',
    glossLabel: 'glossLabel',
    wordsInput: 'wordsInput'
  }

  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <DerivForm styles={styles} data={defData} change={jest.fn()} />,
      div
    )
    ReactDOM.unmountComponentAtNode(div)
  })

  it('renders accurately', () => {
    let tree = renderer
      .create(<DerivForm styles={styles} data={defData} change={jest.fn()} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
