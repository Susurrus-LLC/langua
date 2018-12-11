import React from 'react'
import { Helmet } from 'react-helmet'
import injectSheet from 'react-jss'
import PropTypes from 'prop-types'

import styles from './styles'
import ButtonLink from '../Button/Link'

import { canonical, siteTitle } from '../../App'

const Help = props => (
  <div className={props.classes.help}>
    <Helmet>
      <title>
        {siteTitle}
        {props.toolInfo.title} Help
      </title>
      <meta
        name='description'
        content={`${siteTitle}${props.toolInfo.title} ${
          props.toolInfo.description
        }`}
      />
      <link rel='canonical' href={`${canonical + props.toolInfo.link}/help/`} />
    </Helmet>
    <ButtonLink route={`/${props.toolInfo.link}`}>Back</ButtonLink>
    <h2 className='toolTitle'>{`Langua${props.toolInfo.title}`} Help</h2>
    <p id='description'>
      {siteTitle}
      {props.toolInfo.title} {props.toolInfo.description}
    </p>
    {props.children}
  </div>
)

Help.propTypes = {
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

export default injectSheet(styles)(Help)
