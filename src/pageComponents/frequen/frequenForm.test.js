import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'

import FrequenForm from './frequenForm'
import { defData } from '../../data/frequen'

describe('FrequenForm', () => {
  const styles = {
    styles: 'styles',
    corpusInput: 'corpusInput',
    input: 'input',
    consonants: 'consonants',
    vowels: 'vowels'
  }

  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <FrequenForm
        styles={styles}
        corpus={defData.corpus}
        consonants={defData.consonants}
        vowels={defData.vowels}
        distinguishCase
        onChangeInput={jest.fn()}
        onAnalyze={jest.fn()}
      />,
      div
    )
    ReactDOM.unmountComponentAtNode(div)
  })

  it('renders accurately', () => {
    let tree = renderer
      .create(
        <FrequenForm
          styles={styles}
          corpus={defData.corpus}
          consonants={defData.consonants}
          vowels={defData.vowels}
          distinguishCase
          onChangeInput={jest.fn()}
          onAnalyze={jest.fn()}
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
