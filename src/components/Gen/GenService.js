import { defData, vars } from './defaultData'

class GenService {
  constructor () {
    this.storage = window.localStorage
    this.item = 'gen'
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
}

const genService = new GenService()

export default genService
