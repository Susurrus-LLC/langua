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
    this.twoDecimals = this.twoDecimals.bind(this)
    this.onMouseOver = this.onMouseOver.bind(this)
    this.onMouseOut = this.onMouseOut.bind(this)
    this.whichData = this.whichData.bind(this)
    this.headerCells = this.headerCells.bind(this)
    this.dataRows = this.dataRows.bind(this)
    this.state = {
      x: null,
      y: null,
      count: null,
      type: null,
      index: null,
      filter: null
    }
  }

  twoDecimals (num) {
    return (Math.round(num * 100) / 100).toFixed(2)
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
        return this.props.results.all
    }
  }

  headerCells () {
    let data = []
    for (let prop in this.props.results) {
      if (this.props.results.hasOwnProperty(prop)) {
        let count = 0

        this.props.results[prop].forEach(el => {
          count += el.count
        })

        data.push({
          name: prop,
          total: count
        })
      }
    }
    return data.map((d, i) => (
      <th className={this.props.classes.headerCell} key={i}>
        {`% of ${d.name}`}
        <br />
        {`total: ${d.total}`}
      </th>
    ))
  }

  dataRows () {
    const allData = JSON.parse(JSON.stringify(this.props.results.all)).sort(
      (a, b) => {
        return b.count - a.count
      }
    )

    const findPercent = (arr, y) => {
      let i = -1
      for (let j = 0; j < arr.length; j++) {
        if (arr[j].y === y) {
          i = j
        }
      }

      if (i > -1) {
        return this.twoDecimals(arr[i].x) + '%'
      } else {
        return this.twoDecimals(0) + '%'
      }
    }

    return allData.map(seg => (
      <tr className={this.props.classes.dataRow} key={seg.i}>
        <td className={this.props.classes.dataCell}>{seg.y}</td>
        <td className={this.props.classes.dataCell}>{seg.count}</td>
        <td className={this.props.classes.dataCell}>
          {this.twoDecimals(seg.x) + '%'}
        </td>
        <td className={this.props.classes.dataCell}>
          {seg.type === 'consonant'
            ? findPercent(this.props.results.consonants, seg.y)
            : null}
        </td>
        <td className={this.props.classes.dataCell}>
          {seg.type === 'vowel'
            ? findPercent(this.props.results.vowels, seg.y)
            : null}
        </td>
      </tr>
    ))
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
          <div className={this.props.classes.barChart}>
            <FlexibleWidthXYPlot
              yType='ordinal'
              height={v.ms2 * 16 * this.whichData().length}
              margin={{
                top: v.ms3 * 16,
                right: v.ms5 * 16,
                bottom: v.ms3 * 16,
                left: v.ms5 * 16
              }}
              onMouseLeave={this.onMouseOut}
            >
              <VerticalGridLines style={gridStyle} />
              <HorizontalGridLines style={gridStyle} />
              <XAxis
                tickFormat={t => `${t}%`}
                style={axisStyle}
                orientation='top'
              />
              <XAxis
                tickFormat={t => `${t}%`}
                style={axisStyle}
                orientation='bottom'
              />
              <YAxis style={axisStyle} orientation='left' />
              <YAxis style={axisStyle} orientation='right' />
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
                    } (${this.twoDecimals(this.state.x)}%)`
                  }}
                />
              ) : null}
            </FlexibleWidthXYPlot>
          </div>
          <div className={this.props.classes.dataTable}>
            <table className={this.props.classes.table}>
              <thead className={this.props.classes.tableHead}>
                <tr className={this.props.classes.headerRow}>
                  <th className={this.props.classes.headerCell}>Segment</th>
                  <th className={this.props.classes.headerCell}>Count</th>
                  {this.headerCells()}
                </tr>
              </thead>
              <tbody className={this.props.classes.tableBody}>
                {this.dataRows()}
              </tbody>
            </table>
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
