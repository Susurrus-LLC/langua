import saveAs from 'file-saver'

import dataProcessor from './dataProcessor'

class FileProcessor {
  filetype (type) {
    let filetype = ''

    switch (type) {
      case 'gen':
        filetype = '.lngg'
        break
      case 'morph':
        filetype = '.lngm'
        break
      case 'deriv':
        filetype = '.lngd'
        break
      case 'frequen':
        filetype = '.lngf'
        break
      case 'tree':
        filetype = '.lngt'
        break
      case 'lex':
        filetype = '.lngl'
        break
      default:
        filetype = '.lnga'
    }

    return filetype
  }

  filename (type, filetype) {
    return `Langua${type.charAt(0).toUpperCase()}${type.substr(1)}${filetype}`
  }

  saveFile (data, type) {
    const file = new window.File(
      [JSON.stringify(data, null, 2)],
      this.filename(type, this.filetype(type)),
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

  save (data, which) {
    // Save data to storage
    dataProcessor.setStorage(data, which)
    if (window.File) {
      // If the browser has access to File, save the file locally
      this.saveFile(data, which)
    } else {
      // If the browser can't access File, display a notification
      toast.info(
        'Your browser is unable to save files. The data has been saved to your browser’s local storage.',
        {
          autoClose: 5000,
          className: 'toast-unsaved',
          bodyClassName: 'toast-unsaved-body',
          progressClassName: 'toast-unsaved-progress'
        }
      )
    }
  }

  // Open a file and parse it to restore a saved state
  open (file, callback) {
    let response

    const processResults = result => {
      // If correct filetype
      if (file.name.endsWith('.lngg')) {
        // Define correct file structure
        const SubpatternSchema = schema({
          selected: /[A-Z]/,
          subpattern: String
        })

        const DataSchema = schema({
          subpatterns: Array.of(1, 24, SubpatternSchema),
          pattern: String,
          words: Number.min(1).max(9999),
          newline: Boolean,
          filterdupes: Boolean
        })

        let content = JSON.parse(result)

        content.words = parseInt(content.words, 10)

        if (DataSchema(content)) {
          // If the file's content contains valid Data, load it
          toast.success(`Data loaded from ${file.name}.`, {
            autoClose: 5000,
            className: 'toast-opened',
            bodyClassName: 'toast-opened-body',
            progressClassName: 'toast-opened-progress'
          })

          this.setStorage(content)

          response = content
        } else {
          // If the file's content does not contain valid Data, show an error
          toast.info(`The content of ${file.name} is invalid.`, {
            autoClose: 5000,
            className: 'toast-unopened',
            bodyClassName: 'toast-unopened-body',
            progressClassName: 'toast-unopened-progress'
          })

          // eslint-disable-next-line
          console.error(DataSchema.errors(content))

          response = false
        }
      } else {
        // If incorrect filetype
        toast.info('Wrong filetype selected.', {
          autoClose: 5000,
          className: 'toast-unopened',
          bodyClassName: 'toast-unopened-body',
          progressClassName: 'toast-unopened-progress'
        })

        response = false
      }

      callback(response)
    }

    if (window.FileReader) {
      // If the browser has access to the File APIs, open the file
      fileProcessor.openFile(file, processResults)
    } else {
      // If the browser can't access the File APIs, display a notification
      toast.info('Your browser is unable to open files.', {
        autoClose: 5000,
        className: 'toast-unopened',
        bodyClassName: 'toast-unopened-body',
        progressClassName: 'toast-unopened-progress'
      })

      response = false
      callback(response)
    }
  }
}

const fileProcessor = new FileProcessor()

export default fileProcessor
