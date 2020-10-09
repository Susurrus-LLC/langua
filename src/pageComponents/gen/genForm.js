import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import Form from '../../components/form'
import Button from '../../components/button'
import Control from '../../components/control'
import ControlSide from '../../componnets/control/side'
import ControlPiece from '../../components/control/piece'

import sharedStyles from '../../components/form/sharedForm.module.sass'

import { vars } from '../../data/gen'

const GenForm = () => {
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
          onCLick={change}
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

  return <Form name='gen-form' />
}

GenForm.propTypes = {
  styles: PropTypes.string
}

export default GenForm
