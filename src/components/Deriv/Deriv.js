import React from 'react'
import { Helmet } from 'react-helmet'
import injectSheet from 'react-jss'
import PropTypes from 'prop-types'

import styles from './styles'
import Notice from '../Notice/Notice'
import ButtonLink from '../Button/ButtonLink'
import DerivForm from './DerivForm'

import { canonical, siteTitle } from '../../App'

const Deriv = props => (
  <div className={props.classes.deriv}>
    <Helmet>
      <title>{siteTitle} Deriv</title>
      <meta
        name='description'
        content='LanguaDeriv is a tool for modeling word derivation according to arbitrary rules of morphosyntactics.'
      />
      <link rel='canonical' href={`${canonical}deriv/`} />
    </Helmet>
    <ButtonLink route='/deriv/help'>Help</ButtonLink>
    <h2 className='toolTitle'>LanguaDeriv</h2>
    <Notice>This tool is still in planning.</Notice>
    <DerivForm styles={props.classes} />
  </div>
)

Deriv.propTypes = {
  classes: PropTypes.object
}

export default injectSheet(styles)(Deriv)
