import React from 'react'
import injectSheet from 'react-jss'
import PropTypes from 'prop-types'

import Notice from '../../components/Notice'
import Tool from '../../components/Tool'

import TreeForm from './TreeForm'
import TreeResults from './TreeResults'
import styles from './styles'

export const treeInfo = {
  title: 'Tree',
  link: 'tree',
  description: 'is a tool for drawing and labeling syntax trees.'
}

const Tree = props => (
  <Tool toolInfo={treeInfo}>
    <Notice>This tool is still in planning.</Notice>
    <TreeForm styles={props.classes} />
    <TreeResults styles={props.classes} />
  </Tool>
)

Tree.propTypes = {
  classes: PropTypes.object
}

export default injectSheet(styles)(Tree)
