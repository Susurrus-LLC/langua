import React from 'react'
import { Helmet } from 'react-helmet'
import injectSheet from 'react-jss'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import styles from './styles'
import Notice from '../Notice/Notice'
import Button from '../Button/Button'
import ButtonLink from '../Button/ButtonLink'

import frequenService from './FrequenService'

import { canonical, siteTitle } from '../../App'

class Frequen extends React.Component {
  constructor (props) {
    super(props)
    this.onChangeInput = this.onChangeInput.bind(this)
    this.onAnalyze = this.onAnalyze.bind(this)
    this.state = {
      data: frequenService.getData()
    }
  }

  onChangeInput (e) {
    const val = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    const name = e.target.name
    this.setState(prevState => ({
      data: {
        ...this.state.data,
        [name]: val
      }
    }))
  }

  onAnalyze (e) {
    e.preventDefault()
    const response = frequenService.analyze(this.state.data)
    this.setState(prevState => ({
      results: response
    }))
    // Save the current state to storage
    frequenService.setStorage(this.state.data)
  }

  render () {
    return (
      <div className={this.props.classes.frequen}>
        <Helmet>
          <title>{siteTitle} Frequen</title>
          <meta name='description' content='LanguaFrequen is a tool for analyzing phoneme frequencies in a given text.' />
          <link rel='canonical' href={`${canonical}frequen/`} />
        </Helmet>
        <ButtonLink route='/frequen/help'>
          Help
        </ButtonLink>
        <h2 className='toolTitle'>LanguaFrequen</h2>
        <Notice>This tool is still in development.</Notice>
        <form className={this.props.classes.form}>
          <h5 className={this.props.classes.sectionTitle}>Text Corpus</h5>
          <textarea
            className={classnames(this.props.classes.corpus, this.props.classes.input)}
            id='corpus'
            name='corpus'
            value={this.state.data.corpus}
            onChange={this.onChangeInput}
          />
          <h5 className={this.props.classes.sectionTitle}>Consonants</h5>
          <input
            className={this.props.classes.input}
            id='consonants'
            name='consonants'
            type='text'
            value={this.state.data.consonants}
            onChange={this.onChangeInput}
          />
          <h5 className={this.props.classes.sectionTitle}>Vowels</h5>
          <input
            className={this.props.classes.input}
            id='vowels'
            name='vowels'
            type='text'
            value={this.state.data.vowels}
            onChange={this.onChangeInput}
          />
          <div className={this.props.classes.controls}>
            <Button
              type='submit'
              ver='neutral'
              onClick={this.onAnalyze}
            >
              Analyze
            </Button>
          </div>
        </form>
      </div>
    )
  }
}

Frequen.propTypes = {
  classes: PropTypes.object
}

export default injectSheet(styles)(Frequen)
