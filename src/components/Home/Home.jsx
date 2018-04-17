import React from 'react'
import { Link } from 'react-router-dom'
import injectSheet from 'react-jss'
import classNames from 'classnames'

import styles from './styles'

const Home = ({classes}) => (
  <div className={classes.home}>
    <p className={classes.siteDescription}>Langua is a suite of language tools that can be used for testing, experimentation, learning, analysis, or creation. There are four main tools in the suite.</p>
    <div className={classes.grid}>
      <Link to='/gen' className={classes.panel}>
        <h2 className={classes.toolTitle}>Gen</h2>
        <p className={classes.toolDescription}>LanguaGen is a tool for automatically building a set of words based on arbitrary rules of phonotactics.</p>
      </Link>
      <Link to='/morph' className={classNames(classes.panel, classes.disabled)}>
        <h2 className={classes.toolTitle}>Morph</h2>
        <p className={classes.toolDescription}>LanguaMorph is a tool for modeling historical sound change according to arbitrary rules of phonetic change. It can also be used to reverse historical sound change according to those same rules in order to guess at a word&rsquo;s proto-language roots.</p>
      </Link>
      <Link to='/deriv' className={classNames(classes.panel, classes.disabled)}>
        <h2 className={classes.toolTitle}>Deriv</h2>
        <p className={classes.toolDescription}>LanguaDeriv is a tool for modeling word derivation according to arbitrary rules of morphosyntactics.</p>
      </Link>
      <Link to='/frequen' className={classNames(classes.panel, classes.disabled)}>
        <h2 className={classes.toolTitle}>Frequen</h2>
        <p className={classes.toolDescription}>LanguaFrequen is a tool for analyzing phoneme frequencies in a given text.</p>
      </Link>
      <Link to='/tree' className={classNames(classes.panel, classes.disabled)}>
        <h2 className={classes.toolTitle}>Tree</h2>
        <p className={classes.toolDescription}>LanguaTree is a tool for drawing and labeling syntax trees.</p>
      </Link>
    </div>
  </div>
)

export default injectSheet(styles)(Home)
