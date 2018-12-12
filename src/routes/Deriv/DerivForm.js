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

const DerivForm = props => {
  const filePicker = React.createRef()

  const invokeFilePicker = e => {
    e.preventDefault()
    filePicker.current.value = ''
    filePicker.current.click()
  }

  return (
    <Form>
      <Control addedClasses={props.classes.part}>
        <ControlSide side='left'>
          <ControlPiece>
            <Button type='submit' ver='neutral' onClick={props.Derive}>
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
              className={props.styles.wordsInput}
              value={props.data.words}
              onChange={props.change}
            />
          </ControlPiece>
          <ControlPiece>
            <label htmlFor='type'>output type:</label>
            <select
              id='type'
              name='type'
              value={props.data.type}
              onChange={props.change}
            >
              <option value='any'>any base, any derivation</option>
              <option value='single base'>single base</option>
              <option value='single derivation'>single derivation</option>
            </select>
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

DerivForm.propTypes = {
  classes: PropTypes.object,
  styles: PropTypes.object,
  data: PropTypes.shape({
    words: PropTypes.number.isRequired,
    type: PropTypes.oneOf(['any', 'single base', 'single derivation'])
      .isRequired
  }).isRequired,
  derive: PropTypes.func.isRequired,
  change: PropTypes.func.isRequired
}

export default injectSheet(sharedFormStyles)(DerivForm)
