import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Help from '../../../components/help'

export const PureDerivHelp = ({ data }) => {
  const metadata = data?.site?.siteMetadata
  const toolInfo = metadata?.toolInfo?.deriv

  return (
    <Help toolInfo={toolInfo}>
      <h3 id='using'>
        Using {metadata?.title}
        {toolInfo?.title}
      </h3>
      <h4 id='lexemes'>Lexemes</h4>
      <p>
        Enter a list of all lexemes that should be used as roots to be derived
        from. Also add a brief gloss for each of the lexemes.
      </p>
      <h4 id='derivations'>Derivational Affixes</h4>
      <p>
        Enter a list of all derivational affixes that should be used to derive
        new words. Each gloss should contain a single hyphen that marks the
        point at which the affix attaches to the root. If the hyphen is placed
        at the start, the affix will be a suffix. If the hyphen is placed at the
        end, the affix will be a prefix. If the hyphen is placed within the
        affix, it will be split and attached as a circumfix on either side of
        the root. Add a gloss for each of the affixes and a brief definition of
        the change the affix creates.
      </p>
      <h4 id='derive'>Derive</h4>
      <p>
        When the list of lexemes and affixes is ready, click the Derive button
        to generate a list of roots with possible derivational affixes added to
        them. Hovering over the affix glosses in the results will display the
        affix&rsquo;s definition below that gloss.
      </p>
      <p>
        There are also a couple adjustments you can make. First, you can choose
        the total number of words that should be derived from the input. The
        tool will always filter out duplicates, so there will never be more
        results than are mathematically possible given the input. Second, you
        can choose the type of output that should be generated. You can choose
        to use just a single root and generate the chosen number of words using
        different affixes on that root, you can choose to use just a single
        affix and generate the chosen number of words by attaching it to
        different roots, or you can choose to randomly combine any root with any
        affix.
      </p>
      <p>
        After the derivations have been generated, some statistics are shown
        below, including how many derivations were printed to the output and how
        many derivations are possible based on the number of lexemes and affixes
        provided.
      </p>
      <h4 id='files'>Saving and Loading Settings</h4>
      <p>
        Clicking the <strong>Save</strong> button will save the current settings
        to the browser&rsquo;s local storage and generate a small{' '}
        <code>.lngd</code> text file containing the current settings that can be
        saved to your disk. This <code>.lngd</code> file can be loaded using the{' '}
        <strong>Open</strong> button to reload saved settings.
      </p>
      <h3 id='acknowledgments'>Acknowledgments</h3>
      <p>
        Much thanks should be given to Jan Strasser and{' '}
        <a
          href='http://akana.conlang.org/tools/derivizer.html'
          target='_blank'
          rel='noopener noreferrer'
        >
          the Derivizer
        </a>
        . {metadata?.title}
        {toolInfo?.title} was mainly built as a modernized and updated version
        of the Derivizer.
      </p>
    </Help>
  )
}

const DerivHelp = props => {
  const data = useStaticQuery(graphql`
    query DerivHelpQuery {
      site {
        siteMetadata {
          title
          toolInfo {
            deriv {
              title
              link
              description
            }
          }
        }
      }
    }
  `)

  return <PureDerivHelp {...props} data={data} />
}

export default DerivHelp
