import React from 'react'
import injectSheet from 'react-jss'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import Button from '../Button/Button'
import Form from '../Form/Form'
import Control from '../Controls/Control'
import ControlSide from '../Controls/ControlSide'
import ControlPiece from '../Controls/ControlPiece'
import sharedFormStyles from '../Form/sharedFormStyles'

const FrequenForm = props => (
  <Form>
    <div className={classNames(props.styles.corpus, props.classes.part)}>
      <h5 className={props.classes.sectionTitle}>Text Corpus</h5>
      <textarea
        className={classNames(props.styles.corpusInput, props.styles.input)}
        id='corpus'
        name='corpus'
        value={props.state.corpus}
        onChange={props.onChangeInput}
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
          <label>
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
      <ControlSide side='right' />
    </Control>
  </Form>
)

FrequenForm.propTypes = {
  classes: PropTypes.object,
  styles: PropTypes.object,
  state: PropTypes.object.isRequired,
  onChangeInput: PropTypes.func.isRequired,
  onAnalyze: PropTypes.func.isRequired
}

export default injectSheet(sharedFormStyles)(FrequenForm)
