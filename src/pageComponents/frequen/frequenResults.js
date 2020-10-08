import React from 'react'
import classNames from 'classnames'
import {
  FlexibleWidthXYPlot,
  HorizontalBarSeries,
  HorizontalGridLines,
  VerticalGridLines,
  XAxis,
  YAxis,
  Hint
} from 'react-vis'
import 'react-vis/dist/style.css'
import PropTypes from 'prop-types'

import Results from '../../components/results'
import Control from '../../components/control'
import ControlPiece from '../../components/control/piece'

import sharedStyles from '../../components/results/sharedResults.module.sass'

const FrequenResults = ({
  styles,
  results,
  hovered,
  filterSeg,
  analyzed,
  onChangeInput,
  onMouseOver,
  onMouseOut
}) => {
  const twoDecimals = num => (Math.round(num * 100) / 100).toFixed(2)

  const whichData = () => {
    switch (filterSeg) {
      case 'consonants':
        return results.consonants
      case 'vowels':
        return results.vowels
      default:
        return results.all
    }
  }

  const headerCells = () => {
    let data = []

    for (let prop in results) {
      if (results.hasOwnProperty(prop)) {
        let count = 0

        results[prop].forEach(el => {
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
        if (el.name === filterSeg) {
          newData = {
            name: el.name,
            total: el.total
          }
        }
      })

      return newData
    }

    if (filterSeg !== 'all') {
      return (
        <th className={sharedStyles.headerCell}>
          {`% of ${filterData().name}`}
          <br />
          {`total: ${filterData().total}`}
        </th>
      )
    } else {
      return data.map((d, i) => (
        <th className={sharedStyles.headerCell} key={i}>
          {`% of ${d.name}`}
          <br />
          {`total: ${d.total}`}
        </th>
      ))
    }
  }

  const dataRows = () => {
    const allData = JSON.parse(JSON.stringify(whichData())).sort((a, b) => {
      return b.count - a.count
    })

    const findPercent = (arr, y) => {
      let i = -1

      for (let j = 0; j < arr.length; j++) {
        if (arr[j].y === y) {
          i = j
        }
      }

      if (i > -1) {
        return `${twoDecimals(arr[i].x)}%`
      } else {
        return `${twoDecimals(0)}%`
      }
    }

    return allData.map(seg => {
      const segment = seg.y
      const count = seg.count
      const percent = twoDecimals(seg.x)
      const consPercent = findPercent(results.consonants, segment)
      const vowsPercent = findPercent(results.vowels, segment)

      return (
        <tr className={sharedStyles.dataRow} key={seg.i}>
          <td className={sharedStyles.dataCell}>{segment}</td>
          <td className={sharedStyles.dataCell}>{count}</td>
          <td className={sharedStyles.dataCell}>{`${percent}%`}</td>
          {filterSeg === 'all' ? (
            <>
              <td className={sharedStyles.dataCell}>
                {seg.type === 'consonant' ? consPercent : null}
              </td>
              <td className={sharedStyles.dataCell}>
                {seg.type === 'vowel' ? vowsPercent : null}
              </td>
            </>
          ) : null}
        </tr>
      )
    })
  }

  const axisStyle = {
    fontSize: `0.75rem`,
    text: {
      fill: `#777`
    },
    line: {
      stroke: `#aaa`
    }
  }

  const gridStyle = {
    stroke: `#aaa`
  }

  if (analyzed) {
    return (
      <Results>
        <Control>
          <ControlPiece>
            <select
              id='filterSeg'
              name='filterSeg'
              value={filterSeg}
              onChange={onChangeInput}
            >
              <option value='all'>All Segments</option>
              <option value='consonants'>Consonants</option>
              <option value='vowels'>Vowels</option>
            </select>
          </ControlPiece>
        </Control>
        <div
          className={classNames(
            sharedStyles.barChart,
            sharedStyles.resultsSection
          )}
        >
          <FlexibleWidthXYPlot
            yType='ordinal'
            height={
              v.ms1 * 16 * whichData().length /* bar height */ +
              v.ms3 * (whichData().length - 1) /* bar spacing */ +
              64 /* top and bottom axes */
            }
            margin={`${v.ms3 * 16} ${v.ms5 * 16}`}
            onMouseLeave={onMouseOut}
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
              data={whichData()}
              animation
              colorType='literal'
              onValueMouseOver={onMouseOver}
              onMouseOut={onMouseOut}
            />
            {hovered ? (
              <Hint
                value={{
                  [`/${hovered.y}/ (${hovered.type})`]: `${
                    hovered.count
                  } (${twoDecimals(hovered.x)}%)`
                }}
              />
            ) : null}
          </FlexibleWidthXYPlot>
        </div>
        <div
          className={classNames(
            sharedStyles.dataTable,
            sharedStyles.resultsSection
          )}
        >
          <table className={sharedStyles.table}>
            <thead className={sharedStyles.tableHead}>
              <tr className={sharedStyles.headerRow}>
                <th className={sharedStyles.headerCell}>Segment</th>
                <th className={sharedStyles.headerCell}>Count</th>
                {headerCells()}
              </tr>
            </thead>
            <tbody className={sharedStyles.tableBody}>{dataRows()}</tbody>
          </table>
        </div>
      </Results>
    )
  } else {
    return <div className={sharedStyles.results} />
  }
}

FrequenResults.propTypes = {
  styles: PropTypes.object,
  results: PropTypes.shape({
    all: PropTypes.arrayOf(
      PropTypes.shape({
        color: PropTypes.string.isRequired,
        count: PropTypes.number.isRequired,
        i: PropTypes.number.isRequired,
        type: PropTypes.string.isRequired,
        x: PropTypes.number.isRequired,
        y: PropTypes.string.isRequired
      })
    ),
    consonants: PropTypes.arrayOf(
      PropTypes.shape({
        color: PropTypes.string.isRequired,
        count: PropTypes.number.isRequired,
        i: PropTypes.number.isRequired,
        type: PropTypes.string.isRequired,
        x: PropTypes.number.isRequired,
        y: PropTypes.string.isRequired
      })
    ),
    vowels: PropTypes.arrayOf(
      PropTypes.shape({
        color: PropTypes.string.isRequired,
        count: PropTypes.number.isRequired,
        i: PropTypes.number.isRequired,
        type: PropTypes.string.isRequired,
        x: PropTypes.number.isRequired,
        y: PropTypes.string.isRequired
      })
    )
  }),
  hovered: PropTypes.shape({
    color: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
    i: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    x: PropTypes.number.isRequired,
    y: PropTypes.string.isRequired
  }),
  filterSeg: PropTypes.oneOf(['consonants', 'vowels', 'all']).isRequired,
  analyzed: PropTypes.bool.isRequired,
  onChangeInput: PropTypes.func.isRequired,
  onMouseOver: PropTypes.func.isRequired,
  onMouseOut: PropTypes.func.isRequired
}

export default FrequenResults
