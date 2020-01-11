import React from 'react'
import ReactDOM from 'react-dom'
import { MemoryRouter } from 'react-router-dom'
import renderer from 'react-test-renderer'

import Header from '.'

describe('Header', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
      div
    )
    ReactDOM.unmountComponentAtNode(div)
  })

  it('renders accurately', () => {
    const header = renderer.create(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    )
    let tree = header.toJSON()
    expect(tree).toMatchInlineSnapshot(`
      <header>
        <div
          className="Header-header-0-2-1"
        >
          <div
            className="Header-titleArea-0-2-2"
          >
            <h1
              className="Header-siteTitle-0-2-3"
            >
              <a
                className="Header-titleLink-0-2-4"
                href="/"
                onClick={[Function]}
              >
                Langua
              </a>
            </h1>
            <p
              className="Header-siteSubtitle-0-2-5"
            >
              A suite of language tools
            </p>
          </div>
          <nav
            className="Header-nav-0-2-6"
          >
            <ul
              className="Header-menu-0-2-7"
            >
              <li
                className="Header-navLink-0-2-8"
              >
                <a
                  aria-current={null}
                  href="/gen"
                  onClick={[Function]}
                >
                  Gen
                </a>
              </li>
              <li
                className="Header-navLink-0-2-8 Header-disabled-0-2-9"
              >
                <a
                  aria-current={null}
                  href="/morph"
                  onClick={[Function]}
                >
                  Morph
                </a>
              </li>
              <li
                className="Header-navLink-0-2-8"
              >
                <a
                  aria-current={null}
                  href="/deriv"
                  onClick={[Function]}
                >
                  Deriv
                </a>
              </li>
              <li
                className="Header-navLink-0-2-8"
              >
                <a
                  aria-current={null}
                  href="/frequen"
                  onClick={[Function]}
                >
                  Frequen
                </a>
              </li>
              <li
                className="Header-navLink-0-2-8 Header-disabled-0-2-9"
              >
                <a
                  aria-current={null}
                  href="/tree"
                  onClick={[Function]}
                >
                  Tree
                </a>
              </li>
              <li
                className="Header-navLink-0-2-8 Header-disabled-0-2-9"
              >
                <a
                  aria-current={null}
                  href="/lex"
                  onClick={[Function]}
                >
                  Lex
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    `)
  })
})
