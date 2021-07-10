/**
 * @jest-environment jsdom
 */

import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'

import Button from './'

describe('Header', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Button />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('renders accurately with various props and children', () => {
    let tree = renderer.create(<Button />).toJSON()
    expect(tree).toMatchSnapshot()

    tree = renderer.create(
      <Button type='submit' ver='success'>
        Submit
      </Button>
    )
    expect(tree).toMatchSnapshot()

    tree = renderer.create(
      <Button type='reset' ver='danger'>
        Reset
      </Button>
    )
    expect(tree).toMatchSnapshot()

    tree = renderer.create(
      <Button link ver='neutral' route='test'>
        Link
      </Button>
    )
    expect(tree).toMatchSnapshot()

    tree = renderer.create(
      <Button link external ver='neutral' route='test'>
        Link
      </Button>
    )
    expect(tree).toMatchSnapshot()

    tree = renderer.create(
      <Button small onClick={jest.fn()}>
        Small Function
      </Button>
    )
    expect(tree).toMatchSnapshot()
  })
})
