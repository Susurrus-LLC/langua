import React from 'react'
import { Helmet } from 'react-helmet'
import injectSheet from 'react-jss'
import PropTypes from 'prop-types'

import styles from './styles'
import ButtonLink from '../Button/ButtonLink'

import { canonical, siteTitle } from '../../App'

const Help = props => (
  <div className={props.classes.help}>
    <Helmet>
      <title>
        {siteTitle} {props.toolTitle} Help
      </title>
      <meta name='description' content={props.toolDescription} />
      <link rel='canonical' href={`${canonical + props.link}/help/`} />
    </Helmet>
    <ButtonLink route={`/${props.link}`}>Back</ButtonLink>
    <h2 className='toolTitle'>{`Langua${props.toolTitle}`} Help</h2>
    <p id='description'>{props.toolDescription}</p>
    {props.children}
  </div>
)

Help.propTypes = {
  classes: PropTypes.object,
  toolTitle: PropTypes.string.isRequired,
  toolDescription: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.element, PropTypes.string])
    )
  ])
}

export default injectSheet(styles)(Help)
