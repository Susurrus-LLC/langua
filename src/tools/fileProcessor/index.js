import saveAs from 'file-saver'

class FileProcessor {
  saveFile (data, type) {
    let filename = ''

    switch (type) {
      case 'gen':
        filename = 'LanguaGen.lngg'
        break
      case 'morph':
        filename = 'LanguaMorph.lngm'
        break
      case 'deriv':
        filename = 'LanguaDeriv.lngd'
        break
      case 'frequen':
        filename = 'LanguaFrequen.lngf'
        break
      case 'tree':
        filename = 'LanguaTree.lngt'
        break
      case 'lex':
        filename = 'LanguaLex.lngl'
        break
      default:
        filename = 'Langua.lnga'
    }

    const file = new window.File([JSON.stringify(data, null, 2)], filename, {
      type: 'application/json'
    })

    saveAs(file)
  }

  openFile (file, callback) {
    const reader = new window.FileReader()

    reader.onload = () => {
      callback(reader.result)
    }

    reader.readAsText(file)
  }
}

const fileProcessor = new FileProcessor()

export default fileProcessor
