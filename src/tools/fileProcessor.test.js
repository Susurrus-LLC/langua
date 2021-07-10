/**
 * @jest-environment jsdom
 */

import fileProcessor from './fileProcessor'

describe('fileProcessor', () => {
  it('grabs the correct filetype', () => {
    expect(fileProcessor.filetype('deriv')).toEqual('.lngd')
    expect(fileProcessor.filetype('frequen')).toEqual('.lngf')
    expect(fileProcessor.filetype('gen')).toEqual('.lngg')
    expect(fileProcessor.filetype('lex')).toEqual('.lngl')
    expect(fileProcessor.filetype('morph')).toEqual('.lngm')
    expect(fileProcessor.filetype('tree')).toEqual('.lngt')
  })

  it('constructs the correct filename', () => {
    expect(
      fileProcessor.filename('deriv', fileProcessor.filetype('deriv'))
    ).toEqual('LanguaDeriv.lngd')
    expect(
      fileProcessor.filename('frequen', fileProcessor.filetype('frequen'))
    ).toEqual('LanguaFrequen.lngf')
    expect(
      fileProcessor.filename('gen', fileProcessor.filetype('gen'))
    ).toEqual('LanguaGen.lngg')
    expect(
      fileProcessor.filename('lex', fileProcessor.filetype('lex'))
    ).toEqual('LanguaLex.lngl')
    expect(
      fileProcessor.filename('morph', fileProcessor.filetype('morph'))
    ).toEqual('LanguaMorph.lngm')
    expect(
      fileProcessor.filename('tree', fileProcessor.filetype('tree'))
    ).toEqual('LanguaTree.lngt')
    expect(
      fileProcessor.filename('default', fileProcessor.filetype('default'))
    ).toEqual('LanguaDefault.lnga')
  })
})
