import { defData } from './defaultData'

const storage = window.localStorage
const item = 'gen'

export const getData = () => {
  let data
  if (typeof (Storage) !== 'undefined') {
    if (storage.getItem(item)) {
      data = JSON.parse(storage.getItem(item))
    } else {
      data = defData
      storage.setItem(item, JSON.stringify(data))
    }
  } else {
    data = defData
  }

  return data
}

export const setStorage = (data) => {
  if (typeof (Storage) !== 'undefined') {
    storage.setItem(item, JSON.stringify(data))
  }
}

export const generate = (data) => {
  return data
}
