import { toast } from 'react-toastify'
import schema from 'js-schema'

import dataProcessor from '../../tools/dataProcessor'
import fileProcessor from '../../tools/fileProcessor'
import * as v from '../../styles/variables'

class FrequenService {
  constructor () {
    this.item = 'frequen'
    this.getData = this.getData.bind(this)
    this.setStorage = this.setStorage.bind(this)
    this.analyze = this.analyze.bind(this)
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

  // Analyze the data
  analyze (data) {
    // Break the input into arrays and remove duplicates
    const splitBySlash = arr => {
      let newArr = Array.from(new Set(arr.split('/')))
      // Remove any blanks
      if (newArr.indexOf('') > -1) {
        newArr.splice(newArr.indexOf(''), 1)
      }
      return newArr
    }
    // Break each element in an array into a sub-array
    const makeSubArrays = arr => {
      let newArr = []
      arr.forEach(el => {
        newArr.push(el.split(','))
      })
      return newArr
    }
    const consonants = makeSubArrays(splitBySlash(data.consonants))
    const vowels = makeSubArrays(splitBySlash(data.vowels))

    // Flatten arrays and make sure there are no duplicates
    const flattenArrays = arr => Array.from(new Set([].concat(...arr)))
    // Distinguish upper/lower case if that option is selected
    const distinguishCase = arr => {
      let newArr = []
      if (!data.distinguishCase) {
        arr.forEach(el => newArr.push(el.toLowerCase()))
      } else {
        newArr = arr
      }
      return Array.from(new Set(newArr))
    }
    // And sort the flattened arrays by length so the longest segments are first
    const sortArrays = arr => {
      return arr.sort((a, b) => b.length - a.length)
    }
    const consonantsFlat = sortArrays(
      distinguishCase(flattenArrays(consonants))
    )
    const vowelsFlat = sortArrays(distinguishCase(flattenArrays(vowels)))

    let rawResults = {}

    // Add each element in the flattened arrays to the results object and indicate which type they are
    const initResults = (arr, type) => {
      arr.forEach(el => {
        rawResults[el] = {}
        rawResults[el].count = 0
        rawResults[el].type = type
      })
    }
    initResults(consonantsFlat, 'consonant')
    initResults(vowelsFlat, 'vowel') // Currently, if an element appears in both consonants and vowels, its vowel instance will take precedence

    // Label which segments are allophones
    const labelAllophones = arr => {
      arr.forEach((elArr, i) => {
        if (elArr.length > 1) {
          elArr.forEach((el, j) => {
            if (j > 0) {
              rawResults[arr[i][j]].allophoneOf = arr[i][0]
            }
          })
        }
      })
    }
    labelAllophones(consonants)
    labelAllophones(vowels)

    // Build a single array and sort by segment length
    const fullArr = sortArrays(consonantsFlat.concat(vowelsFlat))

    // If not distinguishing case, convert the corpus to lowercase
    let corpus = data.distinguishCase ? data.corpus : data.corpus.toLowerCase()

    // For every instance of the segment in the text, increment the count and slice the instance out of the text
    const sliceAndCount = seg => {
      if (corpus.indexOf(seg) > -1) {
        rawResults[seg].count += 1
        corpus =
          corpus.slice(0, corpus.indexOf(seg)) +
          corpus.slice(corpus.indexOf(seg) + seg.length)
      }
    }

    // Loop through all segments counting and slicing all instances of each.
    fullArr.forEach(el => {
      while (corpus.indexOf(el) > -1) {
        sliceAndCount(el)
      }
    })

    // Find allophones and combine their counts
    for (let seg in rawResults) {
      if (rawResults.hasOwnProperty(seg)) {
        if (rawResults[seg].hasOwnProperty('allophoneOf')) {
          rawResults[rawResults[seg].allophoneOf].count += rawResults[seg].count
          delete rawResults[seg]
        }
      }
    }

    // Assemble the data
    const assembleData = filter => {
      // Add the results to a results array
      let resArr = []

      for (let seg in rawResults) {
        if (rawResults[seg].type === filter || filter === undefined) {
          resArr.push({
            segment: seg,
            count: rawResults[seg].count,
            type: rawResults[seg].type
          })
        }
      }

      // Sort by smallest count
      resArr.sort((a, b) => {
        return a.count - b.count
      })

      // Count the total number of counted segments
      let count = 0

      resArr.forEach(elObj => {
        count += elObj.count
      })

      // If a segment occurs 0 times, remove it from the results
      let numToRemove = 0

      resArr.forEach(elObj => {
        if (elObj.count === 0) {
          numToRemove += 1
        }
      })

      resArr.splice(0, numToRemove)

      return resArr.map((d, i) => ({
        x: (d.count / count) * 100,
        y: d.segment,
        count: d.count,
        type: d.type,
        i: i,
        color:
          d.type === 'consonant' ? v.blu.string() : v.blu.darken(0.2).string()
      }))
    }

    const results = {
      all: assembleData(),
      consonants: assembleData('consonant'),
      vowels: assembleData('vowel')
    }

    return results
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
      if (file.name.endsWith('.lngf')) {
        // Define correct file structure
        const resultSchema = schema({
          color: String,
          count: Number,
          i: Number,
          type: String,
          x: Number,
          y: String
        })

        const DataSchema = schema({
          corpus: String,
          consonants: String,
          vowels: String,
          distinguishCase: Boolean,
          analyzed: Boolean,
          '?results': {
            all: Array.of(resultSchema),
            consonants: Array.of(resultSchema),
            vowels: Array.of(resultSchema)
          },
          '?hovered': resultSchema,
          filter: String
        })

        let content = JSON.parse(result)

        if (content.hovered) {
          content.hovered.count = +content.hovered.count
          content.hovered.i = +content.hovered.i
          content.hovered.x = +content.hovered.x
        }

        if (content.results) {
          content.results.all.forEach(el => {
            el.count = +el.count
            el.i = +el.i
            el.x = +el.x
          })
          content.results.consonants.forEach(el => {
            el.count = +el.count
            el.i = +el.i
            el.x = +el.x
          })
          content.results.vowels.forEach(el => {
            el.count = +el.count
            el.i = +el.i
            el.x = +el.x
          })
        }

        content.analyzed = false

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

const frequenService = new FrequenService()

export default frequenService
