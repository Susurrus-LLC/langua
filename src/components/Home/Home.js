import React from 'react'
import { Link } from 'react-router-dom'
import injectSheet from 'react-jss'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import styles from './styles'

const Home = (props) => (
  <div className={props.classes.home}>
    <p className={props.classes.siteDescription}>Langua is a suite of language tools that can be used for testing, experimentation, learning, analysis, or creation.</p>
    <div className={props.classes.grid}>
      <Link to='/gen' className={props.classes.panel}>
        <h2 className={props.classes.toolTitle}>Gen</h2>
        <p className={props.classes.toolDescription}>LanguaGen is a tool for automatically building a set of words based on arbitrary rules of phonotactics.</p>
      </Link>
      <Link to='/morph' className={classNames(props.classes.panel, props.classes.disabled)}>
        <h2 className={props.classes.toolTitle}>Morph</h2>
        <p className={props.classes.toolDescription}>LanguaMorph is a tool for modeling historical sound change according to arbitrary rules of phonetic change. It can also be used to reverse historical sound change according to those same rules in order to guess at a word&rsquo;s proto-language roots.</p>
      </Link>
      <Link to='/deriv' className={classNames(props.classes.panel, props.classes.disabled)}>
        <h2 className={props.classes.toolTitle}>Deriv</h2>
        <p className={props.classes.toolDescription}>LanguaDeriv is a tool for modeling word derivation according to arbitrary rules of morphosyntactics.</p>
      </Link>
      <Link to='/frequen' className={classNames(props.classes.panel, props.classes.disabled)}>
        <h2 className={props.classes.toolTitle}>Frequen</h2>
        <p className={props.classes.toolDescription}>LanguaFrequen is a tool for analyzing phoneme frequencies in a given text.</p>
      </Link>
      <Link to='/tree' className={classNames(props.classes.panel, props.classes.disabled)}>
        <h2 className={props.classes.toolTitle}>Tree</h2>
        <p className={props.classes.toolDescription}>LanguaTree is a tool for drawing and labeling syntax trees.</p>
      </Link>
    </div>
    <p className={props.classes.siteDescription}>Langua is a full Progressive Web App; once the site has been loaded, its full functionality is available even offline. Langua can also be added to the homescreen of your tablet or mobile device for easy access.</p>
  </div>
)

Home.propTypes = {
  classes: PropTypes.object.isRequired
}

export default injectSheet(styles)(Home)
