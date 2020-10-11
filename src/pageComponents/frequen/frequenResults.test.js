import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'

import FrequenResults from './frequenResults'

describe('FrequenResults', () => {
  const styles = {
    corpusInput: 'corpusInput',
    input: 'input'
  }

  /*
  const results = {
    all: [
      {
        color: 'blue',
        count: 3,
        i: 0,
        type: 'consonant',
        x: 3,
        y: 'c'
      }
    ],
    consonants: [
      {
        color: 'blue',
        count: 3,
        i: 1,
        type: 'consonant',
        x: 3,
        y: 'r'
      }
    ],
    vowels: [
      {
        color: 'blue',
        count: 3,
        i: 2,
        type: 'consonant',
        x: 3,
        y: 'o'
      }
    ]
  }

  const hovered = {
    color: 'blue',
    count: 3,
    i: 0,
    type: 'consonant',
    x: 3,
    y: 'c'
  }
  */

  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <FrequenResults
        styles={styles}
        filterSeg='all'
        analyzed={false} // Need to figure out how to mock the results and check the graph
        onChangeInput={jest.fn()}
        onMouseOver={jest.fn()}
        onMouseOut={jest.fn()}
      />,
      div
    )
    ReactDOM.unmountComponentAtNode(div)
  })

  it('renders accurately with various props', () => {
    const tree = renderer
      .create(
        <FrequenResults
          styles={styles}
          filterSeg='all'
          analyzed={false} // Need to figure out how to mock the results and check the graph
          onChangeInput={jest.fn()}
          onMouseOver={jest.fn()}
          onMouseOut={jest.fn()}
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
