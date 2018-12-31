import React from 'react'
import ReactDOM from 'react-dom'

import { defData } from '../../data/morph'

import MorphResults from './MorphResults'
import morphService from './MorphService'

const classes = {
  classes: 'classes'
}

const results = morphService.morph(defData)

describe('MorphResults', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <MorphResults
        styles={classes}
        outputFormat={defData.outputFormat}
        results={results}
        showDiff={defData.showDiff}
        showChanges={defData.showChanges}
      />,
      div
    )
    ReactDOM.unmountComponentAtNode(div)
  })
})
