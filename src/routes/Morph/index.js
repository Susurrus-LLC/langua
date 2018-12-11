import React from 'react'
import injectSheet from 'react-jss'
import PropTypes from 'prop-types'

import Notice from '../../components/Notice'
import Tool from '../../components/Tool'

import MorphForm from './MorphForm'
import MorphResults from './MorphResults'
import styles from './styles'

export const morphInfo = {
  title: 'Morph',
  link: 'morph',
  description:
    'is a tool for modeling historical sound change according to arbitrary rules of phonetic change. It can also be used to reverse historical sound change according to those same rules in order to guess at a word’s proto-language roots.'
}

const Morph = props => (
  <Tool toolInfo={morphInfo}>
    <Notice>This tool is still in planning.</Notice>
    <MorphForm styles={props.classes} />
    <MorphResults styles={props.classes} />
  </Tool>
)

Morph.propTypes = {
  classes: PropTypes.object
}

export default injectSheet(styles)(Morph)
