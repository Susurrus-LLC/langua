import React from 'react'
import injectSheet from 'react-jss'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import Results from '../../components/Results'
import sharedResultsStyles from '../../components/Results/sharedResultsStyles'

const DerivResults = props => {
  const outputBox = (which, item, styles, classes) => {
    if (which === 'affix') {
      return (
        <div className={styles.outputBox}>
          <p className={styles.term}>{item.derivation}</p>
          <p className={classNames(styles.affixGloss, styles.gloss)}>
            {item.gloss}
          </p>
        </div>
      )
    } else if (which === 'lexeme') {
      return (
        <div className={styles.outputBox}>
          <p className={styles.term}>{item.lexeme}</p>
          <p className={classNames(styles.lexGloss, styles.gloss)}>
            {item.definition}
          </p>
        </div>
      )
    } else if (which === 'error') {
      return (
        <div className={styles.outputBox}>
          <p className={classNames(classes.error, styles.gloss)}>{item}</p>
        </div>
      )
    } else {
      return null
    }
  }

  const output = (styles, classes) => {
    if (props.results) {
      if (props.results.newWords.length) {
        return props.results.newWords.map((newWord, i) => (
          <div
            key={i}
            className={classNames(styles.derivRow, styles.outputRow)}
          >
            <div className={classNames(styles.outputBox, styles.rowNumber)}>
              {i + 1}.
            </div>
            <div>
              <div className={classNames(styles.derivRow, styles.outputRow)}>
                {newWord.prefix
                  ? outputBox('affix', newWord.prefix, styles, classes)
                  : null}
                {newWord.lexeme
                  ? outputBox('lexeme', newWord.lexeme, styles, classes)
                  : null}
                {newWord.suffix
                  ? outputBox('affix', newWord.suffix, styles, classes)
                  : null}
                {newWord.error
                  ? outputBox('error', newWord.error, styles, classes)
                  : null}
              </div>
              <p className={styles.affixDef}>
                {newWord.prefix
                  ? newWord.prefix.definition
                  : newWord.suffix
                    ? newWord.suffix.definition
                    : ''}
              </p>
            </div>
          </div>
        ))
      }
    }
    return null
  }

  const statsText = () => {
    let words = 0
    let possible = 0
    if (props.results) {
      words = props.results.newWords.length
      possible = props.results.possible
    }
    return `words: ${words}; maximum derivations possible: ${possible}`
  }
  return (
    <Results>
      <div className={props.styles.output}>
        {output(props.styles, props.classes)}
      </div>
      <div className={props.classes.stats}>
        <p className={props.classes.statsText}>{statsText()}</p>
      </div>
    </Results>
  )
}

DerivResults.propTypes = {
  classes: PropTypes.object,
  styles: PropTypes.object,
  results: PropTypes.shape({
    newWords: PropTypes.arrayOf(
      PropTypes.shape({
        lexeme: PropTypes.shape({
          lexeme: PropTypes.string.isRequired,
          definition: PropTypes.string.isRequired
        }).isRequired,
        prefix: PropTypes.shape({
          derivation: PropTypes.string.isRequired,
          gloss: PropTypes.string.isRequired,
          definition: PropTypes.string.isRequired
        }),
        suffix: PropTypes.shape({
          derivation: PropTypes.string.isRequired,
          gloss: PropTypes.string.isRequired,
          definition: PropTypes.string.isRequired
        }),
        error: PropTypes.string
      })
    ),
    possible: PropTypes.number
  })
}

export default injectSheet(sharedResultsStyles)(DerivResults)
