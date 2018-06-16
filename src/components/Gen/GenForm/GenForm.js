import React from 'react'
import injectSheet from 'react-jss'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import Button from '../../Button/Button'

// import * as service from '../service'
import { vars } from '../defaultData'
import styles from './styles'

const GenForm = (props) => {
  const selectOptions = vars.map((variab, index) => (
    <option
      key={index}
      value={variab}
    >
      {variab}
    </option>
  ))

  const subpatternRows = props.data.subpatterns.map((subpattern, index) => (
    <div
      key={index}
      className={props.classes.subpsRow}
    >
      <select
        id={`v${index}`}
        value={subpattern.selected}
        onChange={props.changeSelect}
      >
        {selectOptions}
      </select>
      <input
        type='text'
        id={`p${index}`}
        className={props.classes.subpatternInput}
        value={subpattern.subpattern}
        onChange={props.changeSubpattern}
      />
      <div className={props.classes.clearButton}>
        <Button
          id={`c${index}`}
          onClick={props.clear}
          ver='danger'
          addClass='small'
        >
          Clear
        </Button>
      </div>
    </div>
  ))

  const addButton = () => {
    if (props.data.subpatterns.length < vars.length) {
      return (
        <div className={props.classes.addingRow}>
          <Button
            onClick={props.add}
            ver='success'
            addClass='small'
          >
            Add
          </Button>
        </div>
      )
    }
  }

  return (
    <form className={props.classes.form}>
      <div className={classNames(props.classes.subpatterns, props.classes.part)}>
        <h5 className={props.classes.sectionTitle}>Subpatterns</h5>
        {subpatternRows}
        {addButton()}
      </div>
      <div className={classNames(props.classes.pattern, props.classes.part)}>
        <h5 className={props.classes.sectionTitle}>Pattern</h5>
        <input
          type='text'
          id='pattern'
          className={props.classes.patternInput}
          value={props.data.pattern}
          onChange={props.changePattern}
        />
      </div>
      <div className={classNames(props.classes.control, props.classes.part)}>
        <div className={props.classes.controlLeft}>
          <div className={props.classes.controlPiece}>
            <Button
              onClick={props.generate}
              type='submit'
              ver='neutral'
            >
              Generate
            </Button>
          </div>
          <div className={props.classes.controlPiece}>
            <label htmlFor='words'>words:</label>
            <input
              type='number'
              id='words'
              min='1'
              max='9999'
              className={props.classes.wordsInput}
              value={props.data.words}
              onChange={props.changeWordNum}
            />
          </div>
          <div className={props.classes.controlPiece}>
            <label>
              <input
                type='checkbox'
                id='newline'
                name='options'
                value='newline'
                checked={props.data.newline}
                onChange={props.changeNewline}
              /> new line each
            </label>
          </div>
          <div className={props.classes.controlPiece}>
            <label>
              <input
                type='checkbox'
                id='filterdupes'
                name='options'
                value='filterdupes'
                checked={props.data.filterdupes}
                onChange={props.changeDupes}
              /> filter duplicates
            </label>
          </div>
        </div>
        <div className={props.classes.controlRight}>
          <div className={props.classes.controlPiece}>
            <Button
              ver='success'
              onClick={props.save}
            >
              Save
            </Button>
          </div>
          <div className={props.classes.controlPiece}>
            <Button
              type='file'
              onClick={props.open}
            >
              Open
            </Button>
          </div>
        </div>
      </div>
    </form>
  )
}

GenForm.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
  changeSelect: PropTypes.func.isRequired,
  changeSubpattern: PropTypes.func.isRequired,
  clear: PropTypes.func.isRequired,
  add: PropTypes.func.isRequired,
  changePattern: PropTypes.func.isRequired,
  changeWordNum: PropTypes.func.isRequired,
  changeNewline: PropTypes.func.isRequired,
  changeDupes: PropTypes.func.isRequired,
  generate: PropTypes.func.isRequired,
  save: PropTypes.func.isRequired,
  open: PropTypes.func.isRequired
}

export default injectSheet(styles)(GenForm)
