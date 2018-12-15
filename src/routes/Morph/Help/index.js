import React from 'react'
import PropTypes from 'prop-types'

import { siteTitle } from '../../../App'
import Help from '../../../components/Help'
import Notice from '../../../components/Notice'

import { morphInfo } from '../'

const MorphHelp = props => (
  <Help toolInfo={morphInfo}>
    <Notice>This tool is still in development.</Notice>
    <h3 id='using'>
      Using {siteTitle}
      {morphInfo.title}
    </h3>
    <h3 id='acknowledgments'>Acknowledgments</h3>
    <p>
      Much thanks should be given to Mark Rosenfelder and{' '}
      <a
        href='http://www.zompist.com/sca2.html'
        target='_blank'
        rel='noopener noreferrer'
      >
        the Sound Change Applier 2
      </a>{' '}
      (SCA
      <sup>2</sup>
      ). {siteTitle}
      {morphInfo.title} was mainly built as a modernized and updated version of
      SCA
      <sup>2</sup>.
    </p>
  </Help>
)

MorphHelp.propTypes = {
  classes: PropTypes.object
}

export default MorphHelp
