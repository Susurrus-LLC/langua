import { defData } from './defaultData'

class FrequenService {
  constructor () {
    this.storage = window.localStorage
    this.item = 'frequen'
    this.getData = this.getData.bind(this)
    this.setStorage = this.setStorage.bind(this)
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

  // Analyze the data
  analyze (data) {
    const corpus = data.corpus
    // Break the input into arrays
    const cons = data.consonants.split('/')
    // Break each element in an array into a sub-array
    let consons = []
    cons.forEach((el) => {
      consons.push(el.split(','))
    })
    const consonants = [].concat(...consons)
    const vows = data.vowels.split('/')
    let vowes = []
    vows.forEach((el) => {
      vowes.push(el.split(','))
    })
    const vowels = [].concat(...vowes)
    // Sort the input arrays by length
    consonants.sort((a, b) => {
      return b[0].length - a[0].length
    })
    vowels.sort((a, b) => {
      return b[0].length - a[0].length
    })
    console.log(consonants)
    console.log(vowels)
  }
}

const frequenService = new FrequenService()

export default frequenService
