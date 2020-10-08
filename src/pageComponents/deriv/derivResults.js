import React, { useState } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import Results from '../../components/results'

import sharedStyles from '../../components/results/sharedResults.module.sass'

const DerivResults = ({ styles, results }) => {
  const [hovered, setHovered] = useState(null)
  const outputBox = (which, item, i) => {
    if (which === 'affix') {
      return (
        <div className={styles.outputBox}>
          <p className={styles.term}>{item.derivation}</p>
          <p
            className={classNames(
              styles.affixGloss,
              styles.gloss,
              // Dynamically assign the hovered class if hovered
              i === hovered ? styles.hoveredGloss : null
            )}
            onMouseOver={() => hoverAffix(i)}
            onMouseOut={() => unhoverAffix(i)}
          >
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
          <p className={classNames(sharedStyles.error, styles.gloss)}>{item}</p>
        </div>
      )
    } else {
      return null
    }
  }

  const output = () => {
    if (results) {
      if (results.newWords.length) {
        return results.newWords.map((newWord, i) => (
          <div
            key={i}
            className={classNames(styles.derivRow, styles.outputRow)}
          >
            <div className={classNames(styles.outputBox, styles.rowNumber)}>
              {i + 1}.
            </div>
            <div>
              <div className={classNames(styles.derivRow, styles.outputRow)}>
                {newWord.prefix ? outputBox('affix', newWord.prefix, i) : null}
                {newWord.lexeme ? outputBox('lexeme', newWord.lexeme, i) : null}
                {newWord.suffix ? outputBox('affix', newWord.suffix, i) : null}
                {newWord.error ? outputBox('error', newWord.error, i) : null}
              </div>
              <p
                className={classNames(
                  styles.affixDef,
                  // Dynamically assign the hovered class if hovered
                  i === hovered ? styles.hoveredDef : null
                )}
              >
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

    if (results) {
      words = results.newWords.length.toLocaleString()
      possible = results.possible.toLocaleString()
    }

    return `words: ${words}; maximum derivations possible: ${possible}`
  }

  const hoverAffix = i => {
    setHovered(i)
  }

  const unhoverAffix = i => {
    setHovered(null)
  }

  return (
    <Results>
      <div className={styles.output}>{output()}</div>
      <div className={sharedStyles.stats}>
        <p className={sharedStyles.statsText}>{statsText()}</p>
      </div>
    </Results>
  )
}

DerivResults.propTypes = {
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

export default DerivResults
