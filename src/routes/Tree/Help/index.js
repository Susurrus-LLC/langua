import React from 'react'
import PropTypes from 'prop-types'

import { siteTitle } from '../../../App'
import Help from '../../../components/Help'
import Notice from '../../../components/Notice'

import { treeInfo } from '../'

const TreeHelp = props => (
  <Help toolInfo={treeInfo}>
    <Notice>This tool is still in planning.</Notice>
    <h3 id='using'>
      Using {siteTitle}
      {treeInfo.title}
    </h3>
  </Help>
)

TreeHelp.propTypes = {
  classes: PropTypes.object
}

export default TreeHelp
