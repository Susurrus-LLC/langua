import React from 'react'
import injectSheet from 'react-jss'
import PropTypes from 'prop-types'

import Notice from '../../components/Notice'
import Tool from '../../components/Tool'

import DerivForm from './DerivForm'
import DerivResults from './DerivResults'
import styles from './styles'

export const derivInfo = {
  title: 'Deriv',
  link: 'deriv',
  description:
    'is a tool for modeling word derivation according to arbitrary rules of morphosyntactics.'
}

const Deriv = props => (
  <Tool toolInfo={derivInfo}>
    <Notice>This tool is still in planning.</Notice>
    <DerivForm styles={props.classes} />
    <DerivResults styles={props.classes} />
  </Tool>
)

Deriv.propTypes = {
  classes: PropTypes.object
}

export default injectSheet(styles)(Deriv)
