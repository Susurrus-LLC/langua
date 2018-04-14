import * as React from 'react'
import injectSheet from 'react-jss'
import styles from './styles'

const Morph = () => (
  <div className='morph'>
    <h2 class='tool-title'>LanguaMorph</h2>
    <p class='notice'>This tool is still in planning.</p>
  </div>
)

export default injectSheet(styles)(Morph)
