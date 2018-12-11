import React from 'react'
import { Helmet } from 'react-helmet'
import injectSheet from 'react-jss'
import PropTypes from 'prop-types'

import Notice from '../../components/Notice'
import ButtonLink from '../../components/Button/Link'

import MorphForm from './MorphForm'
import MorphResults from './MorphResults'
import styles from './styles'

import { canonical, siteTitle } from '../../App'

export const morphInfo = {
  title: 'Morph',
  link: 'morph',
  description:
    'is a tool for modeling historical sound change according to arbitrary rules of phonetic change. It can also be used to reverse historical sound change according to those same rules in order to guess at a word’s proto-language roots.'
}

const Morph = props => (
  <div className={props.classes.morph}>
    <Helmet>
      <title>
        {siteTitle}
        {morphInfo.title}
      </title>
      <meta
        name='description'
        content={`${siteTitle}${morphInfo.title} ${morphInfo.description}`}
      />
      <link rel='canonical' href={`${canonical}${morphInfo.link}/`} />
    </Helmet>
    <ButtonLink route={`/${morphInfo.link}/help`}>Help</ButtonLink>
    <h2 className='toolTitle'>
      {siteTitle}
      {morphInfo.title}
    </h2>
    <Notice>This tool is still in planning.</Notice>
    <MorphForm styles={props.classes} />
    <MorphResults styles={props.classes} />
  </div>
)

Morph.propTypes = {
  classes: PropTypes.object
}

export default injectSheet(styles)(Morph)
