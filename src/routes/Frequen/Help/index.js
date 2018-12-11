import React from 'react'

import Help from '../../../components/Help'
import Notice from '../../../components/Notice'

const toolTitle = 'Frequen'

const FrequenHelp = props => (
  <Help
    toolTitle={toolTitle}
    toolDescription={`Langua${toolTitle} is a tool for analyzing phoneme frequencies in a given text.`}
    link='frequen'
  >
    <Notice>This tool is still in development.</Notice>
    <h3 id='using'>
      Using Langua
      {toolTitle}
    </h3>
    <h4 id='corpus'>Text Corpus</h4>
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
    <h4 id='phonemes'>Phonemes</h4>
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
    <h4 id='allophones'>Allophones</h4>
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
    <h4 id='analysis'>Analysis</h4>
    <p>
      When ready, click the <strong>Analyze</strong> button to run the analysis.
      The tool will draw a graph and display a table showing the frequencies of
      each of the identified segments in the text corpus. Segments that never
      occur will be omitted from the graph and table.
    </p>
    <h4 id='filtering'>Filtering</h4>
    <p>
      After a text has been analyzed, the results can be filtered to show only
      certain segments. Choosing a filter will show the percentages in the data
      as it compares to only segments of that type, rather than comparing to all
      segments.
    </p>
    <p>
      Currently, the results can be filtered to show only consonants or only
      vowels. Additional filtering options will be added in the future.
    </p>
    <h4 id='files'>Saving and Loading Settings</h4>
    <Notice>This functionality has not yet been implemented.</Notice>
    <p>
      Clicking the <strong>Save</strong> button will save the current settings
      to the browser’s local storage and generate a small <code>.lngf</code>{' '}
      text file containing the current settings that can be saved to your disk.
      This <code>.lngf</code> file can be loaded using the <strong>Open</strong>{' '}
      button to reload saved settings.
    </p>
    <h3 id='acknowledgments'>Acknowledgments</h3>
    <p>
      Much thanks should be given to Jan Strasser and{' '}
      <a
        href='http://akana.conlang.org/tools/frequentizer.html'
        target='_blank'
        rel='noopener noreferrer'
      >
        the Frequentizer
      </a>
      . LanguaFrequen was mainly built as a modernized and updated version of
      the Frequentizer.
    </p>
  </Help>
)

export default FrequenHelp
