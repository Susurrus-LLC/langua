import { defData as derivData } from '../data/deriv'
import { defData as frequenData } from '../data/frequen'
import { defData as genData } from '../data/gen'
import { defData as lexData } from '../data/lex'
import { defData as morphData } from '../data/morph'
import { defData as treeData } from '../data/tree'

class DataProcessor {
  defData (which) {
    switch (which) {
      case 'deriv':
        return derivData
      case 'frequen':
        return frequenData
      case 'gen':
        return genData
      case 'lex':
        return lexData
      case 'morph':
        return morphData
      case 'tree':
        return treeData
      default:
        return
    }
  }

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
        data = this.defData(which)
        // Store the default data in storage
        this.setStorage(data, which)
      }
    } else {
      // If we can't access storage, use the default data
      data = this.defData(which)
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
