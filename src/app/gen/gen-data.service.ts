import { Injectable } from '@angular/core'

import { genData, GenData, variables } from './gen.data'

@Injectable()
export class GenDataService {
  private data: GenData

  constructor() {
    const storage = window.localStorage
    if (typeof(Storage) !== 'undefined') {
      if (storage.getItem('gen-data')) {
        this.data = JSON.parse(storage.getItem('gen-data'))
      } else {
        this.data = genData
        storage.setItem('gen-data', JSON.stringify(this.data))
      }
    }
  }

  getData(): GenData {
    return this.data
  }
}
