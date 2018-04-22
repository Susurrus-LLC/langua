import React from 'react'
import injectSheet from 'react-jss'
import classNames from 'classnames'

import Button from '../../Button/Button'

// import * as service from '../service'
import { vars } from '../defaultData'
import styles from './styles'

const GenForm = (props) => {
  const classes = props.classes
  const data = props.data
  const changeSelect = props.changeSelect
  const changeSubpattern = props.changeSubpattern
  const clear = props.clear
  const add = props.add
  const changePattern = props.changePattern
  const changeWordNum = props.changeWordNum
  const changeNewline = props.changeNewline
  const changeDupes = props.changeDupes
  const generate = props.generate
  const save = props.save

  const selectOptions = vars.map((variab, index) => (
    <option
      key={index}
      value={variab}
    >
      {variab}
    </option>
  ))

  const subpatternRows = data.subpatterns.map((subpattern, index) => (
    <div
      key={index}
      className={classes.subpsRow}
    >
      <select
        id={`v${index}`}
        value={subpattern.selected}
        onChange={changeSelect}
      >
        {selectOptions}
      </select>
      <input
        type='text'
        id={`p${index}`}
        className={classes.subpatternInput}
        value={subpattern.subpattern}
        onChange={changeSubpattern}
      />
      <div className={classes.clearButton}>
        <Button
          id={`c${index}`}
          onClick={clear}
          ver='danger'
          addClass='small'
        >
          Clear
        </Button>
      </div>
    </div>
  ))

  const addButton = () => {
    console.log(data.subpatterns.length)
    console.log(vars.length)
    if (data.subpatterns.length < vars.length) {
      return (
        <div className={classes.addingRow}>
          <Button
            onClick={add}
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
    <form className={classes.form}>
      <div className={classNames(classes.subpatterns, classes.part)}>
        <h5 className={classes.sectionTitle}>Subpatterns</h5>
        {subpatternRows}
        {addButton()}
      </div>
      <div className={classNames(classes.pattern, classes.part)}>
        <h5 className={classes.sectionTitle}>Pattern</h5>
        <input
          type='text'
          id='pattern'
          className={classes.patternInput}
          value={data.pattern}
          onChange={changePattern}
        />
      </div>
      <div className={classNames(classes.control, classes.part)}>
        <div className={classes.controlLeft}>
          <div className={classes.controlPiece}>
            <Button
              onClick={generate}
              type='submit'
              ver='neutral'
            >
              Generate
            </Button>
          </div>
          <div className={classes.controlPiece}>
            <label htmlFor='words'>words:</label>
            <input
              type='number'
              id='words'
              min='1'
              max='9999'
              className={classes.wordsInput}
              value={data.words}
              onChange={changeWordNum}
            />
          </div>
          <div className={classes.controlPiece}>
            <label>
              <input
                type='checkbox'
                id='newline'
                name='options'
                value='newline'
                checked={data.newline}
                onChange={changeNewline}
              /> new line each
            </label>
          </div>
          <div className={classes.controlPiece}>
            <label>
              <input
                type='checkbox'
                id='filterdupes'
                name='options'
                value='filterdupes'
                checked={data.filterdupes}
                onChange={changeDupes}
              /> filter duplicates
            </label>
          </div>
        </div>
        <div className={classes.controlRight}>
          <div className={classes.controlPiece}>
            <Button
              ver='success'
              onClick={save}
            >
              Save
            </Button>
          </div>
          <div className={classes.controlPiece}>
            <Button type='file'>
              Open
            </Button>
          </div>
        </div>
      </div>
    </form>
  )
}

export default injectSheet(styles)(GenForm)
