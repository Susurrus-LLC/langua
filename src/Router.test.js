import React from 'react'
import ReactDOM from 'react-dom'
import Router from './Router'

it('renders without crashing', () => {
  window.history.pushState({}, 'Testing', '/langua')
  const div = document.createElement('div')
  ReactDOM.render(
    <Router />, div
  )
  ReactDOM.unmountComponentAtNode(div)
})
