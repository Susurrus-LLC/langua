import React from 'react'
import { Helmet } from 'react-helmet'
import injectSheet from 'react-jss'
import PropTypes from 'prop-types'

import Notice from '../../components/Notice'
import ButtonLink from '../../components/Button/Link'

import LexForm from './LexForm'
import LexResults from './LexResults'
import styles from './styles'

import { canonical, siteTitle } from '../../App'

export const lexInfo = {
  title: 'Lex',
  link: 'lex',
  description:
    'is a tool for building a lexicon or dictionary for a language and exporting it to various formats.'
}

const Lex = props => (
  <div className={props.classes.lex}>
    <Helmet>
      <title>
        {siteTitle}
        {lexInfo.title}
      </title>
      <meta
        name='description'
        content={`${siteTitle}${lexInfo.title} ${lexInfo.description}`}
      />
      <link rel='canonical' href={`${canonical}${lexInfo.link}/`} />
    </Helmet>
    <ButtonLink route={`/${lexInfo.link}/help`}>Help</ButtonLink>
    <h2 className='toolTitle'>
      {siteTitle}
      {lexInfo.title}
    </h2>
    <Notice>This tool is still in planning.</Notice>
    <LexForm styles={props.classes} />
    <LexResults styles={props.classes} />
  </div>
)

Lex.propTypes = {
  classes: PropTypes.object
}

export default injectSheet(styles)(Lex)
