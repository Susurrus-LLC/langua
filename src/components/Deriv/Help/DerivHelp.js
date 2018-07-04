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

const DerivHelp = (props: Props) => (
  <div className={props.classes.derivHelp}>
    <Helmet>
      <title>{siteTitle} Deriv Help</title>
      <meta name='description' content='LanguaDeriv is a tool for modeling word derivation according to arbitrary rules of morphosyntactics.' />
      <link rel='canonical' href={`${canonical}deriv/help/`} />
    </Helmet>
    <ButtonLink route='/deriv'>
      Back
    </ButtonLink>
    <h2 className='toolTitle'>LanguaDeriv Help</h2>
    <Notice>This tool is still in planning.</Notice>
  </div>
)

export default injectSheet(styles)(DerivHelp)
