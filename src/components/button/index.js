import React from 'react'
import PropTypes from 'prop-types'

import styles from './button.module.sass'
import { Link } from 'gatsby'

const Button = ({
  ver,
  onClick,
  id,
  small,
  type,
  role,
  route,
  link,
  external,
  children
}) => {
  const assignClasses = () => {
    let classes = styles.btn

    if (['neutral', 'success', 'danger'].find(el => el === ver)) {
      classes += ` ${styles[ver]}`
    }

    if (small) {
      classes += ` ${styles.small}`
    }

    return classes
  }

  if (link) {
    if (external) {
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
        <Link
          to={`/${route}`}
          id={id}
          className={`${assignClasses()} ${styles.buttonLink}`}
        >
          {children}
        </Link>
      )
    }
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
  external: PropTypes.bool,
  children: PropTypes.string
}

export default Button
