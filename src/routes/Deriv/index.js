import React from 'react'
import injectSheet from 'react-jss'
import PropTypes from 'prop-types'

import Notice from '../../components/Notice'
import Tool from '../../components/Tool'

import { defData } from './defaultData'
import DerivForm from './DerivForm'
import DerivResults from './DerivResults'
import styles from './styles'

export const derivInfo = {
  title: 'Deriv',
  link: 'deriv',
  description:
    'is a tool for modeling word derivation according to arbitrary rules of morphosyntactics.'
}

class Deriv extends React.Component {
  constructor (props) {
    super(props)
    this.onDerive = this.onDerive.bind(this)
    this.onChange = this.onChange.bind(this)
    this.state = defData
  }

  onDerive (e) {
    e.preventDefault()
    return null
  }

  onChange (e) {
    if (e.target.tagName === 'BUTTON') {
      e.preventDefault()
      if (e.target.id === 'save') {
        // Save the current state to storage and generate a file
        // genService.save(this.state)
      }
    } else if (e.target.type === 'file') {
      e.preventDefault()
      // Open a file and parse it to restore saved state
      const file = e.target.files[0]
      const updateState = response => {
        if (response) {
          // Only change state if the file was successfully opened
          this.setState(prevState => response)
        }
      }
      // genService.open(file, updateState)
    } else {
      const val = e.target.value
      const name = e.target.name
      this.setState(prevState => ({
        [name]: val
      }))
    }
  }

  render () {
    return (
      <Tool toolInfo={derivInfo}>
        <Notice>This tool is still under construction.</Notice>
        <DerivForm
          styles={this.props.classes}
          data={this.state}
          derive={this.onDerive}
          change={this.onChange}
        />
        <DerivResults styles={this.props.classes} />
      </Tool>
    )
  }
}

Deriv.propTypes = {
  classes: PropTypes.object
}

export default injectSheet(styles)(Deriv)
