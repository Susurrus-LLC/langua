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
    this.state = {
      index: null,
      x: null,
      y: null,
      filter: null
    }

    let rawResults = this.props.results
    this.results = []

    if (rawResults) {
      // Find allophones and combine their counts
      for (let seg in rawResults) {
        if (rawResults.hasOwnProperty(seg)) {
          if (rawResults[seg].hasOwnProperty('allophoneOf')) {
            rawResults[rawResults[seg].allophoneOf].count +=
              rawResults[seg].count
            delete rawResults[seg]
          }
        }
      }

      // Add the results to the results array
      for (let seg in rawResults) {
        this.results.push({
          segment: seg,
          count: rawResults[seg].count,
          type: rawResults[seg].type
        })
      }
    }

    this.results.sort((a, b) => {
      return b['count'] - a['count']
    })

    this.fullCount = 0

    this.results.forEach(elObj => {
      this.fullCount += elObj.count
    })
  }

  onMouseOver (datapoint) {
    this.setState({
      index: datapoint.i,
      x: datapoint.x,
      y: datapoint.y
    })
  }

  onMouseOut () {
    this.setState({
      index: null,
      x: null,
      y: null
    })
  }

  render () {
    const data = this.results.map((d, i) => ({
      x: (d.count / this.fullCount) * 100,
      y: d.segment,
      i: i,
      color: i === this.state.index ? v.ong.string() : v.blu.string()
    }))

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
              height={v.ms2 * 16 * data.length}
              onMouseLeave={this.onMouseOut}
            >
              <VerticalGridLines style={gridStyle} />
              <HorizontalGridLines style={gridStyle} />
              <XAxis tickFormat={t => `${t}%`} style={axisStyle} />
              <YAxis style={axisStyle} />
              <HorizontalBarSeries
                data={data}
                animation
                colorType='literal'
                onValueMouseOver={this.onMouseOver}
                onMouseOut={this.onMouseOut}
              />
              {this.state.x ? (
                <Hint
                  value={{ Frequency: `${this.state.x.toFixed(2)}%` }}
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
