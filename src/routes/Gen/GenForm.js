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

import { vars } from '../../data/gen'

const GenForm = props => {
  const filePicker = React.createRef()

  const selectOptions = vars.map((variab, index) => (
    <option key={index} value={variab}>
      {variab}
    </option>
  ))

  const subpatternRows = props.data.subpatterns.map((subpattern, index) => (
    <div key={index} className={props.styles.subpsRow}>
      <select
        id={`v${index}`}
        name={`v${index}`}
        value={subpattern.selected}
        onChange={props.change}
        className={props.styles.select}
      >
        {selectOptions}
      </select>
      <input
        type='text'
        id={`p${index}`}
        name={`p${index}`}
        className={props.styles.subpatternInput}
        value={subpattern.subpattern}
        onChange={props.change}
      />
      <div className={props.styles.clearButton}>
        <Button
          id={`c${index}`}
          onClick={props.change}
          ver='danger'
          addClass='small'
          type='button'
        >
          Delete
        </Button>
      </div>
    </div>
  ))

  const addButton = () => {
    if (props.data.subpatterns.length < vars.length) {
      return (
        <div className={props.styles.addingRow}>
          <Button
            onClick={props.change}
            id='add'
            ver='success'
            addClass='small'
            type='button'
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
    <Form>
      <div className={classNames(props.styles.subpatterns, props.classes.part)}>
        <h5 className={props.classes.sectionTitle}>Subpatterns</h5>
        {subpatternRows}
        {addButton()}
      </div>
      <div className={classNames(props.styles.pattern, props.classes.part)}>
        <h5 className={props.classes.sectionTitle}>Pattern</h5>
        <input
          type='text'
          id='pattern'
          name='pattern'
          className={props.styles.patternInput}
          value={props.data.pattern}
          onChange={props.change}
        />
      </div>
      <Control addedClasses={props.classes.part}>
        <ControlSide side='left'>
          <ControlPiece>
            <Button
              id='generate'
              onClick={props.change}
              type='submit'
              ver='neutral'
            >
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
              className={props.styles.wordsInput}
              value={props.data.words}
              onChange={props.change}
            />
          </ControlPiece>
          <ControlPiece>
            <label>
              <input
                type='checkbox'
                id='newline'
                name='options'
                value='newline'
                checked={props.data.newline}
                onChange={props.change}
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
                checked={props.data.filterdupes}
                onChange={props.change}
              />{' '}
              filter duplicates
            </label>
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

GenForm.propTypes = {
  classes: PropTypes.object,
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

export default injectSheet(sharedFormStyles)(GenForm)
