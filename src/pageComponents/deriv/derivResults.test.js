/**
 * @jest-environment jsdom
 */

import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'

import DerivResults from './derivResults'

describe('DerivResults', () => {
  const styles = {
    outputBox: 'outputBox',
    term: 'term',
    affixGloss: 'affixGloss',
    gloss: 'gloss',
    hoveredGloss: 'hoveredGloss',
    lexGloss: 'lexGloss',
    derivRow: 'derivRow',
    outputRow: 'outputRow',
    rowNumber: 'rowNumber',
    affixDef: 'affixDef',
    output: 'output'
  }

  const results = {
    newWords: [
      {
        lexeme: {
          lexeme: 'nzi',
          definition: 'tree'
        },
        suffix: {
          derivation: '-vo',
          gloss: 'person',
          definition:
            'Creates a noun referring to a person associated with the base.'
        }
      },
      {
        lexeme: {
          lexeme: 'lɛtsi',
          definition: 'sword'
        },
        prefix: {
          derivation: 'k-',
          gloss: 'collective',
          definition: 'Creates a noun referring to a collection of bases.'
        },
        suffix: {
          derivation: '-sa',
          gloss: 'collective',
          definition: 'Creates a noun referring to a collection of bases.'
        }
      }
    ],
    possible: 25
  }

  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<DerivResults styles={styles} />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('renders accurately with various props', () => {
    let tree = renderer.create(<DerivResults styles={styles} />).toJSON()
    expect(tree).toMatchSnapshot()

    tree = renderer
      .create(<DerivResults styles={styles} results={results} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
