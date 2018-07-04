// @flow
import React from 'react'
import injectSheet from 'react-jss'
import type Classes from 'react-jss'

import styles from './styles'

declare type Props = {
  classes: Classes,
  newLine: boolean,
  filterDupes: boolean,
  status: Array<string>,
  results: Array<string>,
  stats: {
    words: number,
    maxWords: number,
    filtered: number,
    remaining: number
  }
}

const GenResults = (props: Props) => {
  const words = props.stats.words.toLocaleString()
  const maxWords = props.stats.maxWords.toLocaleString()
  const filteredWords = props.stats.filtered.toLocaleString()
  const remainingWords = props.stats.remaining.toLocaleString()

  const outputText = (classes: Classes): React.Node => {
    const filterResults = props.filterDupes ? Array.from(new Set(props.results)) : props.results
    const joinedResults = Array.prototype.join.call(filterResults, `${props.newLine ? '\n' : ' '}`).trim()

    return (
      <p className={classes.outText}>
        {joinedResults}
      </p>
    )
  }

  const errorText = (classes: Classes): React.Node => {
    if (props.status.includes('ok')) {
      return null
    } else {
      return props.status.map((error, index) => (
        <p
          key={index}
          className={classes.error}
        >
          {error}
        </p>
      ))
    }
  }

  const statsText = (): string => {
    if (props.filterDupes) {
      return `words: ${remainingWords} (${filteredWords} filtered out); maximum different words: ${maxWords}`
    } else {
      return `words: ${words}; maximum different words: ${maxWords}`
    }
  }

  return (
    <div className={props.classes.results}>
      <div className={props.classes.output}>
        {errorText(props.classes)}
        {outputText(props.classes)}
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
