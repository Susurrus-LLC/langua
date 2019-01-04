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

const FrequenForm = props => {
  const filePicker = React.createRef()

  const invokeFilePicker = e => {
    e.preventDefault()
    filePicker.current.value = ''
    filePicker.current.click()
  }

  return (
    <Form>
      <div className={classNames(props.styles.corpus, props.classes.part)}>
        <h5 className={props.classes.sectionTitle}>Text Corpus</h5>
        <textarea
          className={classNames(props.styles.corpusInput, props.styles.input)}
          id='corpus'
          name='corpus'
          value={props.state.corpus}
          onChange={props.onChangeInput}
          aria-label='Text corpus'
        />
      </div>
      <div className={classNames(props.styles.consonants, props.classes.part)}>
        <h5 className={props.classes.sectionTitle}>Consonants</h5>
        <input
          className={props.styles.input}
          id='consonants'
          name='consonants'
          type='text'
          value={props.state.consonants}
          onChange={props.onChangeInput}
          aria-label='Consonants'
        />
      </div>
      <div className={classNames(props.styles.vowels, props.classes.part)}>
        <h5 className={props.classes.sectionTitle}>Vowels</h5>
        <input
          className={props.styles.input}
          id='vowels'
          name='vowels'
          type='text'
          value={props.state.vowels}
          onChange={props.onChangeInput}
          aria-label='Vowels'
        />
      </div>
      <Control addedClasses={props.classes.part}>
        <ControlSide side='left'>
          <ControlPiece>
            <Button type='submit' ver='neutral' onClick={props.onAnalyze}>
              Analyze
            </Button>
          </ControlPiece>
          <ControlPiece>
            <label htmlFor='distinguishCase'>
              <input
                type='checkbox'
                id='distinguishCase'
                name='distinguishCase'
                value='distinguishCase'
                checked={props.state.distinguishCase}
                onChange={props.onChangeInput}
              />{' '}
              distinguish upper and lower case
            </label>
          </ControlPiece>
        </ControlSide>
        <ControlSide side='right'>
          <ControlPiece>
            <Button
              id='save'
              ver='success'
              onClick={props.onChangeInput}
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
              onChange={props.onChangeInput}
            />
          </ControlPiece>
        </ControlSide>
      </Control>
    </Form>
  )
}

FrequenForm.propTypes = {
  classes: PropTypes.object,
  styles: PropTypes.object,
  state: PropTypes.object.isRequired,
  onChangeInput: PropTypes.func.isRequired,
  onAnalyze: PropTypes.func.isRequired
}

export default injectSheet(sharedFormStyles)(FrequenForm)
