import { toast } from 'react-toastify'
import schema from 'js-schema'

import dataProcessor from '../../tools/dataProcessor'
import fileProcessor from '../../tools/fileProcessor'

class MorphService {
  constructor () {
    this.item = 'morph'
    this.getData = this.getData.bind(this)
    this.setStorage = this.setStorage.bind(this)
    this.save = this.save.bind(this)
    this.open = this.open.bind(this)
  }

  // Get the data from storage or from the default data
  getData () {
    return dataProcessor.getData(this.item)
  }

  // Store the current data in storage
  setStorage (data) {
    dataProcessor.setStorage(data, this.item)
  }

  // Save the current state to storage and generate a file
  save (data) {
    fileProcessor.save(data, this.item)
  }

  // Open a file and parse it to restore a saved state
  open (file, callback) {
    let response

    const processResults = result => {
      // If correct filetype
      if (file.name.endsWith('.lngm')) {
        // Define correct file structure
        const DataSchema = schema({
          categories: Array.of(String),
          rewriteRules: Array.of(String),
          soundChanges: Array.of(String),
          lexicon: Array.of(String),
          outputFormat: ['oo', 'io', 'oi'],
          showDiff: Boolean,
          ruleReport: Boolean,
          rewriteOutput: Boolean
        })

        let content = JSON.parse(result)

        if (content.results) {
          content.results.words = +content.results.words
        }

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

const morphService = new MorphService()

export default morphService
