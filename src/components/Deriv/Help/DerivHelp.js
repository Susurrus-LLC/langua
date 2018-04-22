import React from 'react'
import { Helmet } from 'react-helmet'
import injectSheet from 'react-jss'

import styles from './styles'
import Notice from '../../Notice/Notice'
import HelpLink from '../../HelpLink/HelpLink'

import { canonical, siteTitle } from '../../../App'

const DerivHelp = ({classes}) => (
  <div className={classes.derivHelp}>
    <Helmet>
      <title>{siteTitle} Deriv Help</title>
      <meta name='description' content='LanguaDeriv is a tool for modeling word derivation according to arbitrary rules of morphosyntactics.' />
      <link rel='canonical' href={`${canonical}deriv/help/`} />
    </Helmet>
    <HelpLink link='/deriv'>
      Back
    </HelpLink>
    <h2 className='toolTitle'>LanguaDeriv Help</h2>
    <Notice>This tool is still in planning.</Notice>
  </div>
)

export default injectSheet(styles)(DerivHelp)
