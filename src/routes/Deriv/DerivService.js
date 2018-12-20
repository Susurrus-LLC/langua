import { toast } from 'react-toastify'
import schema from 'js-schema'

import dataProcessor from '../../tools/dataProcessor'
import fileProcessor from '../../tools/fileProcessor'

class DerivService {
  constructor () {
    this.item = 'deriv'
    this.getData = this.getData.bind(this)
    this.save = this.save.bind(this)
    this.open = this.open.bind(this)
    this.setStorage = this.setStorage.bind(this)
    this.add = this.add.bind(this)
    this.clear = this.clear.bind(this)
    this.changeInput = this.changeInput.bind(this)
    this.derive = this.derive.bind(this)
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
      if (file.name.endsWith('.lngd')) {
        // Define correct file structure
        const lexemeSchema = schema({
          lexeme: String,
          definition: String
        })

        const derivationSchema = schema({
          derivation: String,
          gloss: String,
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

  // Add a new row to the form
  add (data, which) {
    let newData = JSON.parse(JSON.stringify(data))
    if (which === 'lex') {
      newData.lexemes.push({ lexeme: '', definition: '' })
    } else {
      newData.derivations.push({ derivation: '', gloss: '', definition: '' })
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
        newData.derivations[num].gloss = val
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
    const newData = JSON.parse(JSON.stringify(data))
    // Compute the total possible number of results
    const computePossible = filter => {
      if (filter === 'single base') {
        return newData.derivations.length
      } else if (filter === 'single derivation') {
        return newData.lexemes.length
      } else {
        return newData.lexemes.length * newData.derivations.length
      }
    }
    const possible = computePossible(newData.type)
    // If the user has selected to derive more than the total number possible, limit the results to the number that is possible
    let remaining = newData.words > possible ? possible : newData.words

    // Classify each of the affixes
    const derivations = newData.derivations.map(affix => {
      affix.derivation = affix.derivation.replace(/-+/g, '-')
      if (/-/.test(affix.derivation)) {
        // If the affix entered contains a hyphen
        if (affix.derivation.match(/-/g).length === 1) {
          // If the affix entered caintains no more than one hyphen
          if (/-$/.test(affix.derivation)) {
            // Prefix
            affix.gloss = `${affix.gloss}-`
            return { prefix: affix }
          } else if (/^-/.test(affix.derivation)) {
            // Suffix
            affix.gloss = `-${affix.gloss}`
            return { suffix: affix }
          } else {
            // Circumfix
            const circum = affix.derivation.split(/-/)
            let prefix = JSON.parse(JSON.stringify(affix))
            let suffix = JSON.parse(JSON.stringify(affix))
            prefix.derivation = `${circum[0]}-`
            prefix.gloss = `${prefix.gloss}-`
            suffix.derivation = `-${circum[1]}`
            suffix.gloss = `-${suffix.gloss}`
            return { prefix: prefix, suffix: suffix }
          }
        } else {
          // If the affix entered contains more than one hyphen
          return {
            error: `The affix ${affix.derivation} contains too many hyphens.`
          }
        }
      } else {
        // If the affix entered contains no hyphens
        return { error: `The affix ${affix.derivation} is missing a hyphen.` }
      }
    })

    // Attach words to their affixes on the correct side(s)
    const attachAffix = (lexeme, affix) => {
      return {
        prefix: affix.prefix,
        lexeme: lexeme,
        suffix: affix.suffix,
        error: affix.error
      }
    }

    // Derive from a single base
    const deriveFromSingleBase = () => {
      const base =
        newData.lexemes[Math.floor(Math.random() * newData.lexemes.length)]
      const list = []
      while (remaining > 0) {
        const randInd = Math.floor(Math.random() * derivations.length)
        const randAff = derivations[randInd]
        list.push(attachAffix(base, randAff))
        derivations.splice(randInd, 1)
        remaining--
      }
      return list
    }

    // Derive from a single derivation
    const deriveFromSingleDerivation = () => {
      const der = derivations[Math.floor(Math.random() * derivations.length)]
      const list = []
      while (remaining > 0) {
        const randInd = Math.floor(Math.random() * newData.lexemes.length)
        const randLex = newData.lexemes[randInd]
        list.push(attachAffix(randLex, der))
        newData.lexemes.splice(randInd, 1)
        remaining--
      }
      return list
    }

    // Derive from any base and any derivation
    const deriveFromAny = () => {
      const list = []
      // Find only unique pairs of lexemes and affixes
      const getUniqueItem = () => {
        const randLex =
          newData.lexemes[Math.floor(Math.random() * newData.lexemes.length)]
        const randAff =
          derivations[Math.floor(Math.random() * derivations.length)]
        let newItem = attachAffix(randLex, randAff)
        let isUnique = true
        for (let i = 0; i < list.length; i++) {
          if (JSON.stringify(newItem) === JSON.stringify(list[i])) {
            isUnique = false
            break
          }
        }
        if (!isUnique) {
          newItem = getUniqueItem()
        }
        return newItem
      }
      while (remaining > 0) {
        list.push(getUniqueItem())
        remaining--
      }
      return list
    }

    if (newData.type === 'single base') {
      return { newWords: deriveFromSingleBase(), possible: possible }
    } else if (newData.type === 'single derivation') {
      return { newWords: deriveFromSingleDerivation(), possible: possible }
    } else {
      return { newWords: deriveFromAny(), possible: possible }
    }
  }
}

const derivService = new DerivService()

export default derivService
