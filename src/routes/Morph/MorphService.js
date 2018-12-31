import { toast } from 'react-toastify'
import schema from 'js-schema'

import dataProcessor from '../../tools/dataProcessor'
import fileProcessor from '../../tools/fileProcessor'

class MorphService {
  constructor () {
    this.item = 'morph'
    this.getData = this.getData.bind(this)
    this.removeResults = this.removeResults.bind(this)
    this.setStorage = this.setStorage.bind(this)
    this.save = this.save.bind(this)
    this.open = this.open.bind(this)
    this.splitRewriteRules = this.splitRewriteRules.bind(this)
    this.rewriteCats = this.rewriteCats.bind(this)
    this.splitCategories = this.splitCategories.bind(this)
    this.rewriteChanges = this.rewriteChanges.bind(this)
    this.splitSoundChanges = this.splitSoundChanges.bind(this)
    this.rewriteLex = this.rewriteLex.bind(this)
    this.unrewriteLex = this.unrewriteLex.bind(this)
    this.applyChanges = this.applyChanges.bind(this)
    this.getResults = this.getResults.bind(this)
    this.idDiff = this.idDiff.bind(this)
    this.morph = this.morph.bind(this)
  }

  // Get the data from storage or from the default data
  getData () {
    return dataProcessor.getData(this.item)
  }

  // Remove the results from the data
  removeResults (data) {
    const dataNoResults = JSON.parse(JSON.stringify(data))
    delete dataNoResults.results
    return dataNoResults
  }

  // Store the current data in storage
  setStorage (data) {
    dataProcessor.setStorage(this.removeResults(data), this.item)
  }

