import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'

import Form from '.'

describe('Form', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Form />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('renders accurately with and without children', () => {
    let form = renderer.create(<Form />)
    let tree = form.toJSON()
    expect(tree).toMatchInlineSnapshot(`
      <form
        className="Form-form-0-2-1"
      />
    `)

    form = renderer.create(<Form>Test</Form>)
    tree = form.toJSON()
    expect(tree).toMatchInlineSnapshot(`
      <form
        className="Form-form-0-2-1"
      >
        Test
      </form>
    `)
  })
})
