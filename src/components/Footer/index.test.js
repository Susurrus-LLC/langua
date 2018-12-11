import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'

import Footer from '.'

describe('Footer', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Footer />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('renders accurately', () => {
    const footer = renderer.create(<Footer />)
    let tree = footer.toJSON()
    expect(tree).toMatchInlineSnapshot(`
<footer>
  <div
    className="Footer-footer-0-1-1"
  >
    <p>
      <a
        href="https://github.com/nai888/langua/blob/master/CHANGELOG.md"
        rel="noopener noreferrer"
        target="_blank"
      >
        Version 
        <i
          className="fas fa-code"
        />
         
        0.2.6
      </a>
      . Built by
       
      <a
        href="https://github.com/nai888"
        rel="noopener noreferrer"
        target="_blank"
      >
        Ian A. Cook
      </a>
      , copyright 
      <i
        className="far fa-copyright"
      />
       
      2017–2018
       
      under the
       
      <a
        href="https://choosealicense.com/licenses/agpl-3.0/"
        rel="noopener noreferrer"
        target="_blank"
      >
        AGPL-3.0 
        <i
          className="fas fa-gavel"
        />
         license
      </a>
      .
    </p>
    <p>
      <a
        href="https://github.com/nai888/langua"
        rel="noopener noreferrer"
        target="_blank"
      >
        View this project on 
        <i
          className="fab fa-github"
        />
         GitHub
      </a>
       
      or
       
      <a
        href="https://beerpay.io/nai888/langua"
        rel="noopener noreferrer"
        target="_blank"
      >
        buy 
        Ian A. Cook
         a 
        <i
          className="fas fa-beer"
        />
         beer
      </a>
      .
    </p>
  </div>
</footer>
`)
  })
})
