import React from 'react'
import injectSheet from 'react-jss'
import styles from './styles'

const Gen = () => (
  <div className='gen'>
    <h2 class='tool-title'>LanguaGen</h2>
    <p class='notice'>This tool is still in planning.</p>
  </div>
)

export default injectSheet(styles)(Gen)
