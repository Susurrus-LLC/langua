import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import Form from '../../components/form'
import Button from '../../components/button'
import Control from '../../components/control'
import ControlSide from '../../components/control/side'
import ControlPiece from '../../components/control/piece'

import sharedStyles from '../../components/form/sharedForm.module.sass'

const FrequenForm = ({
  styles,
  corpus,
  consonants,
  vowels,
  distinguishCase,
  onChangeInput,
  onAnalyze
}) => {
  const filePicker = React.createRef()

  const invokeFilePicker = e => {
    e.preventDefault()
    filePicker.current.value = ''
    filePicker.current.click()
  }

  return (
    <Form name='frequen-form'>
      <div className={classNames(styles.corpus, sharedStyles.part)}>
        <h5 className={sharedStyles.sectionTitle}>Text Corpus</h5>
        <textarea
          className={classNames(styles.corpusInput, styles.input)}
          id='corpus'
          name='corpus'
          value={corpus}
          onChange={onChangeInput}
          aria-label='Text corpus'
        />
      </div>
      <div className={classNames(styles.consonants, sharedStyles.part)}>
        <h5 className={sharedStyles.sectionTitle}>Consonants</h5>
        <input
          className={styles.input}
          id='consonants'
          name='consonants'
          type='text'
          value={consonants}
          onChange={onChangeInput}
          aria-label='Consonants'
        />
      </div>
      <div className={classNames(styles.vowels, sharedStyles.part)}>
        <h5 className={sharedStyles.sectionTitle}>Vowels</h5>
        <input
          className={styles.input}
          id='vowels'
          name='vowels'
          type='text'
          value={vowels}
          onChange={onChangeInput}
          aria-label='Vowels'
        />
      </div>
      <Control addedClasses={sharedStyles.part}>
        <ControlSide side='left'>
          <ControlPiece>
            <Button type='submit' ver='neutral' onClick={onAnalyze}>
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
                checked={distinguishCase}
                onChange={onChangeInput}
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
              onClick={onChangeInput}
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
              className={sharedStyles.hidden}
              type='file'
              ref={filePicker}
              onChange={onChangeInput}
            />
          </ControlPiece>
        </ControlSide>
      </Control>
    </Form>
  )
}

FrequenForm.propTypes = {
  styles: PropTypes.object,
  corpus: PropTypes.string.isRequired,
  consonants: PropTypes.string.isRequired,
  vowels: PropTypes.string.isRequired,
  distinguishCase: PropTypes.bool.isRequired,
  onChangeInput: PropTypes.func.isRequired,
  onAnalyze: PropTypes.func.isRequired
}

export default FrequenForm
