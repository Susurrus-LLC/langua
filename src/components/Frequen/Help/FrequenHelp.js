// @flow
import React from 'react'
import { Helmet } from 'react-helmet'
import injectSheet from 'react-jss'
import type Classes from 'react-jss'

import styles from './styles'
import Notice from '../../Notice/Notice'
import ButtonLink from '../../Button/ButtonLink'

import { canonical, siteTitle } from '../../../App'

declare type Props = {
  classes: Classes
}

const FrequenHelp = (props: Props) => (
  <div className={props.classes.frequenHelp}>
    <Helmet>
      <title>{siteTitle} Frequen Help</title>
      <meta name='description' content='LanguaFrequen is a tool for analyzing phoneme frequencies in a given text.' />
      <link rel='canonical' href={`${canonical}frequen/help/`} />
    </Helmet>
    <ButtonLink route='/frequen'>
      Back
    </ButtonLink>
    <h2 className='toolTitle'>LanguaFrequen Help</h2>
    <Notice>This tool is still in planning.</Notice>
  </div>
)

export default injectSheet(styles)(FrequenHelp)
