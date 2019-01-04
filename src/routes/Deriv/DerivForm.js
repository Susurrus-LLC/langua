import React from 'react'
import injectSheet from 'react-jss'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import Button from '../../components/Button'
import Form from '../../components/Form'
import sharedFormStyles from '../../components/Form/sharedFormStyles'
import Control from '../../components/Control'
import ControlSide from '../../components/Control/Side'
import ControlPiece from '../../components/Control/Piece'

const DerivForm = props => {
  const filePicker = React.createRef()

  const lexemeRows = props.data.lexemes.map((lexeme, index) => (
    <div key={index} className={props.styles.derivRow}>
      <input
        type='text'
        id={`lw${index}`}
        name={`lw${index}`}
        className={props.styles.lexemeInput}
        value={lexeme.lexeme}
        onChange={props.change}
        aria-label={`Word for lexeme ${index}`}
      />
      <input
        type='text'
        id={`ld${index}`}
        name={`ld${index}`}
        className={props.styles.lexemeDefInput}
        value={lexeme.definition}
        onChange={props.change}
        aria-label={`Gloss for lexeme ${index}`}
      />
      <div className={props.styles.clearButton}>
        <Button
          id={`lc${index}`}
          onClick={props.change}
          ver='danger'
          addClass='small'
          type='button'
          aria-label={`Delete lexeme ${index}`}
        >
          Delete
        </Button>
      </div>
    </div>
  ))

  const derivationRows = props.data.derivations.map((derivation, index) => (
    <div key={index} className={props.styles.derivRow}>
      <input
        type='text'
        id={`da${index}`}
        name={`da${index}`}
        className={props.styles.derivationInput}
        value={derivation.derivation}
        onChange={props.change}
        aria-label={`Affix ${index}`}
      />
      <input
        type='text'
        id={`dl${index}`}
        name={`dl${index}`}
        className={props.styles.derivationGlossInput}
        value={derivation.gloss}
        onChange={props.change}
        aria-label={`Gloss for affix ${index}`}
      />
      <input
        type='text'
        id={`dd${index}`}
        name={`dd${index}`}
        className={props.styles.derivationDefInput}
        value={derivation.definition}
        onChange={props.change}
        aria-label={`Definition for affix ${index}`}
      />
      <div className={props.styles.clearButton}>
        <Button
          id={`dc${index}`}
          onClick={props.change}
          ver='danger'
          addClass='small'
          type='button'
          aria-label={`Delete lexeme ${index}`}
        >
          Delete
        </Button>
      </div>
    </div>
  ))

  const addButton = which => {
    return (
      <div className={props.styles.addingRow}>
        <Button
          onClick={props.change}
          id={`${which}Add`}
          ver='success'
          addClass='small'
          type='button'
        >
          Add
        </Button>
      </div>
    )
  }

  const invokeFilePicker = e => {
    e.preventDefault()
    filePicker.current.value = ''
    filePicker.current.click()
  }

  return (
    <Form>
      <div className={classNames(props.styles.lexemes, props.classes.part)}>
        <h5 className={props.classes.sectionTitle}>Lexemes</h5>
        <div className={props.styles.derivRow}>
          <h6
            className={classNames(
              props.styles.columnLabel,
              props.styles.wordLabel
            )}
          >
            Word
          </h6>
          <h6
            className={classNames(
              props.styles.columnLabel,
              props.styles.definitionLabel
            )}
          >
            Gloss
          </h6>
        </div>
        {lexemeRows}
        {addButton('lex')}
      </div>
      <div className={classNames(props.styles.derivations, props.classes.part)}>
        <h5 className={props.classes.sectionTitle}>Derivational Affixes</h5>
        <div className={props.styles.derivRow}>
          <h6
            className={classNames(
              props.styles.columnLabel,
              props.styles.affixLabel
            )}
          >
            Affix
          </h6>
          <h6
            className={classNames(
              props.styles.columnLabel,
              props.styles.glossLabel
            )}
          >
            Gloss
          </h6>
          <h6
            className={classNames(
              props.styles.columnLabel,
              props.styles.definitionLabel
            )}
          >
            Definition
          </h6>
        </div>
        {derivationRows}
        {addButton('der')}
      </div>
      <Control addedClasses={props.classes.part}>
        <ControlSide side='left'>
          <ControlPiece>
            <Button type='submit' ver='neutral' onClick={props.change}>
              Derive
            </Button>
          </ControlPiece>
          <ControlPiece>
            <label htmlFor='words'>number of words to derive:</label>
            <input
              type='number'
              id='words'
              name='words'
              min='1'
              max='9999'
              className={props.styles.wordsInput}
              value={props.data.words}
              onChange={props.change}
            />
          </ControlPiece>
          <ControlPiece>
            <label htmlFor='type'>output type:</label>
            <select
              id='type'
              name='type'
              value={props.data.type}
              onChange={props.change}
            >
              <option value='any'>any base, any derivation</option>
              <option value='single base'>single base</option>
              <option value='single derivation'>single derivation</option>
            </select>
          </ControlPiece>
        </ControlSide>
        <ControlSide side='right'>
          <ControlPiece>
            <Button
              id='save'
              ver='success'
              onClick={props.change}
              type='button'
            >
              Save
            </Button>
          </ControlPiece>
          <ControlPiece>
            <Button id='open' onClick={invokeFilePicker} type='button'>
              Open
            </Button>
            <input
              id='file'
              name='file'
              className={props.classes.hidden}
              type='file'
              ref={filePicker}
              onChange={props.change}
            />
          </ControlPiece>
        </ControlSide>
      </Control>
    </Form>
  )
}

DerivForm.propTypes = {
  classes: PropTypes.object,
  styles: PropTypes.object,
  data: PropTypes.shape({
    words: PropTypes.number.isRequired,
    type: PropTypes.oneOf(['any', 'single base', 'single derivation'])
      .isRequired,
    lexemes: PropTypes.arrayOf(
      PropTypes.shape({
        lexeme: PropTypes.string.isRequired,
        definition: PropTypes.string.isRequired
      })
    ),
    derivations: PropTypes.arrayOf(
      PropTypes.shape({
        derivation: PropTypes.string.isRequired,
        gloss: PropTypes.string.isRequired,
        definition: PropTypes.string.isRequired
      })
    )
  }).isRequired,
  change: PropTypes.func.isRequired
}

export default injectSheet(sharedFormStyles)(DerivForm)
