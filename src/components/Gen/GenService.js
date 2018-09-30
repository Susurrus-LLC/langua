// @flow
import { defData, vars } from './defaultData'
import fileProcessor from './fileProcessor'

declare type Results = {
  status: Array<string>,
  results: Array<string>,
  stats: {
    words: number,
    maxWords: number,
    filtered: number
  }
}

declare type Props = {}

class GenService {
  constructor (props: Props) {
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
    this.checkErrors = this.checkErrors.bind(this)
    this.generate = this.generate.bind(this)
    this.build = this.build.bind(this)
    this.save = this.save.bind(this)
    this.open = this.open.bind(this)
  }

  getData (): Data {
    let data: Data

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
  setStorage (data: Data): void {
    if (typeof (Storage) !== 'undefined') {
      this.storage.setItem(this.item, JSON.stringify(data))
    }
  }

  // When a Subpattern variable is changed, create a new version of state
  changeSelect (id: number, val: string, data: Data): Data {
    let newData: Data = JSON.parse(JSON.stringify(data))
    newData.subpatterns[id].selected = val
    return newData
  }

  // When a Subpattern is changed, create a new version of state
  changeSubpattern (id: number, val: string, data: Data): Data {
    let newData: Data = JSON.parse(JSON.stringify(data))
    newData.subpatterns[id].subpattern = val
    return newData
  }

  // When a Subpattern is cleared, create a new version of state
  clear (id: number, data: Data): Data {
    let newData: Data = JSON.parse(JSON.stringify(data))
    newData.subpatterns.splice(id, 1)
    return newData
  }

  // When a Subpattern is added, create a new version of state
  add (data: Data): Data {
    let toUse: string = ''
    let newData: Data = JSON.parse(JSON.stringify(data))

    // Identify the first unused Subpattern variable and select it
    for (let i = 0; i < vars.length; i++) {
      let used: boolean = false
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
  changePattern (val: string, data: Data): Data {
    let newData: Data = JSON.parse(JSON.stringify(data))
    newData.pattern = val
    return newData
  }

  // When the number of desired words is changed, create a new version of state
  wordNumChange (val: number, data: Data): Data | boolean {
    // Limit number entry to between 1 and 9999
    if (val < 1) {
      val = 1
    } else if (val > 9999) {
      val = 9999
    }

    // Only change state if the number is between 1 and 9999
    if (val > 0 && val < 10000) {
      let newData: Data = JSON.parse(JSON.stringify(data))
      newData.words = val
      return newData
    } else {
      // Otherwise, keep state the same
      return false
    }
  }

  // If the selection for new lines is changed, create a new version of state
  changeNewline (checked: boolean, data: Data): Data {
    let newData: Data = JSON.parse(JSON.stringify(data))
    newData.newline = checked
    return newData
  }

  // If the selection for filtering duplicates is changed, create a new version of state
  changeDupes (checked: boolean, data: Data): Data {
    let newData: Data = JSON.parse(JSON.stringify(data))
    newData.filterdupes = checked
    return newData
  }

  // Check the input for errors
  checkErrors (data: Data): Array<string> {
    let status: Array<string> = []

    // Check Subpattern for circular reference
    const getSp = (selected: string): string => {
      let sp: string = ''
      for (let i = 0; i < data.subpatterns.length; i++) {
        if (data.subpatterns[i].selected === selected) {
          sp = data.subpatterns[i].subpattern
          break
        }
      }
      return sp
    }

    const idDeps = (subpattern: string): Array<string> => {
      let deps: Array<string> = []
      for (let i = 0; i < subpattern.length; i++) {
        if (vars.includes(subpattern[i])) {
          deps.push(subpattern[i])
        }
      }
      return Array.from(new Set(deps))
    }

    const checkCirc = (selected: string, refed: Array<string>): boolean => {
      const sp = getSp(selected)
      const deps = idDeps(sp)
      let circ: boolean = false

      if (deps.length > 0) {
        if (deps.includes(selected) || refed.includes(selected)) {
          circ = true
        } else {
          let i: number = 0
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
      let refed: Array<string> = []

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
    let duplicates: Array<string> = []
    for (let i = 0; i < data.subpatterns.length; i++) {
      let current: string = data.subpatterns[i].selected

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
      status.push(`Some Subpattern variables (${dupes}) have been used multiple times.`)
    } else if (duplicates.length === 1) {
      status.push(`The Subpattern variable ${dupes} has been used multiple times.`)
    }

    // Check Pattern for undefined variable
    let defed: Array<string> = []
    for (let i = 0; i < data.subpatterns.length; i++) {
      defed.push(data.subpatterns[i].selected)
    }

    let undefed: Array<string> = []
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
      status.push(`Some capital A–Z letters (${undefs}) were used but not defined as variables. If your intention is to include these characters as a letter in the results, a future version will allow this using escaped characters.`)
    } else if (undefSet.length === 1) {
      status.push(`The capital letter ${undefs} was used but not defined as a variable. If your intention is to include this character as a letter in the results, a future version will allow this using escaped characters.`)
    }

    status = Array.from(new Set(status))
    return status
  }

  // Start the generation process
  generate (data: Data): Results {
    const status = this.checkErrors(data)
    let results: Results

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
      results = this.build(data, 'ok')
    }

    return results
  }

  // Generate the output
  build (data: Data, status: string): results {
    let results: Array<string> = []
    let newData: Data = JSON.parse(JSON.stringify(data))

    // Randomly choose from the items in an array
    const chooseRand = (length: number): number => {
      return Math.floor(Math.random() * length)
    }

    // Get the subpattern for a variable
    const getSubpattern = (subpatterns: Array<Subpattern>, selected: string): Array<string> => {
      let subpattern: Array<string> = []
      for (let i = 0; i < subpatterns.length; i++) {
        if (subpatterns[i].selected === selected) {
          subpattern = subpatterns[i].subpattern
          break
        }
      }
      return subpattern
    }

    // If a chosen item is a defined variable, randomly choose from its own Subpattern
    const resolveVar = (subpatterns: Array<Subpattern>, selected: string): string => {
      let letter: string = ''
      if (vars.includes(selected)) {
        const subpattern = getSubpattern(subpatterns, selected)
        const selection: string = subpattern[chooseRand(subpattern.length)]
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

    const resolveOpt = (subpatterns: Array<Subpattern>, option: string): string => {
      let letters: string = ''
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
      newData.subpatterns[i].subpattern = newData.subpatterns[i].subpattern.split('/')
    }

    // Split the Pattern into an array based on '/'
    const pattArr = newData.pattern.split('/')

    // Generate the number of words requested in the settings
    for (let i = 0; i < newData.words; i++) {
      let word: string = ''

      // If the Pattern has options, choose one
      const patt = pattArr[chooseRand(pattArr.length)]

      word += resolveOpt(newData.subpatterns, patt)

      results.push(word)
    }

    // Calculate the stats on the generated output

    // Calculate the maximum number of words
    let count: number = 0

    for (let i = 0; i < pattArr.length; i++) {
      let optCount: number = 1
      if (pattArr[i].length === 0) {
        optCount = 0
        break
      } else {
        for (let j = 0; j < pattArr[i].length; j++) {
          const variab = pattArr[i][j]
          let addCount: number = 0
          let multCount: number = 1
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
    let words: number = 0
    if (results[0].length !== 0) {
      words = results.length
    }

    const filteredWords = Array.from(new Set(results))
    const remaining: number = filteredWords.length
    const filtered: number = newData.words - remaining

    const response: Results = {
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

  // Save the current state to storage and generate a file
  save (data: Data): void {
    // Save data to storage
    this.setStorage(data)
    // Add a function to save data to a file
  }

  // Open a file and parse it to restore a saved state
  open (data: Data): void {
    // Add a function to handle opening a saved document
  }
}

const genService = new GenService()

export default genService
