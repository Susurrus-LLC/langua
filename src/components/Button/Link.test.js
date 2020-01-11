import React from 'react'
import ReactDOM from 'react-dom'
import { MemoryRouter } from 'react-router-dom'
import renderer from 'react-test-renderer'

import ButtonLink from './Link'

describe('ButtonLink', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <MemoryRouter>
        <ButtonLink />
      </MemoryRouter>,
      div
    )
    ReactDOM.unmountComponentAtNode(div)
  })

  it('renders accurately with various props and children', () => {
    let buttonLink = renderer.create(
      <MemoryRouter>
        <ButtonLink />
      </MemoryRouter>
    )
    let tree = buttonLink.toJSON()
    expect(tree).toMatchInlineSnapshot(`
      <button
        className="Button-btn-0-2-1 Button-buttonLink-0-2-5"
        onClick={[Function]}
        role="link"
        type="button"
      />
    `)

    buttonLink = renderer.create(
      <MemoryRouter>
        <ButtonLink route='/'>Click</ButtonLink>
      </MemoryRouter>
    )
    tree = buttonLink.toJSON()
    expect(tree).toMatchInlineSnapshot(`
      <button
        className="Button-btn-0-2-1 Button-buttonLink-0-2-5"
        onClick={[Function]}
        role="link"
        type="button"
      >
        Click
      </button>
    `)

    buttonLink = renderer.create(
      <MemoryRouter>
        <ButtonLink buttonType='neutral'>Click</ButtonLink>
      </MemoryRouter>
    )
    tree = buttonLink.toJSON()
    expect(tree).toMatchInlineSnapshot(`
      <button
        className="Button-btn-0-2-1 Button-neutral-0-2-2 Button-buttonLink-0-2-5"
        onClick={[Function]}
        role="link"
        type="button"
      >
        Click
      </button>
    `)

    buttonLink = renderer.create(
      <MemoryRouter>
        <ButtonLink buttonType='success'>Click</ButtonLink>
      </MemoryRouter>
    )
    tree = buttonLink.toJSON()
    expect(tree).toMatchInlineSnapshot(`
      <button
        className="Button-btn-0-2-1 Button-success-0-2-3 Button-buttonLink-0-2-5"
        onClick={[Function]}
        role="link"
        type="button"
      >
        Click
      </button>
    `)

    buttonLink = renderer.create(
      <MemoryRouter>
        <ButtonLink buttonType='danger' route=''>
          Click
        </ButtonLink>
      </MemoryRouter>
    )
    tree = buttonLink.toJSON()
    expect(tree).toMatchInlineSnapshot(`
      <button
        className="Button-btn-0-2-1 Button-danger-0-2-4 Button-buttonLink-0-2-5"
        onClick={[Function]}
        role="link"
        type="button"
      >
        Click
      </button>
    `)
  })
})
