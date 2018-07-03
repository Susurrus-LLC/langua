// @flow
import React from 'react'
import { Helmet } from 'react-helmet'
import injectSheet from 'react-jss'
import type Classes from 'react-jss'

import styles from './styles'
import Notice from '../Notice/Notice'
import ButtonLink from '../Button/ButtonLink'

import { canonical, siteTitle } from '../../App'

type props = {
  classes: Classes
}

const Frequen = (props: props) => (
  <div className={props.classes.frequen}>
    <Helmet>
      <title>{siteTitle} Frequen</title>
      <meta name='description' content='LanguaFrequen is a tool for analyzing phoneme frequencies in a given text.' />
      <link rel='canonical' href={`${canonical}frequen/`} />
    </Helmet>
    <ButtonLink route='/frequen/help'>
      Help
    </ButtonLink>
    <h2 className='toolTitle'>LanguaFrequen</h2>
    <Notice>This tool is still in planning.</Notice>
  </div>
)

export default injectSheet(styles)(Frequen)
