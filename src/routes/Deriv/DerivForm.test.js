import React from 'react'
import ReactDOM from 'react-dom'

import DerivForm from './DerivForm'
import { defData } from './defaultData'

describe('DerivForm', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <DerivForm
        styles={{
          wordInput: 'wordInput'
        }}
        data={defData}
        derive={jest.fn()}
        change={jest.fn()}
      />,
      div
    )
    ReactDOM.unmountComponentAtNode(div)
  })
})
