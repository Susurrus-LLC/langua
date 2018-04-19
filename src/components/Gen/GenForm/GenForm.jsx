import React from 'react'
import injectSheet from 'react-jss'
import classNames from 'classnames'

import Button from '../../Button/Button'

// import * as service from '../service'
import { vars } from '../defaultData'
import styles from './styles'

const GenForm = ({ classes }) => {
  const selectOptions = vars.map((variab, index) => (
    <option key={index} value={variab}>
      {variab}
    </option>
  ))

  return (
    <form className={classes.form}>
      <div className={classNames(classes.subpatterns, classes.part)}>
        <h5 className={classes.sectionTitle}>Subpatterns</h5>
        <div className={classes.subpsRow}>
          <select id='sub1v'>
            {selectOptions}
          </select>
          <input
            type='text'
            id='sub1p'
            className={classes.subpatternInput}
          />
        </div>
        <div className={classes.subpsRow}>
          <select id='sub2v'>
            {selectOptions}
          </select>
          <input
            type='text'
            id='sub2p'
            className={classes.subpatternInput}
          />
        </div>
        <div className={classes.subpsRow}>
          <select id='sub3v'>
            {selectOptions}
          </select>
          <input
            type='text'
            id='sub3p'
            className={classes.subpatternInput}
          />
        </div>
        <div className={classes.subpsRow}>
          <select id='sub4v'>
            {selectOptions}
          </select>
          <input
            type='text'
            id='sub4p'
            className={classes.subpatternInput}
          />
        </div>
      </div>
      <div className={classNames(classes.pattern, classes.part)}>
        <h5 className={classes.sectionTitle}>Pattern</h5>
        <input
          type='text'
          id='pattern'
          className={classes.patternInput}
        />
      </div>
      <div className={classNames(classes.control, classes.part)}>
        <div className={classes.controlLeft}>
          <div className={classes.controlPiece}>
            <Button type='submit' ver='neutral'>
              Generate
            </Button>
          </div>
          <div className={classes.controlPiece}>
            <label>words:</label>
            <input
              type='text'
              id='words'
              className={classes.wordsInput}
              value='100'
            />
          </div>
          <div className={classes.controlPiece}>
            <label>
              <input type='checkbox' id='newline' />
                new line each
            </label>
          </div>
          <div className={classes.controlPiece}>
            <label>
              <input type='checkbox' id='filterdupes' />
              filter duplicates
            </label>
          </div>
        </div>
        <div className={classes.controlRight}>
          <div className={classes.controlPiece}>
            <Button ver='success'>
              Save
            </Button>
          </div>
          <div className={classes.controlPiece}>
            <Button ver='danger'>
              Open
            </Button>
          </div>
        </div>
      </div>
    </form>
  )
}

export default injectSheet(styles)(GenForm)
