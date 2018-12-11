import React from 'react'
import { Helmet } from 'react-helmet'
import injectSheet from 'react-jss'
import PropTypes from 'prop-types'

import ButtonLink from '../../components/Button/Link'

import styles from './styles'

import { canonical, siteTitle } from '../../App'

const Tool = props => (
  <div className={props.classes.tool}>
    <Helmet>
      <title>
        {siteTitle}
        {props.toolInfo.title}
      </title>
      <meta
        name='description'
        content={`${siteTitle}${props.toolInfo.title} ${
          props.toolInfo.description
        }`}
      />
      <link rel='canonical' href={`${canonical}${props.toolInfo.link}/`} />
    </Helmet>
    <ButtonLink route={`/${props.toolInfo.link}/help`}>Help</ButtonLink>
    <h2 className='toolTitle'>
      {siteTitle}
      {props.toolInfo.title}
    </h2>
    {props.children}
  </div>
)

Tool.propTypes = {
  classes: PropTypes.object,
  toolInfo: PropTypes.objectOf(PropTypes.string).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.element, PropTypes.string])
    )
  ])
}

export default injectSheet(styles)(Tool)
