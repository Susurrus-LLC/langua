import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import Form from '../../components/form'
import Button from '../../components/button'
import Control from '../../components/control'
import ControlSide from '../../components/control/side'
import ControlPiece from '../../components/control/piece'

import sharedStyles from '../../components/form/sharedForm.module.sass'

const MorphForm = ({ styles, data, change, morph, check, save, open }) => {
  const filePicker = React.createRef()

  const join = data => data.join('\n')

  const invokeFilePicker = e => {
    e.preventDefault()
    filePicker.current.value = ''
    filePicker.current.click()
  }

  return (
    <Form name='morph-form'>
      <div className={styles.section}>
        <div
          className={classNames(
            styles.categories,
            styles.inputSection,
            sharedStyles.part
          )}
        >
          <h5 className={sharedStyles.sectionTitle}>Categories</h5>
          <div className={styles.container}>
            <textarea
              id='categories'
              name='categories'
              className={classNames(styles.categoriesInput, styles.dataInput)}
              value={join(data.categories)}
              onChange={change}
              aria-label='Categories'
            />
            <div className={styles.textAreaSpacer}>
              {join(data.categories)}&nbsp;
            </div>
          </div>
        </div>
        <div
          className={classNames(
            styles.rewriteRules,
            styles.inputSection,
            sharedStyles.part
          )}
        >
          <h5 className={sharedStyles.sectionTitle}>Rewrite Rules</h5>
          <div className={styles.container}>
            <textarea
              id='rewriteRules'
              name='rewriteRules'
              className={classNames(styles.rewriteRulesInput, styles.dataInput)}
              value={join(data.rewriteRules)}
              onChange={change}
              aria-label='Rewrite rules'
            />
            <div className={styles.textAreaSpacer}>
              {join(data.rewriteRules)}&nbsp;
            </div>
          </div>
        </div>
        <div
          className={classNames(
            styles.soundChanges,
            styles.inputSection,
            sharedStyles.part
          )}
        >
          <h5 className={sharedStyles.sectionTitle}>Sound Changes</h5>
          <div className={styles.container}>
            <textarea
              id='soundChanges'
              name='soundChanges'
              className={classNames(styles.soundChangesInput, styles.dataInput)}
              value={join(data.soundChanges)}
              onChange={change}
              aria-label='Sound changes'
            />
            <div className={styles.textAreaSpacer}>
              {join(data.soundChanges)}&nbsp;
            </div>
          </div>
        </div>
        <div
          className={classNames(
            styles.lexicon,
            styles.inputSection,
            sharedStyles.part
          )}
        >
          <h5 className={sharedStyles.sectionTitle}>Lexicon</h5>
          <div className={styles.container}>
            <textarea
              id='lexicon'
              name='lexicon'
              className={classNames(styles.lexiconInput, styles.dataInput)}
              value={join(data.lexicon)}
              onChange={change}
              aria-label='Lexicon'
            />
            <div className={styles.textAreaSpacer}>
              {join(data.lexicon)}&nbsp;
            </div>
          </div>
        </div>
      </div>
      <Control addedClasses={sharedStyles.part}>
        <ControlSide side='left'>
          <ControlPiece>
            <Button type='submit' ver='neutral' onClick={morph}>
              Change
            </Button>
          </ControlPiece>
          <ControlPiece>
            <label htmlFor='outputFormat'>output format:</label>
            <select
              id='outputFormat'
              name='outputFormat'
              value={data.outputFormat}
              onChange={change}
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
                  checked={data.showChanges}
                  onChange={check}
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
                  checked={data.showDiff}
                  onChange={check}
                />{' '}
                bold differences
              </label>
            </div>
          </ControlPiece>
          <ControlPiece>
            <div>
              <label>
                <input
                  type='checkbox'
                  id='ruleReport'
                  name='options'
                  value='ruleReport'
                  checked={data.ruleReport}
                  onChange={check}
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
                  checked={data.rewriteOutput}
                  onChange={check}
                />{' '}
                rewrite on output
              </label>
            </div>
          </ControlPiece>
        </ControlSide>
        <ControlSide side='right'>
          <ControlPiece>
            <Button id='save' ver='success' onClick={save} type='button'>
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
              onChange={open}
            />
          </ControlPiece>
        </ControlSide>
      </Control>
    </Form>
  )
}

MorphForm.propTypes = {
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

export default MorphForm
