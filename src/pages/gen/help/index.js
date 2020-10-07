import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Notice from '../../../components/notice'
import Help from '../../../components/help'

const GenHelpPage = () => {
  const data = useStaticQuery(graphql`
    query GenHelpQuery {
      site {
        siteMetadata {
          toolInfo {
            gen {
              title
              link
              description
            }
          }
        }
      }
    }
  `)

  const metadata = data.site.siteMetadata
  const toolInfo = metadata.toolInfo.gen

  return (
    <Help toolInfo={toolInfo}>
      <h3 id='using'>
        Using {metadata.title}
        {toolInfo.title}
      </h3>
      <p>
        The most important part of the tool is the <strong>Pattern</strong>.
        This field defines how words will be formed using a specific syntax,
        defined <a href='#syntax'>below</a>. This field can define specific
        letters that can be used, or it can contain references to Subpatterns.
      </p>
      <p>
        Up to 26 <strong>Subpatterns</strong> are available for use. These
        subpatterns are defined in exactly the same way as the Pattern. Their
        power lies in the fact that each Subpattern can be referenced by the
        Pattern, allowing significantly more variability in word generation.
      </p>
      <p>
        In the most common usage, a Subpattern generally represents a class of
        phonemes while the Pattern represents the possible combinations of all
        the phoneme classes. For example, one might use a Subpattern named{' '}
        <code>V</code> to represent vowels, <code>C</code> to represent
        consonants, and <code>N</code> to represent nasals. Alternatively, one
        might use a Subpattern named <code>O</code> to represent the syllable
        onset, <code>N</code> to represent the nucleus, and <code>C</code> to
        represent the coda. There is great flexibility in Subpattern use.
      </p>
      <h4 id='syntax'>Syntax</h4>
      <p>
        The syntax is identical for all Pattern and Subpattern fields. Uppercase
        versions of the standard English letters (e.g. <code>C</code>,{' '}
        <code>V</code>, or <code>N</code>) are variables referring to
        Subpatterns while any other letter (e.g. <code>a</code>, <code>s</code>,
        or <code>n</code>) represents that specific glyph.
      </p>
      <h5 id='options'>
        Options &ndash; <code>/</code>
      </h5>
      <p>
        Multiple options can be separated using forward slashes (<code>/</code>
        ). For each word, the tool will randomly select one of the options. By
        default, each option will have the same chance of being chosen. This can
        be changed by assigning <a href='#weights'>weights</a>. For example,
        with the Subpatterns <code>V: a/i</code>, <code>C: t/s</code>, and{' '}
        <code>N: m/n</code> and the Pattern <code>CVN</code>, the tool will
        output the words <samp>sam tan tam tin sim san tim sin</samp>.
      </p>
      <h5 id='units'>
        Single Units &ndash; <code>[ ]</code>
      </h5>
      <Notice>This functionality has not yet been implemented.</Notice>
      <p>
        Everything contained within brackets (<code>[ ]</code>) is treated as a
        single unit. For example, the Pattern <code>as[tu/top/kan]</code> will
        produce the output <code>astu astop askan</code>. Brackets and
        parentheses can be nested unlimitedly.
      </p>
      <h5 id='optional'>
        Optional Units &ndash; <code>( )</code>
      </h5>
      <Notice>This functionality has not yet been implemented.</Notice>
      <p>
        Everything contained within parentheses (<code>( )</code>) is treated as
        a single unit that is optional. For example, the Pattern{' '}
        <code>as(tu/top/kan)</code> will produce the output{' '}
        <code>as astu astop askan</code>. Parentheses and brackets can be nested
        unlimitedly.
      </p>
      <h5 id='weights'>
        Weights &ndash; <code>*</code>
      </h5>
      <Notice>This functionality has not yet been implemented.</Notice>
      <p>
        Weights can be added to certain choices using an asterisk <code>*</code>{' '}
        and a number to improve the likelihood of it being chosen. For example,
        with the pattern <code>a/e*3/i*2/o/u*5</code>, the tool would output{' '}
        <code>a</code> or <code>o</code> with equal probability, but compared to
        these would be twice as likely to output <code>i</code>, three times as
        likely to output <code>e</code>, and five times as likely to output{' '}
        <code>u</code>. The number used as a weight must be an integer between 1
        and 128.
      </p>
      <h5 id='filtering'>
        Filtering &ndash; <code>^</code>
      </h5>
      <Notice>This functionality has not yet been implemented.</Notice>
      <p>
        Filtering can be added to units using a caret <code>^</code> and a
        potential output to restrict the possible results. Multiple filters can
        be added to the same unit to filter out multiple options. For example,
        with the Subpattern <code>V: a/i/u</code> and hte Pattern{' '}
        <code>t[VV]^aa^ii^uu</code>, the tool will output{' '}
        <code>tai tau tia tiu tua tui</code>, filtering out{' '}
        <code>taa tii tuu</code>.
      </p>
      <h5 id='escaping'>
        Esaping Characters &ndash; <code>&quot; &quot;</code>
      </h5>
      <Notice>This functionality has not yet been implemented.</Notice>
      <p>
        Special characters otherwise used for the tool&rsquo;s syntax can be
        escaped using double quotes <code>&quot; &quot;</code>. For example,
        with the Subpattern <code>V: a/i/u</code> and the Pattern{' '}
        <code>Vt&quot;V[n/m]&quot;</code>, the tool will produce the output{' '}
        <code>atV[n/m] itV[n/m] utV[n/m]</code>.
      </p>
      <h4 id='generating'>Generating Words</h4>
      <p>
        Once the Pattern and all Subpatterns have been set up, you can click the{' '}
        <strong>Generate</strong> button to generate words. There are also
        several adjustments you can make, including the total number of words
        that should be generated, whether each word should be written on a new
        line, and whether the tool should filter out duplicate words.
      </p>
      <p>
        After the words have been generated, some statistics are shown below,
        including how many words were printed to the output, how many duplicates
        were filtered out of the results (if any), and how many words are
        possible based on the given Pattern and Subpatterns. (Note that the
        number of <em>unique</em> words possible may actually be lower if there
        are multiple ways to obtain the same word.)
      </p>
      <h4 id='files'>Saving and Loading Settings</h4>
      <p>
        Clicking the <strong>Save</strong> button will save the current settings
        to the browser’s local storage and generate a small <code>.lngg</code>{' '}
        text file containing the current settings that can be saved to your
        disk. This <code>.lngg</code> file can be loaded using the{' '}
        <strong>Open</strong> button to reload saved settings.
      </p>
      <h3 id='acknowledgments'>Acknowledgments</h3>
      <p>
        Much thanks should be given to Petr Mejzlík and{' '}
        <a
          href='https://github.com/nai888/awkwords'
          target='_blank'
          rel='noopener noreferrer'
        >
          Awkwords
        </a>
        . {metadata.title}
        {toolInfo.title} was mainly built as a modernized and updated version of
        Awkwords.
      </p>
    </Help>
  )
}

export default GenHelpPage
