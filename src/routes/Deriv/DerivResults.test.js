import React from 'react'
import ReactDOM from 'react-dom'

import DerivResults from './DerivResults'

describe('DerivResults', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <DerivResults
        classes={{ classes: 'classes' }}
        styles={{ styles: 'styles' }}
        results={{
          newWords: [
            {
              lexeme: 'nzi',
              definition: 'tree',
              suffix: {
                derivation: '-vo',
                gloss: 'person',
                definition:
                  'Creates a noun referring to a person associated with the base.'
              }
            },
            {
              lexeme: 'ilu',
              definition: 'flower',
              suffix: {
                derivation: '-lu',
                gloss: 'place',
                definition: 'Creates a noun denoting the location of the base.'
              }
            },
            {
              lexeme: 'ru',
              definition: 'person',
              prefix: {
                derivation: 'ña-',
                gloss: 'abstract',
                definition: 'Creates an abstract noun.'
              }
            },
            {
              lexeme: 'kwərə',
              definition: 'goat'
            },
            {
              lexeme: 'lɛtsi',
              definition: 'sword',
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
            },
            {
              lexeme: 'ru',
              definition: 'person',
              error: 'The affix ksa is missing a hyphen.'
            }
          ],
          possible: 25
        }}
      />,
      div
    )
    ReactDOM.unmountComponentAtNode(div)
  })
})
