import { toast } from 'react-toastify'
import saveAs from 'file-saver'

import dataProcessor from './dataProcessor'

class FileProcessor {
  filetype (which) {
    switch (which) {
      case 'deriv':
        return '.lngd'
      case 'frequen':
        return '.lngf'
      case 'gen':
        return '.lngg'
      case 'lex':
        return '.lngl'
      case 'morph':
        return '.lngm'
      case 'tree':
        return '.lngt'
      default:
        return '.lnga'
    }
  }

  filename (which, filetype) {
    return `Langua${which.charAt(0).toUpperCase()}${which.substr(1)}${filetype}`
  }

  saveFile (data, which) {
    const file = new window.File(
      [JSON.stringify(data, null, 2)],
      this.filename(which, this.filetype(which)),
      { type: 'application/json' }
    )

    saveAs(file)
  }

  save (data, which) {
    // Save data to storage
    dataProcessor.setStorage(data, which)
    if (window.File) {
      // If the browser has access to File, save the file locally
      this.saveFile(data, which)
    } else {
      // If the browser can't access File, display a notification
      toast.info(
        `Your browser is unable to save files. The data has been saved to your browser${String.fromCharCode(
          8217
        )}s local storage.`,
        {
          autoClose: 5000,
          className: 'toast-unsaved',
          bodyClassName: 'toast-unsaved-body',
          progressClassName: 'toast-unsaved-progress'
        }
      )
    }
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
