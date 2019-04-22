import React from 'react'
import injectSheet from 'react-jss'
import PropTypes from 'prop-types'

import styles from './styles'

const Footer = props => {
  const getCopyrightYear = () => {
    const initYear = 2017
    const d = new Date()
    const y = d.getFullYear()
    return y > initYear ? `${initYear}–${y}` : initYear.toString()
  }

  const author = 'Ian A. Cook'
  const authorURL = 'https://github.com/nai888'
  const appGhURL = 'https://github.com/nai888/langua'
  const appBpURL = 'https://beerpay.io/nai888/langua'
  const version = '0.4.3'

  return (
    <footer>
      <div className={props.classes.footer}>
        <p className={props.classes.copyright}>
          <a
            href={appGhURL + '/blob/master/CHANGELOG.md'}
            target='_blank'
            rel='noopener noreferrer'
          >
            Version <i className='fas fa-code' /> {version}
          </a>
          . Built by{' '}
          <a href={authorURL} target='_blank' rel='noopener noreferrer'>
            {author}
          </a>
          , copyright <i className='far fa-copyright' /> {getCopyrightYear()}{' '}
          under the{' '}
          <a
            href='https://choosealicense.com/licenses/agpl-3.0/'
            target='_blank'
            rel='noopener noreferrer'
          >
            AGPL-3.0 <i className='fas fa-gavel' /> license
          </a>
          .
        </p>
        <p className={props.classes.links}>
          <a href={appGhURL} target='_blank' rel='noopener noreferrer'>
            View this project on <i className='fab fa-github' /> GitHub
          </a>{' '}
          or{' '}
          <a href={appBpURL} target='_blank' rel='noopener noreferrer'>
            buy {author} a <i className='fas fa-beer' /> beer
          </a>
          .
        </p>
      </div>
    </footer>
  )
}

Footer.propTypes = {
  classes: PropTypes.object
}

export default injectSheet(styles)(Footer)
