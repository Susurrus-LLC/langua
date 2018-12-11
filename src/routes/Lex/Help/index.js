import React from 'react'
import PropTypes from 'prop-types'

import { siteTitle } from '../../../App'
import Help from '../../../components/Help'
import Notice from '../../../components/Notice'

import { lexInfo } from '../'

const LexHelp = props => (
  <Help toolInfo={lexInfo}>
    <Notice>This tool is still in planning.</Notice>
    <h3 id='using'>
      Using {siteTitle}
      {lexInfo.title}
    </h3>
  </Help>
)

LexHelp.propTypes = {
  classes: PropTypes.object
}

export default LexHelp