  // Save the current state to storage and generate a file
  save (data) {
    fileProcessor.save(this.removeResults(data), this.item)
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

  // Split the rewrite rules into an array of objects
  splitRewriteRules (rules) {
    let splitRules = []
    let errors = []

    for (let i = 0; i < rules.length; i++) {
      const split = rules[i].split('=')
      if (split.length > 2) {
        // If the string was split too many times, it had too many =
        errors.push(`The rewrite rule ${rules[i]} has too many = signs.`)
      } else if (split.length < 2) {
        if (rules[i].length === 0) {
          // If it was a blank line, ignore it
          continue
        } else {
          // If the string wasn't split at all, it was missing a =
          errors.push(`The rewrite rule ${rules[i]} is missing an = sign.`)
        }
      } else {
        // Split the rewrite rule
        splitRules.push({ rewriteFrom: split[0], rewriteTo: split[1] })
      }
    }

    // If there are any errors that were logged, return the errors. Otherwise, return the split categories.
    return errors.length ? errors : splitRules
  }

  // Apply the rewrite rules to the categories
  rewriteCats (cat, rules) {
    for (let i = 0; i < rules.length; i++) {
      const rewriteFrom = new RegExp(rules[i].rewriteFrom, 'g')
      cat[1] = cat[1].replace(rewriteFrom, rules[i].rewriteTo)
    }
    return cat
  }

  // Split the categories into an array of objects
  splitCategories (cats, rules) {
    let assignments = []
    let errors = []

    for (let i = 0; i < cats.length; i++) {
      const split = cats[i].split('=')
      if (split.length > 2) {
        // If the string was split too many times, it had too many =
        errors.push(`The category ${cats[i]} has too many = signs.`)
      } else if (split.length < 2) {
        if (cats[i].length === 0) {
          // If it was a blank line, ignore it
          continue
        } else {
          // If the string wasn't split at all, it was missing a =
          errors.push(`The category ${cats[i]} is missing an = sign.`)
        }
      } else if (split[0].length > 1) {
        // If the string to the left of the = is more than one character
        errors.push(
          `The category ${
            cats[i]
          } needs to be assigned to a single-character variable.`
        )
      } else {
        const rwSplit = this.rewriteCats(split, rules)
        // Split the variable from its assignments
        assignments.push(rwSplit)
      }
    }

    let splitCategories = []
    for (let i = 0; i < assignments.length; i++) {
      const thisCat = {}
      thisCat.variable = assignments[i][0]
      thisCat.categories = assignments[i][1].split('')
      splitCategories.push(thisCat)
    }

    // If there are any errors that were logged, return the errors. Otherwise, return the split categories.
    return errors.length ? errors : splitCategories
  }

  // Apply the rewrite rules to the sound change rules
  rewriteChanges (change, rules) {
    const newChange = JSON.parse(JSON.stringify(change))

    for (let prop in newChange) {
      if (newChange.hasOwnProperty(prop)) {
        for (let i = 0; i < rules.length; i++) {
          const rewriteFrom = new RegExp(rules[i].rewriteFrom, 'g')
          newChange[prop] = newChange[prop].replace(
            rewriteFrom,
            rules[i].rewriteTo
          )
        }
      }
    }

    return newChange
  }

  // Split the sound change rules into an array of objects
  splitSoundChanges (changes, rules) {
    let splitChanges = []
    let errors = []

    for (let i = 0; i < changes.length; i++) {
      const split = changes[i].split('/')
      if (split.length > 4) {
        // If hte string was split too many times, it had too many /
        errors.push(`The sound change ${changes[i]} has too many / signs.`)
      } else if (split.length < 2) {
        if (changes[i].length === 0) {
          // If it was a blank line, ignore it
          continue
        } else {
          // If the string wasn't split at all, it was missing a /
          errors.push(`The sound change ${changes[i]} is missing a / sign.`)
        }
      } else {
        // Split the sound change rule into an object
        const thisRule = {
          changeFrom: split[0],
          changeTo: split[1]
        }
        if (split[2]) {
          thisRule.context = split[2]
          if (!/_/.test(split[2])) {
            errors.push(
              `The context in the sound change ${
                changes[i]
              } is missing an _ sign.`
            )
          } else if (/_/.exec(split[2]).length > 2) {
            errors.push(
              `The context in the sound change ${
                changes[i]
              } has too many _ signs.`
            )
          }
        }
        if (split[3]) {
          thisRule.exception = split[3]
          if (!/_/.test(split[3])) {
            errors.push(
              `The exception in the sound change ${
                changes[i]
              } is missing an _ sign.`
            )
          } else if (/_/.exec(split[3]).length > 2) {
            errors.push(
              `The exception in the sound change ${
                changes[i]
              } has too many _ signs.`
            )
          }
        }

        const rwRule = this.rewriteChanges(thisRule, rules)
        splitChanges.push(rwRule)
      }
    }

    // If there are any errors that were logged, return the errors. Otherwise, return the split categories.
    return errors.length ? errors : splitChanges
  }

  // Apply the rewrite rules to the lexicon
  rewriteLex (lex, rules) {
    let newLex = []

    for (let i = 0; i < lex.length; i++) {
      let word = lex[i]

      for (let j = 0; j < rules.length; j++) {
        const regRule = new RegExp(rules[j].rewriteFrom, 'g')
        word = word.replace(regRule, rules[j].rewriteTo)
      }

      newLex.push(word)
    }

    return newLex
  }

  // Reverse-apply the rewrite rules to the output
  unrewriteLex (results, rules) {
    const newResults = JSON.parse(JSON.stringify(results))

    for (let i = 0; i < newResults.length; i++) {
      for (let j = 0; j < rules.length; j++) {
        const regRule = new RegExp(rules[j].rewriteTo, 'g')
        newResults[i].output = newResults[i].output.replace(
          regRule,
          rules[j].rewriteFrom
        )
      }
    }

    return newResults
  }

  // Apply the sound changes to a given word
  applyChanges (cats, rules, changes, word) {
    return word
  }

  // Build the results object array
  getResults (cats, rules, changes, lexicon, rwOutput) {
    const rwLexicon = this.rewriteLex(lexicon, rules)
    let results = []

    for (let i = 0; i < lexicon.length; i++) {
      results.push({
        input: lexicon[i],
        output: this.applyChanges(cats, rules, changes, rwLexicon[i])
      })
    }

    // If 'rewrite on output' is selected, rewrite the results. Otherwise, just return the results as-is.
    return rwOutput ? this.unrewriteLex(results, rules) : results
  }

  idDiff (data, results) {
    const newResults = JSON.parse(JSON.stringify(results))

    if (
      data.results !== undefined &&
      data.results.length &&
      typeof data.results[0] !== 'string'
    ) {
      for (let i = 0; i < newResults.length; i++) {
        newResults[i].diff =
          newResults[i].input !== data.results[i].input ||
          newResults[i].output !== data.results[i].output
      }
    } else {
      for (let i = 0; i < newResults.length; i++) {
        newResults[i].diff = true
      }
    }

    return newResults
  }

  morph (data) {
    const newData = JSON.parse(JSON.stringify(data))

    // Process the input
    const rewriteRules = this.splitRewriteRules(newData.rewriteRules)
    const categories = this.splitCategories(newData.categories, rewriteRules)
    const soundChanges = this.splitSoundChanges(
      newData.soundChanges,
      rewriteRules
    )

    // Return the errors if there are any
    let allErrors = []
    if (typeof categories[0] === 'string')
      allErrors = allErrors.concat(categories)
    if (typeof rewriteRules[0] === 'string')
      allErrors = allErrors.concat(rewriteRules)
    if (typeof soundChanges[0] === 'string')
      allErrors = allErrors.concat(soundChanges)
    if (allErrors.length) return allErrors

    const results = this.getResults(
      categories,
      rewriteRules,
      soundChanges,
      newData.lexicon,
      newData.rewriteOutput
    )

    return this.idDiff(newData, results)
  }
}

const morphService = new MorphService()

export default morphService
