import { defData, vars } from './defaultData'

class Service {
  constructor () {
    this.storage = window.localStorage
    this.item = 'gen'
  }

  getData () {
    let data

    if (typeof (Storage) !== 'undefined') {
      if (this.storage.getItem(this.item)) {
        data = JSON.parse(this.storage.getItem(this.item))
      } else {
        data = defData
        this.storage.setItem(this.item, JSON.stringify(data))
      }
    } else {
      data = defData
    }

    return data
  }

  setStorage (data) {
    if (typeof (Storage) !== 'undefined') {
      this.storage.setItem(this.item, JSON.stringify(data))
    }
  }

  addSubpattern (data) {
    let toUse = ''

    for (let i = 0; i < vars.length; i++) {
      let used = false
      for (let j = 0; j < data.subpatterns.length; j++) {
        if (data.subpatterns[j].selected === vars[i]) {
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

    if (data.subpatterns.length < vars.length) {
      data.subpatterns.push({ selected: toUse, subpattern: '' })
    }

    return data
  }

  getStats (data, results) {
    let stats = {
      words: results.length,
      maxWords: 0
    }

    // Calculate the maximum number of words

    return stats
  }

  generate (data) {
    let results = []

    for (let i = 0; i < data.words; i++) {
      let word = ''

      for (let j = 0; j < data.pattern.length; j++) {
        let letter = data.pattern[j]

        if (letter === '(' || letter === ')' || letter === '[' || letter === ']') {
          continue
        } else {
          word += letter
        }
      }

      if (data.filterdupes) {
        if (results.indexOf(word) === -1) {
          results.push(word)
        } else {
          continue
        }
      } else {
        results.push(word)
      }
    }

    let stats = this.getStats(data, results)

    let response = {
      results: results,
      stats: stats
    }

    return response
  }
}

const service = new Service()

export default service
