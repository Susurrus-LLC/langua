import { defData, vars } from './defaultData'

class GenService {
  constructor () {
    this.storage = window.localStorage
    this.item = 'gen'
    this.getData = this.getData.bind(this)
    this.setStorage = this.setStorage.bind(this)
    this.changeSelect = this.changeSelect.bind(this)
    this.changeSubpattern = this.changeSubpattern.bind(this)
    this.add = this.add.bind(this)
    this.changePattern = this.changePattern.bind(this)
    this.wordNumChange = this.wordNumChange.bind(this)
    this.changeNewline = this.changeNewline.bind(this)
    this.changeDupes = this.changeDupes.bind(this)
    this.generate = this.generate.bind(this)
    this.save = this.save.bind(this)
    this.open = this.open.bind(this)
  }

  getData () {
    let data

    // Check if there's storage access
    if (typeof (Storage) !== 'undefined') {
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
    if (typeof (Storage) !== 'undefined') {
      this.storage.setItem(this.item, JSON.stringify(data))
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

  // Generate the output
  generate (data) {
    let results = []
    let newData = JSON.parse(JSON.stringify(data))

    // Randomly choose from the items in an array
    const chooseRand = (length) => {
      return Math.floor(Math.random() * length)
    }

    // Split all the Subpatterns into arrays based on '/'
    for (let i = 0; i < newData.subpatterns.length; i++) {
      newData.subpatterns[i].subpattern = newData.subpatterns[i].subpattern.split('/')
    }

    // Split the Pattern into an array based on '/'
    const pattArr = newData.pattern.split('/')

    // Generate the number of words requested in the settings
    for (let i = 0; i < newData.words; i++) {
      let word = ''

      // If the Pattern has options, choose one
      const patt = pattArr[chooseRand(pattArr.length)]

      for (let j = 0; j < patt.length; j++) {
        const variab = patt[j]

        if (/[()[\]^*"]/.test(variab)) {
          // For now, ignore the characters that will be used for operations
          continue
        } else if (vars.indexOf(variab) === -1) {
          // If the current item in the Pattern is not a variable, add it to the current word
          word += patt[j]
        } else {
          let letter = ''

          for (let k = 0; k < newData.subpatterns.length; k++) {
            const subpattern = newData.subpatterns[k]
            if (subpattern.selected === variab) {
              // If the variable is defined, randomly choose an option from the related Subpattern
              letter = subpattern.subpattern[chooseRand(subpattern.subpattern.length)]
              break
            } else {
              // If the variable is unused, skip it
              continue
            }
          }
          word += letter
        }
      }

      // If filtering duplicates, only push unique words to the results
      if (newData.filterdupes) {
        if (!results.includes(word)) {
          results.push(word)
        } else {
          continue
        }
      } else {
        results.push(word)
      }
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
          } else if (vars.indexOf(variab) === -1) {
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

    let filtered = 0
    if (newData.filterdupes) {
      filtered = newData.words - words
    }

    const response = {
      results: results,
      stats: {
        words: words,
        maxWords: count,
        filtered: filtered
      }
    }

    return response
  }

  // Save the current state to storage and generate a file
  save (data) {
    // Save data to storage
    this.setStorage(data)
    // Add a function to save data to a file
  }

  // Open a file and parse it to restore a saved state
  open (data) {
    // Add a function to handle opening a saved document
  }
}

const genService = new GenService()

export default genService
