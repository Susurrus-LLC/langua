import React from 'react'
import injectSheet from 'react-jss'
import type Classes from 'react-jss'

import styles from './styles'

type props = {
  classes: Classes,
  newLine: boolean,
  results: array<string>,
  stats: {
    words: number,
    maxWords: number,
    filtered: number
  }
}

const GenResults = (props: props) => {
  let joinedResults = Array.prototype.join.call(props.results, `${props.newLine ? '\n' : ' '}`).trim()
  let words = props.stats.words.toLocaleString()
  let maxWords = props.stats.maxWords.toLocaleString()
  let filtered = props.stats.filtered // If converted here, the comparison below won't work because the string will be NaN

  const statsText = () => {
    if (filtered > 0) {
      return `words: ${words} (${filtered.toLocaleString()} filtered out); maximum different words: ${maxWords}`
    } else {
      return `words: ${words}; maximum different words: ${maxWords}`
    }
  }

  return (
    <div className={props.classes.results}>
      <div className={props.classes.output}>
        <p className={props.classes.outText}>
          {joinedResults}
        </p>
      </div>
      <div className={props.classes.stats}>
        <p className={props.classes.statsText}>
          {statsText()}
        </p>
      </div>
    </div>
  )
}

export default injectSheet(styles)(GenResults)
