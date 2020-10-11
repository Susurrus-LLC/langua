import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'

import MorphForm from './morphForm'
import { defData } from '../../data/morph'

describe('MorphForm', () => {
  const styles = {
    section: 'section',
    categories: 'categories',
    inputSection: 'inputSection',
    container: 'container',
    categoriesInput: 'categoriesInput',
    dataInput: 'dataInput',
    textAreaSpacer: 'textAreaSpacer',
    rewriteRules: 'rewriteRules',
    rewriteRulesInput: 'rewriteRulesInput',
    soundChanges: 'soundChanges',
    sectionTitle: 'sectionTitle',
    soundChangesInput: 'soundChangesInput',
    lexicon: 'lexicon',
    lexiconInput: 'lexiconInput'
  }

  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <MorphForm
        styles={styles}
        data={defData}
        change={jest.fn()}
        morph={jest.fn()}
        check={jest.fn()}
        save={jest.fn()}
        open={jest.fn()}
      />,
      div
    )
    ReactDOM.unmountComponentAtNode(div)
  })

  it('renders accurately', () => {
    let tree = renderer
      .create(
        <MorphForm
          styles={styles}
          data={defData}
          change={jest.fn()}
          morph={jest.fn()}
          check={jest.fn()}
          save={jest.fn()}
          open={jest.fn()}
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
