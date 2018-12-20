class DataProcessor {
  getData (which) {
    let data

    // Check if there's storage access
    if (typeof Storage !== 'undefined') {
      // If we can access storage, check if there is data in storage.
      if (window.localStorage.getItem(which)) {
        // If there's data in storage, pull it
        data = JSON.parse(window.localStorage.getItem(which))
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

  setStorage (data, which) {
    if (typeof Storage !== 'undefined') {
      window.localStorage.setItem(which, JSON.stringify(data))
    }
  }
}

const dataProcessor = new DataProcessor()

export default dataProcessor
