import React from 'react'
import PropTypes from 'prop-types'
import 'react-vis/dist/style.css'
import {
  FlexibleWidthXYPlot,
  HorizontalBarSeries,
  HorizontalGridLines,
  VerticalGridLines,
  XAxis,
  YAxis,
  Hint
} from 'react-vis'

import * as v from '../../styles/variables'

class FrequenResults extends React.Component {
  constructor (props) {
    super(props)
    this.onMouseOver = this.onMouseOver.bind(this)
    this.onMouseOut = this.onMouseOut.bind(this)
    this.whichData = this.whichData.bind(this)
    this.state = {
      x: null,
      y: null,
      count: null,
      type: null,
      index: null,
      filter: null
    }
  }

  onMouseOver (datapoint) {
    this.setState({
      x: datapoint.x,
      y: datapoint.y,
      count: datapoint.count,
      type: datapoint.type,
      index: datapoint.i
    })
  }

  onMouseOut () {
    this.setState({
      x: null,
      y: null,
      count: null,
      type: null,
      index: null
    })
  }

  whichData () {
    switch (this.state.filter) {
      case 'consonants':
        return this.props.results.consonants
      case 'vowels':
        return this.props.results.vowels
      default:
        return this.props.results.combined
    }
  }

  render () {
    const axisStyle = {
      fontSize: `${v.ms0}rem`,
      text: {
        fill: `${v.black.lighten(9).string()}`
      },
      line: {
        stroke: `${v.black.lighten(20).string()}`
      }
    }

    const gridStyle = { stroke: `${v.black.lighten(20).string()}` }

    if (this.props.analyzed) {
      return (
        <div className={this.props.classes.results}>
          <div className='bar-chart'>
            <FlexibleWidthXYPlot
              yType='ordinal'
              height={v.ms2 * 16 * this.whichData().length}
              onMouseLeave={this.onMouseOut}
            >
              <VerticalGridLines style={gridStyle} />
              <HorizontalGridLines style={gridStyle} />
              <XAxis tickFormat={t => `${t}%`} style={axisStyle} />
              <YAxis style={axisStyle} />
              <HorizontalBarSeries
                data={this.whichData()}
                animation
                colorType='literal'
                onValueMouseOver={this.onMouseOver}
                onMouseOut={this.onMouseOut}
              />
              {this.state.x ? (
                <Hint
                  value={{
                    [`/${this.state.y}/ (${this.state.type})`]: `${
                      this.state.count
                    } (${this.state.x.toFixed(2)}%)`
                  }}
                  align={{
                    horizontal: 'left',
                    vertical: 'auto'
                  }}
                />
              ) : null}
            </FlexibleWidthXYPlot>
          </div>
        </div>
      )
    } else {
      return <div className={this.props.classes.results} />
    }
  }
}

FrequenResults.propTypes = {
  classes: PropTypes.object,
  results: PropTypes.object.isRequired,
  analyzed: PropTypes.bool.isRequired
}

export default FrequenResults
