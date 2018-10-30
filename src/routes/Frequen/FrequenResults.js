import React from 'react'
import injectSheet from 'react-jss'
import classNames from 'classnames'
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
import PropTypes from 'prop-types'

import * as v from '../../styles/variables'

import Results from '../../components/Results'
import sharedResultsStyles from '../../components/Results/sharedResultsStyles'
import Control from '../../components/Control'
import ControlPiece from '../../components/Control/Piece'

class FrequenResults extends React.Component {
  constructor (props) {
    super(props)
    this.onChangeInput = this.onChangeInput.bind(this)
    this.twoDecimals = this.twoDecimals.bind(this)
    this.whichData = this.whichData.bind(this)
    this.headerCells = this.headerCells.bind(this)
    this.dataRows = this.dataRows.bind(this)
  }

  onChangeInput (e) {
    e.preventDefault()
    const name = e.target.name
    let val = e.target.val
    this.setState(prevState => ({
      [name]: val
    }))
  }

  twoDecimals (num) {
    return (Math.round(num * 100) / 100).toFixed(2)
  }

  whichData () {
    switch (this.props.filter) {
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
    const filterData = () => {
      let newData = {}
      data.forEach(el => {
        if (el.name === this.props.filter) {
          newData = {
            name: el.name,
            total: el.total
          }
        }
      })
      return newData
    }
    if (this.props.filter !== 'all') {
      return (
        <th className={this.props.classes.headerCell}>
          {`% of ${filterData().name}`}
          <br />
          {`total: ${filterData().total}`}
        </th>
      )
    } else {
      return data.map((d, i) => (
        <th className={this.props.classes.headerCell} key={i}>
          {`% of ${d.name}`}
          <br />
          {`total: ${d.total}`}
        </th>
      ))
    }
  }

  dataRows () {
    const allData = JSON.parse(JSON.stringify(this.whichData())).sort(
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
        {this.props.filter === 'all' ? (
          <td className={this.props.classes.dataCell}>
            {this.twoDecimals(seg.x) + '%'}
          </td>
        ) : null}
        {this.props.filter === 'all' ? (
          <td className={this.props.classes.dataCell}>
            {seg.type === 'consonant'
              ? findPercent(this.props.results.consonants, seg.y)
              : null}
          </td>
        ) : this.props.filter === 'consonants' ? (
          <td className={this.props.classes.dataCell}>
            {this.twoDecimals(seg.x) + '%'}
          </td>
        ) : null}
        {this.props.filter === 'all' ? (
          <td className={this.props.classes.dataCell}>
            {seg.type === 'vowel'
              ? findPercent(this.props.results.vowels, seg.y)
              : null}
          </td>
        ) : this.props.filter === 'vowels' ? (
          <td className={this.props.classes.dataCell}>
            {this.twoDecimals(seg.x) + '%'}
          </td>
        ) : null}
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
        <Results>
          <Control>
            <ControlPiece>
              <select
                id='filter'
                name='filter'
                value={this.props.filter}
                onChange={this.props.onChangeInput}
              >
                <option value='all'>All Segments</option>
                <option value='consonants'>Consonants</option>
                <option value='vowels'>Vowels</option>
              </select>
            </ControlPiece>
          </Control>
          <div
            className={classNames(
              this.props.classes.barChart,
              this.props.classes.resultsSection
            )}
          >
            <FlexibleWidthXYPlot
              yType='ordinal'
              height={v.ms2 * 16 * this.whichData().length}
              margin={{
                top: v.ms3 * 16,
                right: v.ms5 * 16,
                bottom: v.ms3 * 16,
                left: v.ms5 * 16
              }}
              onMouseLeave={this.props.onMouseOut}
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
                onValueMouseOver={this.props.onMouseOver}
                onMouseOut={this.props.onMouseOut}
              />
              {this.props.hovered ? (
                <Hint
                  value={{
                    [`/${this.props.hovered.y}/ (${
                      this.props.hovered.type
                    })`]: `${this.props.hovered.count} (${this.twoDecimals(
                      this.props.hovered.x
                    )}%)`
                  }}
                />
              ) : null}
            </FlexibleWidthXYPlot>
          </div>
          <div
            className={classNames(
              this.props.classes.dataTable,
              this.props.classes.resultsSection
            )}
          >
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
        </Results>
      )
    } else {
      return <div className={this.props.classes.results} />
    }
  }
}

FrequenResults.propTypes = {
  classes: PropTypes.object,
  results: PropTypes.object,
  hovered: PropTypes.object,
  filter: PropTypes.string.isRequired,
  analyzed: PropTypes.bool.isRequired,
  onChangeInput: PropTypes.func.isRequired,
  onMouseOver: PropTypes.func.isRequired,
  onMouseOut: PropTypes.func.isRequired
}

export default injectSheet(sharedResultsStyles)(FrequenResults)
