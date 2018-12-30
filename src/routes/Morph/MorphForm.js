import React from 'react'
import injectSheet from 'react-jss'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import Form from '../../components/Form'
import sharedFormStyles from '../../components/Form/sharedFormStyles'

const MorphForm = props => {
  const join = data => data.join('\n')

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
              readOnly
            />
            <div className={props.styles.textAreaSpacer}>
              {join(props.data.categories)}
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
              readOnly
            />
            <div className={props.styles.textAreaSpacer}>
              {join(props.data.rewriteRules)}
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
              readOnly
            />
            <div className={props.styles.textAreaSpacer}>
              {join(props.data.soundChanges)}
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
              readOnly
            />
            <div className={props.styles.textAreaSpacer}>
              {join(props.data.lexicon)}
            </div>
          </div>
        </div>
      </div>
      {JSON.stringify(props.data.outputFormat)}
      {JSON.stringify(props.data.showDiff)}
      {JSON.stringify(props.data.ruleReport)}
      {JSON.stringify(props.data.rewriteOutput)}
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
    ruleReport: PropTypes.bool.isRequired,
    rewriteOutput: PropTypes.bool.isRequired
  }).isRequired
}

export default injectSheet(sharedFormStyles)(MorphForm)
