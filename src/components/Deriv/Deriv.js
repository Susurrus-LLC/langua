import React from 'react'
import { Helmet } from 'react-helmet'
import injectSheet from 'react-jss'

import styles from './styles'
import Notice from '../Notice/Notice'
import HelpLink from '../HelpLink/HelpLink'

import { canonical, siteTitle } from '../../App'

const Deriv = ({classes}) => (
  <div className={classes.deriv}>
    <Helmet>
      <title>{siteTitle} Deriv</title>
      <meta name='description' content='LanguaDeriv is a tool for modeling word derivation according to arbitrary rules of morphosyntactics.' />
      <link rel='canonical' href={`${canonical}deriv/`} />
    </Helmet>
    <HelpLink link='/deriv/help'>
      Help
    </HelpLink>
    <h2 className='toolTitle'>LanguaDeriv</h2>
    <Notice>This tool is still in planning.</Notice>
  </div>
)

export default injectSheet(styles)(Deriv)
