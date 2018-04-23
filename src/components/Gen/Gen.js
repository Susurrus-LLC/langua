import React from 'react'
import { Helmet } from 'react-helmet'
import injectSheet from 'react-jss'

import styles from './styles'
import HelpLink from '../HelpLink/HelpLink'
import Notice from '../Notice/Notice'
import GenForm from './GenForm/GenForm'
import GenResults from './GenResults/GenResults'

import { defData, vars } from './defaultData'
import { canonical, siteTitle } from '../../App'

class Gen extends React.Component {
  constructor (props) {
    super(props)
    this.storage = window.localStorage
    this.item = 'gen'
    this.getData = this.getData.bind(this)
    this.setStorage = this.setStorage.bind(this)
    this.onChangeSelect = this.onChangeSelect.bind(this)
    this.onChangeSubpattern = this.onChangeSubpattern.bind(this)
    this.onClear = this.onClear.bind(this)
    this.onAdd = this.onAdd.bind(this)
    this.onChangePattern = this.onChangePattern.bind(this)
    this.onWordNumChange = this.onWordNumChange.bind(this)
    this.onChangeNewline = this.onChangeNewline.bind(this)
    this.onChangeDupes = this.onChangeDupes.bind(this)
    this.onGenerate = this.onGenerate.bind(this)
    this.onSave = this.onSave.bind(this)
    this.classes = props.classes
    this.state = {
      data: this.getData(),
      results: '',
      stats: {
        words: 0,
        maxWords: 0
      }
    }
  }

  getData () {
    let data

    if (typeof (Storage) !== 'undefined') {
      if (this.storage.getItem(this.item)) {
        data = JSON.parse(this.storage.getItem(this.item))
      } else {
        data = defData
        this.storage.setItem(this.item, JSON.stringify(data))
      }
    } else {
      data = defData
    }

    return data
  }

  setStorage (data) {
    if (typeof (Storage) !== 'undefined') {
      this.storage.setItem(this.item, JSON.stringify(data))
    }
  }

  onChangeSelect (e) {
    let newData = JSON.parse(JSON.stringify(this.state.data))
    let id = e.target.id.slice(1)
    newData.subpatterns[id].selected = e.target.value
    this.setState(prevState => ({
      data: newData
    }))
  }

  onChangeSubpattern (e) {
    let newData = JSON.parse(JSON.stringify(this.state.data))
    let id = e.target.id.slice(1)
    newData.subpatterns[id].subpattern = e.target.value
    this.setState(prevState => ({
      data: newData
    }))
  }

  onClear (e) {
    e.preventDefault()
    let newData = JSON.parse(JSON.stringify(this.state.data))
    let id = e.target.id.slice(1)
    newData.subpatterns.splice(id, 1)
    this.setState(prevState => ({
      data: newData
    }))
  }

  onAdd (e) {
    e.preventDefault()
    let toUse = ''
    let newData = JSON.parse(JSON.stringify(this.state.data))

    for (let i = 0; i < vars.length; i++) {
      let used = false
      for (let j = 0; j < newData.subpatterns.length; j++) {
        if (newData.subpatterns[j].selected === vars[i]) {
          used = true
          break
        } else {
          continue
        }
      }
      if (!used) {
        toUse = vars[i]
        break
      } else {
        continue
      }
    }

    if (newData.subpatterns.length < vars.length) {
      newData.subpatterns.push({ selected: toUse, subpattern: '' })
    }

    this.setState(prevState => ({
      data: newData
    }))
  }

  onChangePattern (e) {
    let newData = JSON.parse(JSON.stringify(this.state.data))
    newData.pattern = e.target.value
    this.setState(prevState => ({
      data: newData
    }))
  }

  onWordNumChange (e) {
    let val = e.target.value
    if (val < 1) {
      val = 1
    } else if (val > 9999) {
      val = 9999
    }

    if (val > 0 && val < 10000) {
      let newData = JSON.parse(JSON.stringify(this.state.data))
      newData.words = val
      this.setState(prevState => ({
        data: newData
      }))
    }
  }

  onChangeNewline (e) {
    let newData = JSON.parse(JSON.stringify(this.state.data))
    newData.newline = e.target.checked
    this.setState(prevState => ({
      data: newData
    }))
  }

  onChangeDupes (e) {
    let newData = JSON.parse(JSON.stringify(this.state.data))
    newData.filterdupes = e.target.checked
    this.setState(prevState => ({
      data: newData
    }))
  }

  onGenerate (e) {
    e.preventDefault()

    const getStats = (data, results) => {
      let stats = {
        words: results.length,
        maxWords: 0
      }

      // Calculate the maximum number of words

      return stats
    }

    let results = []
    let newData = JSON.parse(JSON.stringify(this.state.data))

    for (let i = 0; i < newData.subpatterns.length; i++) {
      newData.subpatterns[i].subpattern = newData.subpatterns[i].subpattern.split('/')
    }

    const chooseRand = (length) => {
      return Math.floor(Math.random() * length)
    }

    for (let i = 0; i < newData.words; i++) {
      let word = ''

      for (let j = 0; j < newData.pattern.length; j++) {
        let variab = newData.pattern[j]

        if (vars.indexOf(variab) !== -1) {
          let letter = ''

          for (let k = 0; k < newData.subpatterns.length; k++) {
            const subpattern = newData.subpatterns[k]
            if (subpattern.selected === variab) {
              letter = subpattern.subpattern[chooseRand(subpattern.subpattern.length)]
              break
            } else {
              continue
            }
          }
          word += letter
        } else {
          continue
        }

        /*
        if (letter === '(' || letter === ')' || letter === '[' || letter === ']') {
          continue
        } else {
          word += letter
        }
        */
      }

      if (newData.filterdupes) {
        if (results.indexOf(word) === -1) {
          results.push(word)
        } else {
          continue
        }
      } else {
        results.push(word)
      }
    }

    const response = {
      results: results,
      stats: getStats(newData, results)
    }

    this.setState(prevState => ({
      results: response.results,
      stats: response.stats
    }))

    this.setStorage(this.state.data)
  }

  onSave (e) {
    e.preventDefault()
    this.setStorage(this.state.data)
    // Add a function to save this.state.data to a file
  }

  render () {
    const classes = this.classes
    const state = this.state

    return (
      <div className={classes.gen}>
        <Helmet>
          <title>{siteTitle} Gen</title>
          <meta name='description' content='LanguaGen is a tool for automatically building a set of words based on arbitrary rules of phonotactics.' />
          <link rel='canonical' href={`${canonical}gen/`} />
        </Helmet>
        <HelpLink link='/gen/help'>
          Help
        </HelpLink>
        <h2 className='toolTitle'>LanguaGen</h2>
        <Notice>This tool is still in development. Please be patient until it is complete.</Notice>
        <GenForm
          data={state.data}
          changeSelect={this.onChangeSelect}
          changeSubpattern={this.onChangeSubpattern}
          clear={this.onClear}
          add={this.onAdd}
          changePattern={this.onChangePattern}
          changeWordNum={this.onWordNumChange}
          changeNewline={this.onChangeNewline}
          changeDupes={this.onChangeDupes}
          generate={this.onGenerate}
          save={this.onSave}
        />
        <GenResults
          newLine={state.data.newline}
          results={state.results}
          stats={state.stats}
        />
      </div>
    )
  }
}

export default injectSheet(styles)(Gen)
