import React from 'react'
import PropTypes from 'prop-types'

import { siteTitle } from '../../../App'
import Help from '../../../components/Help'
import Notice from '../../../components/Notice'

import { derivInfo } from '../'

const DerivHelp = props => (
  <Help toolInfo={derivInfo}>
    <Notice>This tool is still in planning.</Notice>
    <h3 id='using'>
      Using {siteTitle}
      {derivInfo.title}
    </h3>
  </Help>
)

DerivHelp.propTypes = {
  classes: PropTypes.object
}

export default DerivHelp
