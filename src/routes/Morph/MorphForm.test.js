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
    ReactDOM.render(<MorphForm styles={classes} data={defData} />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
