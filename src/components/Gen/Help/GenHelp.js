import React from 'react'
import { Helmet } from 'react-helmet'
import injectSheet from 'react-jss'

import styles from './styles'
import Notice from '../../Notice/Notice'
import HelpLink from '../../HelpLink/HelpLink'

import { canonical, siteTitle } from '../../../App'

const GenHelp = ({classes}) => (
  <div className={classes.genHelp}>
    <Helmet>
      <title>{siteTitle} Gen Help</title>
      <meta name='description' content='LanguaGen is a tool for automatically building a set of words based on arbitrary rules of phonotactics.' />
      <link rel='canonical' href={`${canonical}gen/help/`} />
    </Helmet>
    <HelpLink link='/gen'>
      Back
    </HelpLink>
    <h2 className='toolTitle'>LanguaGen Help</h2>
    <Notice>This tool is still in development and a help file is not yet available.</Notice>
  </div>
)

export default injectSheet(styles)(GenHelp)
