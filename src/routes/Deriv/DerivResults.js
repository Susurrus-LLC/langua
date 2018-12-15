import React from 'react'
import injectSheet from 'react-jss'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import Results from '../../components/Results'
import sharedResultsStyles from '../../components/Results/sharedResultsStyles'

class DerivResults extends React.Component {
  constructor (props) {
    super(props)
    this.outputBox = this.outputBox.bind(this)
    this.output = this.output.bind(this)
    this.statsText = this.statsText.bind(this)
    this.hoverAffix = this.hoverAffix.bind(this)
    this.unhoverAffix = this.unhoverAffix.bind(this)
    this.state = {
      hovered: null
    }
  }

  outputBox (which, item, styles, classes, i) {
    if (which === 'affix') {
      return (
        <div className={styles.outputBox}>
          <p className={styles.term}>{item.derivation}</p>
          <p
            className={classNames(styles.affixGloss, styles.gloss)}
            onMouseOver={() => this.hoverAffix(i)}
            onMouseOut={() => this.unhoverAffix(i)}
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
          <p className={classNames(classes.error, styles.gloss)}>{item}</p>
        </div>
      )
    } else {
      return null
    }
  }

  output (styles, classes) {
    if (this.props.results) {
      if (this.props.results.newWords.length) {
        return this.props.results.newWords.map((newWord, i) => (
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
                  ? this.outputBox('affix', newWord.prefix, styles, classes, i)
                  : null}
                {newWord.lexeme
                  ? this.outputBox('lexeme', newWord.lexeme, styles, classes)
                  : null}
                {newWord.suffix
                  ? this.outputBox('affix', newWord.suffix, styles, classes, i)
                  : null}
                {newWord.error
                  ? this.outputBox('error', newWord.error, styles, classes)
                  : null}
              </div>
              <p
                className={classNames(
                  styles.affixDef,
                  // Dynamically assign the hovered class if hovered
                  i === this.state.hovered ? styles.hoveredDef : null
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

  statsText () {
    let words = 0
    let possible = 0
    if (this.props.results) {
      words = this.props.results.newWords.length
      possible = this.props.results.possible
    }
    return `words: ${words}; maximum derivations possible: ${possible}`
  }

  hoverAffix (i) {
    this.setState(prevState => ({
      hovered: i
    }))
  }

  unhoverAffix (i) {
    this.setState(prevState => ({
      hovered: null
    }))
  }

  render () {
    return (
      <Results>
        <div className={this.props.styles.output}>
          {this.output(this.props.styles, this.props.classes)}
        </div>
        <div className={this.props.classes.stats}>
          <p className={this.props.classes.statsText}>{this.statsText()}</p>
        </div>
      </Results>
    )
  }
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
