import React, { useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Notice from '../../components/notice'
import Tool from '../../components/tool'

import MorphForm from '../../pageComponents/morph/morphForm'
import MorphResults from '../../pageComponents/morph/morphResults'
import morphService from '../../services/morphService'

import styles from './morph.module.sass'

export const pageQuery = graphql`
query MorphToolQuery {
  site {
    siteMetadata {
      toolInfo {
        morph {
          title
          link
          description
        }
      }
    }
  }
}
`

const Morph = props => {
  const toolInfo = props.data?.site?.siteMetadata?.toolInfo?.morph

  // State

  const [categories, setCategories] = useState(
    morphService.getData().categories
  )
  const [rewriteRules, setRewriteRules] = useState(
    morphService.getData().rewriteRules
  )
  const [soundChanges, setSoundChanges] = useState(
    morphService.getData().soundChanges
  )
  const [lexicon, setLexicon] = useState(morphService.getData().lexicon)
  const [outputFormat, setOutputFormat] = useState(
    morphService.getData().outputFormat
  )
  const [showDiff, setShowDiff] = useState(morphService.getData().showDiff)
  const [showChanges, setShowChanges] = useState(
    morphService.getData().showChanges
  )
  const [ruleReport, setRuleReport] = useState(
    morphService.getData().ruleReport
  )
  const [rewriteOutput, setRewriteOutput] = useState(
    morphService.getData().rewriteOutput
  )
  const [results, setResults] = useState(morphService.getData().results)

  // Functions

  const onChange = e => {
    // When an input field is changed, update state
    const name = e.target.name
    let val
    if (e.target.type === 'textarea') {
      // Split the textarea inputs by newlines
      val = e.target.value.split('\n')
    } else {
      // Just get the value of the input
      val = e.target.value
    }

    switch (name) {
      case 'categories':
        setCategories(val)
        break
      case 'rewriteRules':
        setRewriteRules(val)
        break
      case 'soundChanges':
        setSoundChanges(val)
        break
      case 'lexicon':
        setLexicon(val)
        break
      case 'outputFormat':
        setOutputFormat(val)
        break
      default:
    }
  }

  const onCheck = e => {
    // When a checkbox option is changed, update state
    const val = e.target.value
    const checked = e.target.checked
    switch (val) {
      case 'showChanges':
        setShowChanges(checked)
        break
      case 'showDiff':
        setShowDiff(checked)
        break
      case 'ruleReport':
        setRuleReport(checked)
        break
      case 'rewriteOutput':
        setRewriteOutput(checked)
        break
      default:
    }
  }

  const onMorph = e => {
    e.preventDefault()
    const state = {
      categories,
      rewriteRules,
      soundChanges,
      lexicon,
      outputFormat,
      showDiff,
      showChanges,
      ruleReport,
      rewriteOutput,
      results
    }
    // Generate the output
    setResults(morphService.morph(state))
    // Save the current state to storage
    morphService.setStorage(state)
  }

  const onSave = e => {
    e.preventDefault()
    const state = {
      categories,
      rewriteRules,
      soundChanges,
      lexicon,
      outputFormat,
      showDiff,
      showChanges,
      ruleReport,
      rewriteOutput,
      results
    }
    // Save the current state to storage and generate a file
    morphService.save(state)
  }

  const onOpen = e => {
    e.preventDefault()
    const file = e.target.files[0]
    const updateState = response => {
      // Only change state if the file was successfully opened
      if (response) {
        setCategories(response.categories)
        setRewriteRules(response.rewriteRules)
        setSoundChanges(response.soundChanges)
        setLexicon(response.lexicon)
        setOutputFormat(response.outputFormat)
        setShowDiff(response.showDiff)
        setShowChanges(response.showChanges)
        setRuleReport(response.ruleReport)
        setRewriteOutput(response.rewriteOutput)
        setResults(response.results)
      }
    }

    morphService.open(file, updateState)
  }

  return (
    <Tool toolInfo={toolInfo}>
      <Notice>This tool is still in development.</Notice>
      <MorphForm
        styles={styles}
        data={{
          categories,
          rewriteRules,
          soundChanges,
          lexicon,
          outputFormat,
          showDiff,
          showChanges,
          ruleReport,
          rewriteOutput
        }}
        change={onChange}
        morph={onMorph}
        check={onCheck}
        save={onSave}
        open={onOpen}
      />
      <MorphResults
        styles={styles}
        outputFormat={outputFormat}
        results={results}
        showDiff={showDiff}
        showChanges={showChanges}
      />
    </Tool>
  )
}

export default Morph
