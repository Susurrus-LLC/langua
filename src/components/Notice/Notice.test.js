import React from 'react'
import ReactDOM from 'react-dom'
import Enzyme, { shallow, text } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import renderer from 'react-test-renderer'

import Notice from './Notice'

Enzyme.configure({ adapter: new Adapter() })

describe('Notice', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Notice>Test</Notice>, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('shows no text when empty', () => {
    const notice = shallow(<Notice />).render()
    expect(notice.text()).toEqual('')
  })

  it('renders the notice text', () => {
    const notice = shallow(<Notice>Test</Notice>).render()
    expect(notice.text()).toEqual('Test')
  })

  it('matches the snapshot', () => {
    const notice = renderer.create(<Notice>Test</Notice>)
    let tree = notice.toJSON()
    expect(tree).toMatchInlineSnapshot(`
<p
  className="Notice-notice-0-1-1"
>
  Test
</p>
`)
  })
})
