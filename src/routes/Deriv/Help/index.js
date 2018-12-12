import React from 'react'
import PropTypes from 'prop-types'

import { siteTitle } from '../../../App'
import Help from '../../../components/Help'
import Notice from '../../../components/Notice'

import { derivInfo } from '../'

const DerivHelp = props => (
  <Help toolInfo={derivInfo}>
    <Notice>This tool is still under construction.</Notice>
    <h3 id='using'>
      Using {siteTitle}
      {derivInfo.title}
    </h3>
    <h4 id='lexemes'>Lexemes</h4>
    <p>
      Enter a list of all lexemes that should be used as roots to be derived
      from. Also add a brief definition for each of the lexemes.
    </p>
    <h4 id='derivations'>Derivational Affixes</h4>
    <p>
      Enter a list of all derivational affixes that should be used to derive new
      words. Add a label for each of the affixes and a brief definition of the
      change the affix creates.
    </p>
    <h4 id='derive'>Derive</h4>
    <p>
      When the list of lexemes and affixes is ready, click the Derive button to
      generate a list of roots with possible derivational affixes added to them.
    </p>
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
