import React from 'react'
import injectSheet from 'react-jss'
import PropTypes from 'prop-types'

import HomePanel from './HomePanel'
import styles from './styles'

const Home = props => (
  <div className={props.classes.home}>
    <p className={props.classes.siteDescription}>
      Langua is a suite of language tools that can be used for testing,
      experimentation, learning, analysis, or creation.
    </p>
    <div className={props.classes.grid}>
      <HomePanel classes={props.classes} linkTo='/gen' toolTitle='Gen'>
        LanguaGen is a tool for automatically building a set of words based on
        arbitrary rules of phonotactics.
      </HomePanel>
      <HomePanel
        classes={props.classes}
        linkTo='/morph'
        toolTitle='Morph'
        disabled
      >
        LanguaMorph is a tool for modeling historical sound change according to
        arbitrary rules of phonetic change. It can also be used to reverse
        historical sound change according to those same rules in order to guess
        at a word&rsquo;s proto-language roots.
      </HomePanel>
      <HomePanel
        classes={props.classes}
        linkTo='/deriv'
        toolTitle='Deriv'
        disabled
      >
        LanguaDeriv is a tool for modeling word derivation according to
        arbitrary rules of morphosyntactics.
      </HomePanel>
      <HomePanel classes={props.classes} linkTo='/frequen' toolTitle='Frequen'>
        LanguaFrequen is a tool for analyzing phoneme frequencies in a given
        text.
      </HomePanel>
      <HomePanel
        classes={props.classes}
        linkTo='/tree'
        toolTitle='Tree'
        disabled
      >
        LanguaTree is a tool for drawing and labeling syntax trees.
      </HomePanel>
    </div>
    <p className={props.classes.siteDescription}>
      Langua is a full Progressive Web App; once the site has been loaded, its
      full functionality is available even offline. Langua can also be added to
      the homescreen of your tablet or mobile device for easy access.
    </p>
  </div>
)

Home.propTypes = {
  classes: PropTypes.object
}

export default injectSheet(styles)(Home)
