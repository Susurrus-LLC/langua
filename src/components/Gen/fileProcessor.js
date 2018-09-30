// @flow
import saveAs from 'file-saver'

declare type Props = {}

class FileProcessor {
  constructor(props: Props) {
    this.saveFile = this.saveFile.bind(this)
    this.openFile = this.openFile.bind(this)
  }

  saveFile (data: Data): void {
    const file = new File(
      [JSON.stringify(data, null, 2)],
      'LanguaGen.lngg',
      { type: 'application/json' }
    )

    saveAs(file)
  }

  openFile (file, callback): Data {
    const reader = new FileReader()

    reader.onload = () => {
      callback(reader.result)
    }

    reader.readAsText(file)
  }
}

const fileProcessor = new FileProcessor()

export default fileProcessor
