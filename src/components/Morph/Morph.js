import React from 'react'
import { Helmet } from 'react-helmet'
import injectSheet from 'react-jss'
import PropTypes from 'prop-types'

import styles from './styles'
import Notice from '../Notice/Notice'
import ButtonLink from '../Button/ButtonLink'

import { canonical, siteTitle } from '../../App'

const Morph = props => (
  <div className={props.classes.morph}>
    <Helmet>
      <title>{siteTitle} Morph</title>
      <meta
        name='description'
        content='LanguaMorph is a tool for modeling historical sound change according to arbitrary rules of phonetic change. It can also be used to reverse historical sound change according to those same rules in order to guess at a word’s proto-language roots.'
      />
      <link rel='canonical' href={`${canonical}morph/`} />
    </Helmet>
    <ButtonLink route='/morph/help'>Help</ButtonLink>
    <h2 className='toolTitle'>LanguaMorph</h2>
    <Notice>This tool is still in planning.</Notice>
  </div>
)

Morph.propTypes = {
  classes: PropTypes.object
}

export default injectSheet(styles)(Morph)
