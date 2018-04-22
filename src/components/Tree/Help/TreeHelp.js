import React from 'react'
import { Helmet } from 'react-helmet'
import injectSheet from 'react-jss'

import styles from './styles'
import Notice from '../../Notice/Notice'
import HelpLink from '../../HelpLink/HelpLink'

import { canonical, siteTitle } from '../../../App'

const TreeHelp = ({classes}) => (
  <div className={classes.treeHelp}>
    <Helmet>
      <title>{siteTitle} Tree Help</title>
      <meta name='description' content='LanguaTree is a tool for drawing and labeling syntax trees.' />
      <link rel='canonical' href={`${canonical}tree/help/`} />
    </Helmet>
    <HelpLink link='/tree'>
      Back
    </HelpLink>
    <h2 className='toolTitle'>LanguaTree Help</h2>
    <Notice>This tool is still in planning.</Notice>
  </div>
)

export default injectSheet(styles)(TreeHelp)
