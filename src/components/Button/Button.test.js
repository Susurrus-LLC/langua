import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'

import Button from './Button'

describe('Button', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Button />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('renders accurately with various props and children', () => {
    let button = renderer.create(<Button />)
    let tree = button.toJSON()
    expect(tree).toMatchInlineSnapshot(`
<button
  className="Button-btn-0-1-1"
  role="button"
  type="button"
/>
`)

    button = renderer.create(<Button id='button'>Click</Button>)
    tree = button.toJSON()
    expect(tree).toMatchInlineSnapshot(`
<button
  className="Button-btn-0-1-1"
  id="button"
  role="button"
  type="button"
>
  Click
</button>
`)

    button = renderer.create(
      <Button type='submit' ver='success'>
        Submit
      </Button>
    )
    tree = button.toJSON()
    expect(tree).toMatchInlineSnapshot(`
<button
  className="Button-btn-0-1-1 Button-success-0-1-3"
  role="button"
  type="submit"
>
  Submit
</button>
`)

    button = renderer.create(
      <Button type='reset' ver='danger'>
        Reset
      </Button>
    )
    tree = button.toJSON()
    expect(tree).toMatchInlineSnapshot(`
<button
  className="Button-btn-0-1-1 Button-danger-0-1-4"
  role="button"
  type="reset"
>
  Reset
</button>
`)

    button = renderer.create(
      <Button role='link' ver='neutral'>
        Link
      </Button>
    )
    tree = button.toJSON()
    expect(tree).toMatchInlineSnapshot(`
<button
  className="Button-btn-0-1-1 Button-neutral-0-1-2"
  role="link"
  type="button"
>
  Link
</button>
`)

    button = renderer.create(
      <Button addClass='small' onClick={jest.fn()}>
        Small
      </Button>
    )
    tree = button.toJSON()
    expect(tree).toMatchInlineSnapshot(`
<button
  className="Button-btn-0-1-1 Button-small-0-1-6"
  onClick={[MockFunction]}
  role="button"
  type="button"
>
  Small
</button>
`)
  })
})
