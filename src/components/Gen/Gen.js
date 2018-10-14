import React from 'react'
import { Helmet } from 'react-helmet'
import injectSheet from 'react-jss'
import PropTypes from 'prop-types'

import styles from './styles'
import ButtonLink from '../Button/ButtonLink'
import GenForm from './GenForm/GenForm'
import GenResults from './GenResults/GenResults'
import genService from './GenService'

import { canonical, siteTitle } from '../../App'

// String.endsWith() polyfill
if (!String.prototype.endsWith) {
  // eslint-disable-next-line
  String.prototype.endsWith = (search, thisLen) => {
    if (thisLen === undefined || thisLen > this.length) {
      thisLen = this.length
    }
    return this.substring(thisLen - search.length, thisLen) === search
  }
}

class Gen extends React.Component {
  constructor (props) {
    super(props)
    this.onChangeInput = this.onChangeInput.bind(this)
    this.classes = props.classes
    this.state = {
      data: genService.getData(),
      status: ['ok'],
      results: [''],
      stats: {
        words: 0,
        maxWords: 0,
        filtered: 0,
        remaining: 0
      }
    }
  }

  onChangeInput (e) {
    if (e.target.tagName === 'BUTTON') {
      e.preventDefault()
      if (e.target.type === 'submit') {
        // Generate the output
        const response = genService.generate(this.state.data)
        this.setState(prevState => ({
          status: response.status,
          results: response.results,
          stats: response.stats
        }))
        // Save the current state to storage
        genService.setStorage(this.state.data)
      } else if (e.target.type === 'button') {
        if (e.target.id === 'save') {
          // Save the current state to storage and generate a file
          genService.save(this.state.data)
        } else if (e.target.id === 'add') {
          // When the add button is clicked, add a blank Subpattern to state
          this.setState(prevState => ({
            data: genService.add(this.state.data)
          }))
        } else if (e.target.id.slice(0, 1) === 'c') {
          // When a Subpattern is cleared, delete the corresponding Subpattern from state
          const id = e.target.id.slice(1)
          this.setState(prevState => ({
            data: genService.clear(id, this.state.data)
          }))
        }
      }
    } else if (e.target.type === 'file') {
      e.preventDefault()
      // Open a file and parse it to restore a saved state
      const file = e.target.files[0]
      const updateState = (response) => {
        if (response) { // Only change state if the file was successfully opened
          this.setState(prevState => ({
            data: response
          }))
        }
      }
      genService.open(file, this.state.data, updateState)
    } else if (e.target.type === 'checkbox') {
      const checked = e.target.checked
      if (e.target.id === 'newline') {
        // If the selection for new lines is changed, store that change in state
        this.setState(prevState => ({
          data: genService.changeNewline(checked, this.state.data)
        }))
      } else if (e.target.id === 'filterdupes') {
        // If the selection for filtering duplicates is changed, store that change in state
        this.setState(prevState => ({
          data: genService.changeDupes(checked, this.state.data)
        }))
      }
    } else {
      const val = e.target.value
      if (e.target.id === 'pattern') {
        // When the pattern is changed, store the change in state
        this.setState(prevState => ({
          data: genService.changePattern(val, this.state.data)
        }))
      } else if (e.target.id === 'words') {
        // When the number of desired words is changed, store that change in state
        if (genService.wordNumChange(val, this.state.data)) {
          // Only update state if there's a change
          this.setState(prevState => ({
            data: genService.wordNumChange(val, this.state.data)
          }))
        }
      } else {
        const id = e.target.id.slice(1)
        const which = e.target.id.slice(0, 1)
        if (which === 'v') {
          // When a Subpattern variable is changed, store that change in state
          this.setState(prevState => ({
            data: genService.changeSelect(id, val, this.state.data)
          }))
        } else if (which === 'p') {
          // When a Subpattern is changed, store that change in state
          this.setState(prevState => ({
            data: genService.changeSubpattern(id, val, this.state.data)
          }))
        }
      }
    }
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
        <GenForm
          data={state.data}
          change={this.onChangeInput}
        />
        <GenResults
          newLine={state.data.newline}
          filterDupes={state.data.filterdupes}
          status={state.status}
          results={state.results}
          stats={state.stats}
        />
      </div>
    )
  }
}

Gen.propTypes = {
  classes: PropTypes.object
}

export default injectSheet(styles)(Gen)
