import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import Form from '../../components/form'
import Button from '../../components/button'
import Control from '../../components/control'
import ControlSide from '../../components/control/side'
import ControlPiece from '../../components/control/piece'

import sharedStyles from '../../components/form/sharedForm.module.sass'

import { vars } from '../../data/gen'

const GenForm = ({ styles, data, change }) => {
  const filePicker = React.createRef()

  const selectOptions = vars.map((variab, index) => (
    <option key={index} value={variab}>
      {variab}
    </option>
  ))

  const subpatternRows = data.subpatterns.map((subpattern, index) => (
    <div key={index} className={styles.subpsRow}>
      <select
        id={`v${index}`}
        name={`v${index}`}
        value={subpattern.selected}
        onChange={change}
        className={styles.select}
        aria-label={`Variable name for subpattern ${index}`}
      >
        {selectOptions}
      </select>
      <input
        type='text'
        id={`p${index}`}
        name={`p${index}`}
        className={styles.subpatternInput}
        value={subpattern.subpattern}
        onChange={change}
        aria-label={`Subpattern ${index}`}
      />
      <div className={styles.clearButton}>
        <Button
          id={`c${index}`}
          onClick={change}
          ver='danger'
          small
          type='button'
          aria-label={`Delete subpattern ${index}`}
        >
          Delete
        </Button>
      </div>
    </div>
  ))

  const addButton = () => {
    if (data.subpatterns.length < vars.length) {
      return (
        <div className={styles.addingRow}>
          <Button
            onClick={change}
            id='add'
            ver='success'
            small
            type='button'
            aria-label='Add a new subpattern'
          >
            Add
          </Button>
        </div>
      )
    }
  }

  const invokeFilePicker = e => {
    e.preventDefault()
    filePicker.current.value = ''
    filePicker.current.click()
  }

  return (
    <Form name='gen-form'>
      <div className={classNames(styles.subpatterns, sharedStyles.part)}>
        <h5 className={sharedStyles.sectionTitle}>Subpatterns</h5>
        {subpatternRows}
        {addButton()}
      </div>
      <div className={classNames(styles.pattern, sharedStyles.part)}>
        <h5 className={sharedStyles.sectionTitle}>Pattern</h5>
        <input
          type='text'
          id='pattern'
          name='pattern'
          className={styles.patternInput}
          value={data.pattern}
          onChange={change}
          aria-label='Pattern'
        />
      </div>
      <Control addedClasses={sharedStyles.part}>
        <ControlSide side='left'>
          <ControlPiece>
            <Button id='generate' onClick={change} type='submit' ver='neutral'>
              Generate
            </Button>
          </ControlPiece>
          <ControlPiece>
            <label htmlFor='words'>words:</label>
            <input
              type='number'
              id='words'
              name='words'
              min='1'
              max='9999'
              className={styles.wordsInput}
              value={data.words}
              onChange={change}
              aria-label='Number of words to generate'
            />
          </ControlPiece>
          <ControlPiece>
            <label>
              <input
                type='checkbox'
                id='newline'
                name='options'
                value='newline'
                checked={data.newline}
                onChange={change}
              />{' '}
              new line each
            </label>
          </ControlPiece>
          <ControlPiece>
            <label>
              <input
                type='checkbox'
                id='filterdupes'
                name='options'
                value='filterdupes'
                checked={data.filterdupes}
                onChange={change}
              />{' '}
              filter duplicates
            </label>
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

GenForm.propTypes = {
  styles: PropTypes.object,
  data: PropTypes.shape({
    subpatterns: PropTypes.arrayOf(
      PropTypes.shape({
        selected: PropTypes.string.isRequired,
        subpattern: PropTypes.string.isRequired
      })
    ).isRequired,
    pattern: PropTypes.string.isRequired,
    words: PropTypes.number.isRequired,
    newline: PropTypes.bool.isRequired,
    filterdupes: PropTypes.bool.isRequired
  }).isRequired,
  change: PropTypes.func.isRequired
}

export default GenForm
