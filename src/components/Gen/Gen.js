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
        maxWords: 0,
        filtered: 0
      }
    }
  }

  getData () {
    let data

    // Check if there is data in storage. If so, pull it. If not, pull the default data and store it.
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

  // Store the current data in storage
  setStorage (data) {
    if (typeof (Storage) !== 'undefined') {
      this.storage.setItem(this.item, JSON.stringify(data))
    }
  }

  // When a Subpattern variable is changed, store that change in state
  onChangeSelect (e) {
    let newData = JSON.parse(JSON.stringify(this.state.data))
    let id = e.target.id.slice(1)
    newData.subpatterns[id].selected = e.target.value
    this.setState(prevState => ({
      data: newData
    }))
  }

  // When a Subpattern is changed, store that change in state
  onChangeSubpattern (e) {
    let newData = JSON.parse(JSON.stringify(this.state.data))
    let id = e.target.id.slice(1)
    newData.subpatterns[id].subpattern = e.target.value
    this.setState(prevState => ({
      data: newData
    }))
  }

  // When a clear button is clicked, delete the corresponding Subpattern from state
  onClear (e) {
    e.preventDefault()
    let newData = JSON.parse(JSON.stringify(this.state.data))
    let id = e.target.id.slice(1)
    newData.subpatterns.splice(id, 1)
    this.setState(prevState => ({
      data: newData
    }))
  }

  // When the add button is clicked, add a blank Subpattern to state
  onAdd (e) {
    e.preventDefault()
    let toUse = ''
    let newData = JSON.parse(JSON.stringify(this.state.data))

    // Identify the first unused Subpattern variable and select it
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

  // When the pattern is changed, store the change in state
  onChangePattern (e) {
    let newData = JSON.parse(JSON.stringify(this.state.data))
    newData.pattern = e.target.value
    this.setState(prevState => ({
      data: newData
    }))
  }

  // When the number of desired words is changed, store that change in state
  onWordNumChange (e) {
    let val = e.target.value
    // Limit number entry to between 1 and 9999
    if (val < 1) {
      val = 1
    } else if (val > 9999) {
      val = 9999
    }

    // Only push to state if number is between 1 and 9999
    if (val > 0 && val < 10000) {
      let newData = JSON.parse(JSON.stringify(this.state.data))
      newData.words = val
      this.setState(prevState => ({
        data: newData
      }))
    }
  }

  // If the selection for new lines is changed, store that change in state
  onChangeNewline (e) {
    let newData = JSON.parse(JSON.stringify(this.state.data))
    newData.newline = e.target.checked
    this.setState(prevState => ({
      data: newData
    }))
  }

  // If the selection for filtering duplicates is changed, store that change in state
  onChangeDupes (e) {
    let newData = JSON.parse(JSON.stringify(this.state.data))
    newData.filterdupes = e.target.checked
    this.setState(prevState => ({
      data: newData
    }))
  }

  // Generate the output
  onGenerate (e) {
    e.preventDefault()
    // Calculate the stats on the generated output
    const getStats = (data, results) => {
      // Calculate the maximum number of words
      const pattArr = data.pattern.split('/')

      let count = 0

      for (let i = 0; i < pattArr.length; i++) {
        let optCount = 1
        if (pattArr[i].length === 0) {
          optCount = 0
          break
        } else {
          for (let j = 0; j < pattArr[i].length; j++) {
            const variab = pattArr[i][j]
            let addCount = 0
            let multCount = 1
            if (/[()[\]^*"]/.test(variab)) {
              // For now, ignore the characters that will be used for operations
              continue
            } else if (vars.indexOf(variab) === -1) {
              // If the current item in the Pattern is not a variable, add 1 to the count
              addCount += 1
            } else {
              for (let k = 0; k < data.subpatterns.length; k++) {
                const subpattern = data.subpatterns[k]
                if (subpattern.selected === variab) {
                  // If the variable is defined, count how many options are in the Subpattern
                  multCount *= subpattern.subpattern.length
                  break
                } else {
                  // If the variable is unused, skip it
                  continue
                }
              }
            }
            optCount *= multCount
            optCount += addCount
          }
        }
        count += optCount
      }

      // If there are results, count how many words there are
      let words = 0
      if (results[0].length !== 0) {
        words = results.length
      }

      let filtered = 0
      if (data.filterdupes) {
        filtered = data.words - words
      }

      let stats = {
        words: words,
        maxWords: count,
        filtered: filtered
      }

      return stats
    }

    let results = []
    let newData = JSON.parse(JSON.stringify(this.state.data))

    // Split all the Subpatterns into arrays based on '/'
    for (let i = 0; i < newData.subpatterns.length; i++) {
      newData.subpatterns[i].subpattern = newData.subpatterns[i].subpattern.split('/')
    }

    // Split the Pattern into an array based on '/'
    const pattArr = newData.pattern.split('/')

    // Randomly choose from the items in an array
    const chooseRand = (length) => {
      return Math.floor(Math.random() * length)
    }

    // Generate the number of words requested in the settings
    for (let i = 0; i < newData.words; i++) {
      let word = ''

      // If the Pattern has options, choose one
      const patt = pattArr[chooseRand(pattArr.length)]

      for (let j = 0; j < patt.length; j++) {
        const variab = patt[j]

        if (variab === '(' || variab === ')' || variab === '[' || variab === ']' || variab === '^' || variab === '*' || variab === '"') {
          // For now, ignore the characters that will be used for operations
          continue
        } else if (vars.indexOf(variab) === -1) {
          // If the current item in the Pattern is not a variable, add it to the current word
          word += patt[j]
        } else {
          let letter = ''

          for (let k = 0; k < newData.subpatterns.length; k++) {
            const subpattern = newData.subpatterns[k]
            if (subpattern.selected === variab) {
              // If the variable is defined, randomly choose an option from the related Subpattern
              letter = subpattern.subpattern[chooseRand(subpattern.subpattern.length)]
              break
            } else {
              // If the variable is unused, skip it
              continue
            }
          }
          word += letter
        }
      }

      // If filtering duplicates, only push unique words to the results
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

    // Save the current state to storage
    this.setStorage(this.state.data)
  }

  // Save the current state to storage and generate a file
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
