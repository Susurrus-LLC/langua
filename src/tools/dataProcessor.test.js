import { defData as derivData } from '../data/deriv'
import { defData as frequenData } from '../data/frequen'
import { defData as genData } from '../data/gen'
import { defData as lexData } from '../data/lex'
import { defData as morphData } from '../data/morph'
import { defData as treeData } from '../data/tree'

import dataProcessor from './dataProcessor'

describe('dataProcessor', () => {
  it('grabs the correct default data', () => {
    expect(dataProcessor.getData('deriv')).toEqual(derivData)
    expect(dataProcessor.getData('frequen')).toEqual(frequenData)
    expect(dataProcessor.getData('gen')).toEqual(genData)
    expect(dataProcessor.getData('lex')).toEqual(lexData)
    expect(dataProcessor.getData('morph')).toEqual(morphData)
    expect(dataProcessor.getData('tree')).toEqual(treeData)
  })
})
