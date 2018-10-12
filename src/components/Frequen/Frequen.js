import React from 'react'
import { Helmet } from 'react-helmet'
import injectSheet from 'react-jss'
import PropTypes from 'prop-types'

import styles from './styles'
import Notice from '../Notice/Notice'
import ButtonLink from '../Button/ButtonLink'

import { canonical, siteTitle } from '../../App'

class Frequen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      corpus: '',
      consonants: [''],
      vowels: ['']
    }
  }

  onChangeCorpus (e) {
    const val = e.target.value
    this.setState(prevState => ({
      corpus: val
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
          className={this.props.classes.corpus}
          id='corpus'
          name='corpus'
        />
      </div>
    )
  }
}

Frequen.propTypes = {
  classes: PropTypes.object
}

export default injectSheet(styles)(Frequen)
