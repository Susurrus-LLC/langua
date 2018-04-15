import React from 'react'
import injectSheet from 'react-jss'

import styles from './styles'
import defData from './defaultData'

const getStorage = (item) => {
  return window.localStorage.getItem(item)
}

const setStorage = (item, data) => {
  return window.localStorage.setItem(item, data)
}

class Gen extends React.Component {
  constructor (props) {
    super(props)
    this.classes = props.classes
    const dat = getStorage('gen') ? getStorage('gen') : defData
    if (!getStorage('gen')) { setStorage('gen', dat) }
    this.state = {
      data: dat
    }
  }

  render () {
    return (
      <div className={this.classes.gen}>
        <h2 className='tool-title'>LanguaGen</h2>
        <p className='notice'>This tool is still in development. Please be patient until it is complete.</p>
      </div>
    )
  }
}

export default injectSheet(styles)(Gen)
