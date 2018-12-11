import React from 'react'
import injectSheet from 'react-jss'
import PropTypes from 'prop-types'

import Notice from '../../components/Notice'
import Tool from '../../components/Tool'

import LexForm from './LexForm'
import LexResults from './LexResults'
import styles from './styles'

export const lexInfo = {
  title: 'Lex',
  link: 'lex',
  description:
    'is a tool for building a lexicon or dictionary for a language and exporting it to various formats.'
}

const Lex = props => (
  <Tool toolInfo={lexInfo}>
    <Notice>This tool is still in planning.</Notice>
    <LexForm styles={props.classes} />
    <LexResults styles={props.classes} />
  </Tool>
)

Lex.propTypes = {
  classes: PropTypes.object
}

export default injectSheet(styles)(Lex)
