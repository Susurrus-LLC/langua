import React from 'react'
import { Helmet } from 'react-helmet'
import injectSheet from 'react-jss'

import styles from './styles'
import ButtonLink from '../Button/ButtonLink'
import Notice from '../Notice/Notice'
import GenForm from './GenForm/GenForm'
import GenResults from './GenResults/GenResults'
import genService from './GenService'

import { canonical, siteTitle } from '../../App'

class Gen extends React.Component {
  constructor (props) {
    super(props)
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
    this.onOpen = this.onOpen.bind(this)
    this.classes = props.classes
    this.state = {
      data: genService.getData(),
      results: '',
      stats: {
        words: 0,
        maxWords: 0,
        filtered: 0
      }
    }
  }

  // When a Subpattern variable is changed, store that change in state
  onChangeSelect (e) {
    const id = e.target.id.slice(1)
    const val = e.target.value
    this.setState(prevState => ({
      data: genService.changeSelect(id, val, this.state.data)
    }))
  }

  // When a Subpattern is changed, store that change in state
  onChangeSubpattern (e) {
    const id = e.target.id.slice(1)
    const val = e.target.value
    this.setState(prevState => ({
      data: genService.changeSubpattern(id, val, this.state.data)
    }))
  }

  // When a Subpattern is cleared, delete the corresponding Subpattern from state
  onClear (e) {
    e.preventDefault()
    const id = e.target.id.slice(1)
    this.setState(prevState => ({
      data: genService.clear(id, this.state.data)
    }))
  }

  // When the add button is clicked, add a blank Subpattern to state
  onAdd (e) {
    e.preventDefault()
    this.setState(prevState => ({
      data: genService.add(this.state.data)
    }))
  }

  // When the pattern is changed, store the change in state
  onChangePattern (e) {
    const val = e.target.value
    this.setState(prevState => ({
      data: genService.changePattern(val, this.state.data)
    }))
  }

  // When the number of desired words is changed, store that change in state
  onWordNumChange (e) {
    let val = e.target.value
    // Only update state if there's a change
    if (genService.wordNumChange(val, this.state.data)) {
      this.setState(prevState => ({
        data: genService.wordNumChange(val, this.state.data)
      }))
    }
  }

  // If the selection for new lines is changed, store that change in state
  onChangeNewline (e) {
    const checked = e.target.checked
    this.setState(prevState => ({
      data: genService.changeNewline(checked, this.state.data)
    }))
  }

  // If the selection for filtering duplicates is changed, store that change in state
  onChangeDupes (e) {
    const checked = e.target.checked
    this.setState(prevState => ({
      data: genService.changeDupes(checked, this.state.data)
    }))
  }

  // Generate the output
  onGenerate (e) {
    e.preventDefault()
    const response = genService.generate(this.state.data)
    this.setState(prevState => ({
      results: response.results,
      stats: response.stats
    }))
    // Save the current state to storage
    genService.setStorage(this.state.data)
  }

  // Save the current state to storage and generate a file
  onSave (e) {
    e.preventDefault()
    genService.save(this.state.data)
  }

  // Open a file and parse it to restore a saved state
  onOpen (e) {
    e.preventDefault()
    genService.open(this.state.data)
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
        <ButtonLink route='/gen/help'>
          Help
        </ButtonLink>
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
          open={this.onOpen}
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
