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

const MorphForm = props => {
  const filePicker = React.createRef()

  const join = data => data.join('\n')

  const invokeFilePicker = e => {
    e.preventDefault()
    filePicker.current.value = ''
    filePicker.current.click()
  }

  return (
    <Form>
      <div className={props.styles.section}>
        <div
          className={classNames(
            props.styles.categories,
            props.styles.inputSection,
            props.classes.part
          )}
        >
          <h5 className={props.classes.sectionTitle}>Categories</h5>
          <div className={props.styles.container}>
            <textarea
              id='categories'
              name='categories'
              className={classNames(
                props.styles.categoriesInput,
                props.styles.dataInput
              )}
              value={join(props.data.categories)}
              onChange={props.change}
              aria-label='Categories'
            />
            <div className={props.styles.textAreaSpacer}>
              {join(props.data.categories)}
              &nbsp;
            </div>
          </div>
        </div>
        <div
          className={classNames(
            props.styles.rewriteRules,
            props.styles.inputSection,
            props.classes.part
          )}
        >
          <h5 className={props.classes.sectionTitle}>Rewrite Rules</h5>
          <div className={props.styles.container}>
            <textarea
              id='rewriteRules'
              name='rewriteRules'
              className={classNames(
                props.styles.rewriteRulesInput,
                props.styles.dataInput
              )}
              value={join(props.data.rewriteRules)}
              onChange={props.change}
              aria-label='Rewrite rules'
            />
            <div className={props.styles.textAreaSpacer}>
              {join(props.data.rewriteRules)}
              &nbsp;
            </div>
          </div>
        </div>
        <div
          className={classNames(
            props.styles.soundChanges,
            props.styles.inputSection,
            props.classes.part
          )}
        >
          <h5 className={props.classes.sectionTitle}>Sound Changes</h5>
          <div className={props.styles.container}>
            <textarea
              id='soundChanges'
              name='soundChanges'
              className={classNames(
                props.styles.soundChangesInput,
                props.styles.dataInput
              )}
              value={join(props.data.soundChanges)}
              onChange={props.change}
              aria-label='Sound Changes'
            />
            <div className={props.styles.textAreaSpacer}>
              {join(props.data.soundChanges)}
              &nbsp;
            </div>
          </div>
        </div>
        <div
          className={classNames(
            props.styles.lexicon,
            props.styles.inputSection,
            props.classes.part
          )}
        >
          <h5 className={props.classes.sectionTitle}>Lexicon</h5>
          <div className={props.styles.container}>
            <textarea
              id='lexicon'
              name='lexicon'
              className={classNames(
                props.styles.lexiconInput,
                props.styles.dataInput
              )}
              value={join(props.data.lexicon)}
              onChange={props.change}
              aria-label='Lexicon'
            />
            <div className={props.styles.textAreaSpacer}>
              {join(props.data.lexicon)}
              &nbsp;
            </div>
          </div>
        </div>
      </div>
      <Control addedClasses={props.classes.part}>
        <ControlSide side='left'>
          <ControlPiece>
            <Button type='submit' ver='neutral' onClick={props.morph}>
              Change
            </Button>
          </ControlPiece>
          <ControlPiece>
            <label htmlFor='outputFormat'>output format:</label>
            <select
              id='outputFormat'
              name='outputFormat'
              value={props.data.outputFormat}
              onChange={props.change}
            >
              <option value='oo'>output</option>
              <option value='io'>input &rarr; output</option>
              <option value='oi'>output &larr; input</option>
            </select>
          </ControlPiece>
          <ControlPiece>
            <div>
              <label>
                <input
                  type='checkbox'
                  id='showChanges'
                  name='options'
                  value='showChanges'
                  checked={props.data.showChanges}
                  onChange={props.check}
                />{' '}
                italicize changes
              </label>
              <br />
              <label>
                <input
                  type='checkbox'
                  id='showDiff'
                  name='options'
                  value='showDiff'
                  checked={props.data.showDiff}
                  onChange={props.check}
                />{' '}
                bold differences
              </label>
            </div>
            <div />
          </ControlPiece>
          <ControlPiece>
            <div>
              <label>
                <input
                  type='checkbox'
                  id='ruleReport'
                  name='options'
                  value='ruleReport'
                  checked={props.data.ruleReport}
                  onChange={props.check}
                />{' '}
                report applied rules
              </label>
              <br />
              <label>
                <input
                  type='checkbox'
                  id='rewriteOutput'
                  name='options'
                  value='rewriteOutput'
                  checked={props.data.rewriteOutput}
                  onChange={props.check}
                />{' '}
                rewrite on output
              </label>
            </div>
          </ControlPiece>
        </ControlSide>
        <ControlSide side='right'>
          <ControlPiece>
            <Button id='save' ver='success' onClick={props.save} type='button'>
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
              onChange={props.open}
            />
          </ControlPiece>
        </ControlSide>
      </Control>
    </Form>
  )
}

MorphForm.propTypes = {
  classes: PropTypes.object,
  styles: PropTypes.object,
  data: PropTypes.shape({
    categories: PropTypes.arrayOf(PropTypes.string).isRequired,
    rewriteRules: PropTypes.arrayOf(PropTypes.string).isRequired,
    soundChanges: PropTypes.arrayOf(PropTypes.string).isRequired,
    lexicon: PropTypes.arrayOf(PropTypes.string).isRequired,
    outputFormat: PropTypes.oneOf(['oo', 'io', 'oi']).isRequired,
    showDiff: PropTypes.bool.isRequired,
    showChanges: PropTypes.bool.isRequired,
    ruleReport: PropTypes.bool.isRequired,
    rewriteOutput: PropTypes.bool.isRequired
  }).isRequired,
  change: PropTypes.func.isRequired,
  morph: PropTypes.func.isRequired,
  check: PropTypes.func.isRequired,
  save: PropTypes.func.isRequired,
  open: PropTypes.func.isRequired
}

export default injectSheet(sharedFormStyles)(MorphForm)
