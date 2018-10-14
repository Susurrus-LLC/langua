import React from 'react'
import { Helmet } from 'react-helmet'
import injectSheet from 'react-jss'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import styles from './styles'
import Notice from '../Notice/Notice'
import ButtonLink from '../Button/ButtonLink'

import frequenService from './FrequenService'

import { canonical, siteTitle } from '../../App'

class Frequen extends React.Component {
  constructor (props) {
    super(props)
    this.onChangeInput = this.onChangeInput.bind(this)
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
        <h5>Text Corpus</h5>
        <textarea
          className={classnames(this.props.classes.corpus, this.props.classes.input)}
          id='corpus'
          name='corpus'
          value={this.state.data.corpus}
          onChange={this.onChangeInput}
        />
        <input
          className={this.props.classes.input}
          id='consonants'
          name='consonants'
          type='text'
          value={this.state.data.consonants}
          onChange={this.onChangeInput}
        />
        <input
          className={this.props.classes.input}
          id='vowels'
          name='vowels'
          type='text'
          value={this.state.data.vowels}
          onChange={this.onChangeInput}
        />
        <input
          id='distinguishCase'
          name='distinguishCase'
          type='checkbox'
          checked={this.state.data.distinguishCase}
          onChange={this.onChangeInput}
        />
      </div>
    )
  }
}

Frequen.propTypes = {
  classes: PropTypes.object
}

export default injectSheet(styles)(Frequen)
