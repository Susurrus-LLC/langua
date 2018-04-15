import defData from './defaultData'

export const getData = () => {
  const storage = window.localStorage
  let data
  if (typeof (Storage) !== 'undefined') {
    if (storage.getItem('gen')) {
      data = JSON.parse(storage.getItem('gen'))
    } else {
      data = defData
      storage.setItem('gen', JSON.stringify(data))
    }
  } else {
    data = defData
  }

  return data
}

export const vars = ['-', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
