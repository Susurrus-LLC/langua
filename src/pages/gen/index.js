import React, { useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Tool from '../../components/tool'

import GenForm from '../../pageComponents/gen/genForm'
import GenResults from '../../pageComponents/gen/genResults'
import genService from '../../services/genService'

import styles from './gen.module.sass'

export const PureGen = ({ data }) => {
  const toolInfo = data?.site?.siteMetadata?.toolInfo?.gen

  // State

  const [subpatterns, setSubpatterns] = useState(
    genService.getData().subpatterns
  )
  const [pattern, setPattern] = useState(genService.getData().pattern)
  const [words, setWords] = useState(genService.getData().words)
  const [newline, setNewline] = useState(genService.getData().newline)
  const [filterdupes, setFilterdupes] = useState(
    genService.getData().filterdupes
  )
  const [status, setStatus] = useState(['ok'])
  const [results, setResults] = useState([''])
  const [stats, setStats] = useState({
    words: 0,
    maxWords: 0,
    filtered: 0,
    remaining: 0
  })

  // Functions

  const onChangeInput = e => {
    const data = {
      subpatterns,
      pattern,
      words,
      newline,
      filterdupes
    }

    if (e.target.tagName === 'BUTTON') {
      e.preventDefault()
      if (e.target.type === 'submit') {
        // Generate the output
        const response = genService.generate(data)
        setStatus(response.status)
        setResults(response.results)
        setStats(response.stats)
        // Save the current state to storage
        genService.setStorage(data)
      } else if (e.target.type === 'button') {
        if (e.target.id === 'save') {
          // Save the current state to storage and generate a file
          genService.save(data)
        } else if (e.target.id === 'add') {
          // When the add button is clicked, add a blank Subpattern to state
          setSubpatterns(genService.add(data).subpatterns)
        } else if (e.target.id.slice(0, 1) === 'c') {
          // When a Subpattern is cleared, delete the corresponding Subpattern from state
          const id = e.target.id.slice(1)
          setSubpatterns(genService.clear(id, data).subpatterns)
        }
      }
    } else if (e.target.type === 'file') {
      e.preventDefault()
      // Open a file and parse it to restore a saved state
      const file = e.target.files[0]
      const updateState = response => {
        if (response) {
          // Only change state if the file was successfully opened
          setSubpatterns(response.subpatterns)
          setPattern(response.pattern)
          setWords(response.words)
          setNewline(response.newline)
          setFilterdupes(response.filterdupes)
        }
      }
      genService.open(file, updateState)
    } else if (e.target.type === 'checkbox') {
      const checked = e.target.checked
      if (e.target.id === 'newline') {
        // If the selection for new lines is changed, store that change in state
        setNewline(genService.changeNewline(checked, data).newline)
      } else if (e.target.id === 'filterdupes') {
        // If the selection for filtering duplicates is changed, store that change in state
        setFilterdupes(genService.changeDupes(checked, data).filterdupes)
      }
    } else {
      const val = e.target.value
      if (e.target.id === 'pattern') {
        // When the pattern is changed, store the change in state
        setPattern(genService.changePattern(val, data).pattern)
      } else if (e.target.id === 'words') {
        // When the number of desired words is changed, store that change in state
        const response = genService.wordNumChange(val, data)
        if (response) {
          // Only update state if there's a change
          setWords(response.words)
        }
      } else {
        const id = e.target.id.slice(1)
        const which = e.target.id.slice(0, 1)
        if (which === 'v') {
          // When a Subpattern variable is changed, store that change in state
          setSubpatterns(genService.changeSelect(id, val, data).subpatterns)
        } else if (which === 'p') {
          // When a Subpattern is changed, store that change in state
          setSubpatterns(genService.changeSubpattern(id, val, data).subpatterns)
        }
      }
    }
  }

  return (
    <Tool toolInfo={toolInfo}>
      <GenForm
        styles={styles}
        data={{
          subpatterns,
          pattern,
          words,
          newline,
          filterdupes
        }}
        change={onChangeInput}
      />
      <GenResults
        styles={styles}
        newline={newline}
        filterDupes={filterdupes}
        status={status}
        results={results}
        stats={stats}
      />
    </Tool>
  )
}

const Gen = props => {
  const data = useStaticQuery(graphql`
    query GenToolQuery {
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

  return <PureGen {...props} data={data} />
}

export default Gen
