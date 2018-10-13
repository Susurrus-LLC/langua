import React from 'react'
import { Helmet } from 'react-helmet'
import injectSheet from 'react-jss'
import PropTypes from 'prop-types'

import styles from './styles'
import Notice from '../../Notice/Notice'
import ButtonLink from '../../Button/ButtonLink'

import { canonical, siteTitle } from '../../../App'

const FrequenHelp = (props) => (
  <div className={props.classes.frequenHelp}>
    <Helmet>
      <title>{siteTitle} Frequen Help</title>
      <meta name='description' content='LanguaFrequen is a tool for analyzing phoneme frequencies in a given text.' />
      <link rel='canonical' href={`${canonical}frequen/help/`} />
    </Helmet>
    <ButtonLink route='/frequen'>
      Back
    </ButtonLink>
    <h2 className='toolTitle'>LanguaFrequen Help</h2>
    <Notice>This tool is still in development.</Notice>
    <p id='description'>LanguaFrequen is a tool for analyzing phoneme frequencies in a given text.</p>
    <h3 id='using'>Using LanguaFrequen</h3>
    <p>Input a corpus of text in the <strong>Text Corpus</strong> field. This is the text that will be analyzed. Next, add a list of consonants and vowels accordingly to the <strong>Consonants</strong> and <strong>Vowels</strong> lists.</p>
  </div>
)

FrequenHelp.propTypes = {
  classes: PropTypes.object
}

export default injectSheet(styles)(FrequenHelp)
