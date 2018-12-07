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

const Lex = props => (
  <div className={props.classes.lex}>
    <Helmet>
      <title>{siteTitle} Lex</title>
      <meta
        name='description'
        content='LanguaLex is a tool for building a lexicon or dictionary for a language and exporting it to various formats.'
      />
      <link rel='canonical' href={`${canonical}lex/`} />
    </Helmet>
    <ButtonLink route='/lex/help'>Help</ButtonLink>
    <h2 className='toolTitle'>LanguaLex</h2>
    <Notice>This tool is still in planning.</Notice>
    <LexForm styles={props.classes} />
    <LexResults styles={props.classes} />
  </div>
)

Lex.propTypes = {
  classes: PropTypes.object
}

export default injectSheet(styles)(Lex)
