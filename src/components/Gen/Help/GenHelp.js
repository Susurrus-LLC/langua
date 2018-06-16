import React from 'react'
import { Helmet } from 'react-helmet'
import injectSheet from 'react-jss'
import PropTypes from 'prop-types'

import styles from './styles'
import Notice from '../../Notice/Notice'
import ButtonLink from '../../Button/ButtonLink'

import { canonical, siteTitle } from '../../../App'

const GenHelp = (props) => (
  <div className={props.classes.genHelp}>
    <Helmet>
      <title>{siteTitle} Gen Help</title>
      <meta name='description' content='LanguaGen is a tool for automatically building a set of words based on arbitrary rules of phonotactics.' />
      <link rel='canonical' href={`${canonical}gen/help/`} />
    </Helmet>
    <ButtonLink route='/gen'>
      Back
    </ButtonLink>
    <h2 className='toolTitle'>LanguaGen Help</h2>
    <Notice>This tool is still in development. More instructions will be added to this help file as the tool is fleshed out.</Notice>
    <p id='description'>LanguaGen is a tool for automatically building a set of words based on arbitrary rules of phonotactics. This can be used to create a dummy vocabulary for linguistic experimentation, to generate words or names for a naming language in a work of fantasy or science fiction, or as the basis for building the vocabulary of a constructed language.</p>
    <h3 id='using'>Using LanguaGen</h3>
    <p>The most important part of the tool is the <strong>Pattern</strong>. This field defines how words will be formed using a specific syntax, defined <a href='#syntax'>below</a>. This field can define specific letters that can be used, or it can contain references to Subpatterns.</p>
    <p>Up to 26 <strong>Subpatterns</strong> are available for use. These subpatterns are defined in exactly the same way as the Pattern. Their power lies in the fact that each Subpattern can be referenced by the Pattern, allowing significantly more variability in word generation.</p>
    <p>In the most common usage, a Subpattern generally represents a class of phonemes while the Pattern represents the possible combinations of all the phoneme classes. For example, one might use a Subpattern named <code>V</code> to represent vowels, <code>C</code> to represent consonants, and <code>N</code> to represent nasals. Alternatively, one might use a Subpattern named <code>O</code> to represent the syllable onset, <code>N</code> to represent the nucleus, and <code>C</code> to represent the coda. There is great flexibility in Subpattern use.</p>
    <h4 id='syntax'>Syntax</h4>
    <p>The syntax is identical for all Pattern and Subpattern fields. Uppercase versions of the standard English letters (e.g. <code>C</code>, <code>V</code>, or <code>N</code>) are variables referring to Subpatterns while any other letter (e.g. <code>a</code>, <code>s</code>, or <code>n</code>) represents that specific glyph.</p>
    <h5 id='options'>Options &ndash; <code>/</code></h5>
    <p>Multiple options can be separated using forward slashes (<code>/</code>). For each word, the tool will randomly select one of the options. By default, each option will have the same chance of being chosen. This can be changed by assigning <a href='#weights'>weights</a>.</p>
    <p>For example, with the Subpatterns <code>V: a/i</code>, <code>C: t/s</code>, and <code>N: m/n</code> and the Pattern <code>CVN</code>, the tool will output the words <samp>sam tan tam tin sim san tim sin</samp>.</p>
    <h5 id='units'>Single Units &ndash; <code>[ ]</code></h5>
    <p>This functionality is planned.</p>
    <h5 id='optional'>Optional Units &ndash; <code>( )</code></h5>
    <p>This functionality is planned.</p>
    <h5 id='weights'>Weights &ndash; <code>*</code></h5>
    <p>This functionality is planned.</p>
    <h5 id='filtering'>Filtering &ndash; <code>^</code></h5>
    <p>This functionality is planned.</p>
    <h5 id='escaping'>Esaping Characters &ndash; <code>" "</code></h5>
    <p>This functionality is planned.</p>
    <h4 id='generating'>Generating Words</h4>
    <p>Once the Pattern and all Subpatterns have been set up, you can click the <strong>Generate</strong> button to generate words. There are also several adjustments you can make, including the total number of words that should be generated, whether each word should be written on a new line, and whether the tool should filter out duplicate words.</p>
    <p>After the words have been generated, some statistics are shown below, including how many words were printed to the output, how many duplicates were filtered out of the results (if any), and how many words are possible based on the given Pattern and Subpatterns. (Note that the number of <em>unique</em> words possible may actually be lower if there are multiple ways to obtain the same word.)</p>
    <h4 id='files'>Saving and Loading Settings</h4>
    <p>This functionality is planned.</p>
    <p>Clicking the <strong>Save</strong> button will save the current settings to the browser’s local storage and generate a small text file containing the current settings that can be saved to your disk. This text file can be loaded using the <strong>Open</strong> button to reload past settings.</p>
  </div>
)

GenHelp.propTypes = {
  classes: PropTypes.object.isRequired
}

export default injectSheet(styles)(GenHelp)
