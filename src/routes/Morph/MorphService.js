import { toast } from 'react-toastify'
import schema from 'js-schema'

import fileProcessor from '../../tools/fileProcessor'

import { defData } from './defaultData'

class MorphService {
  constructor () {
    this.storage = window.localStorage
    this.item = 'morph'
    this.getData = this.getData.bind(this)
    this.setStorage = this.setStorage.bind(this)
    this.save = this.save.bind(this)
    this.open = this.open.bind(this)
  }

  getData () {
    let data

    // Check if there's storage access
    if (typeof Storage !== 'undefined') {
      // If we can access storage, check if there is data in storage.
      if (this.storage.getItem(this.item)) {
        // If there's data in storage, pull it
        data = JSON.parse(this.storage.getItem(this.item))
      } else {
        // If there's not data in storage, pull the default data
        data = defData
        // Store the default data in storage
        this.setStorage(data)
      }
    } else {
      // If we can't access storage, use the default data
      data = defData
    }

    // Remove previously derived results from state
    data.results = undefined

    return data
  }

  // Store the current data in storage
  setStorage (data) {
    if (typeof Storage !== 'undefined') {
      this.storage.setItem(this.item, JSON.stringify(data))
    }
  }

  // Save the current state to storage and generate a file
  save (data) {
    let newData = JSON.parse(JSON.stringify(data))
    // Delete the results from the saved data
    delete newData.results
    // Save data to storage
    this.setStorage(newData)
    if (window.File) {
      // If the browser has access to File, save the file locally
      fileProcessor.saveFile(newData, this.item)
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
      if (file.name.endsWith('.lngm')) {
        // Define correct file structure
        const categorySchema = schema({
          variable: String,
          letters: Array.of(String)
        })

        const rewriteRuleSchema = schema({
          pattern: String,
          substitution: String
        })

        const soundChangeSchema = schema({
          input: String,
          output: String,
          context: String,
          '?exception': String
        })

        const DataSchema = schema({
          categories: Array.of(categorySchema),
          rewriteRules: Array.of(rewriteRuleSchema),
          soundChanges: Array.of(soundChangeSchema),
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
