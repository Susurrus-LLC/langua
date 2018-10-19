import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import Button from '../Button/Button'

const FrequenForm = (props) => (
  <form className={props.classes.form}>
    <h5 className={props.classes.sectionTitle}>Text Corpus</h5>
    <textarea
      className={classnames(props.classes.corpus, props.classes.input)}
      id='corpus'
      name='corpus'
      value={props.state.corpus}
      onChange={props.onChangeInput}
    />
    <h5 className={props.classes.sectionTitle}>Consonants</h5>
    <input
      className={props.classes.input}
      id='consonants'
      name='consonants'
      type='text'
      value={props.state.consonants}
      onChange={props.onChangeInput}
    />
    <h5 className={props.classes.sectionTitle}>Vowels</h5>
    <input
      className={props.classes.input}
      id='vowels'
      name='vowels'
      type='text'
      value={props.state.vowels}
      onChange={props.onChangeInput}
    />
    <div className={props.classes.controls}>
      <Button
        type='submit'
        ver='neutral'
        onClick={props.onAnalyze}
      >
        Analyze
      </Button>
    </div>
  </form>
)

FrequenForm.propTypes = {
  classes: PropTypes.object,
  state: PropTypes.object.isRequired,
  onChangeInput: PropTypes.func.isRequired,
  onAnalyze: PropTypes.func.isRequired
}

export default FrequenForm
