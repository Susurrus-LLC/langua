import React from 'react'
import PropTypes from 'prop-types'

import styles from './button.module.sass'

const Button = ({
  ver,
  onClick,
  id,
  small,
  type,
  role,
  route,
  link,
  children
}) => {
  const assignClasses = () => {
    let classes = styles.btn

    if (ver !== null) {
      classes += ` ${styles[ver]}`
    }

    if (small) {
      classes += ` ${styles.small}`
    }
  }

  if (link) {
    return (
      <a
        href={`/${route}`}
        id={id}
        className={`${assignClasses()} ${styles.buttonLink}`}
      >
        {children}
      </a>
    )
  } else {
    return (
      <button
        onClick={onClick}
        id={id}
        className={assignClasses()}
        type={type || 'button'}
        role={role || 'button'}
      >
        {children}
      </button>
    )
  }
}

Button.propTypes = {
  ver: PropTypes.oneOf(['neutral', 'success', 'danger']),
  onClick: PropTypes.func,
  id: PropTypes.string,
  small: PropTypes.bool,
  type: PropTypes.string,
  role: PropTypes.string,
  classes: PropTypes.object,
  route: PropTypes.string,
  link: PropTypes.bool,
  children: PropTypes.string
}

export default Button
