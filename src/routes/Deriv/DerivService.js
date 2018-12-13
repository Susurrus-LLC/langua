import { toast } from 'react-toastify'
import schema from 'js-schema'

import fileProcessor from '../../tools/fileProcessor'

import { defData } from './defaultData'

class DerivService {
  constructor () {
    this.storage = window.localStorage
    this.item = 'deriv'
    this.getData = this.getData.bind(this)
    this.setStorage = this.setStorage.bind(this)
    this.add = this.add.bind(this)
    this.clear = this.clear.bind(this)
    this.changeInput = this.changeInput.bind(this)
    this.derive = this.derive.bind(this)
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

    return data
  }

  // Store the current data in storage
  setStorage (data) {
    if (typeof Storage !== 'undefined') {
      this.storage.setItem(this.item, JSON.stringify(data))
    }
  }

  // Add a new row to the form
  add (data, which) {
    let newData = JSON.parse(JSON.stringify(data))
    if (which === 'lex') {
      newData.lexemes.push({ lexeme: '', definition: '' })
    } else {
      newData.derivations.push({ derivation: '', label: '', definition: '' })
    }
    return newData
  }

  // Remove a row from the form
  clear (data, num, which) {
    let newData = JSON.parse(JSON.stringify(data))
    if (which === 'l') {
      newData.lexemes.splice(num, 1)
    } else {
      newData.derivations.splice(num, 1)
    }
    return newData
  }

  // Update an input field
  changeInput (data, num, which, val) {
    let newData = JSON.parse(JSON.stringify(data))
    switch (which) {
      case 'lw':
        newData.lexemes[num].lexeme = val
        break
      case 'ld':
        newData.lexemes[num].definition = val
        break
      case 'da':
        newData.derivations[num].derivation = val
        break
      case 'dl':
        newData.derivations[num].label = val
        break
      case 'dd':
        newData.derivations[num].definition = val
        break
      default:
        break
    }
    return newData
  }

  // When the number of desired words is changed, create a new version of state
  wordNumChange (data, val) {
    val = +val
    // Limit number entry to between 1 and 9999
    if (val < 1) {
      val = 1
    } else if (val > 9999) {
      val = 9999
    }

    // Only change state if the number is between 1 and 9999
    if (val > 0 && val < 10000) {
      let newData = JSON.parse(JSON.stringify(data))
      newData.words = val
      return newData
    } else {
      // Otherwise, keep state the same
      return false
    }
  }

  // Derive words from the data
  derive (data) {
    let results = []
    return results
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
      if (file.name.endsWith('.lngd')) {
        // Define correct file structure
        const lexemeSchema = schema({
          lexeme: String,
          definition: String
        })

        const derivationSchema = schema({
          derivation: String,
          label: String,
          definition: String
        })

        const DataSchema = schema({
          words: Number,
          type: ['any', 'single base', 'single derivation'],
          lexemes: Array.of(lexemeSchema),
          derivations: Array.of(derivationSchema)
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

const derivService = new DerivService()

export default derivService
