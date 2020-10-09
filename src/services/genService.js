import { toast } from 'react-toastify'
import schema from 'js-schema'

import dataProcessor from '../tools/dataProcessor'
import fileProcessor from '../tools/fileProcessor'

import { vars } from '../data/gen'

class GenService {
  constructor () {
    this.item = 'gen'
    this.getData = this.getData.bind(this)
    this.setStorage = this.setStorage.bind(this)
    this.save = this.save.bind(this)
    this.open = this.open.bind(this)
    this.changeSelect = this.changeSelect.bind(this)
    this.changeSubpattern = this.changeSubpattern.bind(this)
    this.clear = this.clear.bind(this)
    this.add = this.add.bind(this)
    this.changePattern = this.changePattern.bind(this)
    this.wordNumChange = this.wordNumChange.bind(this)
    this.changeNewline = this.changeNewline.bind(this)
    this.changeDupes = this.changeDupes.bind(this)
    this.checkErrors = this.checkErrors.bind(this)
    this.generate = this.generate.bind(this)
    this.build = this.build.bind(this)
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
      if (file.name.endsWith(fileProcessor.filetype(this.item))) {
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

  // When a Subpattern variable is changed, create a new version of state
  changeSelect (id, val, data) {
    let newData = JSON.parse(JSON.stringify(data))
    newData.subpatterns[id].selected = val
    return newData
  }

  // When a Subpattern is changed, create a new version of state
  changeSubpattern (id, val, data) {
    let newData = JSON.parse(JSON.stringify(data))
    newData.subpatterns[id].subpattern = val
    return newData
  }

  // When a Subpattern is cleared, create a new version of state
  clear (id, data) {
    let newData = JSON.parse(JSON.stringify(data))
    newData.subpatterns.splice(id, 1)
    return newData
  }

  // When a Subpattern is added, create a new version of state
  add (data) {
    let toUse = ''
    let newData = JSON.parse(JSON.stringify(data))

    // Identify the first unused Subpattern variable and select it
    for (let i = 0; i < vars.length; i++) {
      let used = false
      for (let j = 0; j < newData.subpatterns.length; j++) {
        if (newData.subpatterns[j].selected === vars[i]) {
          used = true
          break
        } else {
          continue
        }
      }
      if (!used) {
        toUse = vars[i]
        break
      } else {
        continue
      }
    }

    if (newData.subpatterns.length < vars.length) {
      newData.subpatterns.push({ selected: toUse, subpattern: '' })
    }

    return newData
  }

  // When the pattern is changed, create a new version of state
  changePattern (val, data) {
    let newData = JSON.parse(JSON.stringify(data))
    newData.pattern = val
    return newData
  }

  // When the number of desired words is changed, create a new version of state
  wordNumChange (val, data) {
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

  // If the selection for new lines is changed, create a new version of state
  changeNewline (checked, data) {
    let newData = JSON.parse(JSON.stringify(data))
    newData.newline = checked
    return newData
  }

  // If the selection for filtering duplicates is changed, create a new version of state
  changeDupes (checked, data) {
    let newData = JSON.parse(JSON.stringify(data))
    newData.filterdupes = checked
    return newData
  }

  // Check the input for errors
  checkErrors (data) {
    let status = []

    // Check Subpattern for circular reference
    const getSp = selected => {
      let sp = ''
      for (let i = 0; i < data.subpatterns.length; i++) {
        if (data.subpatterns[i].selected === selected) {
          sp = data.subpatterns[i].subpattern
          break
        }
      }
      return sp
    }

    const idDeps = subpattern => {
      let deps = []
      for (let i = 0; i < subpattern.length; i++) {
        if (vars.includes(subpattern[i])) {
          deps.push(subpattern[i])
        }
      }
      return Array.from(new Set(deps))
    }

    const checkCirc = (selected, refed) => {
      const sp = getSp(selected)
      const deps = idDeps(sp)
      let circ = false

      if (deps.length > 0) {
        if (deps.includes(selected) || refed.includes(selected)) {
          circ = true
        } else {
          let i = 0
          refed.push(selected)
          while (!circ && i < deps.length) {
            circ = checkCirc(deps[i], refed)
            i++
          }
        }
      }

      return circ
    }

    for (let i = 0; i < data.subpatterns.length; i++) {
      const deps = idDeps(data.subpatterns[i].subpattern)
      let refed = []

      if (deps.length > 0) {
        for (let j = 0; j < deps.length; j++) {
          if (checkCirc(deps[j], refed)) {
            status.push('The Subpatterns contain a circular reference.')
            break
          }
        }
      }
    }

    // Check for duplicate Subpattern variable names
    let duplicates = []
    for (let i = 0; i < data.subpatterns.length; i++) {
      let current = data.subpatterns[i].selected

      for (let j = 0; j < data.subpatterns.length; j++) {
        if (i === j) {
          continue
        } else {
          if (data.subpatterns[j].selected === current) {
            duplicates.push(current)
          }
        }
      }
    }

    duplicates = Array.from(new Set(duplicates))
    const dupes = duplicates.join(', ')

    if (duplicates.length > 1) {
      status.push(
        `Some Subpattern variables (${dupes}) have been used multiple times.`
      )
    } else if (duplicates.length === 1) {
      status.push(
        `The Subpattern variable ${dupes} has been used multiple times.`
      )
    }

    // Check Pattern for undefined variable
    let defed = []
    for (let i = 0; i < data.subpatterns.length; i++) {
      defed.push(data.subpatterns[i].selected)
    }

    let undefed = []
    for (let i = 0; i < data.pattern.length; i++) {
      if (vars.includes(data.pattern[i])) {
        if (!defed.includes(data.pattern[i])) {
          undefed.push(data.pattern[i])
        }
      }
    }
    for (let i = 0; i < data.subpatterns.length; i++) {
      for (let j = 0; j < data.subpatterns[i].subpattern.length; j++) {
        if (vars.includes(data.subpatterns[i].subpattern[j])) {
          if (!defed.includes(data.subpatterns[i].subpattern[j])) {
            undefed.push(data.subpatterns[i].subpattern[j])
          }
        }
      }
    }

    const undefSet = Array.from(new Set(undefed))
    const undefs = undefSet.join(', ')

    if (undefSet.length > 1) {
      // Update this status message once escaping characters is enabled
      status.push(
        `Some capital A–Z letters (${undefs}) were used but not defined as variables. If your intention is to include these characters as a letter in the results, a future version will allow this using escaped characters.`
      )
    } else if (undefSet.length === 1) {
      status.push(
        `The capital letter ${undefs} was used but not defined as a variable. If your intention is to include this character as a letter in the results, a future version will allow this using escaped characters.`
      )
    }

    status = Array.from(new Set(status))
    return status
  }

  // Start the generation process
  generate (data) {
    const status = this.checkErrors(data)
    let results

    if (status.length > 0) {
      results = {
        status: status,
        results: [],
        stats: {
          words: 0,
          maxWords: 0,
          filtered: 0,
          remaining: 0
        }
      }
    } else {
      results = this.build(data, ['ok'])
    }

    return results
  }

  // Generate the output
  build (data, status) {
    let results = []
    let newData = JSON.parse(JSON.stringify(data))

    // Randomly choose from the items in an array
    const chooseRand = length => {
      return Math.floor(Math.random() * length)
    }

    // Get the subpattern for a variable
    const getSubpattern = (subpatterns, selected) => {
      let subpattern = []
      for (let i = 0; i < subpatterns.length; i++) {
        if (subpatterns[i].selected === selected) {
          subpattern = subpatterns[i].subpattern
          break
        }
      }
      return subpattern
    }

    // If a chosen item is a defined variable, randomly choose from its own Subpattern
    const resolveVar = (subpatterns, selected) => {
      let letter = ''
      if (vars.includes(selected)) {
        const subpattern = getSubpattern(subpatterns, selected)
        const selection = subpattern[chooseRand(subpattern.length)]
        if (vars.includes(selection)) {
          letter = resolveVar(subpatterns, selection)
        } else {
          letter = selection
        }
      } else {
        letter = selected
      }
      if (letter.length > 1) {
        letter = resolveOpt(subpatterns, letter)
      }
      return letter
    }

    const resolveOpt = (subpatterns, option) => {
      let letters = ''
      for (let i = 0; i < option.length; i++) {
        if (/[()[\]^*"]/.test(option[i])) {
          // For now, ignore the characters that will be used for operations
          continue
        } else {
          letters += resolveVar(subpatterns, option[i])
        }
      }
      return letters
    }

    // Split all the Subpatterns into arrays based on '/'
    for (let i = 0; i < newData.subpatterns.length; i++) {
      newData.subpatterns[i].subpattern = newData.subpatterns[
        i
      ].subpattern.split('/')
    }

    // Split the Pattern into an array based on '/'
    const pattArr = newData.pattern.split('/')

    // Generate the number of words requested in the settings
    for (let i = 0; i < newData.words; i++) {
      let word = ''

      // If the Pattern has options, choose one
      const patt = pattArr[chooseRand(pattArr.length)]

      word += resolveOpt(newData.subpatterns, patt)

      results.push(word)
    }

    // Calculate the stats on the generated output

    // Calculate the maximum number of words
    let count = 0

    for (let i = 0; i < pattArr.length; i++) {
      let optCount = 1
      if (pattArr[i].length === 0) {
        optCount = 0
        break
      } else {
        for (let j = 0; j < pattArr[i].length; j++) {
          const variab = pattArr[i][j]
          let addCount = 0
          let multCount = 1
          if (/[()[\]^*"]/.test(variab)) {
            // For now, ignore the characters that will be used for operations
            continue
          } else if (!vars.includes(variab)) {
            // If the current item in the Pattern is not a variable, add 1 to the count
            addCount += 1
          } else {
            for (let k = 0; k < newData.subpatterns.length; k++) {
              const subpattern = newData.subpatterns[k]
              if (subpattern.selected === variab) {
                // If the variable is defined, count how many options are in the Subpattern
                multCount *= subpattern.subpattern.length
                break
              } else {
                // If the variable is unused, skip it
                continue
              }
            }
          }
          optCount *= multCount
          optCount += addCount
        }
      }
      count += optCount
    }

    // If there are results, count how many words there are
    let words = 0
    if (results[0].length !== 0) {
      words = results.length
    }

    const filteredWords = Array.from(new Set(results))
    const remaining = filteredWords.length
    const filtered = newData.words - remaining

    const response = {
      status: status,
      results: results,
      stats: {
        words: words,
        maxWords: count,
        filtered: filtered,
        remaining: remaining
      }
    }

    return response
  }
}

const genService = new GenService()

export default genService
