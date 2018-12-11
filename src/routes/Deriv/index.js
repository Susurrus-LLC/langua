import React from 'react'
import { Helmet } from 'react-helmet'
import injectSheet from 'react-jss'
import PropTypes from 'prop-types'

import Notice from '../../components/Notice'
import ButtonLink from '../../components/Button/Link'

import DerivForm from './DerivForm'
import DerivResults from './DerivResults'
import styles from './styles'

import { canonical, siteTitle } from '../../App'

export const derivInfo = {
  title: 'Deriv',
  link: 'deriv',
  description:
    'is a tool for modeling word derivation according to arbitrary rules of morphosyntactics.'
}

const Deriv = props => (
  <div className={props.classes.deriv}>
    <Helmet>
      <title>
        {siteTitle}
        {derivInfo.title}
      </title>
      <meta
        name='description'
        content={`${siteTitle}${derivInfo.title} ${derivInfo.description}`}
      />
      <link rel='canonical' href={`${canonical}${derivInfo.link}/`} />
    </Helmet>
    <ButtonLink route={`/${derivInfo.link}/help`}>Help</ButtonLink>
    <h2 className='toolTitle'>
      {siteTitle}
      {derivInfo.title}
    </h2>
    <Notice>This tool is still in planning.</Notice>
    <DerivForm styles={props.classes} />
    <DerivResults styles={props.classes} />
  </div>
)

Deriv.propTypes = {
  classes: PropTypes.object
}

export default injectSheet(styles)(Deriv)
