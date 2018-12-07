import React from 'react'

import Help from '../../../components/Help'
import Notice from '../../../components/Notice'

const toolTitle = 'Lex'

const LexHelp = props => (
  <Help
    toolTitle={toolTitle}
    toolDescription={`Langua${toolTitle} is a tool for building a lexicon or dictionary for a language and exporting it to various formats.`}
    link='lex'
  >
    <Notice>This tool is still in planning.</Notice>
  </Help>
)

export default LexHelp
