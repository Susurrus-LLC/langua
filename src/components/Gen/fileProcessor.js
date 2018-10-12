import saveAs from 'file-saver'

class FileProcessor {
  constructor() {
    this.saveFile = this.saveFile.bind(this)
    this.openFile = this.openFile.bind(this)
  }

  saveFile (data) {
    const file = new window.File(
      [JSON.stringify(data, null, 2)],
      'LanguaGen.lngg',
      { type: 'application/json' }
    )

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
