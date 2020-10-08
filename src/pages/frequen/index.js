import React, { useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Tool from '../../components/tool'

import FrequenForm from '../../pageComponents/frequen/frequenForm'
import FrequenResults from '../../pageComponents/frequen/frequenResults'
import frequenService from '../../services/frequenService'

import styles from './frequen.module.sass'

const FrequenPage = () => {
  const data = useStaticQuery(graphql`
    query FrequenToolQuery {
      site {
        siteMetadata {
          toolInfo {
            frequen {
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
  const toolInfo = metadata.toolInfo.frequen

  // Functions
  const onChangeInput = () => null // needs to be updated
  const onAnalyze = () => null // needs to be updated
  const onMouseOver = () => null // needs to be updated
  const onMouseOut = () => null // needs to be updated

  // State
  const [corpus, setCorpus] = useState(frequenService.getData().corpus)
  const [consonants, setConsonants] = useState(
    frequenService.getData().consonants
  )
  const [vowels, setVowels] = useState(frequenService.getData().vowels)
  const [distinguishCase, setDistinguishCase] = useState(
    frequenService.getData().distinguishCase
  )
  const [analyzed, setAnalyzed] = useState(frequenService.getData().analyzed)
  const [results, setResults] = useState(frequenService.getData().results)
  const [hovered, setHovered] = useState(frequenService.getData().hovered)
  const [filterSeg, setFilterSeg] = useState(frequenService.getData().filterSeg)
  const [filterSyll, setFilterSyll] = useState(
    frequenService.getData().filterSyll
  )
  const [filterWords, setFilterWords] = useState(
    frequenService.getData().filterWords
  )

  return (
    <Tool toolInfo={toolInfo}>
      <FrequenForm
        styles={styles}
        corpus={corpus}
        consonants={consonants}
        vowels={vowels}
        distinguishCase={distinguishCase}
        onChangeInput={onChangeInput}
        onAnalyze={onAnalyze}
      />
      <FrequenResults
        styles={styles}
        results={results}
        hovered={hovered}
        filterSeg={filterSeg}
        analyzed={analyzed}
        onChangeInput={onChangeInput}
        onMouseOver={onMouseOver}
        onMouseOut={onMouseOut}
      />
    </Tool>
  )
}

export default FrequenPage
