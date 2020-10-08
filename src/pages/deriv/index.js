import React, { useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Tool from '../../components/tool'

import DerivForm from '../../pageComponents/deriv/derivForm'
import DerivResults from '../../pageComponents/deriv/derivResults'
import derivService from '../../services/derivService'

import styles from './deriv.module.sass'

const DerivPage = () => {
  const data = useStaticQuery(graphql`
    query DerivToolQuery {
      site {
        siteMetadata {
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

  const metadata = data.site.siteMetadata
  const toolInfo = metadata.toolInfo.deriv

  // State

  const [words, setWords] = useState(derivService.getData().words)
  const [type, setType] = useState(derivService.getData().type)
  const [lexemes, setLexemes] = useState(derivService.getData().lexemes)
  const [derivations, setDerivations] = useState(
    derivService.getData().derivations
  )
  const [results, setResults] = useState(derivService.getData().results)

  // Functions

  const onChange = e => {
    const state = { words, type, lexemes, derivations, results }
    if (e.target.tagName === 'BUTTON') {
      e.preventDefault()
      if (e.target.type === 'submit') {
        // Derive the output
        const response = derivService.derive(state)
        state.results = response
        setResults(response)
        // Save the current state to storage
        derivService.setStorage(state)
      } else if (e.target.id === 'save') {
        // Save the current state to storage and generate a file
        derivService.save(state)
      } else if (e.target.id.slice(3) === 'Add') {
        const which = e.target.id.slice(0, 3)
        // When the add button is clicked, add a blank row to state
        const newData = derivService.add(state, which)
        setLexemes(newData.lexemes)
        setDerivations(newData.derivations)
      } else if (e.target.id.slice(1, 2) === 'c') {
        // When a row is cleared, delete teh corresponding row from state
        const idNum = e.target.id.slice(2)
        const which = e.target.id.slice(0, 1)
        const newData = derivService.clear(state, idNum, which)
        setLexemes(newData.lexemes)
        setDerivations(newData.derivations)
      }
    } else if (e.target.type === 'file') {
      e.preventDefault()
      // Open a file and parse it to restore saved state
      const file = e.target.files[0]
      const updateState = response => {
        if (response) {
          // Only change state if the file was successfully opened
          setWords(response.words)
          setType(response.type)
          setLexemes(response.lexemes)
          setDerivations(response.derivations)
          setResults(response.results)
        }
      }

      derivService.open(file, updateState)
    } else {
      const idNum = e.target.id.slice(2)
      const which = e.target.id.slice(0, 2)
      const val = e.target.value
      const name = e.target.name
      if (
        which === 'lw' ||
        which === 'ld' ||
        which === 'da' ||
        which === 'dl' ||
        which === 'dd'
      ) {
        const response = derivService.changeInput(state, idNum, which, val)
        if (response) {
          // Only change state if the input was successfully changed
          setWords(response.words)
          setType(response.type)
          setLexemes(response.lexemes)
          setDerivations(response.derivations)
          setResults(response.results)
        }
      } else if (e.target.name === 'words') {
        const response = derivService.wordNumChange(state, val)
        if (response) {
          // Only change state if the word number was successfully changed
          setWords(response.words)
          setType(response.type)
          setLexemes(response.lexemes)
          setDerivations(response.derivations)
          setResults(response.results)
        }
      } else {
        if (e.target.name === 'type') {
          setType(val)
        }
      }
    }
  }

  return (
    <Tool toolInfo={toolInfo}>
      <DerivForm
        styles={styles}
        data={{ words, type, lexemes, derivations }}
        change={onChange}
      />
      <DerivResults styles={styles} results={results} />
    </Tool>
  )
}

export default DerivPage
