import React from 'react'

import Help from '../../../components/Help'
import Notice from '../../../components/Notice'

const toolTitle = 'Deriv'

const DerivHelp = props => (
  <Help
    toolTitle={toolTitle}
    toolDescription={`Langua${toolTitle} is a tool for modeling word derivation according to arbitrary rules of morphosyntactics.`}
    link='deriv'
  >
    <Notice>This tool is still in planning.</Notice>
  </Help>
)

export default DerivHelp
