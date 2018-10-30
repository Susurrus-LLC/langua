import React from 'react'
import ReactDOM from 'react-dom'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { MemoryRouter } from 'react-router-dom'

import Home from '../../routes/Home'
import Deriv from '../../routes/Deriv'
import DerivHelp from '../../routes/Deriv/Help'
import Frequen from '../../routes/Frequen'
import FrequenHelp from '../../routes/Frequen/Help'
import Gen from '../../routes/Gen'
import GenHelp from '../../routes/Gen/Help'
import Morph from '../../routes/Morph'
import MorphHelp from '../../routes/Morph/Help'
import Tree from '../../routes/Tree'
import TreeHelp from '../../routes/Tree/Help'

import Main from '.'

Enzyme.configure({ adapter: new Adapter() })

describe('Main', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <MemoryRouter>
        <Main />
      </MemoryRouter>,
      div
    )
    ReactDOM.unmountComponentAtNode(div)
  })

  it('renders the correct pages at various routes', () => {
    let main = mount(
      <MemoryRouter initialEntries={['/deriv/help']}>
        <Main />
      </MemoryRouter>
    )
    expect(main.find(DerivHelp)).toHaveLength(1)

    main = mount(
      <MemoryRouter initialEntries={['/deriv']}>
        <Main />
      </MemoryRouter>
    )
    expect(main.find(Deriv)).toHaveLength(1)

    main = mount(
      <MemoryRouter initialEntries={['/frequen/help']}>
        <Main />
      </MemoryRouter>
    )
    expect(main.find(FrequenHelp)).toHaveLength(1)

    main = mount(
      <MemoryRouter initialEntries={['/frequen']}>
        <Main />
      </MemoryRouter>
    )
    expect(main.find(Frequen)).toHaveLength(1)

    main = mount(
      <MemoryRouter initialEntries={['/gen/help']}>
        <Main />
      </MemoryRouter>
    )
    expect(main.find(GenHelp)).toHaveLength(1)

    main = mount(
      <MemoryRouter initialEntries={['/gen']}>
        <Main />
      </MemoryRouter>
    )
    expect(main.find(Gen)).toHaveLength(1)

    main = mount(
      <MemoryRouter initialEntries={['/morph/help']}>
        <Main />
      </MemoryRouter>
    )
    expect(main.find(MorphHelp)).toHaveLength(1)

    main = mount(
      <MemoryRouter initialEntries={['/morph']}>
        <Main />
      </MemoryRouter>
    )
    expect(main.find(Morph)).toHaveLength(1)

    main = mount(
      <MemoryRouter initialEntries={['/tree/help']}>
        <Main />
      </MemoryRouter>
    )
    expect(main.find(TreeHelp)).toHaveLength(1)

    main = mount(
      <MemoryRouter initialEntries={['/tree']}>
        <Main />
      </MemoryRouter>
    )
    expect(main.find(Tree)).toHaveLength(1)

    main = mount(
      <MemoryRouter initialEntries={['/']}>
        <Main />
      </MemoryRouter>
    )
    expect(main.find(Home)).toHaveLength(1)

    main = mount(
      <MemoryRouter initialEntries={['/unfound']}>
        <Main />
      </MemoryRouter>
    )
    expect(main.find(Home)).toHaveLength(1)
  })
})
