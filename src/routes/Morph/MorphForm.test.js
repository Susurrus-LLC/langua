import React from 'react'
import ReactDOM from 'react-dom'

import { defData } from '../../data/morph'

import MorphForm from './MorphForm'

const classes = {
  classes: 'classes'
}

describe('MorphForm', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <MorphForm
        styles={classes}
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
})
