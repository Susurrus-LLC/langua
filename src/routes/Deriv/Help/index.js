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
    <h3 id='acknowledgments'>Acknowledgments</h3>
    <p>
      Much thanks should be given to Jan Strasser and{' '}
      <a
        href='http://akana.conlang.org/tools/derivizer.html'
        target='_blank'
        rel='noopener noreferrer'
      >
        the Derivizer
      </a>
      . {siteTitle}
      {derivInfo.title} was mainly built as a modernized and updated version of
      the Derivizer.
    </p>
  </Help>
)

DerivHelp.propTypes = {
  classes: PropTypes.object
}

export default DerivHelp
