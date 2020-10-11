import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'

import MorphResults from './morphResults'

describe('MorphResults', () => {
  const styles = {
    outText: 'outText',
    different: 'different',
    changed: 'changed',
    output: 'output'
  }

  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <MorphResults
        styles={styles}
        outputFormat='io'
        results={[
          { diff: true, input: 'lector', output: 'leitor' },
          { diff: false, input: 'doctor', output: 'doutor' },
          { diff: true, input: 'focus', output: 'focus' },
          { diff: false, input: 'jocus', output: 'jocus' }
        ]}
        showDiff={true}
        showChanges={true}
      />,
      div
    )
    ReactDOM.unmountComponentAtNode(div)
  })

  it('renders accurately with various props', () => {
    let tree = renderer
      .create(
        <MorphResults
          styles={styles}
          outputFormat='oo'
          results={[
            { diff: true, input: 'lector', output: 'leitor' },
            { diff: false, input: 'doctor', output: 'doutor' },
            { diff: true, input: 'focus', output: 'focus' },
            { diff: false, input: 'jocus', output: 'jocus' }
          ]}
          showDiff={true}
          showChanges={true}
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()

    tree = renderer
      .create(
        <MorphResults
          styles={styles}
          outputFormat='io'
          results={[
            { diff: true, input: 'lector', output: 'leitor' },
            { diff: false, input: 'doctor', output: 'doutor' },
            { diff: true, input: 'focus', output: 'focus' },
            { diff: false, input: 'jocus', output: 'jocus' }
          ]}
          showDiff={true}
          showChanges={true}
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()

    tree = renderer
      .create(
        <MorphResults
          styles={styles}
          outputFormat='oi'
          results={[
            { diff: true, input: 'lector', output: 'leitor' },
            { diff: false, input: 'doctor', output: 'doutor' },
            { diff: true, input: 'focus', output: 'focus' },
            { diff: false, input: 'jocus', output: 'jocus' }
          ]}
          showDiff={false}
          showChanges={false}
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
