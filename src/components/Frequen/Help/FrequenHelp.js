import React from 'react'
import { Helmet } from 'react-helmet'
import injectSheet from 'react-jss'

import styles from './styles'
import Notice from '../../Notice/Notice'
import HelpLink from '../../HelpLink/HelpLink'

import { canonical, siteTitle } from '../../../App'

const FrequenHelp = ({classes}) => (
  <div className={classes.frequenHelp}>
    <Helmet>
      <title>{siteTitle} Frequen Help</title>
      <meta name='description' content='LanguaFrequen is a tool for analyzing phoneme frequencies in a given text.' />
      <link rel='canonical' href={`${canonical}frequen/help/`} />
    </Helmet>
    <HelpLink link='/frequen'>
      Back
    </HelpLink>
    <h2 className='tool-title'>LanguaFrequen Help</h2>
    <Notice>This tool is still in planning.</Notice>
  </div>
)

export default injectSheet(styles)(FrequenHelp)
