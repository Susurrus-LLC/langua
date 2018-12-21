import React from 'react'
import injectSheet from 'react-jss'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import Form from '../../components/Form'
import sharedFormStyles from '../../components/Form/sharedFormStyles'

const MorphForm = props => {
  const categories = props.data.categories.map((cat, i) => (
    <div key={i} className={props.styles.categoryRow}>
      <input
        type='text'
        id={`cv${i}`}
        name={`cv${i}`}
        className={props.styles.categoryVariable}
        value={cat.variable}
        readOnly
      />
      <input
        text='text'
        id={`cl${i}`}
        name={`cl${i}`}
        className={props.styles.categoryLetters}
        value={cat.letters.join('/')}
        readOnly
      />
    </div>
  ))

  const rewriteRules = props.data.rewriteRules.map((rule, i) => (
    <div key={i} className={props.styles.rewriteRuleRow}>
      <input
        type='text'
        id={`rp${i}`}
        name={`rp${i}`}
        className={props.styles.rewriteRulePattern}
        value={rule.pattern}
        readOnly
      />
      <input
        type='text'
        id={`rs${i}`}
        name={`rs${i}`}
        className={props.styles.rewriteRuleSubstitution}
        value={rule.substitution}
        readOnly
      />
    </div>
  ))

  const compileSoundChange = change => {
    const input = change.input
    const output = change.output
    const context = change.context
    const exception = change.exception
    let rule = ''
    rule += `${input}/${output}`
    if (context && context.length > 0) {
      rule += `/${context}`
      if (exception && exception.length > 0) {
        rule += `/${exception}`
      }
    }
    return rule
  }

  const soundChanges = props.data.soundChanges.map((change, i) => (
    <div key={i} className={props.styles.soundChangeRow}>
      <input
        type='text'
        id={`sc${i}`}
        name={`sc${i}`}
        className={props.styles.soundChange}
        value={compileSoundChange(change)}
        readOnly
      />
    </div>
  ))

  const lexicon = lexicon => lexicon.join('\n')

  return (
    <Form>
      <div className={classNames(props.styles.categories, props.classes.part)}>
        <h5 className={props.classes.sectionTitle}>Categories</h5>
        {categories}
      </div>
      <div
        className={classNames(props.styles.rewriteRules, props.classes.part)}
      >
        <h5 className={props.classes.sectionTitle}>Rewrite Rules</h5>
        {rewriteRules}
      </div>
      <div
        className={classNames(props.styles.soundChanges, props.classes.part)}
      >
        <h5 className={props.classes.sectionTitle}>Sound Changes</h5>
        {soundChanges}
      </div>
      <div className={classNames(props.styles.lexicon, props.classes.part)}>
        <h5 className={props.classes.sectionTitle}>Lexicon</h5>
        <textarea
          id='lexicon'
          name='lexicon'
          className={props.styles.lexicon}
          value={lexicon(props.data.lexicon)}
          readOnly
        />
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
    categories: PropTypes.arrayOf(
      PropTypes.shape({
        variable: PropTypes.string.isRequired,
        letters: PropTypes.arrayOf(PropTypes.string).isRequired
      })
    ).isRequired,
    rewriteRules: PropTypes.arrayOf(
      PropTypes.shape({
        pattern: PropTypes.string.isRequired,
        substitution: PropTypes.string.isRequired
      })
    ).isRequired,
    soundChanges: PropTypes.arrayOf(
      PropTypes.shape({
        input: PropTypes.string.isRequired,
        output: PropTypes.string.isRequired,
        context: PropTypes.string,
        exception: PropTypes.string
      })
    ).isRequired,
    lexicon: PropTypes.arrayOf(PropTypes.string).isRequired,
    outputFormat: PropTypes.oneOf(['oo', 'io', 'oi']).isRequired,
    showDiff: PropTypes.bool.isRequired,
    ruleReport: PropTypes.bool.isRequired,
    rewriteOutput: PropTypes.bool.isRequired
  }).isRequired
}

export default injectSheet(sharedFormStyles)(MorphForm)
