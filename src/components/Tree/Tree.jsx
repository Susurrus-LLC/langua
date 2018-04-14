import * as React from 'react'
import injectSheet from 'react-jss'
import styles from './styles'

const Tree = () => (
  <div className='tree'>
    <h2 class='tool-title'>LanguaTree</h2>
    <p class='notice'>This tool is still in planning.</p>
  </div>
)

export default injectSheet(styles)(Tree)
