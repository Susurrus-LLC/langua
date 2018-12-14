import React from 'react'
import injectSheet from 'react-jss'
import PropTypes from 'prop-types'

import { siteTitle } from '../../App'

import { genInfo } from '../Gen'
import { morphInfo } from '../Morph'
import { derivInfo } from '../Deriv'
import { frequenInfo } from '../Frequen'
import { treeInfo } from '../Tree'
import { lexInfo } from '../Lex'

import HomePanel from './HomePanel'
import styles from './styles'

const Home = props => (
  <div className={props.classes.home}>
    <p className={props.classes.siteDescription}>
      Langua is a suite of language tools that can be used for testing,
      experimentation, learning, analysis, or creation.
    </p>
    <div className={props.classes.grid}>
      <HomePanel
        classes={props.classes}
        linkTo={`${genInfo.link}/`}
        toolTitle={genInfo.title}
      >
        {`${siteTitle}${genInfo.title} ${genInfo.description}`}
      </HomePanel>
      <HomePanel
        classes={props.classes}
        linkTo={`${morphInfo.link}/`}
        toolTitle={morphInfo.title}
        disabled
      >
        {`${siteTitle}${morphInfo.title} ${morphInfo.description}`}
      </HomePanel>
      <HomePanel
        classes={props.classes}
        linkTo={`${derivInfo.link}/`}
        toolTitle={derivInfo.title}
      >
        {`${siteTitle}${derivInfo.title} ${derivInfo.description}`}
      </HomePanel>
      <HomePanel
        classes={props.classes}
        linkTo={`${frequenInfo.link}/`}
        toolTitle={frequenInfo.title}
      >
        {`${siteTitle}${frequenInfo.title} ${frequenInfo.description}`}
      </HomePanel>
      <HomePanel
        classes={props.classes}
        linkTo={`${treeInfo.link}/`}
        toolTitle={treeInfo.title}
        disabled
      >
        {`${siteTitle}${treeInfo.title} ${treeInfo.description}`}
      </HomePanel>
      <HomePanel
        classes={props.classes}
        linkTo={`${lexInfo.link}/`}
        toolTitle={lexInfo.title}
        disabled
      >
        {`${siteTitle}${lexInfo.title} ${lexInfo.description}`}
      </HomePanel>
    </div>
    <p className={props.classes.siteDescription}>
      {siteTitle} is a full Progressive Web App; once the site has been loaded,
      its full functionality is available even offline. {siteTitle} can also be
      added to the homescreen of your tablet or mobile device for easy access.
    </p>
  </div>
)

Home.propTypes = {
  classes: PropTypes.object
}

export default injectSheet(styles)(Home)
