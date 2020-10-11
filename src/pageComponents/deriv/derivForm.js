import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import Form from '../../components/form'
import Button from '../../components/button'
import Control from '../../components/control'
import ControlSide from '../../components/control/side'
import ControlPiece from '../../components/control/piece'

import sharedStyles from '../../components/form/sharedForm.module.sass'

const DerivForm = ({ styles, data, change }) => {
  const filePicker = React.createRef()

  const lexemeRows = data.lexemes.map((lexeme, index) => (
    <div key={index} className={styles.derivRow}>
      <input
        type='text'
        id={`lw${index}`}
        name={`lw${index}`}
        className={styles.lexemeInput}
        value={lexeme.lexeme}
        onChange={change}
        aria-label={`Word for lexeme ${index}`}
      />
      <input
        type='text'
        id={`ld${index}`}
        name={`ld${index}`}
        className={styles.lexemeDefInput}
        value={lexeme.definition}
        onChange={change}
        aria-label={`Gloss for lexeme ${index}`}
      />
      <div className={styles.clearButton}>
        <Button
          id={`lc${index}`}
          onClick={change}
          ver='danger'
          small
          type='button'
          aria-label={`Delete lexeme ${index}`}
        >
          Delete
        </Button>
      </div>
    </div>
  ))

  const derivationRows = data.derivations.map((derivation, index) => (
    <div key={index} className={styles.derivRow}>
      <input
        type='text'
        id={`da${index}`}
        name={`da${index}`}
        className={styles.derivationInput}
        value={derivation.derivation}
        onChange={change}
        aria-label={`Affix ${index}`}
      />
      <input
        type='text'
        id={`dl${index}`}
        name={`dl${index}`}
        className={styles.derivationGlossInput}
        value={derivation.gloss}
        onChange={change}
        aria-label={`Gloss for affix ${index}`}
      />
      <input
        type='text'
        id={`dd${index}`}
        name={`dd${index}`}
        className={styles.derivationDefInput}
        value={derivation.definition}
        onChange={change}
        aria-label={`Definition for affix ${index}`}
      />
      <div className={styles.clearButton}>
        <Button
          id={`dc${index}`}
          onClick={change}
          ver='danger'
          small
          type='button'
          aria-label={`Delete lexeme ${index}`}
        >
          Delete
        </Button>
      </div>
    </div>
  ))

  const addButton = which => (
    <div className={styles.addingRow}>
      <Button
        onClick={change}
        id={`${which}Add`}
        ver='success'
        small
        type='button'
      >
        Add
      </Button>
    </div>
  )

  const invokeFilePicker = e => {
    e.preventDefault()
    filePicker.current.value = ''
    filePicker.current.click()
  }

  return (
    <Form name='deriv-form'>
      <div className={classNames(styles.lexemes, sharedStyles.part)}>
        <h5 className={sharedStyles.sectionTitle}>Lexemes</h5>
        <div className={styles.derivRow}>
          <h6 className={classNames(styles.columnLabel, styles.wordLabel)}>
            Word
          </h6>
          <h6
            className={classNames(styles.columnLabel, styles.definitionLabel)}
          >
            Gloss
          </h6>
        </div>
        {lexemeRows}
        {addButton('lex')}
      </div>
      <div className={classNames(styles.derivations, sharedStyles.part)}>
        <h5 className={sharedStyles.sectionTitle}>Derivational Affixes</h5>
        <div className={styles.derivRow}>
          <h6 className={classNames(styles.columnLabel, styles.affixLabel)}>
            Affix
          </h6>
          <h6 className={classNames(styles.columnLabel, styles.glossLabel)}>
            Gloss
          </h6>
          <h6
            className={classNames(styles.columnLabel, styles.definitionLabel)}
          >
            Definition
          </h6>
        </div>
        {derivationRows}
        {addButton('der')}
      </div>
      <Control addedClasses={sharedStyles.part}>
        <ControlSide side='left'>
          <ControlPiece>
            <Button type='submit' ver='neutral' onClick={change}>
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
              className={styles.wordsInput}
              value={data.words}
              onChange={change}
            />
          </ControlPiece>
          <ControlPiece>
            <label htmlFor='type'>output type:</label>
            <select id='type' name='type' value={data.type} onChange={change}>
              <option value='any'>any base, any derivation</option>
              <option value='single base'>single base</option>
              <option value='single derivation'>single derivation</option>
            </select>
          </ControlPiece>
        </ControlSide>
        <ControlSide side='right'>
          <ControlPiece>
            <Button id='save' ver='success' onClick={change} type='button'>
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
              className={sharedStyles.hidden}
              type='file'
              ref={filePicker}
              onChange={change}
            />
          </ControlPiece>
        </ControlSide>
      </Control>
    </Form>
  )
}

DerivForm.propTypes = {
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

export default DerivForm
