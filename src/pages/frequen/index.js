import React, { useState, useEffect } from 'react'
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
  const [updateAnalysis, setUpdateAnalysis] = useState(false)
  const [results, setResults] = useState(frequenService.getData().results)
  const [hovered, setHovered] = useState(frequenService.getData().hovered)
  const [filterSeg, setFilterSeg] = useState(frequenService.getData().filterSeg)
  const [filterSyll, setFilterSyll] = useState(
    frequenService.getData().filterSyll
  )
  const [filterWords, setFilterWords] = useState(
    frequenService.getData().filterWords
  )

  // Functions
  const onChangeInput = e => {
    const state = {
      corpus,
      consonants,
      vowels,
      distinguishCase,
      analyzed,
      results,
      hovered,
      filterSeg,
      filterSyll,
      filterWords
    }

    if (e.target.tagName === 'BUTTON') {
      e.preventDefault()

      if (e.target.id === 'save') {
        // Save the current state to storage and generate a file
        frequenService.save(state)
      }
    } else if (e.target.id === 'file') {
      e.preventDefault()

      // Open a file and parse it to restore a saved state
      const file = e.target.files[0]
      const updateState = response => {
        // Only change state if the file was successfully opened
        if (response) {
          setCorpus(response.corpus)
          setConsonants(response.consonants)
          setVowels(response.vowels)
          setDistinguishCase(response.distinguishCase)
          setAnalyzed(response.analyzed)
          setResults(response.results)
          setHovered(response.hovered)
          setFilterSeg(response.filterSeg)
          setFilterSyll(response.filterSyll)
          setFilterWords(response.filterWords)
        }
      }

      frequenService.open(file, updateState)
    } else {
      const val =
        e.target.type === 'checkbox' ? e.target.checked : e.target.value
      const name = e.target.name
      switch (name) {
        case 'corpus':
          setCorpus(val)
          break
        case 'consonants':
          setConsonants(val)
          break
        case 'vowels':
          setVowels(val)
          break
        case 'distinguishCase':
          setDistinguishCase(val)
          break
        case 'filterSeg':
          setFilterSeg(val)
          break
        default:
      }
    }
  }

  const onAnalyze = e => {
    e.preventDefault()
    setAnalyzed(false)
    setUpdateAnalysis(true)
  }

  useEffect(() => {
    if (updateAnalysis) {
      const state = {
        corpus,
        consonants,
        vowels,
        distinguishCase,
        analyzed,
        results,
        hovered,
        filterSeg,
        filterSyll,
        filterWords
      }

      frequenService.setStorage(state)

      const response = frequenService.analyze(state)

      setResults(response)
      setAnalyzed(true)
    }
  }, [updateAnalysis])

  const onMouseOver = datapoint => setHovered(datapoint)

  const onMouseOut = () => setHovered(undefined)

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
