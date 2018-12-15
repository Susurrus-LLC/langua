import React from 'react'
import injectSheet from 'react-jss'
import PropTypes from 'prop-types'

import Tool from '../../components/Tool'

import DerivForm from './DerivForm'
import DerivResults from './DerivResults'
import derivService from './DerivService'
import styles from './styles'

export const derivInfo = {
  title: 'Deriv',
  link: 'deriv',
  description:
    'is a tool for modeling word derivation based on a given list of lexemes and affixes.'
}

class Deriv extends React.Component {
  constructor (props) {
    super(props)
    this.onChange = this.onChange.bind(this)
    this.state = derivService.getData()
  }

  onChange (e) {
    if (e.target.tagName === 'BUTTON') {
      e.preventDefault()
      if (e.target.type === 'submit') {
        // Derive the output
        const response = derivService.derive(this.state)
        this.setState(prevState => ({
          results: response
        }))
        // Save the current state to storage
        derivService.setStorage(this.state)
      } else if (e.target.id === 'save') {
        // Save the current state to storage and generate a file
        derivService.save(this.state)
      } else if (e.target.id.slice(3) === 'Add') {
        const which = e.target.id.slice(0, 3)
        // When the add button is clicked, add a blank row to state
        this.setState(prevState => derivService.add(this.state, which))
      } else if (e.target.id.slice(1, 2) === 'c') {
        // When a row is cleared, delete the corresponding row from state
        const idNum = e.target.id.slice(2)
        const which = e.target.id.slice(0, 1)
        this.setState(prevState => derivService.clear(this.state, idNum, which))
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
      derivService.open(file, updateState)
    } else {
      const idNum = e.target.id.slice(2)
      const which = e.target.id.slice(0, 2)
      const val = e.target.value
      const name = e.target.name
      if (
        which === 'lw' ||
        which === 'ld' ||
        which === 'da' ||
        which === 'dl' ||
        which === 'dd'
      ) {
        this.setState(prevState =>
          derivService.changeInput(this.state, idNum, which, val)
        )
      } else if (e.target.name === 'words') {
        const response = derivService.wordNumChange(this.state, val)
        if (response) {
          this.setState(prevState => response)
        }
        this.setState(prevState => derivService.wordNumChange(this.state, val))
      } else {
        this.setState(prevState => ({
          [name]: val
        }))
      }
    }
  }

  componentWillUnmount () {
    this.setState(prevState => ({
      results: undefined
    }))
  }

  render () {
    return (
      <Tool toolInfo={derivInfo}>
        <DerivForm
          styles={this.props.classes}
          data={this.state}
          change={this.onChange}
        />
        <DerivResults
          styles={this.props.classes}
          results={this.state.results}
        />
      </Tool>
    )
  }
}

Deriv.propTypes = {
  classes: PropTypes.object
}

export default injectSheet(styles)(Deriv)
