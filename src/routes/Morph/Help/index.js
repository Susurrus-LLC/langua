import React from 'react'

import Help from '../../../components/Help'
import Notice from '../../../components/Notice'

const toolTitle = 'Morph'

const MorphHelp = props => (
  <Help
    toolTitle={toolTitle}
    toolDescription={`Langua${toolTitle} is a tool for modeling historical sound change according to arbitrary rules of phonetic change. It can also be used to reverse historical sound change according to those same rules in order to guess at a word’s proto-language roots.`}
    link='morph'
  >
    <Notice>This tool is still in planning.</Notice>
  </Help>
)

export default MorphHelp
