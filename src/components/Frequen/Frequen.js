import React from 'react'
import { Helmet } from 'react-helmet'
import injectSheet from 'react-jss'

import styles from './styles'
import Notice from '../Notice/Notice'
import HelpLink from '../HelpLink/HelpLink'

import { canonical, siteTitle } from '../../App'

const Frequen = ({classes}) => (
  <div className={classes.frequen}>
    <Helmet>
      <title>{siteTitle} Frequen</title>
      <meta name='description' content='LanguaFrequen is a tool for analyzing phoneme frequencies in a given text.' />
      <link rel='canonical' href={`${canonical}frequen/`} />
    </Helmet>
    <HelpLink link='/frequen/help'>
      Help
    </HelpLink>
    <h2 className='toolTitle'>LanguaFrequen</h2>
    <Notice>This tool is still in planning.</Notice>
  </div>
)

export default injectSheet(styles)(Frequen)
