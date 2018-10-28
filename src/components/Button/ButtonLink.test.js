import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import renderer from 'react-test-renderer'

import ButtonLink from './ButtonLink'

describe('ButtonLink', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <BrowserRouter>
        <ButtonLink />
      </BrowserRouter>,
      div
    )
    ReactDOM.unmountComponentAtNode(div)
  })

  it('renders accurately with various props and children', () => {
    let buttonLink = renderer.create(
      <BrowserRouter>
        <ButtonLink />
      </BrowserRouter>
    )
    let tree = buttonLink.toJSON()
    expect(tree).toMatchInlineSnapshot(`
<button
  className="Button-btn-0-1-1 Button-buttonLink-0-1-5"
  onClick={[Function]}
  role="link"
  type="button"
/>
`)

    buttonLink = renderer.create(
      <BrowserRouter>
        <ButtonLink route='/'>Click</ButtonLink>
      </BrowserRouter>
    )
    tree = buttonLink.toJSON()
    expect(tree).toMatchInlineSnapshot(`
<button
  className="Button-btn-0-1-1 Button-buttonLink-0-1-5"
  onClick={[Function]}
  role="link"
  type="button"
>
  Click
</button>
`)

    buttonLink = renderer.create(
      <BrowserRouter>
        <ButtonLink buttonType='neutral'>Click</ButtonLink>
      </BrowserRouter>
    )
    tree = buttonLink.toJSON()
    expect(tree).toMatchInlineSnapshot(`
<button
  className="Button-btn-0-1-1 Button-neutral-0-1-2 Button-buttonLink-0-1-5"
  onClick={[Function]}
  role="link"
  type="button"
>
  Click
</button>
`)

    buttonLink = renderer.create(
      <BrowserRouter>
        <ButtonLink buttonType='success'>Click</ButtonLink>
      </BrowserRouter>
    )
    tree = buttonLink.toJSON()
    expect(tree).toMatchInlineSnapshot(`
<button
  className="Button-btn-0-1-1 Button-success-0-1-3 Button-buttonLink-0-1-5"
  onClick={[Function]}
  role="link"
  type="button"
>
  Click
</button>
`)

    buttonLink = renderer.create(
      <BrowserRouter>
        <ButtonLink buttonType='danger' route=''>
          Click
        </ButtonLink>
      </BrowserRouter>
    )
    tree = buttonLink.toJSON()
    expect(tree).toMatchInlineSnapshot(`
<button
  className="Button-btn-0-1-1 Button-danger-0-1-4 Button-buttonLink-0-1-5"
  onClick={[Function]}
  role="link"
  type="button"
>
  Click
</button>
`)
  })
})
