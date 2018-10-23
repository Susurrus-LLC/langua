import React from 'react'
import { Helmet } from 'react-helmet'
import injectSheet from 'react-jss'
import PropTypes from 'prop-types'

import styles from './styles'
import Notice from '../../Notice/Notice'
import ButtonLink from '../../Button/ButtonLink'

import { canonical, siteTitle } from '../../../App'

const FrequenHelp = props => (
  <div className={props.classes.frequenHelp}>
    <Helmet>
      <title>{siteTitle} Frequen Help</title>
      <meta
        name='description'
        content='LanguaFrequen is a tool for analyzing phoneme frequencies in a given text.'
      />
      <link rel='canonical' href={`${canonical}frequen/help/`} />
    </Helmet>
    <ButtonLink route='/frequen'>Back</ButtonLink>
    <h2 className='toolTitle'>LanguaFrequen Help</h2>
    <Notice>This tool is still in development.</Notice>
    <p id='description'>
      LanguaFrequen is a tool for analyzing phoneme frequencies in a given text.
    </p>
    <h3 id='using'>Using LanguaFrequen</h3>
    <p>
      Input a corpus of text in the <strong>Text Corpus</strong> field. This is
      the text that will be analyzed. The text can be phomic or phonetic, or it
      can simply use the language&rsquo;s standard spelling system. For best
      results, however, each sound that should be analyzed separately will need
      its own grapheme or grapheme cluster. For example, in English, the letter{' '}
      <code>y</code> would need to be differentiated based on when it occurs as
      a consonant vs. when it occurs as a vowel. It does not matter if
      punctuation is removed from the corpus, as any graphemes not identified
      for analysis in the next step will be ignored by the tool.
    </p>
    <p>
      Next, add a list of consonants and vowels accordingly to the{' '}
      <strong>Consonants</strong> and <strong>Vowels</strong> lists. Separate
      each of the segments with a forward slash (<code>/</code>
      ). These segments can be single graphemes or grapheme clusters, and a
      cluster can contain characters that are used in shorter segments. For
      example, given the corpus <code>kanto</code> and the consonants{' '}
      <code>n/t/nt</code>, the tool will identify one occurance of{' '}
      <code>nt</code>, but no occurances of <code>n</code> or <code>t</code>.
      Any graphemes not identified for analysis will be ignored. In the previous
      example, since <code>k</code> was not added to the list of consonants, the
      tool would not count its occurance.
    </p>
    <p>
      Allophones can be added after a segment to indicate that multiple segments
      should all be counted as occurances of the same segment. Separate
      allophones with a comma (<code>,</code>
      ). For example, given the corpus <code>potaná</code>, if the vowels list
      contained <code>a/á/o</code>, the tool would identify one occurance each
      of <code>a</code>, <code>á</code>, and <code>o</code>, but if the vowels
      list contained <code>a,á/o</code>, the tool would identify two occurances
      of <code>a</code> and one occurance of <code>o</code>.
    </p>
    <p>
      When ready, click the <strong>Analyze</strong> button to run the analysis.
      The tool will draw a graph and display a table showing the frequencies of
      each of the identified segments in the text corpus.
    </p>
  </div>
)

FrequenHelp.propTypes = {
  classes: PropTypes.object
}

export default injectSheet(styles)(FrequenHelp)
