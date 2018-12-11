import React from 'react'
import PropTypes from 'prop-types'

import { siteTitle } from '../../../App'
import Help from '../../../components/Help'
import Notice from '../../../components/Notice'

import { morphInfo } from '../'

const MorphHelp = props => (
  <Help toolInfo={morphInfo}>
    <Notice>This tool is still in planning.</Notice>
    <h3 id='using'>
      Using {siteTitle}
      {morphInfo.title}
    </h3>
  </Help>
)

MorphHelp.propTypes = {
  classes: PropTypes.object
}

export default MorphHelp
