import React from 'react'

import Help from '../Help/Help'
import Notice from '../Notice/Notice'

const toolTitle = 'Tree'

const TreeHelp = props => (
  <Help
    toolTitle={toolTitle}
    toolDescription={`Langua${toolTitle} is a tool for drawing and labeling syntax trees.`}
    link='tree'
  >
    <Notice>This tool is still in planning.</Notice>
  </Help>
)

export default TreeHelp
